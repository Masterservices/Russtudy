import Link from 'next/link';
import type { Lang } from '../../i18n';
import { EL } from '../../features/app/elearning/labels';
import { fill } from '../../features/app/elearning/shorts/labels';
import { SHORTS_SEGMENT, resolveShorts } from '../../content/shorts/registry';
import type { ShortDeckSource } from '../../content/shorts/types';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import { buildFaqPageSchema } from '../../seo/schema/faqPage';
import ElearningShell from './ElearningShell';
import { ShortsFaq, ShortsSteps } from './ShortsSections';
import { ELEARNING_LABEL, TAUGHT_LANGUAGE, accessRequestHref } from './labels';
import { deckCopy, shortsCopy } from './shorts-copy';

/** Expressions montrées sur la carte d'un parcours, pour donner le ton. */
const SAMPLE = 4;

/**
 * Pôle des shorts : une carte par langue.
 *
 * Le menu de la plateforme ne peut pas pointer vers le fil d'un
 * parcours en particulier — il ne sait pas quelle langue vient
 * apprendre le visiteur. Cette page est la réponse : elle dit ce que
 * sont les shorts, et laisse choisir.
 */
export default function ShortsHubPage({ lang, decks }: { lang: Lang; decks: ShortDeckSource[] }) {
  const L = EL[lang];
  const copy = shortsCopy(lang);

  const breadcrumb = buildBreadcrumb(`/elearning/${SHORTS_SEGMENT}`, lang, {
    elearning: ELEARNING_LABEL[lang],
    [SHORTS_SEGMENT]: copy.crumb,
  });

  return (
    <ElearningShell
      lang={lang}
      breadcrumb={breadcrumb}
      accessHref={accessRequestHref(lang)}
      accessLabel={L.signupCta}
      jsonLd={[buildFaqPageSchema(copy.faq)]}
    >
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.08] mb-3 max-w-3xl">
        {copy.hub.h1}
      </h1>
      <p className="text-[1rem] leading-[1.7] max-w-2xl opacity-85 mb-10">{copy.hub.intro}</p>

      <h2 className="t-display font-bold text-[clamp(1.35rem,4vw,1.8rem)] tracking-[-0.03em] mb-5">
        {copy.hub.decksTitle}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mb-14">
        {decks.map((deck, index) => {
          const shorts = resolveShorts(deck.courseSlug, lang);
          const taught = TAUGHT_LANGUAGE[deck.targetLang];
          const name = deckCopy(lang, deck.targetLang, deck.level).name;

          return (
            <Link
              key={deck.courseSlug}
              href={`/elearning/${deck.courseSlug}/${SHORTS_SEGMENT}`}
              className={`t-card t-c${(index % 5) + 1} border-transparent rounded-[22px] p-6 flex flex-col transition-transform duration-150 hover:-translate-y-[3px] hover:shadow-[0_18px_38px_rgba(10,10,10,0.22)] active:translate-y-0 active:scale-[0.995]`}
            >
              <span className="t-chip text-[0.72rem] font-bold px-3 py-1 rounded-full self-start">
                {taught && (
                  <span aria-hidden="true" className="me-1.5">
                    {taught.flag}
                  </span>
                )}
                {taught ? `${taught.label[lang]} · ` : ''}
                {deck.level}
              </span>

              <h3 className="t-display font-bold text-xl tracking-[-0.02em] mt-3 mb-3">{name}</h3>

              <ul lang={deck.targetLang} dir="ltr" className="flex flex-col gap-1 mb-4 flex-1 text-start">
                {shorts.slice(0, SAMPLE).map((short) => (
                  <li key={short.id} className="font-bold text-[1.02rem] leading-snug">
                    {short.lines[0].text}
                  </li>
                ))}
              </ul>

              <p className="text-[0.82rem] opacity-70 mb-3">{fill(copy.hub.count, shorts.length)}</p>

              <span className="self-start inline-flex items-center gap-2 text-[0.86rem] font-bold bg-white/90 text-[var(--ink)] rounded-full px-4 py-2">
                {copy.hub.deckCta} <span aria-hidden="true">→</span>
              </span>
            </Link>
          );
        })}
      </div>

      <ShortsSteps copy={copy} />
      <ShortsFaq copy={copy} />
    </ElearningShell>
  );
}
