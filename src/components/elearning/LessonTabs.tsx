'use client';

import { useState, type ReactNode } from 'react';

type TabKey = 'lesson' | 'exercises' | 'resources';

/**
 * Onglets d'une leçon.
 *
 * Les trois panneaux sont rendus sur le serveur et passés en
 * propriétés : le contenu reste dans le HTML servi, donc lisible par
 * un moteur de recherche et par un lecteur d'écran, même si le
 * JavaScript ne s'exécute pas. Seul le choix de l'onglet est
 * interactif.
 */
export default function LessonTabs({
  labels,
  exerciseCount,
  lesson,
  exercises,
  resources,
}: {
  labels: Record<string, string>;
  exerciseCount: number;
  lesson: ReactNode;
  exercises: ReactNode;
  resources: ReactNode;
}) {
  const [active, setActive] = useState<TabKey>('lesson');

  const tabs: { key: TabKey; label: string; badge?: number }[] = [
    { key: 'lesson', label: labels.tabLesson },
    { key: 'exercises', label: labels.exercises, badge: exerciseCount },
    { key: 'resources', label: labels.tabResources },
  ];

  return (
    <div className="max-w-3xl">
      <div
        role="tablist"
        className="flex items-center gap-6 border-b border-black/10 dark:border-white/15 mb-7 overflow-x-auto"
      >
        {tabs.map((tab) => {
          const current = active === tab.key;
          return (
            <button
              key={tab.key}
              role="tab"
              type="button"
              aria-selected={current}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 pb-3 whitespace-nowrap text-[0.95rem] font-bold border-b-2 -mb-px transition-colors ${
                current ? 'border-current opacity-100' : 'border-transparent opacity-55 hover:opacity-80'
              }`}
            >
              {tab.label}
              {tab.badge ? (
                <span className="t-chip text-[0.72rem] font-bold px-2 py-0.5 rounded-full">
                  {tab.badge}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" hidden={active !== 'lesson'}>
        {lesson}
      </div>
      <div role="tabpanel" hidden={active !== 'exercises'}>
        {exercises}
      </div>
      <div role="tabpanel" hidden={active !== 'resources'}>
        {resources}
      </div>
    </div>
  );
}
