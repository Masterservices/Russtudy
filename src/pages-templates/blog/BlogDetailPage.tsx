import Link from 'next/link';
import type { Lang } from '../../i18n';
import { BLOG_SLUGS, blogIndexFromSlug } from '../../content/blog/registry';
import { buildBlogArticleCopy, blogPublishedAt, BLOG_ARTICLES_COUNT } from '../../content/blog/copy';
import { buildArticleSchema } from '../../seo/schema/article';
import { buildFaqPageSchema } from '../../seo/schema/faqPage';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import { SITE } from '../../config/site';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { BLOG_IMAGES } from '../../content/images/registry';
import { BLOG_SECTION_LABEL, basePathFor } from './labels';

const FAQ_HEADING: Record<Lang, string> = {
  fr: 'Questions fréquentes',
  en: 'Frequently asked questions',
  ar: 'أسئلة شائعة',
  ru: 'Часто задаваемые вопросы',
};

const RELATED_LABEL: Record<Lang, string> = {
  fr: 'À lire aussi',
  en: 'Related article',
  ar: 'مقال ذو صلة',
  ru: 'Похожая статья',
};

export default function BlogDetailPage({ lang, index }: { lang: Lang; index: number }) {
  const slug = BLOG_SLUGS[index];
  const article = buildBlogArticleCopy(lang, index);
  const publishedAt = blogPublishedAt(index);
  const basePath = basePathFor(lang);

  const schema = buildArticleSchema({
    slug: `blog/${slug}`,
    lang,
    title: article.h1,
    description: article.description,
    h1: article.h1,
    schemaType: 'Article',
    updatedAt: publishedAt,
    excerpt: article.excerpt,
    publishedAt,
    author: SITE.name,
    tags: article.keywords,
    ogImage: `${SITE.domain}${BLOG_IMAGES[slug].src}`,
  });

  const faqSchema = article.faq && article.faq.length > 0 ? buildFaqPageSchema(article.faq) : null;

  const breadcrumb = buildBreadcrumb(`/blog/${slug}`, lang, {
    blog: BLOG_SECTION_LABEL[lang],
    [slug]: article.h1,
  });

  const others = Array.from({ length: BLOG_ARTICLES_COUNT }, (_, i) => i)
    .filter((i) => i !== index)
    .map((i) => ({ slug: BLOG_SLUGS[i], article: buildBlogArticleCopy(lang, i) }));

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <span className="t-chip inline-block text-[0.7rem] font-bold px-3 py-1.5 mb-3">{article.publishedLabel}</span>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-4">{article.h1}</h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{article.intro}</p>

      <PageHero image={BLOG_IMAGES[slug]} lang={lang} variant="teal" />

      <div className="flex flex-col gap-8 max-w-2xl">
        {article.sections.map((section, sectionIdx) => (
          <div key={`${section.heading}-${sectionIdx}`}>
            <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{section.heading}</h2>
            <div className="flex flex-col gap-3">
              {section.blocks.map((block, blockIdx) => {
                if (block.type === 'p') {
                  return (
                    <p key={blockIdx} className="text-[0.9rem] leading-[1.65] opacity-80">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'strong') {
                  return (
                    <p key={blockIdx} className="text-[0.95rem] leading-[1.65] font-bold">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <figure key={blockIdx} className="t-card rounded-[14px] overflow-hidden">
                      <img src={block.src} alt={block.alt} loading="lazy" className="w-full h-auto block" />
                      {block.caption && <figcaption className="text-[0.7rem] opacity-55 px-3 py-2">{block.caption}</figcaption>}
                    </figure>
                  );
                }
                if (block.type === 'related') {
                  const targetIndex = blogIndexFromSlug(block.slug);
                  if (targetIndex === -1) return null;
                  const target = buildBlogArticleCopy(lang, targetIndex);
                  return (
                    <Link
                      key={blockIdx}
                      href={`${basePath}/blog/${block.slug}`}
                      className="t-card rounded-[14px] p-4 block hover:opacity-80 transition-opacity border-s-4"
                      style={{ borderColor: 'var(--accent, #A855F7)' }}
                    >
                      <span className="text-[0.68rem] font-bold uppercase tracking-wide opacity-55">{RELATED_LABEL[lang]}</span>
                      <div className="font-bold text-sm mt-1">{target.h1}</div>
                    </Link>
                  );
                }
                return (
                  <ul key={blockIdx} className="flex flex-col gap-1.5 list-disc ps-5">
                    {block.items.map((item) => (
                      <li key={item} className="text-[0.9rem] leading-[1.6] opacity-80">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {article.faq && article.faq.length > 0 && (
        <>
          <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{FAQ_HEADING[lang]}</h2>
          <div className="flex flex-col gap-2 max-w-2xl mb-9">
            {article.faq.map((faqItem) => (
              <div key={faqItem.question} className="t-card rounded-[18px] p-6">
                <h3 className="font-bold text-base mb-2">{faqItem.question}</h3>
                <p className="text-[0.9rem] leading-[1.65] opacity-80">{faqItem.answer}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {others.length > 0 && (
        <>
          <h2 className="t-display font-bold text-xl tracking-[-0.03em] mt-9 mb-3">{BLOG_SECTION_LABEL[lang]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {others.map((o) => (
              <Link key={o.slug} href={`${basePath}/blog/${o.slug}`} className="t-card rounded-[16px] p-4 block hover:opacity-80 transition-opacity">
                <div className="font-bold text-sm">{o.article.h1}</div>
                <div className="text-xs opacity-60 mt-0.5">{o.article.publishedLabel}</div>
              </Link>
            ))}
          </div>
        </>
      )}
    </ContentPageShell>
  );
}
