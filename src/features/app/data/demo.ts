/**
 * Jeu de données de démonstration.
 *
 * Utilisé lorsque Supabase n'est pas configuré : `/app` reste entièrement
 * navigable (lecture seule) pour la recette, les previews Vercel et le
 * développement local sans base. Les données reprennent celles de la maquette.
 */

import type {
  AdminOverview,
  AppUser,
  AuditLogItem,
  ConversationThread,
  DocumentItem,
  Dossier,
  MessageItem,
  NotificationItem,
  PersonRef,
  PricingItem,
  Quote,
  TimelineStep,
  UniversityItem,
} from '../types';

const STUDENT_ID = '00000000-0000-4000-8000-000000000001';
const CONSULTANT_ID = '00000000-0000-4000-8000-000000000002';
const ADMIN_ID = '00000000-0000-4000-8000-000000000003';
const DOSSIER_ID = '00000000-0000-4000-8000-000000000010';

export const DEMO_STUDENT: AppUser = {
  id: STUDENT_ID,
  role: 'student',
  fullName: 'Moussa Diop',
  email: 'moussa@example.com',
  phone: '+7 999 123 45 67',
  avatarUrl: null,
  lang: 'fr',
  city: 'Dakar',
};

export const DEMO_CONSULTANT: AppUser = {
  id: CONSULTANT_ID,
  role: 'consultant',
  fullName: 'Ahmed Ibrahim',
  email: 'ahmed@russieetudes.com',
  phone: '+7 996 433 44 89',
  avatarUrl: null,
  lang: 'fr',
  city: 'Kazan',
};

export const DEMO_ADMIN: AppUser = {
  id: ADMIN_ID,
  role: 'admin',
  fullName: 'Marie Dubois',
  email: 'admin@russieetudes.com',
  phone: null,
  avatarUrl: null,
  lang: 'fr',
  city: 'Moscou',
};

export const DEMO_USERS: Record<string, AppUser> = {
  student: DEMO_STUDENT,
  consultant: DEMO_CONSULTANT,
  admin: DEMO_ADMIN,
};

function ref(user: AppUser): PersonRef {
  return { id: user.id, fullName: user.fullName, email: user.email, avatarUrl: user.avatarUrl };
}

const KAZAN = { id: '00000000-0000-4000-8000-000000000020', name: "Université d'État de Kazan", city: 'Kazan' };

export const DEMO_DOSSIER: Dossier = {
  id: DOSSIER_ID,
  reference: 'RS-2026-4821',
  status: 'in_review',
  leadStatus: 'in_progress',
  progress: 65,
  program: 'Master en Informatique',
  level: 'Master',
  startDate: '2026-09-01',
  createdAt: '2026-01-12T09:00:00.000Z',
  university: KAZAN,
  student: ref(DEMO_STUDENT),
  consultant: ref(DEMO_CONSULTANT),
};

const OTHER_STUDENTS: { name: string; email: string; program: string; university: typeof KAZAN; progress: number; status: Dossier['status'] }[] = [
  { name: 'Awa Camara', email: 'awa@example.com', program: 'Licence en Économie', university: { id: '00000000-0000-4000-8000-000000000021', name: "Université d'État de Moscou", city: 'Moscou' }, progress: 40, status: 'in_review' },
  { name: 'Ibrahim Traoré', email: 'ibrahim@example.com', program: 'Master en Génie civil', university: { id: '00000000-0000-4000-8000-000000000022', name: 'SPbPU', city: 'Saint-Pétersbourg' }, progress: 82, status: 'admitted' },
  { name: 'Fatou Diallo', email: 'fatou@example.com', program: 'Médecine générale', university: { id: '00000000-0000-4000-8000-000000000023', name: 'RUDN', city: 'Moscou' }, progress: 25, status: 'draft' },
  { name: 'Oumar Keita', email: 'oumar@example.com', program: 'Master en Management', university: { id: '00000000-0000-4000-8000-000000000024', name: 'PLZIN', city: 'Moscou' }, progress: 58, status: 'invitation' },
];

