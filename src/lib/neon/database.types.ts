/**
 * Types de la base RusStudy.
 *
 * Miroir manuel des migrations `supabase/migrations/*` (rejouées sur Neon). À mettre à jour à la main
 * après toute évolution du schéma.
 */

export type AppRole = 'student' | 'consultant' | 'admin';
export type DossierStatus = 'draft' | 'in_review' | 'admitted' | 'invitation' | 'visa' | 'arrived' | 'cancelled';
export type DocumentStatus = 'missing' | 'pending' | 'received' | 'validated' | 'rejected';
export type StepStatus = 'done' | 'current' | 'upcoming';
export type PaymentStatus = 'due' | 'paid' | 'late' | 'refunded';
export type QuoteStatus = 'draft' | 'sent' | 'accepted' | 'refused';
export type LeadStatus = 'new' | 'contacted' | 'in_progress' | 'admitted' | 'lost';
export type LessonBlockKind = 'slide' | 'text' | 'audio' | 'video' | 'vocabulary' | 'dialogue';
export type ExerciseKind = 'mcq' | 'fill_blank' | 'match' | 'order' | 'listening' | 'speaking';
export type EnrollmentStatus = 'active' | 'expired' | 'revoked';
export type TutoringStatus = 'requested' | 'confirmed' | 'done' | 'cancelled';

/** Texte traduit stocké en jsonb, indexé par code de langue. */
export type LocalizedJson = Record<string, unknown>;

