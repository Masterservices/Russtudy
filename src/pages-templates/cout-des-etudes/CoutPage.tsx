import { translations, type Lang } from '../../i18n';
import { buildCoutCopy } from '../../content/cout-des-etudes/copy';
import { PROGRAM_BASE_TUITION, CITY_COSTS, type CityId } from '../../content/budget/data';
import { PROGRAM_CARD_SLUGS } from '../../content/filieres/registry';
import { getFiliereFacts } from '../../content/filieres/facts';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ContentPageShell from '../ContentPageShell';
import PageHero from '../../components/PageHero';
import { SECTION_IMAGES } from '../../content/images/registry';
import { COUT_SECTION_LABEL } from './labels';

const CITY_IDS: CityId[] = ['moscow', 'spb', 'kazan'];
const SCHOLARSHIP_FAQ_INDEX = 3;

export default function CoutPage({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const copy = buildCoutCopy(lang);
  const breadcrumb = buildBreadcrumb('/cout-des-etudes', lang, { 'cout-des-etudes': COUT_SECTION_LABEL[lang] });
  const scholarshipFaq = t.faq.items[SCHOLARSHIP_FAQ_INDEX];

  return (
    <ContentPageShell lang={lang} breadcrumb={breadcrumb}>
      <h1 className="t-display font-bold text-[clamp(1.8rem,6vw,3rem)] tracking-[-0.04em] leading-[1.1] mb-3">
        {copy.h1}
      </h1>
      <p className="text-[0.95rem] leading-[1.65] max-w-2xl opacity-85 mb-6">{copy.intro}</p>

      <PageHero image={SECTION_IMAGES['cout-des-etudes']} lang={lang} variant="gold" />

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{copy.tableTitle}</h2>
      <div className="t-card rounded-[18px] overflow-auto max-w-3xl mb-2">
        <table className="w-full border-collapse text-[0.8rem] min-w-[560px]">
          <thead>
            <tr>
              <th scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft"> </th>
              {t.simulator.cities.map((city) => (
                <th key={city.id} scope="col" className="p-3 text-start text-[0.72rem] uppercase tracking-wide opacity-55 border-b t-line-soft">
                  {city.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROGRAM_CARD_SLUGS.map((slug) => (
              <tr key={slug}>
                <th scope="row" className="p-3 text-start font-bold border-b t-line-soft">{getFiliereFacts(lang, slug).name}</th>
                {CITY_IDS.map((cityId) => {
                  const tuition = Math.round(PROGRAM_BASE_TUITION[slug] * CITY_COSTS[cityId].tuitionFactor);
                  return (
                    <td key={cityId} className="p-3 opacity-80 border-b t-line-soft">{tuition} € {t.simulator.perYear}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[0.72rem] opacity-50 max-w-2xl mb-2">{t.simulator.disclaimer}</p>
      <p className="text-[0.85rem] leading-[1.65] max-w-2xl opacity-80 mb-1">{t.simulator.benchmark}</p>
      <p className="text-[0.85rem] leading-[1.65] max-w-2xl opacity-80 mb-9">{t.simulator.oneTime}</p>

      <h2 className="t-display font-bold text-xl tracking-[-0.03em] mb-3">{copy.scholarshipTitle}</h2>
      <div className="t-card-dark rounded-[18px] p-6 max-w-2xl">
        <h3 className="font-bold text-base mb-2">{scholarshipFaq.question}</h3>
        <p className="text-[0.9rem] leading-[1.65] opacity-85">{scholarshipFaq.answer}</p>
      </div>
    </ContentPageShell>
  );
}