export const DEMO_DOSSIERS: Dossier[] = [
  DEMO_DOSSIER,
  ...OTHER_STUDENTS.map((s, i) => ({
    id: `00000000-0000-4000-8000-00000000001${i + 1}`,
    reference: `RS-2026-48${30 + i}`,
    status: s.status,
    leadStatus: (i % 2 === 0 ? 'contacted' : 'in_progress') as Dossier['leadStatus'],
    progress: s.progress,
    program: s.program,
    level: s.program.startsWith('Master') ? 'Master' : 'Licence',
    startDate: '2026-09-01',
    createdAt: `2026-0${(i % 6) + 1}-15T09:00:00.000Z`,
    university: s.university,
    student: {
      id: `00000000-0000-4000-8000-0000000001${i + 10}`,
      fullName: s.name,
      email: s.email,
      avatarUrl: null,
    },
    consultant: ref(DEMO_CONSULTANT),
  })),
];

const SIGNED = (at: string) => ({
  validation: 'validated' as const,
  requestedAt: at,
  confirmedAt: at,
  validatedAt: at,
});

const UNTOUCHED = {
  validation: 'idle' as const,
  requestedAt: null,
  confirmedAt: null,
  validatedAt: null,
};

export const DEMO_STEPS: TimelineStep[] = [
  { id: 's1', key: 'created', label: 'Dossier créé', status: 'done', occurredAt: '2026-01-12T09:00:00.000Z', ...SIGNED('2026-01-12T09:00:00.000Z') },
  { id: 's2', key: 'documents', label: 'Documents reçus', status: 'done', occurredAt: '2026-01-18T09:00:00.000Z', ...SIGNED('2026-01-18T09:00:00.000Z') },
  { id: 's3', key: 'payment', label: 'Paiement confirmé', status: 'done', occurredAt: '2026-01-24T09:00:00.000Z', ...SIGNED('2026-01-24T09:00:00.000Z') },
  { id: 's4', key: 'review', label: 'Étude du dossier', status: 'current', occurredAt: null, ...UNTOUCHED },
  { id: 's5', key: 'admission', label: 'Admission', status: 'upcoming', occurredAt: null, ...UNTOUCHED },
  { id: 's6', key: 'invitation', label: 'Invitation', status: 'upcoming', occurredAt: null, ...UNTOUCHED },
  { id: 's7', key: 'visa', label: 'Visa', status: 'upcoming', occurredAt: null, ...UNTOUCHED },
  { id: 's8', key: 'arrival', label: 'Arrivée en Russie', status: 'upcoming', occurredAt: null, ...UNTOUCHED },
];

export const DEMO_DOCUMENTS: DocumentItem[] = [
  { id: 'd1', dossierId: DOSSIER_ID, docType: 'passport', name: 'Passeport', status: 'validated', note: null, receivedAt: '2026-01-12T09:00:00.000Z', storagePath: null, mimeType: 'application/pdf', sizeBytes: 842000 },
  { id: 'd2', dossierId: DOSSIER_ID, docType: 'diploma', name: 'Diplôme', status: 'validated', note: null, receivedAt: '2026-01-15T09:00:00.000Z', storagePath: null, mimeType: 'application/pdf', sizeBytes: 1240000 },
  { id: 'd3', dossierId: DOSSIER_ID, docType: 'transcript', name: 'Relevé de notes', status: 'validated', note: null, receivedAt: '2026-01-15T09:00:00.000Z', storagePath: null, mimeType: 'application/pdf', sizeBytes: 690000 },
  { id: 'd4', dossierId: DOSSIER_ID, docType: 'translation', name: 'Traduction du diplôme', status: 'pending', note: 'En cours de traitement par le traducteur assermenté.', receivedAt: null, storagePath: null, mimeType: null, sizeBytes: null },
  { id: 'd5', dossierId: DOSSIER_ID, docType: 'photo', name: "Photo d'identité", status: 'missing', note: 'Format 3,5 × 4,5 cm, fond blanc.', receivedAt: null, storagePath: null, mimeType: null, sizeBytes: null },
  { id: 'd6', dossierId: DOSSIER_ID, docType: 'insurance', name: 'Assurance médicale', status: 'missing', note: null, receivedAt: null, storagePath: null, mimeType: null, sizeBytes: null },
];

