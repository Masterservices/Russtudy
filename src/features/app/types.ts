/**
 * Modèle de vue de la plateforme RusStudy.
 *
 * Ces types sont ce que consomment les écrans. Ils sont volontairement
 * découplés des lignes SQL (`src/lib/neon/database.types.ts`) : la couche
 * `data/` fait la traduction, ce qui permet de faire évoluer le schéma sans
 * toucher aux composants.
 */

import type {
  AppRole,
  DocumentStatus,
  DossierStatus,
  LeadStatus,
  PaymentStatus,
  QuoteStatus,
  StepStatus,
} from '../../lib/neon/database.types';

export type { AppRole, DocumentStatus, DossierStatus, LeadStatus, PaymentStatus, QuoteStatus, StepStatus };

export interface AppUser {
  id: string;
  role: AppRole;
  fullName: string;
  email: string;
  phone: string | null;
  avatarUrl: string | null;
  lang: string;
  city: string | null;
}

export interface PersonRef {
  id: string;
  fullName: string;
  email: string;
  avatarUrl: string | null;
}

/** Fiche complète d'une personne, au-delà de l'extrait affiché dans les listes. */
export interface ProfileDetail extends PersonRef {
  role: AppRole;
  phone: string | null;
  city: string | null;
  createdAt: string;
}

export interface UniversityRef {
  id: string;
  name: string;
  city: string;
}

export interface Dossier {
  id: string;
  reference: string;
  status: DossierStatus;
  leadStatus: LeadStatus;
  progress: number;
  program: string | null;
  level: string | null;
  startDate: string | null;
  createdAt: string;
  university: UniversityRef | null;
  student: PersonRef;
  consultant: PersonRef | null;
}

/**
 * Une étape passe par trois gestes avant d'être acquise : l'étudiant la
 * déclare faite, le consultant confirme, l'administration signe.
 */
export type StepValidation = 'idle' | 'requested' | 'confirmed' | 'validated';

export interface TimelineStep {
  id: string;
  key: string;
  label: string;
  status: StepStatus;
  occurredAt: string | null;
  validation: StepValidation;
  requestedAt: string | null;
  confirmedAt: string | null;
  validatedAt: string | null;
}

export interface DocumentItem {
  id: string;
  dossierId: string;
  docType: string;
  name: string;
  status: DocumentStatus;
  note: string | null;
  receivedAt: string | null;
  storagePath: string | null;
  mimeType: string | null;
  sizeBytes: number | null;
}

export interface ConversationThread {
  id: string;
  dossierId: string;
  topic: string;
  title: string;
  counterpart: PersonRef | null;
  lastMessage: string | null;
  lastMessageAt: string | null;
  unreadCount: number;
}

export interface MessageItem {
  id: string;
  body: string;
  senderId: string | null;
  senderName: string;
  createdAt: string;
  own: boolean;
}

export interface NotificationItem {
  id: string;
  kind: string;
  title: string;
  body: string | null;
  href: string | null;
  readAt: string | null;
  createdAt: string;
}

export interface QuoteLine {
  id: string;
  label: string;
  amount: number;
}

export interface PaymentLine {
  id: string;
  label: string;
  amount: number;
  status: PaymentStatus;
  dueDate: string | null;
  paidAt: string | null;
}

export interface Quote {
  id: string;
  dossierId: string;
  reference: string;
  currency: string;
  status: QuoteStatus;
  totalAmount: number;
  issuedAt: string | null;
  items: QuoteLine[];
  payments: PaymentLine[];
}

export interface UniversityItem {
  id: string;
  slug: string;
  name: string;
  city: string;
  country: string;
  tuitionMinRub: number | null;
  tuitionMaxRub: number | null;
  isActive: boolean;
  dossierCount: number;
}

export interface PricingItem {
  id: string;
  key: string;
  label: string;
  amount: number;
  currency: string;
}

export interface AuditLogItem {
  id: string;
  action: string;
  entity: string | null;
  actorName: string;
  createdAt: string;
}

export interface ConsultantStat {
  consultant: PersonRef;
  dossierCount: number;
  revenue: number;
}

/** Point d'une série mensuelle (graphiques admin et consultant). */
export interface SeriesPoint {
  label: string;
  value: number;
}

export interface ConsultantOverview {
  studentCount: number;
  activeDossierCount: number;
  admittedCount: number;
  invitationCount: number;
  recentDossiers: Dossier[];
}

export interface AdminOverview {
  studentCount: number;
  consultantCount: number;
  dossierCount: number;
  revenue: number;
  currency: string;
  admissionsSeries: SeriesPoint[];
  revenueSeries: SeriesPoint[];
  topConsultants: ConsultantStat[];
}

/** Contexte injecté dans chaque écran : session + mode de fonctionnement. */
export interface AppSession {
  user: AppUser;
  demo: boolean;
}
