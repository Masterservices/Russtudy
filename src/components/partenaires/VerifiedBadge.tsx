'use client';

import { useState } from 'react';

/**
 * Badge « partenaire vérifié » et sa fenêtre d'explication.
 *
 * Tant que RusStudy n'a pas publié ses critères de contrôle, la fenêtre le
 * dit explicitement : elle n'énumère aucun contrôle qui n'aurait pas été
 * réellement effectué.
 */
export default function VerifiedBadge({
  partnerName,
  accent,
  labels,
  checks,
  verifiedOn,
  charterPath,
}: {
  partnerName: string;
  accent: string;
  labels: Record<string, string>;
  checks?: string[];
  verifiedOn?: string;
  charterPath?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] text-white font-bold text-[0.78rem] px-4 py-2 ring-2 ring-offset-2 hover:opacity-90 transition-opacity"
        style={{ ['--tw-ring-color' as string]: accent }}
      >
        <span aria-hidden="true">✓</span>
        {labels.verifiedBadge}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[120] grid place-items-center bg-black/55 px-4"
          role="dialog"
          aria-modal="true"
          aria-label={labels.verifiedTitle}
          onClick={() => setOpen(false)}
        >
          <div
            className="t-card rounded-[22px] p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="t-display font-bold text-lg tracking-[-0.02em] mb-3">{labels.verifiedTitle}</h2>

            {checks && checks.length > 0 ? (
              <ul className="flex flex-col gap-2 mb-4">
                {checks.map((c) => (
                  <li key={c} className="flex gap-2 text-[0.88rem] leading-[1.6] opacity-85">
                    <span className="t-green-text font-bold" aria-hidden="true">
                      ✓
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[0.88rem] leading-[1.65] opacity-85 mb-4">{labels.verifiedPending}</p>
            )}

            {verifiedOn && (
              <p className="text-[0.8rem] opacity-60 mb-2">
                {labels.verifiedOnLabel} {verifiedOn}
              </p>
            )}

            <p className="text-[0.84rem] leading-[1.65] opacity-80 mb-4">
              <strong>{partnerName}</strong> {labels.verifiedIndependent}
            </p>

            <div className="flex items-center gap-3">
              {charterPath && (
                <a href={charterPath} className="text-[0.82rem] font-bold underline">
                  {labels.charterLink}
                </a>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="t-btn-dark font-bold text-[0.82rem] px-4 py-2 rounded-full ms-auto"
              >
                {labels.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
