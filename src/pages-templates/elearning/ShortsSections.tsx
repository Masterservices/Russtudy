import type { ShortsCopy } from './shorts-copy';

/**
 * Blocs communs aux pages de shorts : la méthode en quatre temps, et
 * les questions fréquentes.
 *
 * Les réponses sont écrites en clair dans la page, pas repliées : ce
 * sont elles que les données structurées déclarent, et on ne déclare
 * que ce qui se lit.
 */

export function ShortsSteps({ copy }: { copy: ShortsCopy }) {
  return (
    <section className="max-w-5xl mb-14">
      <h2 className="t-display font-bold text-[clamp(1.35rem,4vw,1.8rem)] tracking-[-0.03em] mb-5">
        {copy.stepsTitle}
      </h2>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {copy.steps.map((step, index) => (
          <li key={step.title} className="t-card rounded-[20px] p-5">
            <span
              aria-hidden="true"
              className="grid place-items-center w-8 h-8 rounded-full bg-[var(--accent)] text-[var(--accent-ink)] font-bold text-[0.9rem] mb-3"
            >
              {index + 1}
            </span>
            <h3 className="t-display font-bold text-[1.05rem] tracking-[-0.02em] mb-1.5">{step.title}</h3>
            <p className="text-[0.92rem] leading-[1.6] opacity-80">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ShortsFaq({ copy }: { copy: ShortsCopy }) {
  return (
    <section className="max-w-3xl mb-6">
      <h2 className="t-display font-bold text-[clamp(1.35rem,4vw,1.8rem)] tracking-[-0.03em] mb-5">
        {copy.faqTitle}
      </h2>
      <div className="flex flex-col gap-3">
        {copy.faq.map((item) => (
          <div key={item.question} className="t-card rounded-[18px] px-5 py-4">
            <h3 className="font-bold text-[1rem] leading-snug mb-1.5">{item.question}</h3>
            <p className="text-[0.94rem] leading-[1.65] opacity-80">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