export const DEMO_THREADS: ConversationThread[] = [
  {
    id: 'c1',
    dossierId: DOSSIER_ID,
    topic: 'consultant',
    title: 'Ahmed Ibrahim',
    counterpart: ref(DEMO_CONSULTANT),
    lastMessage: 'Il manque encore votre traduction du diplôme.',
    lastMessageAt: '2026-02-02T10:30:00.000Z',
    unreadCount: 1,
  },
  {
    id: 'c2',
    dossierId: DOSSIER_ID,
    topic: 'university',
    title: "Université d'État de Kazan",
    counterpart: null,
    lastMessage: "Votre dossier est à l'étude.",
    lastMessageAt: '2026-02-01T14:05:00.000Z',
    unreadCount: 0,
  },
  {
    id: 'c3',
    dossierId: DOSSIER_ID,
    topic: 'general',
    title: 'Service Visa',
    counterpart: null,
    lastMessage: 'Merci de nous envoyer une copie de votre passeport.',
    lastMessageAt: '2026-01-30T08:20:00.000Z',
    unreadCount: 0,
  },
];

export const DEMO_MESSAGES: Record<string, MessageItem[]> = {
  c1: [
    { id: 'm1', body: 'Bonjour Moussa, j’ai bien reçu votre dossier.', senderId: CONSULTANT_ID, senderName: 'Ahmed Ibrahim', createdAt: '2026-02-01T09:00:00.000Z', own: false },
    { id: 'm2', body: 'Merci Ahmed ! Est-ce qu’il manque quelque chose ?', senderId: STUDENT_ID, senderName: 'Moussa Diop', createdAt: '2026-02-01T09:15:00.000Z', own: true },
    { id: 'm3', body: 'Il manque encore votre traduction du diplôme.', senderId: CONSULTANT_ID, senderName: 'Ahmed Ibrahim', createdAt: '2026-02-02T10:30:00.000Z', own: false },
  ],
  c2: [
    { id: 'm4', body: "Votre dossier est à l'étude.", senderId: null, senderName: "Université d'État de Kazan", createdAt: '2026-02-01T14:05:00.000Z', own: false },
  ],
  c3: [
    { id: 'm5', body: 'Merci de nous envoyer une copie de votre passeport.', senderId: null, senderName: 'Service Visa', createdAt: '2026-01-30T08:20:00.000Z', own: false },
  ],
};

export const DEMO_NOTIFICATIONS: NotificationItem[] = [
  { id: 'n1', kind: 'document', title: 'Nouveau document demandé', body: 'Il manque la traduction du diplôme.', href: '/app/etudiant/documents', readAt: null, createdAt: '2026-02-02T10:30:00.000Z' },
  { id: 'n2', kind: 'payment', title: 'Paiement confirmé', body: 'Votre paiement a été confirmé.', href: '/app/etudiant/paiements', readAt: '2026-01-24T12:00:00.000Z', createdAt: '2026-01-24T09:00:00.000Z' },
  { id: 'n3', kind: 'dossier', title: 'Université', body: "Votre dossier est à l'étude.", href: '/app/etudiant/dossier', readAt: '2026-02-01T15:00:00.000Z', createdAt: '2026-02-01T14:05:00.000Z' },
  { id: 'n4', kind: 'invitation', title: 'Invitation disponible', body: 'Votre invitation est prête.', href: '/app/etudiant/dossier/timeline', readAt: null, createdAt: '2026-01-31T11:00:00.000Z' },
];

export const DEMO_QUOTE: Quote = {
  id: 'q1',
  dossierId: DOSSIER_ID,
  reference: 'DEV-2026-4821',
  currency: 'RUB',
  status: 'accepted',
  totalAmount: 440000,
  issuedAt: '2026-01-16T09:00:00.000Z',
  items: [
    { id: 'qi1', label: 'Frais de dossier', amount: 120000 },
    { id: 'qi2', label: 'Frais universitaires', amount: 300000 },
    { id: 'qi3', label: 'Visa & invitation', amount: 20000 },
    { id: 'qi4', label: 'Assurance médicale', amount: 0 },
  ],
  payments: [
    { id: 'p1', label: 'Acompte', amount: 100000, status: 'paid', dueDate: '2026-01-16', paidAt: '2026-01-16T10:00:00.000Z' },
    { id: 'p2', label: 'Paiement 2', amount: 170000, status: 'due', dueDate: '2026-02-19', paidAt: null },
    { id: 'p3', label: 'Solde', amount: 170000, status: 'due', dueDate: '2026-04-30', paidAt: null },
  ],
};

