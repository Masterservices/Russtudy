import Link from 'next/link';
import type { Lang } from '../../i18n';
import { BLOG_SLUGS } from '../../content/blog/registry';
import { buildBlogIndexCopy, buildBlogArticleCopy, BLOG_ARTICLES_COUNT } from '../../content/blog/copy';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import CardImage from '../../components/CardImage';
import { BLOG_IMAGES, SECTION_IMAGES } from '../../content/images/registry';
import { BLOG_SECTION_LABEL, basePathFor } from './labels';

export default function BlogIndexPage({ lang }: { lang: Lang }) {
  const copy = buildBlogIndexCopy(lang);
  const breadcrumb = buildBreadcrumb('/blog', lang, { blog: BLOG_SECTION_LABEL[lang] });
  const basePath = basePathFor(lang);

  const articles = Array.from({ length: BLOG_ARTICLES_COUNT }, (_, index) => ({
    slug: BLOG_SLUGS[index],
    article: buildBlogArticleCopy(lang, index),
  }));

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {BLOG_SECTION_LABEL[lang]}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={SECTION_IMAGES.blog} lang={lang} variant="teal" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {articles.map(({ slug, article }) => (
          <Link key={slug} href={`${basePath}/blog/${slug}`} className="t-card rounded-[18px] overflow-hidden block hover:opacity-80 transition-opacity">
            <CardImage image={BLOG_IMAGES[slug]} lang={lang} />
            <div className="p-5">
              <span className="text-[0.68rem] font-semibold opacity-55">{article.publishedLabel}</span>
              <div className="font-bold text-base mt-2">{article.h1}</div>
              <p className="text-[0.82rem] opacity-70 mt-1.5 leading-[1.5]">{article.excerpt}</p>
              <span className="text-[0.78rem] font-bold t-green-text mt-3 inline-block">{copy.readMore}</span>
            </div>
          </Link>
        ))}
      </div>
    </ContentPageShell>
  );
}
