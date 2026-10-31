import Link from 'next/link';
import type { Lang } from '../../i18n';
import { EL } from '../../features/app/elearning/labels';
import { buildBreadcrumb } from '../../seo/breadcrumb';
import ElearningShell from './ElearningShell';
import LearnerSignInForm from '../../components/elearning/LearnerSignInForm';
import { ELEARNING_LABEL, accessRequestHref } from './labels';
import { ACCOUNT } from './shell-labels';

/**
 * Porte d'entrée de la plateforme de langue.
 *
 * Elle existe pour une seule raison : la progression. Les leçons
 * d'essai se lisent sans compte, et rien ici ne prétend le contraire.
 */
export default function SignInPage({ lang, next }: { lang: Lang; next?: string }) {
  const A = ACCOUNT[lang];
  const L = EL[lang];
  const accessHref = accessRequestHref(lang);

  const breadcrumb = buildBreadcrumb('/elearning/connexion', lang, {
    elearning: ELEARNING_LABEL[lang],
    connexion: A.title,
  });

  return (
    <ElearningShell
      lang={lang}
      breadcrumb={breadcrumb}
      accessHref={accessHref}
      accessLabel={L.signupCta}
    >
      <h1 className="t-display font-bold text-[clamp(1.6rem,5vw,2.4rem)] tracking-[-0.04em] leading-[1.15] mb-3">
        {A.title}
      </h1>

      <p className="text-[0.98rem] leading-[1.7] max-w-xl opacity-80 mb-8">{A.subtitle}</p>

      <div className="t-card rounded-[22px] p-7 max-w-md mb-8">
        <LearnerSignInForm labels={A} next={next} />
      </div>

      <p className="text-[0.92rem] opacity-75 max-w-md">
        {A.noAccount}{' '}
        <a href={accessHref} className="font-bold underline">
          {A.requestAccess}
        </a>
      </p>

      <p className="text-[0.88rem] opacity-65 max-w-md mt-6">
        <Link href="/elearning" className="underline">
          ← {ELEARNING_LABEL[lang]}
        </Link>
      </p>
    </ElearningShell>
  );
}
