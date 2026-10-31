import 'server-only';

import type { PoolClient } from 'pg';
import { getPool } from './db';
import { schedulePushFlush } from './push';
import type { Database } from './database.types';

/**
 * Constructeur de requêtes sur Postgres, à l'API de `supabase-js` (`from`,
 * `select`, `eq`, `rpc`…), pour migrer vers Neon sans réécrire chaque appel.
 *
 * La sécurité reste dans la base : chaque requête s'exécute dans sa propre
 * transaction, sous le rôle `authenticated` (ou `anon`) avec
 * `request.jwt.claim.sub` = identifiant de l'utilisateur. Les politiques RLS et
 * `auth.uid()` s'appliquent donc comme avant. Seul le contexte `admin`
 * (propriétaire de la base) les contourne — à réserver au code serveur de
 * confiance, jamais à une requête déclenchée par un visiteur.
 */

export type DbContext = { kind: 'user'; userId: string } | { kind: 'anon' } | { kind: 'admin' };

export interface DbError {
  message: string;
  code?: string;
  details?: string;
  hint?: string;
}

export interface DbResult<T> {
  data: T;
  error: DbError | null;
  count?: number | null;
}

type Tables = Database['public']['Tables'];
type TableName = keyof Tables;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyRow = Record<string, any>;
type RowOf<K extends string> = K extends TableName ? Tables[K]['Row'] : AnyRow;
type InsertOf<K extends string> = K extends TableName ? Tables[K]['Insert'] : AnyRow;
type UpdateOf<K extends string> = K extends TableName ? Tables[K]['Update'] : AnyRow;
type Functions = Database['public']['Functions'];

const IDENTIFIER = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function ident(name: string): string {
  if (!IDENTIFIER.test(name)) throw new Error(`Identifiant SQL invalide : ${name}`);
  return `"${name}"`;
}

function columnList(columns: string): string {
  if (columns.trim() === '*') return '*';
  return columns
    .split(',')
    .map((part) => ident(part.trim()))
    .join(', ');
}

// ---------------------------------------------------------------------------
// Contexte de transaction
// ---------------------------------------------------------------------------

function contextSql(ctx: DbContext): string {
  if (ctx.kind === 'admin') return 'begin';
  if (ctx.kind === 'anon') return 'begin; set local role anon';
  if (!UUID.test(ctx.userId)) throw new Error('Identifiant utilisateur invalide.');
  // L'identifiant est un UUID validé : l'interpoler est sûr, et permet de
  // tout envoyer en un seul aller-retour (le protocole étendu n'accepte
  // qu'une instruction par requête).
  return (
    `begin; set local role authenticated; ` +
    `select set_config('request.jwt.claim.sub', '${ctx.userId}', true), ` +
    `set_config('request.jwt.claims', '{"sub":"${ctx.userId}","role":"authenticated"}', true)`
  );
}

async function inContext<T>(ctx: DbContext, work: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query(contextSql(ctx));
    const result = await work(client);
    await client.query('commit');
    return result;
  } catch (error) {
    try {
      await client.query('rollback');
    } catch {
      /* la connexion est déjà perdue : release() la jettera. */
    }
    throw error;
  } finally {
    client.release();
  }
}

// ---------------------------------------------------------------------------
// Métadonnées (types de colonnes, arguments de fonctions), mises en cache
// ---------------------------------------------------------------------------

const columnTypeCache = new Map<string, Promise<Map<string, string>>>();

function columnTypes(table: string): Promise<Map<string, string>> {
  let cached = columnTypeCache.get(table);
  if (!cached) {
    cached = getPool()
      .query<{ column_name: string; udt_name: string }>(
        `select column_name, udt_name from information_schema.columns
          where table_schema = 'public' and table_name = $1`,
        [table],
      )
      .then(({ rows }) => new Map(rows.map((row) => [row.column_name, row.udt_name])));
    cached.catch(() => columnTypeCache.delete(table));
    columnTypeCache.set(table, cached);
  }
  return cached;
}

const primaryKeyCache = new Map<string, Promise<string[]>>();

function primaryKey(table: string): Promise<string[]> {
  let cached = primaryKeyCache.get(table);
  if (!cached) {
    cached = getPool()
      .query<{ attname: string }>(
        `select a.attname
           from pg_index i
           join pg_attribute a on a.attrelid = i.indrelid and a.attnum = any(i.indkey)
          where i.indrelid = ('public.' || quote_ident($1))::regclass and i.indisprimary`,
        [table],
      )
      .then(({ rows }) => rows.map((row) => row.attname));
    cached.catch(() => primaryKeyCache.delete(table));
    primaryKeyCache.set(table, cached);
  }
  return cached;
}

