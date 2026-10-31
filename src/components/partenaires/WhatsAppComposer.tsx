'use client';

import { useMemo, useState } from 'react';

/**
 * Demande orientée vers le WhatsApp de RusStudy.
 *
 * L'attribution du prospect au partenaire ne passe par aucun cookie ni
 * traceur : le nom du partenaire est écrit dans le message lui-même, ce qui
 * fonctionne aussi quand le visiteur change d'appareil ou revient plus tard.
 */
const RUSSTUDY_WHATSAPP = '79964334489';

export default function WhatsAppComposer({
  partnerName,
  accent,
  lang,
  labels,
  filieres,
  years,
}: {
  partnerName: string;
  accent: string;
  lang: 'fr' | 'ar';
  labels: Record<string, string>;
  filieres: { slug: string; name: string }[];
  years: string[];
}) {
  const [filiere, setFiliere] = useState('');
  const [year, setYear] = useState('');

  const message = useMemo(() => {
    const filiereName = filieres.find((f) => f.slug === filiere)?.name;
    if (lang === 'ar') {
      const lines = [`سلام RusStudy 👋`, `جيت من صفحة ${partnerName} (شريك موثّق).`];
      if (filiereName) lines.push(`• التخصّص: ${filiereName}`);
      if (year) lines.push(`• عام الباك: ${year}`);
      lines.push('نحبّ استشارة مجانية.');
      return lines.join('\n');
    }
    const lines = ['Bonjour RusStudy 👋', `Je viens de la page ${partnerName} (partenaire vérifié).`];
    if (filiereName) lines.push(`• Filière : ${filiereName}`);
    if (year) lines.push(`• Année du bac : ${year}`);
    lines.push('Je souhaite une consultation gratuite.');
    return lines.join('\n');
  }, [filiere, year, filieres, lang, partnerName]);

  const href = `https://wa.me/${RUSSTUDY_WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <div className="t-card rounded-[22px] p-6 flex flex-col gap-4">
      <div>
        <h2 className="t-display font-bold text-xl tracking-[-0.02em] mb-1">{labels.formTitle}</h2>
        <p className="text-[0.88rem] leading-[1.6] opacity-75">{labels.formIntro}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-[0.76rem] font-bold uppercase tracking-wide opacity-60">
            {labels.fieldFiliere}
          </span>
          <select
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
            className="t-input rounded-[14px] px-3 py-2.5 text-[0.9rem]"
          >
            <option value="">{labels.fieldChoose}</option>
            {filieres.map((f) => (
              <option key={f.slug} value={f.slug}>
                {f.name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-[0.76rem] font-bold uppercase tracking-wide opacity-60">
            {labels.fieldYear}
          </span>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="t-input rounded-[14px] px-3 py-2.5 text-[0.9rem]"
          >
            <option value="">{labels.fieldChoose}</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <p className="text-[0.74rem] font-bold uppercase tracking-wide opacity-55 mb-1.5">
          {labels.messagePreview}
        </p>
        <pre className="whitespace-pre-wrap text-[0.86rem] leading-[1.65] opacity-85 bg-black/[0.04] dark:bg-white/[0.06] rounded-[14px] p-3 font-sans">
          {message}
        </pre>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center font-bold text-[0.95rem] px-6 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
        style={{ backgroundColor: accent }}
      >
        {labels.openWhatsApp} →
      </a>

      <p className="text-[0.78rem] leading-[1.6] opacity-60">{labels.ctaNote}</p>
    </div>
  );
}
