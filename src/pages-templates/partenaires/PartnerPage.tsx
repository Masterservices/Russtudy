import Link from 'next/link';
import type { PartnerLang, PartnerProfile } from '../../content/partenaires/types';
import { PARTNER_LABELS } from '../../content/partenaires/labels';
import { PROGRAM_CARD_SLUGS } from '../../content/filieres/registry';
import { getFiliereFacts } from '../../content/filieres/facts';
import { buildBreadcrumb, breadcrumbToJsonLd } from '../../seo/breadcrumb';
import { basePathFor } from '../basePath';
import SiteFooter from '../../components/SiteFooter';
import GlobalJsonLd from '../../components/GlobalJsonLd';
import PartnerVideo from '../../components/partenaires/PartnerVideo';
import ParallaxLayer from '../../components/partenaires/ParallaxLayer';
import PageHeroCanvas from '../../components/PageHeroCanvas';
import VerifiedBadge from '../../components/partenaires/VerifiedBadge';
import WhatsAppComposer from '../../components/partenaires/WhatsAppComposer';
import TestimonialWall from '../../components/partenaires/TestimonialWall';

const PARTNERS_LABEL: Record<PartnerLang, string> = { fr: 'Partenaires', ar: 'الشركاء' };

/** Années de bac proposées, calculées au build pour éviter tout écart d'hydratation. */
function bacYears(lang: PartnerLang): string[] {
  const current = new Date().getFullYear();
  const years = [current + 1, current, current - 1, current - 2].map(String);
  years.push(lang === 'ar' ? `قبل ${current - 2}` : `Avant ${current - 2}`);
  return years;
}

