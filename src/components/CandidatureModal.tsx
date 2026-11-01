import React, { useEffect, useState } from 'react';
import { CandidatureData } from '../types';
import { Translation } from '../i18n';

interface CandidatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
}

export default function CandidatureModal({ isOpen, onClose, t }: CandidatureModalProps) {
  const m = t.candidatureModal;

  const [isRapidMode, setIsRapidMode] = useState(true);
  const [step, setStep] = useState(1); // For complete dossier mode (Steps 1, 2, 3)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedId, setGeneratedId] = useState('');
  // Animation d'entrée de la bottom-sheet (V2)
  const [sheetIn, setSheetIn] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setSheetIn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Form State
  const [formData, setFormData] = useState<CandidatureData>(() => ({
    nomComplet: '',
    whatsapp: '',
    email: '',
    filiere: m.fieldOptions[0],
    dob: '',
    sexe: m.sexeOptions[0],
    ville: '',
    bacAnnee: m.bacYears[0],
    bacMention: m.mentions[2],
    niveauAnglais: m.englishLevels[1],
    villeRusse: m.ruCities[0],
    budget: m.budgets[0],
    bourse: m.admissionTypes[1],
    sourceFinancement: m.financingOptions[0],
    notes: ''
  }));

  // Fermeture directe : touche Échap
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePillSelect = (field: keyof CandidatureData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const submitCandidature = async (data: CandidatureData) => {
    const year = new Date().getFullYear();
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const mockId = `RS-${year}-${randNum}`;

    try {
      const response = await fetch('/api/candidatures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, id: mockId })
      });
      if (response.ok) {
        const resData = await response.json();
        return resData.id || mockId;
      }
      return mockId;
    } catch {
      return mockId;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.nomComplet || !formData.whatsapp || !formData.email) {
      alert(m.alertRequired);
      return;
    }

    const finalId = await submitCandidature(formData);
    setGeneratedId(finalId);

    // Save to localStorage
    try {
      localStorage.setItem('rs_last_id', finalId);
      localStorage.setItem('rs_last_phone', formData.whatsapp);
      localStorage.setItem('rs_candidate_data', JSON.stringify(formData));
    } catch (e) {
      console.error(e);
    }

    setIsSubmitted(true);
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  // Pre-filled WhatsApp message URL
  const getWhatsAppUrl = () => {
    const msg = `${m.waIntro}\n${m.waName}: ${formData.nomComplet}\n${m.sumWhatsapp}: ${formData.whatsapp}\n${m.waEmail}: ${formData.email}\n${m.waField}: ${formData.filiere}\n${m.waFolder}: ${generatedId}\n${m.waOutro}`;
    return `https://wa.me/79964334489?text=${encodeURIComponent(msg)}`;
  };

  const pillClass = (active: boolean) =>
    `px-3 py-1.5 text-xs font-bold cursor-pointer transition-colors ${active ? 't-chip-active' : 't-chip'}`;

  return (
    <div
      className={`fixed inset-0 flex items-end justify-center z-[800] transition-colors duration-300 ${sheetIn ? 'bg-black/65 v2-overlay-open' : 'bg-black/0'}`}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="v2-sheet shadow-2xl"
      >
        {/* Poignée (V2) */}
        <div className="w-11 h-[5px] rounded-full bg-black/15 mx-auto mt-3 shrink-0"></div>

        {/* En-tête de la sheet */}
        <div className="px-5 pt-3 pb-3 flex items-center justify-between border-b t-line-soft shrink-0">
          <div>
            <h2 className="t-display font-bold text-[1.1rem] tracking-[-0.02em]">
              {m.title} <span className="t-accent-text">{m.titleHl}</span>
            </h2>
            <p className="text-[10px] t-muted mt-0.5">{m.session} · {m.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="✕"
            className="w-9 h-9 rounded-full bg-black/[.08] hover:bg-black/[.15] grid place-items-center cursor-pointer transition-colors shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Onglets de mode (V2) */}
        {!isSubmitted && (
          <div className="grid grid-cols-2 gap-1.5 px-5 py-3 shrink-0">
            <button
              type="button"
              onClick={() => { setIsRapidMode(true); setStep(1); }}
              className={`rounded-full py-2.5 font-bold text-[0.85rem] cursor-pointer transition-all ${isRapidMode ? 't-chip-active' : 't-chip'}`}
            >
              {m.modeRapid}
            </button>
            <button
              type="button"
              onClick={() => setIsRapidMode(false)}
              className={`rounded-full py-2.5 font-bold text-[0.85rem] cursor-pointer transition-all ${!isRapidMode ? 't-chip-active' : 't-chip'}`}
            >
              {m.modeFull}
            </button>
          </div>
        )}

        {/* Indicateur d'étapes (V2) */}
        {!isSubmitted && !isRapidMode && (
          <div className="flex gap-1.5 px-5 pb-3 shrink-0">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex-1 h-1 rounded-full transition-colors"
                style={{ background: n < step ? 'var(--accent)' : n === step ? 'var(--dark-bg)' : 'rgba(0,0,0,.1)' }}
              ></div>
            ))}
          </div>
        )}

        {/* Form Body */}
        <div className="px-5 pb-6 flex-1 overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* --- MODE 1: RAPIDE --- */}
              {isRapidMode && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1">{m.nameLabel}</label>
                    <input
                      type="text"
                      name="nomComplet"
                      required
                      placeholder={m.namePlaceholder}
                      value={formData.nomComplet}
                      onChange={handleInputChange}
                      className="t-input w-full px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1">{m.whatsappLabel}</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      placeholder={m.whatsappPlaceholder}
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="t-input w-full px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1">{m.emailLabel}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={m.emailPlaceholder}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="t-input w-full px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1">{m.fieldLabel}</label>
                    <select
                      name="filiere"
                      value={formData.filiere}
                      onChange={handleInputChange}
                      className="t-input w-full px-3 py-2 text-sm font-semibold"
                    >
                      {m.fieldOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="t-btn-primary w-full font-bold uppercase py-3 text-xs transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                  >
                    {m.submitRapid}
                  </button>
                </div>
              )}

              {/* --- MODE 2: DOSSIER COMPLET (3 ÉTAPES) --- */}
              {!isRapidMode && (
                <div className="space-y-4">

                  {/* Step indicators */}
                  <div className="flex justify-between items-center text-[10px] font-bold t-muted tracking-wider uppercase border-b t-line-soft pb-2 mb-4">
                    {m.steps.map((label, idx) => (
                      <span key={idx} className={step === idx + 1 ? 't-accent-text font-black' : ''}>{label}</span>
                    ))}
                  </div>

                  {/* STEP 1: Personal Info */}
                  {step === 1 && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase mb-1">{m.nameShort}</label>
                        <input
                          type="text"
                          name="nomComplet"
                          required
                          placeholder={m.namePlaceholder}
                          value={formData.nomComplet}
                          onChange={handleInputChange}
                          className="t-input w-full px-3 py-2 text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-bold uppercase mb-1">{m.whatsappLabel}</label>
                          <input
                            type="tel"
                            name="whatsapp"
                            required
                            placeholder={m.whatsappPlaceholder}
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            className="t-input w-full px-3 py-2 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase mb-1">{m.dobLabel}</label>
                          <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            className="t-input w-full px-3 py-2 text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase mb-1">{m.emailLabel}</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder={m.emailPlaceholder}
                          value={formData.email}
                          onChange={handleInputChange}
                          className="t-input w-full px-3 py-2 text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[11px] font-bold uppercase mb-1">{m.sexeLabel}</label>
                          <select
                            name="sexe"
                            value={formData.sexe}
                            onChange={handleInputChange}
                            className="t-input w-full px-3 py-2 text-sm"
                          >
                            {m.sexeOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase mb-1">{m.cityLabel}</label>
                          <input
                            type="text"
                            name="ville"
                            placeholder={m.cityPlaceholder}
                            value={formData.ville}
                            onChange={handleInputChange}
                            className="t-input w-full px-3 py-2 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Academic background */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <span className="block text-[11px] font-bold uppercase mb-2">{m.bacYearLabel}</span>
                        <div className="flex gap-2 flex-wrap">
                          {m.bacYears.map((y) => (
                            <button key={y} type="button" onClick={() => handlePillSelect('bacAnnee', y)} className={pillClass(formData.bacAnnee === y)}>
                              {y}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block text-[11px] font-bold uppercase mb-2">{m.mentionLabel}</span>
                        <div className="flex gap-2 flex-wrap">
                          {m.mentions.map((mention) => (
                            <button key={mention} type="button" onClick={() => handlePillSelect('bacMention', mention)} className={pillClass(formData.bacMention === mention)}>
                              {mention}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block text-[11px] font-bold uppercase mb-2">{m.englishLabel}</span>
                        <div className="flex gap-2 flex-wrap">
                          {m.englishLevels.map((l) => (
                            <button key={l} type="button" onClick={() => handlePillSelect('niveauAnglais', l)} className={pillClass(formData.niveauAnglais === l)}>
                              {l}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block text-[11px] font-bold uppercase mb-2">{m.ruCityLabel}</span>
                        <div className="flex gap-2 flex-wrap">
                          {m.ruCities.map((c) => (
                            <button key={c} type="button" onClick={() => handlePillSelect('villeRusse', c)} className={pillClass(formData.villeRusse === c)}>
                              {c}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Financing & Notes */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <span className="block text-[11px] font-bold uppercase mb-2">{m.budgetLabel}</span>
                        <div className="flex gap-2 flex-wrap">
                          {m.budgets.map((b) => (
                            <button key={b} type="button" onClick={() => handlePillSelect('budget', b)} className={pillClass(formData.budget === b)}>
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block text-[11px] font-bold uppercase mb-2">{m.admissionLabel}</span>
                        <div className="flex gap-2 flex-wrap">
                          {m.admissionTypes.map((bo) => (
                            <button key={bo} type="button" onClick={() => handlePillSelect('bourse', bo)} className={pillClass(formData.bourse === bo)}>
                              {bo}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase mb-1">{m.financingLabel}</label>
                        <select
                          name="sourceFinancement"
                          value={formData.sourceFinancement}
                          onChange={handleInputChange}
                          className="t-input w-full px-3 py-2 text-xs font-semibold"
                        >
                          {m.financingOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase mb-1">{m.notesLabel}</label>
                        <textarea
                          name="notes"
                          rows={2}
                          placeholder={m.notesPlaceholder}
                          value={formData.notes}
                          onChange={handleInputChange}
                          className="t-input w-full px-3 py-2 text-xs"
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons for Step mode */}
                  <div className="flex justify-between gap-4 mt-6 border-t t-line-soft pt-4">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="t-btn-light px-4 py-2 text-xs font-bold cursor-pointer"
                      >
                        {m.back}
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="t-btn-dark ms-auto px-6 py-2 text-xs font-bold cursor-pointer"
                      >
                        {m.next}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="t-btn-primary ms-auto px-6 py-2 text-xs font-extrabold cursor-pointer"
                      >
                        {m.submitFull}
                      </button>
                    )}
                  </div>

                </div>
              )}

            </form>
          ) : (
            /* --- SUCCESS VIEW --- */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl mx-auto animate-bounce" style={{ background: 'var(--green)' }}>
                🎉
              </div>
              <h3 className="t-h text-2xl">{m.successTitle}</h3>
              <p className="text-sm t-muted leading-relaxed font-sans max-w-sm mx-auto">
                {m.successBody1} <strong className="t-accent-text font-mono text-base">{generatedId}</strong>.{' '}
                {m.successBody2}
              </p>

              <div className="t-card p-4 text-start text-xs font-mono max-w-sm mx-auto space-y-1 t-card-shadow">
                <div>• {m.sumId} : {generatedId}</div>
                <div>• {m.sumStatus} : {m.sumStatusVal}</div>
                <div>• {m.sumCandidate} : {formData.nomComplet}</div>
                <div>• {m.sumWhatsapp} : +216 {formData.whatsapp}</div>
                <div>• {m.sumField} : {formData.filiere}</div>
              </div>

              <div className="space-y-3 pt-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="t-btn-primary w-full font-black py-3 text-xs uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {m.waCta}
                </a>

                <div className="rounded-lg p-3 text-center border t-line-soft" style={{ background: 'var(--surface-alt)' }}>
                  <span className="text-[10px] t-muted uppercase font-bold tracking-widest block mb-1">{m.progressLabel}</span>
                  <a
                    href="#candidat"
                    onClick={(e) => { e.preventDefault(); onClose(); window.location.hash = '#candidat'; }}
                    className="text-xs font-bold t-accent-text underline hover:opacity-80"
                  >
                    {m.trackerLink}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