const functionArgCache = new Map<string, Promise<Map<string, string>>>();

function functionArgs(name: string): Promise<Map<string, string>> {
  let cached = functionArgCache.get(name);
  if (!cached) {
    cached = getPool()
      .query<{ arg: string; type: string }>(
        `select a.arg, format_type(a.oid, null) as type
           from pg_proc p
           join pg_namespace n on n.oid = p.pronamespace
          cross join lateral unnest(p.proargnames, string_to_array(p.proargtypes::text, ' ')::oid[]) as a(arg, oid)
          where n.nspname = 'public' and p.proname = $1`,
        [name],
      )
      .then(({ rows }) => new Map(rows.map((row) => [row.arg, row.type])));
    cached.catch(() => functionArgCache.delete(name));
    functionArgCache.set(name, cached);
  }
  return cached;
}

/** Valeur prête pour node-postgres : jsonb sérialisé, tableaux SQL laissés tels quels. */
function encode(value: unknown, udt: string | undefined): unknown {
  if (value === null || value === undefined) return null;
  if (udt === 'jsonb' || udt === 'json') return JSON.stringify(value);
  return value;
}

function toDbError(error: unknown): DbError {
  const e = error as { message?: string; code?: string; detail?: string; hint?: string };
  return { message: e.message ?? 'Erreur de base de données', code: e.code, details: e.detail, hint: e.hint };
}

// ---------------------------------------------------------------------------
// Constructeur
// ---------------------------------------------------------------------------

type Operation = 'select' | 'insert' | 'update' | 'upsert' | 'delete';
type Mode = 'many' | 'single' | 'maybe';

interface Condition {
  column: string;
  operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'ilike' | 'in' | 'is' | 'not_is' | 'not_in';
  value: unknown;
}

const COMPARATORS = { eq: '=', neq: '<>', gt: '>', gte: '>=', lt: '<', lte: '<=', like: 'like', ilike: 'ilike' } as const;

export class QueryBuilder<Row extends AnyRow, Insert = AnyRow, Update = AnyRow> implements PromiseLike<DbResult<Row[]>> {
  private operation: Operation = 'select';
  private selection = '*';
  private returning: string | null = null;
  private countMode: 'exact' | null = null;
  private head = false;
  private payload: unknown;
  private conflict: string | undefined;
  private ignoreDuplicates = false;
  private conditions: Condition[] = [];
  private orderings: Array<{ column: string; ascending: boolean; nullsFirst?: boolean }> = [];
  private limitCount: number | null = null;
  private mode: Mode = 'many';

  constructor(
    private readonly ctx: DbContext,
    private readonly table: string,
  ) {}

  select(columns = '*', options?: { count?: 'exact' | 'planned' | 'estimated'; head?: boolean }): this {
    if (this.operation === 'select') {
      this.selection = columns;
      if (options?.count) this.countMode = 'exact';
      this.head = options?.head === true;
    } else {
      this.returning = columns;
    }
    return this;
  }

  insert(values: Insert | Insert[]): this {
    this.operation = 'insert';
    this.payload = values;
    return this;
  }

  update(values: Update): this {
    this.operation = 'update';
    this.payload = values;
    return this;
  }

  upsert(values: Insert | Insert[], options?: { onConflict?: string; ignoreDuplicates?: boolean }): this {
    this.operation = 'upsert';
    this.payload = values;
    this.conflict = options?.onConflict;
    this.ignoreDuplicates = options?.ignoreDuplicates === true;
    return this;
  }

  delete(): this {
    this.operation = 'delete';
    return this;
  }

  eq(column: string, value: unknown): this {
    return this.where({ column, operator: 'eq', value });
  }
  neq(column: string, value: unknown): this {
    return this.where({ column, operator: 'neq', value });
  }
  gt(column: string, value: unknown): this {
    return this.where({ column, operator: 'gt', value });
  }
  gte(column: string, value: unknown): this {
    return this.where({ column, operator: 'gte', value });
  }
  lt(column: string, value: unknown): this {
    return this.where({ column, operator: 'lt', value });
  }
  lte(column: string, value: unknown): this {
    return this.where({ column, operator: 'lte', value });
  }
  like(column: string, pattern: string): this {
    return this.where({ column, operator: 'like', value: pattern });
  }
  ilike(column: string, pattern: string): this {
    return this.where({ column, operator: 'ilike', value: pattern });
  }
  in(column: string, values: readonly unknown[]): this {
    return this.where({ column, operator: 'in', value: values });
  }
  is(column: string, value: null | boolean): this {
    return this.where({ column, operator: 'is', value });
  }