export default function PartnerPage({ partner, lang }: { partner: PartnerProfile; lang: PartnerLang }) {
  const copy = partner.copy[lang];
  const L = PARTNER_LABELS[lang];
  const basePath = basePathFor(lang);
  const rtl = lang === 'ar';

  const breadcrumb = buildBreadcrumb(`/partenaires/${partner.slug}`, lang, {
    partenaires: PARTNERS_LABEL[lang],
    [partner.slug]: partner.name,
  });

  const filieres = PROGRAM_CARD_SLUGS.map((slug) => ({ slug, ...getFiliereFacts(lang, slug) }));

  return (
    <div className="t-page min-h-screen relative font-sans" dir={rtl ? 'rtl' : undefined}>
      <GlobalJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbToJsonLd(breadcrumb)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: partner.name,
            ...(partner.fullName ? { legalName: partner.fullName } : {}),
            ...(partner.logo ? { logo: `https://www.russieetudes.com${partner.logo}` } : {}),
            ...(partner.address
              ? {
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: partner.address,
                    addressLocality: partner.city ? partner.city[lang] : undefined,
                    addressCountry: 'TN',
                  },
                }
              : {}),
          }),
        }}
      />

      {/* Page d'acquisition : ni menu ni sélecteur de langue, pour ne pas
          offrir de sortie au visiteur venu d'Instagram et pour qu'il n'arrive
          jamais par accident sur une version qu'il n'a pas demandée. Les liens
          légaux restent accessibles par le pied de page. */}
      <header className="px-4 md:px-8 pt-7 pb-1">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* dir="ltr" : sans cela le point final du logotype passe devant
              le mot sur la version arabe. */}
          <span dir="ltr" className="t-display font-bold text-lg tracking-[-0.04em]">
            Rus<span style={{ color: '#a855f7' }}>Study</span>.
          </span>
          <span className="opacity-40" aria-hidden="true">
            ×
          </span>
          {partner.logo ? (
            <span className="inline-flex items-center gap-2">
              <img
                src={partner.logo}
                alt={partner.name}
                width={36}
                height={36}
                className="rounded-full"
                loading="eager"
              />
              <span className="t-display font-bold text-lg tracking-[-0.02em]">{partner.name}</span>
            </span>
          ) : (
            <span
              className="t-display font-bold text-lg tracking-[-0.02em] px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: partner.color }}
            >
              {partner.name}
            </span>
          )}
        </div>
      </header>

      <main className="px-4 md:px-8 pt-6 pb-10">

        {/* Hero : bloc sombre à voile WebGL (aurores, étincelles, neige), le
            même composant que les bannières du site. La vidéo et le texte
            défilent à deux vitesses différentes ; tout s'immobilise si
            l'utilisateur a demandé moins d'animations ou si le navigateur
            n'expose pas de contexte WebGL. */}
        <section className="relative overflow-hidden rounded-[26px] mb-12 px-5 py-10 md:px-10 md:py-14 bg-[#0d1a3e]">
          <PageHeroCanvas variant="sky" />

          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center text-white">
          <ParallaxLayer speed={0.07}>
          <PartnerVideo
            src={partner.videoSrc}
            poster={partner.videoPoster}
            accent={partner.color}
            labels={L}
            transcript={copy.videoTranscript}
          />
          </ParallaxLayer>

          <ParallaxLayer speed={-0.05} className="flex flex-col gap-4">
            <h1 className="t-display font-bold text-[clamp(1.9rem,6vw,3.1rem)] tracking-[-0.04em] leading-[1.1]">
              {copy.h1}
            </h1>
            <p className="text-[1rem] leading-[1.7] opacity-90 max-w-xl">{copy.subtitle}</p>

            <div>
              <VerifiedBadge
                partnerName={partner.name}
                accent={partner.color}
                labels={L}
                checks={copy.verificationChecks}
                verifiedOn={partner.verifiedOn}
                charterPath={partner.charterPath}
              />
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#demande" className="t-btn-primary font-bold text-[0.95rem] px-7 py-4 rounded-full">
                {L.ctaPrimary} →
              </a>
            </div>

            <p className="text-[0.8rem] leading-[1.6] opacity-75 max-w-md">{L.noPromise}</p>
          </ParallaxLayer>
          </div>
        </section>

        {/* Témoignages : juste après le hero, là où le visiteur venu
            d'Instagram se demande encore si d'autres l'ont fait avant lui. */}
        {partner.testimonials && partner.testimonials.length > 0 && (
          <section className="mb-12">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                  partner.testimonials.map((t) => ({
                    '@context': 'https://schema.org',
                    '@type': 'VideoObject',
                    name: t.title[lang],
                    description: `${L.testimonialsSubtitle} ${t.title[lang]}`,
                    thumbnailUrl: `https://www.russieetudes.com${t.poster}`,
                    contentUrl: `https://www.russieetudes.com${t.src}`,
                    uploadDate: t.publishedOn,
                    duration: `PT${t.durationSec}S`,
                    inLanguage: 'ar-TN',
                  })),
                ),
              }}
            />
            <h2 className="t-display font-bold text-2xl tracking-[-0.03em] mb-1">{L.testimonialsTitle}</h2>
            <p className="text-[0.95rem] leading-[1.6] opacity-75 mb-5 max-w-2xl">{L.testimonialsSubtitle}</p>
            <TestimonialWall
              items={partner.testimonials}
              lang={lang}
              accent={partner.color}
              labels={L}
            />
          </section>
        )}

        {/* Parcours */}
        <section className="mb-12">
          <h2 className="t-display font-bold text-2xl tracking-[-0.03em] mb-4">{L.stepsTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.steps.map((step) => (
              <div key={step.number} className="t-card rounded-[22px] p-5">
                <span className="t-display font-bold text-2xl opacity-25">{step.number}</span>
                <h3 className="t-display font-bold text-base tracking-[-0.02em] mt-1 mb-2">{step.title}</h3>
                {step.partnerRole && (
                  <p className="text-[0.85rem] leading-[1.6] mb-1.5">
                    <strong style={{ color: partner.color }}>
                      {L.withPartner} {partner.name} :
                    </strong>{' '}
                    {step.partnerRole}
                  </p>
                )}
                <p className="text-[0.85rem] leading-[1.6] opacity-80">
                  <strong>{L.onPlatform} :</strong> {step.platformRole}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Budget */}
        <section className="mb-12">
          <h2 className="t-display font-bold text-2xl tracking-[-0.03em] mb-4">{L.budgetTitle}</h2>
          {partner.budgetFrom && (
            <p className="t-display font-bold text-xl mb-3">
              <span className="opacity-55 text-base font-normal">{L.budgetFromLabel} </span>
              {partner.budgetFrom[lang]}
            </p>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="t-card rounded-[22px] p-5">
              <h3 className="t-display font-bold text-base mb-2 t-green-text">✓ {L.budgetIncluded}</h3>
              <ul className="flex flex-col gap-1.5">
                {copy.budgetIncluded.map((item) => (
                  <li key={item} className="text-[0.88rem] leading-[1.55] opacity-85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="t-card rounded-[22px] p-5">
              <h3 className="t-display font-bold text-base mb-2 opacity-60">{L.budgetExcluded}</h3>
              <ul className="flex flex-col gap-1.5">
                {copy.budgetExcluded.map((item) => (
                  <li key={item} className="text-[0.88rem] leading-[1.55] opacity-75">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-[0.8rem] leading-[1.6] opacity-60 mt-3 max-w-2xl">{L.budgetNote}</p>
        </section>

        {/* Filières : faits repris des pages filières du site, non dupliqués ici. */}
        <section className="mb-12">
          <h2 className="t-display font-bold text-2xl tracking-[-0.03em] mb-1">{L.filieresTitle}</h2>
          <p className="text-[0.84rem] opacity-60 mb-4">{L.filieresNote}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filieres.map((f, idx) => (
              <Link
                key={f.slug}
                href={`${basePath}/filieres/${f.slug}`}
                className={`t-card t-c${(idx % 5) + 1} rounded-[22px] p-5 hover:opacity-90 transition-opacity`}
              >
                <h3 className="t-display font-bold text-base tracking-[-0.02em] mb-1">{f.name}</h3>
                <p className="text-[0.84rem] opacity-75">{f.duration}</p>
                <p className="text-[0.95rem] font-bold mt-1">{f.price}</p>
                <span className="text-[0.78rem] font-bold underline opacity-70 mt-2 inline-block">
                  {L.seeMore} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* À propos du partenaire — masqué tant que le texte n'est pas fourni. */}
        {(copy.about || partner.logo || partner.address || partner.fullName) && (
          <section className="mb-12">
            <h2 className="t-display font-bold text-2xl tracking-[-0.03em] mb-4">
              {L.aboutTitle} {partner.name}
            </h2>
            <div className="t-card rounded-[22px] p-6 max-w-2xl flex flex-col sm:flex-row gap-5 items-start">
              {partner.logo && (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  width={96}
                  height={96}
                  className="rounded-[18px] shrink-0"
                  loading="lazy"
                />
              )}
              <div>
              {partner.fullName && (
                <p className="t-display font-bold text-[0.95rem] tracking-[-0.01em] mb-2">{partner.fullName}</p>
              )}
              {copy.about && <p className="text-[0.92rem] leading-[1.7] opacity-85 mb-3">{copy.about}</p>}
              {partner.address && (
                <p className="text-[0.86rem] leading-[1.6] opacity-75">
                  <span aria-hidden="true">📍</span> {partner.address}
                </p>
              )}
              </div>
            </div>
          </section>
        )}

        {/* Demande orientée */}
        <section id="demande" className="mb-12 max-w-2xl scroll-mt-[130px]">
          <WhatsAppComposer
            partnerName={partner.name}
            accent={partner.color}
            lang={lang}
            labels={L}
            filieres={filieres.map((f) => ({ slug: f.slug, name: f.name }))}
            years={bacYears(lang)}
          />
        </section>

        {/* FAQ */}
        <section className="mb-6">
          <h2 className="t-display font-bold text-2xl tracking-[-0.03em] mb-4">{L.faqTitle}</h2>
          <div className="flex flex-col gap-2 max-w-3xl">
            {copy.faq.map((entry) => (
              <details key={entry.question} className="t-card rounded-[18px] p-5">
                <summary className="t-display font-bold text-[0.95rem] cursor-pointer">
                  {entry.question}
                </summary>
                <p className="text-[0.88rem] leading-[1.7] opacity-80 mt-2">{entry.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="text-[0.8rem] opacity-55 max-w-2xl">{L.independentFooter}</p>
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