export type ProfileRow = {
  id: string;
  role: AppRole;
  full_name: string;
  email: string;
  phone: string | null;
  avatar_url: string | null;
  lang: string;
  city: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type UniversityRow = {
  id: string;
  slug: string;
  name: string;
  city: string;
  country: string;
  logo_url: string | null;
  tuition_min_rub: number | null;
  tuition_max_rub: number | null;
  is_active: boolean;
  created_at: string;
};

export type DossierRow = {
  id: string;
  reference: string;
  student_id: string;
  consultant_id: string | null;
  university_id: string | null;
  program: string | null;
  level: string | null;
  status: DossierStatus;
  lead_status: LeadStatus;
  progress: number;
  start_date: string | null;
  created_at: string;
  updated_at: string;
};

export type DossierStepRow = {
  id: string;
  dossier_id: string;
  step_key: string;
  label: string;
  status: StepStatus;
  position: number;
  occurred_at: string | null;
  created_at: string;
  requested_at: string | null;
  requested_by: string | null;
  confirmed_at: string | null;
  confirmed_by: string | null;
  validated_at: string | null;
  validated_by: string | null;
};

export type PushSubscriptionRow = {
  id: string;
  user_id: string;
  endpoint: string;
  p256dh: string;
  auth: string;
  user_agent: string | null;
  created_at: string;
};

export type DocumentRow = {
  id: string;
  dossier_id: string;
  doc_type: string;
  name: string;
  status: DocumentStatus;
  storage_path: string | null;
  mime_type: string | null;
  size_bytes: number | null;
  note: string | null;
  received_at: string | null;
  created_at: string;
  updated_at: string;
};

export type ConversationRow = {
  id: string;
  dossier_id: string;
  topic: string;
  title: string | null;
  created_at: string;
  updated_at: string;
};

export type MessageRow = {
  id: string;
  conversation_id: string;
  sender_id: string | null;
  body: string;
  read_at: string | null;
  created_at: string;
};

export type NotificationRow = {
  id: string;
  user_id: string;
  kind: string;
  title: string;
  body: string | null;
  href: string | null;
  read_at: string | null;
  created_at: string;
};

export type QuoteRow = {
  id: string;
  dossier_id: string;
  reference: string;
  currency: string;
  status: QuoteStatus;
  total_amount: number;
  issued_at: string | null;
  created_at: string;
};

export type QuoteItemRow = {
  id: string;
  quote_id: string;
  label: string;
  amount: number;
  position: number;
};

export type PaymentRow = {
  id: string;
  quote_id: string;
  label: string;
  amount: number;
  status: PaymentStatus;
  due_date: string | null;
  paid_at: string | null;
  position: number;
};

export type PricingItemRow = {
  id: string;
  key: string;
  label: string;
  amount: number;
  currency: string;
  position: number;
  updated_at: string;
};

export type AuditLogRow = {
  id: string;
  actor_id: string | null;
  action: string;
  entity: string | null;
  entity_id: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
};

// ------------------------------------------------------------
// E-learning
// ------------------------------------------------------------
export type CourseRow = {
  id: string;
  slug: string;
  target_lang: string;
  ui_langs: string[];
  level: string;
  title: LocalizedJson;
  description: LocalizedJson;
  cover_url: string | null;
  position: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type ModuleRow = {
  id: string;
  course_id: string;
  position: number;
  title: LocalizedJson;
  created_at: string;
  updated_at: string;
};

export type LessonRow = {
  id: string;
  course_id: string;
  /** Module de rattachement ; nul pour une leçon hors section. */
  module_id: string | null;
  position: number;
  slug: string;
  title: LocalizedJson;
  summary: LocalizedJson;
  objectives: LocalizedJson;
  is_free: boolean;
  duration_min: number;
  is_published: boolean;
  source_file: string | null;
  created_at: string;
  updated_at: string;
};

export type LessonBlockRow = {
  id: string;
  lesson_id: string;
  position: number;
  kind: LessonBlockKind;
  content: LocalizedJson;
  media_url: string | null;
  audio_url: string | null;
  transcript: LocalizedJson;
  created_at: string;
  updated_at: string;
};

/**
 * `answer` est volontairement absent : un privilège de colonne empêche
 * le rôle `authenticated` de le lire. La correction passe par la
 * fonction grade_exercise.
 */
export type ExerciseRow = {
  id: string;
  lesson_id: string;
  position: number;
  kind: ExerciseKind;
  prompt: LocalizedJson;
  options: LocalizedJson;
  explanation: LocalizedJson;
  audio_url: string | null;
  created_at: string;
  updated_at: string;
};

export type EnrollmentRow = {
  id: string;
  user_id: string;
  course_id: string;
  status: EnrollmentStatus;
  granted_by: string | null;
  granted_at: string;
  expires_at: string | null;
  note: string | null;
  created_at: string;
  updated_at: string;
};

export type LessonProgressRow = {
  user_id: string;
  lesson_id: string;
  started_at: string;
  completed_at: string | null;
  last_block_pos: number;
  score: number | null;
};

export type ExerciseAttemptRow = {
  id: string;
  user_id: string;
  exercise_id: string;
  given: LocalizedJson;
  is_correct: boolean;
  answered_at: string;
};

export type TeacherRow = {
  id: string;
  langs: string[];
  headline: LocalizedJson;
  bio: LocalizedJson;
  avatar_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type TutoringSlotRow = {
  id: string;
  teacher_id: string;
  starts_at: string;
  ends_at: string;
  created_at: string;
};

export type TutoringBookingRow = {
  id: string;
  slot_id: string;
  student_id: string;
  course_id: string | null;
  status: TutoringStatus;
  room_name: string | null;
  student_note: string | null;
  created_at: string;
  updated_at: string;
};

type Table<Row, Insert = Partial<Row>, Update = Partial<Row>> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export interface Database {
  public: {
    Tables: {
      profiles: Table<ProfileRow>;
      universities: Table<UniversityRow>;
      dossiers: Table<DossierRow>;
      dossier_steps: Table<DossierStepRow>;
      documents: Table<DocumentRow>;
      conversations: Table<ConversationRow>;
      messages: Table<MessageRow>;
      notifications: Table<NotificationRow>;
      quotes: Table<QuoteRow>;
      quote_items: Table<QuoteItemRow>;
      payments: Table<PaymentRow>;
      pricing_items: Table<PricingItemRow>;
      audit_logs: Table<AuditLogRow>;
      push_subscriptions: Table<PushSubscriptionRow>;
      courses: Table<CourseRow>;
      modules: Table<ModuleRow>;
      lessons: Table<LessonRow>;
      lesson_blocks: Table<LessonBlockRow>;
      exercises: Table<ExerciseRow>;
      enrollments: Table<EnrollmentRow>;
      lesson_progress: Table<LessonProgressRow>;
      exercise_attempts: Table<ExerciseAttemptRow>;
      teachers: Table<TeacherRow>;
      tutoring_slots: Table<TutoringSlotRow>;
      tutoring_bookings: Table<TutoringBookingRow>;
    };
    Views: { [_ in never]: never };
    Functions: {
      // Chaîne de validation d'une étape : demande, confirmation, signature.
      request_dossier_step: { Args: { step: string }; Returns: undefined };
      confirm_dossier_step: { Args: { step: string }; Returns: undefined };
      // Correction d'un exercice : lit la réponse sans jamais la renvoyer.
      grade_exercise: { Args: { target_exercise: string; given: unknown }; Returns: unknown };
      validate_dossier_step: { Args: { step: string }; Returns: undefined };
    };
    Enums: {
      app_role: AppRole;
      dossier_status: DossierStatus;
      document_status: DocumentStatus;
      step_status: StepStatus;
      payment_status: PaymentStatus;
      quote_status: QuoteStatus;
      lead_status: LeadStatus;
    };
    CompositeTypes: { [_ in never]: never };
  };
}