  /** Négation : seuls `is` et `in` sont pris en charge (les seuls utilisés). */
  not(column: string, operator: 'is' | 'in', value: null | boolean | readonly unknown[]): this {
    if (operator === 'is') return this.where({ column, operator: 'not_is', value });
    return this.where({ column, operator: 'not_in', value });
  }

  order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean }): this {
    this.orderings.push({ column, ascending: options?.ascending !== false, nullsFirst: options?.nullsFirst });
    return this;
  }

  limit(count: number): this {
    this.limitCount = count;
    return this;
  }

  single(): PromiseLike<DbResult<Row | null>> {
    this.mode = 'single';
    return this as unknown as PromiseLike<DbResult<Row | null>>;
  }

  maybeSingle(): PromiseLike<DbResult<Row | null>> {
    this.mode = 'maybe';
    return this as unknown as PromiseLike<DbResult<Row | null>>;
  }

  then<TResult1 = DbResult<Row[]>, TResult2 = never>(
    onfulfilled?: ((value: DbResult<Row[]>) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null,
  ): PromiseLike<TResult1 | TResult2> {
    return this.execute().then(onfulfilled, onrejected);
  }

  private where(condition: Condition): this {
    this.conditions.push(condition);
    return this;
  }

  private buildWhere(params: unknown[]): string {
    if (this.conditions.length === 0) return '';
    const clauses = this.conditions.map((condition) => {
      const column = ident(condition.column);
      const { operator, value } = condition;
      if (operator === 'is' || operator === 'not_is') {
        const keyword = value === null ? 'null' : value ? 'true' : 'false';
        return `${column} is ${operator === 'not_is' ? 'not ' : ''}${keyword}`;
      }
      if (operator === 'in' || operator === 'not_in') {
        params.push(value);
        return `${column} ${operator === 'not_in' ? '<> all' : '= any'}($${params.length})`;
      }
      params.push(value);
      return `${column} ${COMPARATORS[operator]} $${params.length}`;
    });
    return ` where ${clauses.join(' and ')}`;
  }

  private buildOrder(): string {
    if (this.orderings.length === 0) return '';
    const parts = this.orderings.map(({ column, ascending, nullsFirst }) => {
      const nulls = nullsFirst === undefined ? '' : nullsFirst ? ' nulls first' : ' nulls last';
      return `${ident(column)} ${ascending ? 'asc' : 'desc'}${nulls}`;
    });
    return ` order by ${parts.join(', ')}`;
  }

  private async execute(): Promise<DbResult<Row[]>> {
    try {
      const isWrite = this.operation !== 'select';
      const result = await this.run();
      if (isWrite && this.ctx.kind !== 'admin') schedulePushFlush();
      return this.shape(result);
    } catch (error) {
      const failure = toDbError(error);
      console.error(`[neon][${this.operation} ${this.table}]`, failure.code, failure.message);
      return { data: (this.mode === 'many' ? [] : null) as unknown as Row[], error: failure, count: null };
    }
  }

  private shape(result: { rows: Row[]; count: number | null }): DbResult<Row[]> {
    if (this.mode === 'many') return { data: result.rows, error: null, count: result.count };
    if (result.rows.length === 1) return { data: result.rows[0] as unknown as Row[], error: null, count: result.count };
    if (result.rows.length === 0 && this.mode === 'maybe') return { data: null as unknown as Row[], error: null, count: result.count };
    return {
      data: null as unknown as Row[],
      error: {
        message: 'JSON object requested, multiple (or no) rows returned',
        code: 'PGRST116',
        details: `Results contain ${result.rows.length} rows`,
      },
      count: null,
    };
  }

  private async run(): Promise<{ rows: Row[]; count: number | null }> {
    const table = `public.${ident(this.table)}`;
    const params: unknown[] = [];
    let sql: string;
    let wantsRows = true;

    switch (this.operation) {
      case 'select': {
        const where = this.buildWhere(params);
        if (this.head) {
          sql = `select count(*)::int as count from ${table}${where}`;
          const { rows } = await inContext(this.ctx, (client) => client.query(sql, params));
          return { rows: [], count: rows[0]?.count ?? 0 };
        }
        sql = `select ${columnList(this.selection)} from ${table}${where}${this.buildOrder()}`;
        if (this.mode === 'single' || this.mode === 'maybe') sql += ' limit 2';
        else if (this.limitCount !== null) sql += ` limit ${Math.max(0, Math.floor(this.limitCount))}`;
        break;
      }
      case 'insert':
      case 'upsert': {
        const types = await columnTypes(this.table);
        const rows = (Array.isArray(this.payload) ? this.payload : [this.payload]) as AnyRow[];
        if (rows.length === 0) return { rows: [], count: null };
        const columns = [...new Set(rows.flatMap((row) => Object.keys(row).filter((key) => row[key] !== undefined)))];
        const tuples = rows.map((row) => {
          const placeholders = columns.map((column) => {
            if (row[column] === undefined) return 'default';
            params.push(encode(row[column], types.get(column)));
            return `$${params.length}`;
          });
          return `(${placeholders.join(', ')})`;
        });
        sql = columns.length
          ? `insert into ${table} (${columns.map(ident).join(', ')}) values ${tuples.join(', ')}`
          : `insert into ${table} default values`;

        if (this.operation === 'upsert') {
          const target = this.conflict ? this.conflict.split(',').map((c) => c.trim()) : await primaryKey(this.table);
          const updatable = columns.filter((column) => !target.includes(column));
          const action =
            this.ignoreDuplicates || updatable.length === 0
              ? 'do nothing'
              : `do update set ${updatable.map((column) => `${ident(column)} = excluded.${ident(column)}`).join(', ')}`;
          sql += ` on conflict (${target.map(ident).join(', ')}) ${action}`;
        }
        break;
      }
      case 'update': {
        const types = await columnTypes(this.table);
        const values = this.payload as AnyRow;
        const entries = Object.entries(values).filter(([, value]) => value !== undefined);
        if (entries.length === 0) return { rows: [], count: null };
        const assignments = entries.map(([column, value]) => {
          params.push(encode(value, types.get(column)));
          return `${ident(column)} = $${params.length}`;
        });
        sql = `update ${table} set ${assignments.join(', ')}${this.buildWhere(params)}`;
        break;
      }
      case 'delete': {
        sql = `delete from ${table}${this.buildWhere(params)}`;
        break;
      }
    }

    if (this.operation !== 'select') {
      if (this.returning) sql += ` returning ${columnList(this.returning)}`;
      else wantsRows = false;
    }

    const result = await inContext(this.ctx, (client) => client.query(sql, params));
    return { rows: wantsRows ? (result.rows as Row[]) : [], count: this.countMode ? result.rowCount : null };
  }
}

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

