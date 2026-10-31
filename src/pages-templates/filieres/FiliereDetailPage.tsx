import Link from 'next/link';
import type { Lang } from '../../i18n';
import { FILIERE_SLUGS, type FiliereSlug } from '../../content/filieres/registry';
import { getFiliereFacts } from '../../content/filieres/facts';
import { buildFiliereDetailCopy } from '../../content/filieres/copy';
import { getDeepFiliereContent } from '../../content/filieres/deep';
import { buildCourseSchema } from '../../seo/schema/course';
import { buildFaqPageSchema, type FaqEntry } from '../../seo/schema/faqPage';
import { buildFiliereFaq } from '../../content/filieres/faq';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import { buildCanonicalUrl } from '../../seo/canonical';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { FILIERE_IMAGES } from '../../content/images/registry';
import { FILIERES_SECTION_LABEL, basePathFor } from './labels';

const FAQ_HEADING: Record<Lang, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  ar: 'أسئلة شائعة',
  ru: 'Часто задаваемые вопросы',
};

export default function FiliereDetailPage({ lang, slug }: { lang: Lang; slug: FiliereSlug }) {
  const item = getFiliereFacts(lang, slug);
  const copy = buildFiliereDetailCopy(lang, item);
  const deep = getDeepFiliereContent(slug, lang);

  const h1 = deep?.h1 ?? item.name;
  const intro = deep?.intro ?? copy.intro;
  // La FAQ visible et le JSON-LD FAQPage partagent la même source : le
  // FAQPage reflète donc exactement les questions/réponses affichées.
  const faq: FaqEntry[] = deep?.faq ?? buildFiliereFaq(lang, item);
  const faqSchema = buildFaqPageSchema(faq);
  const basePath = basePathFor(lang);

  // Offer (JSON-LD Course) uniquement sur les pages profondes : le montant
  // numérique est extrait du prix affiché (« 3 200 € / an » → « 3200 »), la
  // devise est l'euro. Les filières au gabarit court gardent un Course sans
  // Offer (inchangé).
  const offer = deep
    ? {
        price: item.price.replace(/[^\d]/g, ''),
        priceCurrency: 'EUR',
        url: buildCanonicalUrl(lang, `filieres/${slug}`),
      }
    : undefined;
  const schema = buildCourseSchema(
    {
      slug: `filieres/${slug}`,
      lang,
      title: deep?.metaTitle ?? copy.title,
      description: deep?.metaDescription ?? copy.description,
      h1,
      schemaType: 'Course',
      updatedAt: '2026-07-08',
      name: item.name,
      duration: item.duration,
      priceFrom: item.price,
      language: [],
    },
    offer,
  );
  const breadcrumb = buildBreadcrumb(`/filieres/${slug}`, lang, {
    filieres: FILIERES_SECTION_LABEL[lang],
    [slug]: item.name,
  });

  const others = FILIERE_SLUGS.filter((s) => s !== slug).map((s) => ({ ...getFiliereFacts(lang, s), slug: s }));

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <span className="t-chip inline-block text-[0.7rem] font-bold px-3 py-1.5 mb-3">{item.tag}</span>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-2">{h1}</h1>
      <p className="text-sm t-muted mb-4">{item.duration} · {item.price}</p>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{intro}</p>

      <PageHero image={FILIERE_IMAGES[slug]} lang={lang} variant="violet" />

      {deep ? (
        <div className="mt-2">
          {deep.sections.map((section) => (
            <section key={section.heading} className="mb-8 max-w-2xl">
              <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-[0.92rem] leading-[1.7] opacity-85 mb-3">{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="space-y-1.5 text-[0.9rem] mt-1">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="t-card rounded-[12px] px-4 py-2.5">✓ {bullet}</li>
                  ))}
                </ul>
              )}
              {section.links && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.universitySlug}
                      href={`${basePath}/universites/${link.universitySlug}`}
                      className="t-card rounded-[16px] p-4 block hover:opacity-80 transition-opacity font-bold text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      ) : (
        <ul className="space-y-1.5 text-[0.9rem] max-w-xl">
          {item.details.map((d) => (
            <li key={d} className="t-card rounded-[12px] px-4 py-2.5">✓ {d}</li>
          ))}
        </ul>
      )}

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-2 mb-3">{FAQ_HEADING[lang]}</h2>
      <div className="flex flex-col gap-2 max-w-2xl mb-9">
        {faq.map((faqItem) => (
          <div key={faqItem.question} className="t-card rounded-[18px] p-6">
            <h3 className="font-bold text-base mb-2">{faqItem.question}</h3>
            <p className="text-[0.9rem] leading-[1.65] opacity-80">{faqItem.answer}</p>
          </div>
        ))}
      </div>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{FILIERES_SECTION_LABEL[lang]}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {others.map((p) => (
          <Link key={p.slug} href={`${basePath}/filieres/${p.slug}`} className="t-card rounded-[16px] p-4 block hover:opacity-80 transition-opacity">
            <div className="font-bold text-sm">{p.name}</div>
            <div className="text-xs opacity-60 mt-0.5">{p.duration} · {p.price}</div>
          </Link>
        ))}
      </div>
    </ContentPageShell>
  );
}
