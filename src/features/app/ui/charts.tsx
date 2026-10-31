import type { SeriesPoint } from '../types';

/**
 * Graphiques rendus en SVG côté serveur : aucune librairie, aucun JavaScript
 * envoyé au navigateur, et une lecture accessible via le libellé de synthèse.
 */

const W = 320;
const H = 120;

export function LineChart({ points, label }: { points: SeriesPoint[]; label: string }) {
  if (points.length === 0) return null;

  const max = Math.max(...points.map((p) => p.value), 1);
  const stepX = points.length > 1 ? W / (points.length - 1) : W;
  const coords = points.map((p, i) => ({ x: i * stepX, y: H - (p.value / max) * (H - 12) - 6 }));
  const path = coords.map((c, i) => `${i === 0 ? 'M' : 'L'}${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ');
  const area = `${path} L${W},${H} L0,${H} Z`;

  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-[120px]" role="img" aria-label={label} preserveAspectRatio="none">
        <path d={area} fill="var(--rs-primary-soft)" />
        <path d={path} fill="none" stroke="var(--rs-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {coords.map((c, i) => (
          <circle key={points[i].label} cx={c.x} cy={c.y} r="3" fill="var(--rs-primary)" />
        ))}
      </svg>
      <figcaption className="mt-1.5 flex justify-between text-[10px] text-[var(--rs-muted)]">
        {points.map((p) => (
          <span key={p.label}>{p.label}</span>
        ))}
      </figcaption>
    </figure>
  );
}

export function BarChart({ points, label }: { points: SeriesPoint[]; label: string }) {
  if (points.length === 0) return null;
  const max = Math.max(...points.map((p) => p.value), 1);

  return (
    <figure>
      <div className="flex items-end gap-2 h-[120px]" role="img" aria-label={label}>
        {points.map((p) => (
          <span
            key={p.label}
            className="flex-1 rounded-t-md bg-[var(--rs-primary)]"
            style={{ height: `${Math.max(4, (p.value / max) * 100)}%` }}
          />
        ))}
      </div>
      <figcaption className="mt-1.5 flex justify-between text-[10px] text-[var(--rs-muted)]">
        {points.map((p) => (
          <span key={p.label} className="flex-1 text-center">{p.label}</span>
        ))}
      </figcaption>
    </figure>
  );
}