export const DEMO_UNIVERSITIES: UniversityItem[] = [
  { id: KAZAN.id, slug: 'universite-etat-kazan', name: "Université d'État de Kazan", city: 'Kazan', country: 'Russie', tuitionMinRub: 280000, tuitionMaxRub: 420000, isActive: true, dossierCount: 42 },
  { id: '00000000-0000-4000-8000-000000000021', slug: 'universite-etat-moscou', name: "Université d'État de Moscou", city: 'Moscou', country: 'Russie', tuitionMinRub: 350000, tuitionMaxRub: 560000, isActive: true, dossierCount: 31 },
  { id: '00000000-0000-4000-8000-000000000022', slug: 'spbpu', name: 'SPbPU — Polytechnique', city: 'Saint-Pétersbourg', country: 'Russie', tuitionMinRub: 300000, tuitionMaxRub: 450000, isActive: true, dossierCount: 24 },
  { id: '00000000-0000-4000-8000-000000000023', slug: 'rudn', name: "RUDN — Amitié des Peuples", city: 'Moscou', country: 'Russie', tuitionMinRub: 320000, tuitionMaxRub: 480000, isActive: true, dossierCount: 18 },
];

export const DEMO_PRICING: PricingItem[] = [
  { id: 'pr1', key: 'dossier_fee', label: 'Frais de dossier', amount: 120000, currency: 'RUB' },
  { id: 'pr2', key: 'tuition_fee', label: 'Frais universitaires', amount: 300000, currency: 'RUB' },
  { id: 'pr3', key: 'visa_invitation', label: 'Visa & invitation', amount: 20000, currency: 'RUB' },
  { id: 'pr4', key: 'medical_insurance', label: 'Assurance médicale', amount: 0, currency: 'RUB' },
];

export const DEMO_LOGS: AuditLogItem[] = [
  { id: 'l1', action: 'auth.sign_in', entity: 'admin', actorName: 'Marie Dubois', createdAt: '2026-01-16T08:41:00.000Z' },
  { id: 'l2', action: 'pricing.update', entity: 'pricing_items', actorName: 'Marie Dubois', createdAt: '2026-01-16T10:15:00.000Z' },
  { id: 'l3', action: 'consultant.create', entity: 'profiles', actorName: 'Marie Dubois', createdAt: '2026-01-16T14:20:00.000Z' },
  { id: 'l4', action: 'export.data', entity: 'dossiers', actorName: 'Ahmed Ibrahim', createdAt: '2026-01-16T16:03:00.000Z' },
];

export const DEMO_ADMIN_OVERVIEW: AdminOverview = {
  studentCount: 256,
  consultantCount: 45,
  dossierCount: 123,
  revenue: 3_200_000,
  currency: 'RUB',
  admissionsSeries: [
    { label: 'Août', value: 18 },
    { label: 'Sep', value: 26 },
    { label: 'Oct', value: 22 },
    { label: 'Nov', value: 34 },
    { label: 'Déc', value: 29 },
    { label: 'Jan', value: 41 },
  ],
  revenueSeries: [
    { label: 'Août', value: 380000 },
    { label: 'Sep', value: 520000 },
    { label: 'Oct', value: 460000 },
    { label: 'Nov', value: 610000 },
    { label: 'Déc', value: 540000 },
    { label: 'Jan', value: 690000 },
  ],
  topConsultants: [
    { consultant: ref(DEMO_CONSULTANT), dossierCount: 42, revenue: 1_200_000 },
    { consultant: ref(DEMO_ADMIN), dossierCount: 31, revenue: 850_000 },
  ],
};
