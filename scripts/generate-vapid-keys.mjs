#!/usr/bin/env node
/**
 * Génère la paire de clés VAPID nécessaire au Web Push.
 *
 *   node scripts/generate-vapid-keys.mjs
 *
 * La clé publique est destinée au navigateur, la clé privée doit rester
 * secrète : elle signe les envois et permettrait d'usurper l'expéditeur.
 * Le script n'écrit rien sur le disque et ne transmet rien : à vous de
 * reporter les valeurs dans Vercel puis de fermer le terminal.
 */
import webpush from 'web-push';
import { randomBytes } from 'node:crypto';

const { publicKey, privateKey } = webpush.generateVAPIDKeys();
const secret = randomBytes(32).toString('base64url');

console.log(`
Reportez ces trois variables dans Vercel (Settings → Environment Variables),
sur les trois environnements (Production, Preview, Development) :

  NEXT_PUBLIC_VAPID_PUBLIC_KEY = ${publicKey}
  VAPID_PRIVATE_KEY            = ${privateKey}
  PUSH_HOOK_SECRET             = ${secret}

Puis, dans le SQL Editor de Supabase, déclarez le porteur d'envoi :

  insert into public.app_config (key, value) values
    ('push_endpoint', 'https://www.russieetudes.com/api/app/push'),
    ('push_secret',   '${secret}')
  on conflict (key) do update set value = excluded.value;

Enfin, redéployez : NEXT_PUBLIC_VAPID_PUBLIC_KEY est injectée à la compilation.
`);
