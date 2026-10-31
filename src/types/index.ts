export interface CandidatureData {
  // Mode rapide
  nomComplet: string;
  whatsapp: string;
  email: string;
  filiere: string;

  // Mode complet - Infos personnelles
  dob?: string;
  sexe?: string;
  ville?: string;

  // Parcours académique
  bacAnnee?: string;
  bacMention?: string;
  niveauAnglais?: string;
  villeRusse?: string;

  // Financement
  budget?: string;
  bourse?: string;
  sourceFinancement?: string;
  notes?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ProgramItem {
  id: number;
  name: string;
  duration: string;
  price: string;
  tag: string;
  accentClass: string; // e.g. bg-blue text-white
  canvasColorStart: string;
  canvasColorEnd: string;
  details: string[];
}

export interface UniversityItem {
  name: string;
  rank: string;
  city: string;
  badge: string;
}

export interface TestimonyItem {
  id: number;
  name: string;
  role: string;
  text: string;
  avatarText: string;
  stars: number;
  colorClass: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DaySelection {
  label: string;
  dateStr: string;
}
