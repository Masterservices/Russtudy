import type { PartnerLang } from './types';

/** Libellés d'interface du gabarit partenaire, partagés par tous les partenaires. */
export const PARTNER_LABELS: Record<PartnerLang, Record<string, string>> = {
  fr: {
    verifiedBadge: 'Partenaire vérifié RusStudy',
    verifiedTitle: 'Que veut dire « partenaire vérifié » ?',
    verifiedIndependent:
      "est une entreprise indépendante. RusStudy ne répond pas de ses actes commerciaux : la vérification porte sur les contrôles listés ci-dessous, pas sur une garantie de résultat.",
    verifiedOnLabel: 'Vérifié le',
    verifiedPending:
      'Les critères de vérification et leur date de contrôle seront publiés ici par RusStudy. Tant qu’ils ne le sont pas, ne considère aucun contrôle comme acquis.',
    charterLink: 'Charte des partenaires',
    close: 'Fermer',

    ctaPrimary: 'Réserver mon appel gratuit',
    ctaSecondary: 'Écrire sur WhatsApp',
    ctaNote: 'Ton message part sur le WhatsApp de RusStudy et mentionne TSSR, pour qu’on sache d’où tu viens.',

    testimonialsTitle: 'Ils sont partis avant toi',
    testimonialsSubtitle: 'Des étudiants accompagnés par TSSR racontent leur départ, en derja.',
    testimonialsWatch: 'Regarder le témoignage',
    testimonialsClose: 'Fermer',
    testimonialsPrev: 'Témoignage précédent',
    testimonialsNext: 'Témoignage suivant',
    videoPlay: 'Lire la vidéo',
    videoPause: 'Mettre en pause',
    videoSound: 'Activer le son',
    videoMute: 'Couper le son',
    videoReplay: 'Revoir',
    videoTranscript: 'Texte de la vidéo',
    videoPending: 'La vidéo de présentation sera ajoutée ici.',

    stepsTitle: 'Le parcours en 5 étapes',
    withPartner: 'Avec',
    onPlatform: 'Sur RusStudy',

    budgetTitle: 'Le budget de la première année',
    budgetIncluded: 'Compris',
    budgetExcluded: 'Non compris, sur devis',
    budgetFromLabel: 'À partir de',
    budgetNote:
      'Le montant exact dépend de l’université et de la filière : il t’est donné par écrit avant tout engagement.',

    filieresTitle: 'Les filières',
    filieresNote: 'Frais de scolarité payés directement à l’université.',
    seeMore: 'Voir la filière',

    aboutTitle: 'À propos de',
    cityLabel: 'Ville',

    faqTitle: 'Questions fréquentes',

    formTitle: 'Demander une consultation gratuite',
    formIntro:
      'Réponds à deux questions : ton message WhatsApp se prépare tout seul, avec la mention TSSR.',
    fieldFiliere: 'Filière souhaitée',
    fieldYear: 'Année du bac',
    fieldChoose: 'Choisir…',
    messagePreview: 'Aperçu de ton message',
    openWhatsApp: 'Ouvrir WhatsApp',

    independentFooter: 'TSSR est un partenaire indépendant vérifié par RusStudy.',
    noPromise:
      'Aucune admission, aucun visa et aucun logement ne sont garantis : ces décisions appartiennent aux universités et aux autorités consulaires.',
  },

  ar: {
    verifiedBadge: 'شريك موثّق على RusStudy',
    verifiedTitle: 'شنوّة يعني «شريك موثّق»؟',
    verifiedIndependent:
      'مؤسسة مستقلّة. RusStudy ما تتحمّلش أعمالها التجارية: التوثيق يخصّ المراقبات المذكورة تحت، موش ضمان نتيجة.',
    verifiedOnLabel: 'توثّق في',
    verifiedPending:
      'معايير التوثيق وتاريخ المراقبة باش ينشرهم RusStudy هوني. وقتلّي ما يكونوش منشورين، ما تعتبر حتّى مراقبة مؤكّدة.',
    charterLink: 'ميثاق الشركاء',
    close: 'سكّر',

    ctaPrimary: 'احجز استشارتك المجانية',
    ctaSecondary: 'اكتبلنا على واتساب',
    ctaNote: 'الميساج متاعك يمشي على الواتساب متاع RusStudy ومكتوب فيه TSSR، باش نعرفو منين جيت.',

    testimonialsTitle: 'سبقوك وخرجوا',
    testimonialsSubtitle: 'طلبة رافقتهم TSSR يحكيولك على خروجهم، بالدارجة.',
    testimonialsWatch: 'شوف الشهادة',
    testimonialsClose: 'سكّر',
    testimonialsPrev: 'الشهادة اللي قبلها',
    testimonialsNext: 'الشهادة اللي بعدها',
    videoPlay: 'شغّل الفيديو',
    videoPause: 'وقّف الفيديو',
    videoSound: 'حلّ الصوت',
    videoMute: 'سكّر الصوت',
    videoReplay: 'عاود',
    videoTranscript: 'نصّ الفيديو',
    videoPending: 'فيديو التعريف باش يتزاد هوني.',

    stepsTitle: 'المسار في 5 مراحل',
    withPartner: 'مع',
    onPlatform: 'على RusStudy',

    budgetTitle: 'ميزانية العام الأوّل',
    budgetIncluded: 'يدخل',
    budgetExcluded: 'ما يدخلش، حسب الفاتورة',
    budgetFromLabel: 'ابتداءً من',
    budgetNote: 'المبلغ بالضبط يتبدّل حسب الجامعة والتخصّص: يتعطالك مكتوب قبل أيّ التزام.',

    filieresTitle: 'التخصّصات',
    filieresNote: 'معاليم الدراسة تتخلّص مباشرة للجامعة.',
    seeMore: 'شوف التخصّص',

    aboutTitle: 'على',
    cityLabel: 'المدينة',

    faqTitle: 'أسئلة متكرّرة',

    formTitle: 'اطلب استشارة مجانية',
    formIntro: 'جاوب على سؤالين: الميساج متاعك يتحضّر وحدو، ومكتوب فيه TSSR.',
    fieldFiliere: 'التخصّص اللي تحبّو',
    fieldYear: 'عام الباك',
    fieldChoose: 'اختار…',
    messagePreview: 'نظرة على الميساج متاعك',
    openWhatsApp: 'حلّ واتساب',

    independentFooter: 'TSSR شريك مستقلّ موثّق من RusStudy.',
    noPromise:
      'ما فمّة حتّى قبول ولا فيزا ولا سكن مضمون: هالقرارات ترجع للجامعات وللسلطات القنصلية.',
  },
};