type RpcArgs<N extends string> = N extends keyof Functions ? Functions[N]['Args'] : AnyRow;
type RpcReturns<N extends string> = N extends keyof Functions ? Functions[N]['Returns'] : unknown;

export interface Db {
  from<K extends string>(table: K): QueryBuilder<RowOf<K>, InsertOf<K>, UpdateOf<K>>;
  rpc<N extends string>(name: N, args?: RpcArgs<N>): PromiseLike<DbResult<RpcReturns<N> | null>>;
}

export function createDb(ctx: DbContext): Db {
  return {
    from: (table) => new QueryBuilder(ctx, table),
    rpc: (name, args) => callFunction(ctx, name, (args ?? {}) as AnyRow) as unknown as PromiseLike<DbResult<never>>,
  };
}

async function callFunction(ctx: DbContext, name: string, args: AnyRow): Promise<DbResult<unknown>> {
  try {
    const types = await functionArgs(name);
    const params: unknown[] = [];
    const named = Object.entries(args).map(([arg, value]) => {
      const isJson = types.get(arg) === 'jsonb' || types.get(arg) === 'json';
      params.push(isJson ? JSON.stringify(value) : value);
      return `${ident(arg)} => $${params.length}${isJson ? `::${types.get(arg)}` : ''}`;
    });

    const result = await inContext(ctx, (client) =>
      client.query(`select * from public.${ident(name)}(${named.join(', ')})`, params),
    );
    if (ctx.kind !== 'admin') schedulePushFlush();

    // Fonction scalaire : une colonne du nom de la fonction. `void` donne une chaîne vide.
    const [field] = result.fields;
    if (result.fields.length === 1 && field.name === name) {
      const value = result.rows[0]?.[name] ?? null;
      return { data: field.dataTypeID === 2278 ? null : value, error: null };
    }
    return { data: result.rows, error: null };
  } catch (error) {
    return { data: null, error: toDbError(error) };
  }
}
