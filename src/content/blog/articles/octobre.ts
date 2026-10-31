import type { BlogArticleEntry } from '../copy';

/*
 * Quatre articles d'octobre, calés sur l'intention « je dépose mon dossier
 * maintenant » : les erreurs qui font rejeter un dossier, les certificats
 * médicaux du visa, la distinction apostille / légalisation consulaire, et
 * l'ouverture d'un nouveau marché avec la Libye.
 *
 * Sourcing : les délais et montants cités reprennent ceux déjà publiés sur
 * le site. Sur les points de procédure consulaire — forme de légalisation
 * applicable, durée de validité des certificats médicaux, liste exacte des
 * pièces — le texte explique le mécanisme et renvoie systématiquement vers
 * le consulat et l'université, sans jamais trancher à leur place.
 */
export const OCTOBRE_ARTICLES: BlogArticleEntry[] = [
  {
    slug: 'erreurs-qui-font-rejeter-un-dossier-russie',
    publishedAt: '2026-10-05',
    copy: {
      fr: {
        title: 'Les 7 erreurs qui font rejeter un dossier pour la Russie | RusStudy',
        description:
          "Traduction faite avant la légalisation, passeport trop court, nom orthographié différemment : les sept erreurs qui font perdre des semaines sur un dossier d'inscription en Russie, et comment les éviter.",
        h1: 'Les sept erreurs qui font rejeter un dossier pour la Russie',
        publishedLabel: 'Publication : Octobre 2026',
        excerpt:
          "Presque aucun dossier n'est refusé pour un mauvais niveau scolaire. Ils sont retardés pour des erreurs de forme, toutes évitables. Voici les sept plus fréquentes.",
        intro:
          "Un dossier d'inscription en Russie est rarement refusé sur le fond. Il est retardé, repoussé à la session suivante, parfois abandonné — presque toujours pour des raisons de forme. Une pièce traitée dans le mauvais ordre, un nom écrit différemment d'un document à l'autre, un passeport qui expire trop tôt. Voici les sept erreurs que nous voyons revenir, et ce qu'il faut faire à la place.",
        sections: [
          {
            heading: '1. Traduire un document avant de l’avoir légalisé',
            blocks: [
              {
                type: 'strong',
                text: "C'est de loin l'erreur la plus coûteuse, et la plus fréquente.",
              },
              {
                type: 'p',
                text: "La légalisation porte sur le document original. Si vous faites traduire votre baccalauréat avant de le faire légaliser, la traduction ne couvre pas la mention de légalisation ajoutée ensuite — et il faut tout refaire. Vous payez deux fois le traducteur et vous perdez plusieurs semaines.",
              },
              {
                type: 'p',
                text: "L'ordre est toujours le même : obtenir l'original définitif, le faire légaliser sous la forme exigée, puis seulement le faire traduire. Et lorsque l'université le demande, faire certifier la traduction elle-même.",
              },
              { type: 'related', slug: 'apostille-ou-legalisation-consulaire-tunisie' },
            ],
          },
          {
            heading: '2. Un passeport dont la validité est trop courte',
            blocks: [
              {
                type: 'p',
                text: "Votre passeport doit couvrir largement la durée du séjour prévu, pas seulement la date de la rentrée. Un passeport qui expire dans huit mois alors que vous partez pour six ans bloquera la demande de visa, même si tout le reste du dossier est parfait.",
              },
              {
                type: 'p',
                text: "Vérifiez cette date avant de lancer quoi que ce soit d'autre. Si le renouvellement est nécessaire, faites-le en premier : tout le dossier porte le numéro de passeport, et le changer en cours de route oblige à reprendre plusieurs pièces.",
              },
            ],
          },
          {
            heading: '3. Un nom orthographié différemment d’un document à l’autre',
            blocks: [
              {
                type: 'p',
                text: "C'est le piège le plus sournois, parce qu'il ne saute pas aux yeux. La translittération de votre nom en caractères latins peut différer entre le passeport, le diplôme et l'extrait de naissance — une lettre, un trait d'union, un accent. Pour l'administration russe, ce sont alors deux personnes différentes.",
              },
              {
                type: 'strong',
                text: 'La règle : le passeport fait foi.',
              },
              {
                type: 'p',
                text: "Alignez toutes les traductions sur l'orthographe exacte figurant sur votre passeport, lettre pour lettre. Donnez une copie du passeport au traducteur en lui demandant explicitement de s'y conformer. Cette précaution de trois minutes évite des semaines de régularisation.",
              },
            ],
          },
          {
            heading: '4. Des relevés de notes incomplets',
            blocks: [
              {
                type: 'p',
                text: "Les universités demandent généralement les relevés des trois dernières années, pas seulement l'année du baccalauréat. Un dossier déposé avec le seul relevé de terminale repart en demande de complément, et vous perdez le temps d'un aller-retour.",
              },
              {
                type: 'ul',
                items: [
                  'Rassemblez les relevés des trois dernières années avant de commencer',
                  'Vérifiez que chacun porte un cachet et une signature de l’établissement',
                  'Faites-les légaliser et traduire dans le même lot que le diplôme, pour ne pas multiplier les déplacements',
                ],
              },
            ],
          },
          {
            heading: '5. Des certificats médicaux périmés à l’arrivée du dossier',
            blocks: [
              {
                type: 'p',
                text: "Les certificats médicaux exigés pour le visa étudiant ont une durée de validité courte. Les faire établir trop tôt, par excès de zèle, revient à les refaire : ils seront périmés au moment où le consulat examinera la demande.",
              },
              {
                type: 'p',
                text: "Placez-les en fin de parcours, une fois l'admission obtenue et l'invitation en route. Et confirmez leur durée de validité auprès du consulat avant de prendre rendez-vous, car elle conditionne tout le calendrier de cette étape.",
              },
              { type: 'related', slug: 'certificats-medicaux-visa-etudiant-russie' },
            ],
          },
          {
            heading: '6. Des photos au mauvais format',
            blocks: [
              {
                type: 'p',
                text: "Chaque université a ses exigences : dimensions, fond, nombre d'exemplaires, parfois tirage mat. Une planche de photos non conforme ne fait pas rejeter un dossier, mais elle le met en attente — et une attente, en octobre, se paie en semaines.",
              },
              {
                type: 'p',
                text: "Demandez le format exact avant de passer chez le photographe, et faites tirer quelques exemplaires de plus que le nombre demandé. Vous en aurez besoin sur place, pour la carte d'étudiant et les démarches administratives.",
              },
            ],
          },
          {
            heading: '7. Déposer trop tard, sans marge',
            blocks: [
              {
                type: 'p',
                text: "C'est l'erreur qui annule toutes les précautions prises par ailleurs. La chaîne administrative est longue et séquentielle : admission, puis lettre d'invitation officielle, puis demande de visa. Chaque étape attend la précédente.",
              },
              {
                type: 'ul',
                items: [
                  "L'admission prend généralement de 15 à 30 jours après réception d'un dossier complet",
                  "La lettre d'invitation demande ensuite de 30 à 45 jours",
                  'La demande de visa vient après, avec ses propres délais consulaires',
                ],
              },
              {
                type: 'p',
                text: "Autrement dit, entre le dépôt d'un dossier complet et le départ, comptez plusieurs mois. Un dossier déposé en décembre pour une session de février est serré ; déposé en octobre, il est confortable.",
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
          {
            heading: 'Ce qu’il faut retenir',
            blocks: [
              {
                type: 'p',
                text: "Aucune de ces sept erreurs ne concerne votre niveau scolaire. Toutes concernent l'ordre des opérations et la cohérence des pièces entre elles. C'est une bonne nouvelle : elles sont intégralement sous votre contrôle, à condition de les connaître avant de commencer plutôt qu'après.",
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Un dossier rejeté peut-il être redéposé ?',
            answer:
              "Oui dans la grande majorité des cas. Un dossier incomplet n'est pas un refus définitif : il est mis en attente le temps que la pièce manquante arrive. Le coût réel est le temps perdu, pas la perte de la candidature.",
          },
          {
            question: 'Faut-il faire traduire en russe ou en anglais ?',
            answer:
              "En russe dans la grande majorité des cas, y compris pour les cursus enseignés en anglais. Certaines universités acceptent l'anglais pour une partie des pièces : vérifiez avant de payer une traduction.",
          },
          {
            question: 'Mon nom s’écrit différemment sur mon diplôme et mon passeport, que faire ?',
            answer:
              "Alignez toutes les traductions sur l'orthographe du passeport. Si l'écart figure sur le document original lui-même, signalez-le à l'université dès le dépôt plutôt que de laisser l'administration le découvrir.",
          },
          {
            question: 'Combien de temps faut-il prévoir au total ?',
            answer:
              "Comptez 15 à 30 jours pour l'admission, puis 30 à 45 jours pour la lettre d'invitation, puis la demande de visa. Entre le dépôt d'un dossier complet et le départ, plusieurs mois sont nécessaires.",
          },
        ],
        keywords: [
          'dossier inscription Russie refusé',
          'erreurs dossier université russe',
          'légalisation traduction diplôme Russie',
          'inscription université Russie Tunisie',
          'documents études Russie',
          'dossier étudiant Russie délais',
        ],
      },
      en: {
        title: 'The 7 Mistakes That Get an Application to Russia Rejected | RusStudy',
        description:
          'Translating before legalising, a passport expiring too soon, a name spelled differently: the seven mistakes that cost weeks on a Russian university application, and how to avoid them.',
        h1: 'The seven mistakes that get an application to Russia rejected',
        publishedLabel: 'Published: October 2026',
        excerpt:
          'Almost no application is refused on academic grounds. They are delayed by formal errors, all of them avoidable. Here are the seven most frequent.',
        intro:
          'An application to a Russian university is rarely refused on substance. It is delayed, pushed to the next intake, sometimes abandoned — almost always for reasons of form. A document handled in the wrong order, a name written differently from one paper to the next, a passport expiring too soon. Here are the seven mistakes we see again and again, and what to do instead.',
        sections: [
          {
            heading: '1. Translating a document before having it legalised',
            blocks: [
              { type: 'strong', text: 'By far the most expensive mistake, and the most common.' },
              {
                type: 'p',
                text: 'Legalisation applies to the original document. If you have your baccalaureate translated before having it legalised, the translation does not cover the legalisation endorsement added afterwards — and everything has to be redone. You pay the translator twice and lose several weeks.',
              },
              {
                type: 'p',
                text: 'The order is always the same: obtain the final original, have it legalised in the required form, and only then have it translated. And where the university asks for it, have the translation itself certified.',
              },
              { type: 'related', slug: 'apostille-ou-legalisation-consulaire-tunisie' },
            ],
          },
          {
            heading: '2. A passport with too little validity left',
            blocks: [
              {
                type: 'p',
                text: 'Your passport must comfortably cover the planned length of stay, not just the start of term. A passport expiring in eight months when you are leaving for six years will block the visa application, even if the rest of the file is perfect.',
              },
              {
                type: 'p',
                text: 'Check that date before launching anything else. If renewal is needed, do it first: the whole file carries the passport number, and changing it midway forces several documents to be redone.',
              },
            ],
          },
          {
            heading: '3. A name spelled differently from one document to the next',
            blocks: [
              {
                type: 'p',
                text: 'This is the most insidious trap, because it does not jump out at you. The transliteration of your name into Latin characters may differ between passport, diploma and birth certificate — one letter, a hyphen, an accent. To the Russian administration, those are then two different people.',
              },
              { type: 'strong', text: 'The rule: the passport prevails.' },
              {
                type: 'p',
                text: 'Align every translation on the exact spelling in your passport, letter for letter. Give the translator a copy of the passport and ask explicitly that it be followed. That three-minute precaution saves weeks of correction.',
              },
            ],
          },
          {
            heading: '4. Incomplete transcripts',
            blocks: [
              {
                type: 'p',
                text: 'Universities generally ask for the transcripts of the last three years, not only the baccalaureate year. A file submitted with the final-year transcript alone comes back as a request for more, and you lose a round trip.',
              },
              {
                type: 'ul',
                items: [
                  'Gather the transcripts of the last three years before starting',
                  'Check that each carries a stamp and a signature from the school',
                  'Have them legalised and translated in the same batch as the diploma, to avoid repeat trips',
                ],
              },
            ],
          },
          {
            heading: '5. Medical certificates that have expired by the time the file is reviewed',
            blocks: [
              {
                type: 'p',
                text: 'The medical certificates required for the student visa have a short validity. Having them issued too early, out of diligence, means redoing them: they will have expired by the time the consulate examines the application.',
              },
              {
                type: 'p',
                text: 'Place them late in the process, once admission is secured and the invitation is under way. And confirm their validity period with the consulate before booking appointments, because it governs the whole timetable of that step.',
              },
              { type: 'related', slug: 'certificats-medicaux-visa-etudiant-russie' },
            ],
          },
          {
            heading: '6. Photographs in the wrong format',
            blocks: [
              {
                type: 'p',
                text: 'Each university has its requirements: dimensions, background, number of copies, sometimes a matt finish. A non-compliant set of photographs does not get a file rejected, but it puts it on hold — and a hold, in October, costs weeks.',
              },
              {
                type: 'p',
                text: 'Ask for the exact format before going to the photographer, and have a few more copies printed than requested. You will need them on site, for the student card and administrative formalities.',
              },
            ],
          },
          {
            heading: '7. Applying too late, with no margin',
            blocks: [
              {
                type: 'p',
                text: 'This is the mistake that cancels out every other precaution. The administrative chain is long and sequential: admission, then the official invitation letter, then the visa application. Each stage waits for the one before.',
              },
              {
                type: 'ul',
                items: [
                  'Admission generally takes 15 to 30 days after a complete file is received',
                  'The invitation letter then takes 30 to 45 days',
                  'The visa application comes after that, with its own consular lead times',
                ],
              },
              {
                type: 'p',
                text: 'In other words, allow several months between submitting a complete file and departure. A file submitted in December for a February session is tight; submitted in October, it is comfortable.',
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
          {
            heading: 'What to take away',
            blocks: [
              {
                type: 'p',
                text: 'None of these seven mistakes concerns your academic level. All of them concern the order of operations and the consistency of documents with one another. That is good news: they are entirely within your control, provided you know about them before starting rather than after.',
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Can a rejected application be resubmitted?',
            answer:
              'Yes in the vast majority of cases. An incomplete file is not a definitive refusal: it is put on hold until the missing document arrives. The real cost is lost time, not the loss of the application.',
          },
          {
            question: 'Should documents be translated into Russian or English?',
            answer:
              'Into Russian in the vast majority of cases, including for English-taught programmes. Some universities accept English for part of the documents: check before paying for a translation.',
          },
          {
            question: 'My name is spelled differently on my diploma and my passport — what should I do?',
            answer:
              'Align every translation on the passport spelling. If the discrepancy is on the original document itself, flag it to the university when you apply rather than letting the administration discover it.',
          },
          {
            question: 'How much time should I allow in total?',
            answer:
              'Allow 15 to 30 days for admission, then 30 to 45 days for the invitation letter, then the visa application. Several months are needed between submitting a complete file and departure.',
          },
        ],
        keywords: [
          'Russian university application rejected',
          'mistakes application Russian university',
          'legalisation translation diploma Russia',
          'apply university Russia Tunisia',
          'documents study Russia',
          'student application Russia timeline',
        ],
      },
      ar: {
        title: 'سبعة أخطاء تؤدّي إلى رفض ملفك للدراسة في روسيا | RusStudy',
        description:
          'ترجمة قبل التصديق، جواز سفر قصير الصلوحية، اسم مكتوب بصيغ مختلفة: سبعة أخطاء تُضيّع أسابيع على ملف التسجيل في روسيا، وكيفية تجنّبها.',
        h1: 'سبعة أخطاء تؤدّي إلى رفض ملفك للدراسة في روسيا',
        publishedLabel: 'النشر: أكتوبر 2026',
        excerpt:
          'لا يكاد ملف يُرفض بسبب المستوى الدراسي. بل تتأخّر الملفات بسبب أخطاء شكلية، كلها قابلة للتجنّب. إليك أكثرها تكرارًا.',
        intro:
          'نادرًا ما يُرفض ملف التسجيل في روسيا من حيث الجوهر. بل يتأخّر، ويُؤجَّل إلى الدورة الموالية، ويُهجَر أحيانًا — ولأسباب شكلية في أغلب الأحوال. وثيقة عولجت بترتيب خاطئ، أو اسم كُتب بصيغة مختلفة من ورقة إلى أخرى، أو جواز سفر ينتهي مبكرًا. إليك الأخطاء السبعة التي نراها تتكرّر، وما ينبغي فعله بدلًا منها.',
        sections: [
          {
            heading: '1. ترجمة وثيقة قبل تصديقها',
            blocks: [
              { type: 'strong', text: 'هذا أغلى الأخطاء بفارق كبير، وأكثرها تكرارًا.' },
              {
                type: 'p',
                text: 'التصديق يقع على الوثيقة الأصلية. فإن ترجمت شهادة الباكالوريا قبل تصديقها، لا تغطّي الترجمة إشارة التصديق المضافة لاحقًا — ويجب إعادة كل شيء. فتدفع للمترجم مرتين وتخسر أسابيع.',
              },
              {
                type: 'p',
                text: 'والترتيب واحد دائمًا: الحصول على الأصل النهائي، ثم تصديقه بالشكل المطلوب، ثم ترجمته فقط بعد ذلك. ومتى طلبت الجامعة ذلك، تصديق الترجمة نفسها.',
              },
              { type: 'related', slug: 'apostille-ou-legalisation-consulaire-tunisie' },
            ],
          },
          {
            heading: '2. جواز سفر صلوحيته قصيرة جدًا',
            blocks: [
              {
                type: 'p',
                text: 'يجب أن يغطّي جواز سفرك مدة الإقامة المرتقبة بسعة، لا تاريخ الدخول الجامعي فقط. فجواز ينتهي بعد ثمانية أشهر وأنت مسافر لست سنوات سيُعطّل مطلب التأشيرة، ولو كان بقية الملف مثاليًا.',
              },
              {
                type: 'p',
                text: 'تحقّق من هذا التاريخ قبل إطلاق أي شيء آخر. وإن كان التجديد ضروريًا فابدأ به: فالملف كله يحمل رقم الجواز، وتغييره في منتصف الطريق يفرض إعادة عدة وثائق.',
              },
            ],
          },
          {
            heading: '3. اسم مكتوب بصيغ مختلفة من وثيقة إلى أخرى',
            blocks: [
              {
                type: 'p',
                text: 'هذا أخبث الفخاخ، لأنه لا يُلاحَظ بسهولة. فقد يختلف نقل اسمك بالحروف اللاتينية بين جواز السفر والشهادة ومضمون الولادة — حرف واحد، أو شرطة، أو علامة. وبالنسبة إلى الإدارة الروسية، هذان شخصان مختلفان.',
              },
              { type: 'strong', text: 'القاعدة: جواز السفر هو المرجع.' },
              {
                type: 'p',
                text: 'وحّد كل الترجمات على الصيغة المكتوبة في جواز سفرك بالضبط، حرفًا بحرف. وسلّم نسخة من الجواز إلى المترجم طالبًا منه صراحة الالتزام بها. هذا الاحتياط الذي يستغرق ثلاث دقائق يوفّر أسابيع من التسوية.',
              },
            ],
          },
          {
            heading: '4. كشوف أعداد غير كاملة',
            blocks: [
              {
                type: 'p',
                text: 'تطلب الجامعات عمومًا كشوف السنوات الثلاث الأخيرة، لا سنة الباكالوريا وحدها. والملف المودَع بكشف السنة النهائية فقط يعود بطلب استكمال، فتخسر وقت ذهاب وإياب.',
              },
              {
                type: 'ul',
                items: [
                  'اجمع كشوف السنوات الثلاث الأخيرة قبل أن تبدأ',
                  'تأكّد أن كل كشف يحمل ختم المؤسسة وإمضاءها',
                  'صدّقها وترجمها في نفس الدفعة مع الشهادة، لتجنّب تكرار التنقّلات',
                ],
              },
            ],
          },
          {
            heading: '5. شهادات طبية منتهية الصلوحية عند دراسة الملف',
            blocks: [
              {
                type: 'p',
                text: 'الشهادات الطبية المطلوبة لتأشيرة الطالب صلوحيتها قصيرة. واستخراجها مبكرًا جدًا، حرصًا، يعني إعادتها: إذ ستكون منتهية حين تنظر القنصلية في المطلب.',
              },
              {
                type: 'p',
                text: 'ضعها في آخر المسار، بعد الحصول على القبول وانطلاق إجراء الدعوة. وأكّد مدة صلوحيتها لدى القنصلية قبل أخذ المواعيد، فهي تحكم كامل رزنامة هذه المرحلة.',
              },
              { type: 'related', slug: 'certificats-medicaux-visa-etudiant-russie' },
            ],
          },
          {
            heading: '6. صور شمسية بمقاس خاطئ',
            blocks: [
              {
                type: 'p',
                text: 'لكل جامعة متطلّباتها: الأبعاد، والخلفية، وعدد النسخ، وأحيانًا السحب غير اللامع. ولوحة صور غير مطابقة لا تؤدّي إلى رفض الملف، لكنها تضعه في الانتظار — والانتظار في أكتوبر يُدفع بالأسابيع.',
              },
              {
                type: 'p',
                text: 'اطلب المقاس الدقيق قبل الذهاب إلى المصوّر، واسحب نسخًا أكثر من العدد المطلوب. فستحتاجها هناك لبطاقة الطالب وللإجراءات الإدارية.',
              },
            ],
          },
          {
            heading: '7. الإيداع متأخّرًا، دون هامش',
            blocks: [
              {
                type: 'p',
                text: 'هذا هو الخطأ الذي يُبطل كل الاحتياطات الأخرى. فالسلسلة الإدارية طويلة ومتسلسلة: القبول، ثم رسالة الدعوة الرسمية، ثم مطلب التأشيرة. وكل مرحلة تنتظر سابقتها.',
              },
              {
                type: 'ul',
                items: [
                  'القبول يأخذ عمومًا من 15 إلى 30 يومًا بعد استلام ملف كامل',
                  'ثم تتطلّب رسالة الدعوة من 30 إلى 45 يومًا',
                  'ويأتي مطلب التأشيرة بعد ذلك، بآجاله القنصلية الخاصة',
                ],
              },
              {
                type: 'p',
                text: 'أي أنه بين إيداع ملف كامل والسفر، احسب عدة أشهر. فملف يُودَع في ديسمبر لدورة فيفري ضيّق؛ أما إن أُودِع في أكتوبر فهو مريح.',
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
          {
            heading: 'ما ينبغي تذكّره',
            blocks: [
              {
                type: 'p',
                text: 'لا يتعلق أيٌّ من هذه الأخطاء السبعة بمستواك الدراسي. بل كلها تتعلق بترتيب العمليات وبتناسق الوثائق فيما بينها. وهذا خبر سار: فهي كلها تحت سيطرتك، شرط معرفتها قبل البدء لا بعده.',
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل يمكن إعادة إيداع ملف مرفوض؟',
            answer:
              'نعم في الأغلبية الساحقة من الحالات. فالملف غير الكامل ليس رفضًا نهائيًا: بل يوضع في الانتظار ريثما تصل الوثيقة الناقصة. والكلفة الحقيقية هي الوقت الضائع، لا ضياع الترشّح.',
          },
          {
            question: 'هل تتم الترجمة إلى الروسية أم إلى الإنجليزية؟',
            answer:
              'إلى الروسية في الأغلبية الساحقة من الحالات، بما في ذلك للمسالك المدرَّسة بالإنجليزية. وتقبل بعض الجامعات الإنجليزية في جزء من الوثائق: تحقّق قبل أن تدفع ثمن ترجمة.',
          },
          {
            question: 'اسمي مكتوب بصيغة مختلفة في شهادتي وجواز سفري، ماذا أفعل؟',
            answer:
              'وحّد كل الترجمات على صيغة جواز السفر. وإن كان الاختلاف في الوثيقة الأصلية نفسها، فأبلغ الجامعة به منذ الإيداع بدل ترك الإدارة تكتشفه.',
          },
          {
            question: 'كم من الوقت ينبغي احتسابه جملةً؟',
            answer:
              'احسب من 15 إلى 30 يومًا للقبول، ثم من 30 إلى 45 يومًا لرسالة الدعوة، ثم مطلب التأشيرة. وبين إيداع ملف كامل والسفر، تلزم عدة أشهر.',
          },
        ],
        keywords: [
          'رفض ملف التسجيل في روسيا',
          'أخطاء ملف الجامعة الروسية',
          'تصديق وترجمة الشهادة لروسيا',
          'التسجيل في جامعة روسية من تونس',
          'وثائق الدراسة في روسيا',
          'آجال ملف الطالب في روسيا',
        ],
      },
      ru: {
        title: 'Семь ошибок, из-за которых отклоняют документы в российский вуз | RusStudy',
        description:
          'Перевод раньше легализации, паспорт с коротким сроком, по-разному написанное имя: семь ошибок, которые стоят недель при подаче документов в российский вуз, и как их избежать.',
        h1: 'Семь ошибок, из-за которых отклоняют документы в российский вуз',
        publishedLabel: 'Публикация: октябрь 2026',
        excerpt:
          'Почти ни одна заявка не отклоняется по учебным причинам. Их задерживают формальные ошибки — и все они предотвратимы. Вот семь самых частых.',
        intro:
          'Документы в российский вуз редко отклоняют по существу. Их задерживают, переносят на следующий набор, иногда бросают — и почти всегда по формальным причинам. Документ, оформленный не в том порядке, имя, написанное по-разному в разных бумагах, паспорт с истекающим сроком. Вот семь ошибок, которые повторяются чаще всего, и что делать вместо них.',
        sections: [
          {
            heading: '1. Перевод документа до его легализации',
            blocks: [
              { type: 'strong', text: 'Самая дорогая ошибка с большим отрывом — и самая частая.' },
              {
                type: 'p',
                text: 'Легализация относится к оригиналу. Если перевести аттестат до легализации, перевод не покроет отметку о легализации, проставленную позже, — и всё придётся переделывать. Вы платите переводчику дважды и теряете несколько недель.',
              },
              {
                type: 'p',
                text: 'Порядок всегда один: получить окончательный оригинал, легализовать его в требуемой форме и только затем переводить. А если вуз этого требует — заверить и сам перевод.',
              },
              { type: 'related', slug: 'apostille-ou-legalisation-consulaire-tunisie' },
            ],
          },
          {
            heading: '2. Паспорт со слишком коротким сроком действия',
            blocks: [
              {
                type: 'p',
                text: 'Паспорт должен с запасом покрывать планируемый срок пребывания, а не только дату начала занятий. Паспорт, истекающий через восемь месяцев, когда вы уезжаете на шесть лет, заблокирует визовую заявку, даже если остальное безупречно.',
              },
              {
                type: 'p',
                text: 'Проверьте эту дату прежде всего остального. Если нужна замена — начните с неё: весь пакет привязан к номеру паспорта, и его смена на полпути заставит переделывать несколько документов.',
              },
            ],
          },
          {
            heading: '3. Имя, написанное по-разному в разных документах',
            blocks: [
              {
                type: 'p',
                text: 'Это самая коварная ловушка, потому что она не бросается в глаза. Транслитерация имени латиницей может различаться в паспорте, дипломе и свидетельстве о рождении — одна буква, дефис, диакритика. Для российской администрации это уже два разных человека.',
              },
              { type: 'strong', text: 'Правило: главный документ — паспорт.' },
              {
                type: 'p',
                text: 'Приведите все переводы к точному написанию из паспорта, буква в букву. Дайте переводчику копию паспорта и прямо попросите её придерживаться. Эта трёхминутная предосторожность экономит недели исправлений.',
              },
            ],
          },
          {
            heading: '4. Неполные выписки оценок',
            blocks: [
              {
                type: 'p',
                text: 'Вузы обычно запрашивают выписки за последние три года, а не только за выпускной. Пакет, поданный с одной выпускной выпиской, возвращается запросом на дополнение, и вы теряете целый круг.',
              },
              {
                type: 'ul',
                items: [
                  'Соберите выписки за последние три года до начала процедуры',
                  'Убедитесь, что на каждой есть печать и подпись учебного заведения',
                  'Легализуйте и переводите их вместе с аттестатом, чтобы не ездить дважды',
                ],
              },
            ],
          },
          {
            heading: '5. Медицинские справки, истекшие к моменту рассмотрения',
            blocks: [
              {
                type: 'p',
                text: 'У медицинских справок для учебной визы короткий срок действия. Оформить их слишком рано, из усердия, значит переделывать: к моменту рассмотрения в консульстве они истекут.',
              },
              {
                type: 'p',
                text: 'Ставьте их в конец маршрута — после получения зачисления и запуска приглашения. И уточните срок их действия в консульстве до записи на приём: он задаёт весь график этого этапа.',
              },
              { type: 'related', slug: 'certificats-medicaux-visa-etudiant-russie' },
            ],
          },
          {
            heading: '6. Фотографии неправильного формата',
            blocks: [
              {
                type: 'p',
                text: 'У каждого вуза свои требования: размеры, фон, количество экземпляров, иногда матовая печать. Несоответствующие фотографии не приводят к отказу, но ставят пакет на паузу — а пауза в октябре стоит недель.',
              },
              {
                type: 'p',
                text: 'Узнайте точный формат до визита к фотографу и напечатайте на несколько штук больше, чем просят. Они понадобятся на месте — для студенческого билета и административных процедур.',
              },
            ],
          },
          {
            heading: '7. Подача слишком поздно, без запаса',
            blocks: [
              {
                type: 'p',
                text: 'Эта ошибка обнуляет все остальные предосторожности. Административная цепочка длинная и последовательная: зачисление, затем официальное приглашение, затем виза. Каждый этап ждёт предыдущего.',
              },
              {
                type: 'ul',
                items: [
                  'Зачисление обычно занимает 15–30 дней после получения полного пакета',
                  'Приглашение затем требует 30–45 дней',
                  'Визовая заявка идёт следом, со своими консульскими сроками',
                ],
              },
              {
                type: 'p',
                text: 'Иначе говоря, между подачей полного пакета и отъездом закладывайте несколько месяцев. Пакет, поданный в декабре на февральскую сессию, идёт впритык; поданный в октябре — с комфортом.',
              },
              { type: 'related', slug: 'retroplanning-octobre-decembre-session-fevrier' },
            ],
          },
          {
            heading: 'Что стоит запомнить',
            blocks: [
              {
                type: 'p',
                text: 'Ни одна из этих семи ошибок не связана с вашим учебным уровнем. Все они связаны с порядком действий и согласованностью документов между собой. И это хорошая новость: они целиком в вашей власти — при условии, что вы узнали о них до начала, а не после.',
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Можно ли подать документы повторно после отклонения?',
            answer:
              'Да, в подавляющем большинстве случаев. Неполный пакет — не окончательный отказ: он ставится на паузу до поступления недостающего документа. Реальная цена — потерянное время, а не утрата заявки.',
          },
          {
            question: 'Переводить на русский или на английский?',
            answer:
              'В подавляющем большинстве случаев на русский, в том числе для англоязычных программ. Некоторые вузы принимают английский для части документов: уточните до того, как оплачивать перевод.',
          },
          {
            question: 'Моё имя по-разному написано в дипломе и паспорте — что делать?',
            answer:
              'Приведите все переводы к паспортному написанию. Если расхождение в самом оригинале, сообщите об этом вузу при подаче, а не давайте администрации обнаружить его самой.',
          },
          {
            question: 'Сколько времени закладывать в целом?',
            answer:
              'Заложите 15–30 дней на зачисление, затем 30–45 дней на приглашение, затем визовую заявку. Между подачей полного пакета и отъездом нужны несколько месяцев.',
          },
        ],
        keywords: [
          'отклонили документы российский вуз',
          'ошибки при подаче в российский вуз',
          'легализация и перевод аттестата',
          'поступление в российский вуз из Туниса',
          'документы для учёбы в России',
          'сроки подачи документов в Россию',
        ],
      },
    },
  },
  {
    slug: 'certificats-medicaux-visa-etudiant-russie',
    publishedAt: '2026-10-12',
    copy: {
      fr: {
        title: 'Certificats médicaux pour le visa étudiant russe : ce qui est demandé et quand | RusStudy',
        description:
          "Test VIH, certificat d'aptitude, visite médicale à l'arrivée : comment s'organisent les examens médicaux d'un dossier de visa étudiant pour la Russie, et quelles questions poser au consulat avant de payer un laboratoire.",
        h1: 'Certificats médicaux pour le visa étudiant russe : ce qui est demandé, et à quel moment',
        publishedLabel: 'Publication : Octobre 2026',
        excerpt:
          "Beaucoup d'étudiants font leurs analyses trop tôt, ou au mauvais endroit, et doivent les refaire. Voici comment s'articulent les examens médicaux, du dossier de visa jusqu'à la visite à l'université.",
        intro:
          "Il y a deux rendez-vous médicaux distincts dans un départ pour la Russie, et on les confond souvent. Le premier sert à obtenir le visa : il se fait dans votre pays, avant le départ. Le second a lieu en Russie, après l'arrivée, et conditionne votre inscription administrative à l'université. Les faire dans le mauvais ordre, ou trop tôt, coûte de l'argent et des semaines.",
        sections: [
          {
            heading: 'Deux examens médicaux, deux moments, deux usages',
            blocks: [
              {
                type: 'p',
                text: "La première série d'analyses alimente le dossier de visa déposé auprès de la représentation diplomatique russe compétente pour votre pays de résidence. La seconde est une visite médicale organisée en Russie, généralement dans les premières semaines, par l'université ou par un établissement de santé auquel elle vous oriente.",
              },
              {
                type: 'ul',
                items: [
                  "Avant le départ : pièces médicales exigées pour la demande de visa, à constituer selon la liste du consulat.",
                  "Après l'arrivée : examen médical en Russie, demandé par l'université pour finaliser l'inscription et l'accès au logement universitaire.",
                ],
              },
              {
                type: 'p',
                text: "Les deux ne se remplacent pas. Un étudiant qui arrive avec un dossier médical complet de son pays passera quand même la visite sur place.",
              },
            ],
          },
          {
            heading: 'Le certificat relatif au VIH : la pièce la plus régulièrement citée',
            blocks: [
              {
                type: 'p',
                text: "C'est l'examen que l'on retrouve le plus souvent dans les listes de pièces publiées pour un visa d'études russe : un certificat attestant l'absence d'infection par le VIH. Il est délivré par un laboratoire d'analyses, sur la base d'un prélèvement sanguin.",
              },
              {
                type: 'p',
                text: "Trois points font la différence entre un certificat accepté et un certificat refusé : la date, la forme et la langue. La date, parce que ces documents ont une durée de validité limitée. La forme, parce que certains postes consulaires attendent un formulaire précis plutôt qu'un simple compte rendu de laboratoire. La langue, parce qu'une traduction peut être exigée, avec un niveau de certification variable.",
              },
              {
                type: 'strong',
                text: "Aucune de ces trois exigences n'est la même partout : nous ne pouvons pas la deviner, et vous ne devriez accepter aucune réponse qui ne vienne pas du consulat lui-même.",
              },
            ],
          },
          {
            heading: "Le certificat général d'aptitude",
            blocks: [
              {
                type: 'p',
                text: "À côté du test VIH, un certificat médical général est fréquemment demandé : un document établi par un médecin indiquant que votre état de santé est compatible avec un séjour d'études. Son contenu exact varie — certains postes consulaires s'en tiennent à une attestation courte, d'autres attendent un bilan plus détaillé.",
              },
              {
                type: 'p',
                text: "Notre conseil est de ne pas commander d'examens par anticipation. Récupérez d'abord la liste écrite du consulat, puis allez au laboratoire avec cette liste en main. L'ordre inverse est la première cause d'examens à refaire.",
              },
            ],
          },
          {
            heading: 'Les quatre questions à poser avant de payer un laboratoire',
            blocks: [
              {
                type: 'ul',
                items: [
                  "Quelles analyses précises sont exigées pour un visa d'études, dans la liste en vigueur aujourd'hui ?",
                  'Combien de temps un certificat reste-t-il valable à compter de la date du prélèvement ?',
                  'Un formulaire particulier est-il imposé, ou un compte rendu de laboratoire suffit-il ?',
                  'La traduction est-elle nécessaire, et sous quelle forme : traducteur assermenté, légalisation, ou aucune des deux ?',
                ],
              },
              {
                type: 'p',
                text: "Posez-les par écrit, gardez la réponse. Si plus tard une pièce est contestée, cette réponse écrite est votre seule protection.",
              },
            ],
          },
          {
            heading: "La visite médicale en Russie, après l'arrivée",
            blocks: [
              {
                type: 'p',
                text: "Une fois sur place, l'université demande généralement un examen médical local avant de finaliser l'inscription administrative. Il comprend couramment une radiographie pulmonaire et des analyses de base. Cet examen est organisé dans un cadre que l'établissement vous indique : service médical universitaire ou structure partenaire.",
              },
              {
                type: 'p',
                text: "C'est aussi le moment où l'assurance santé devient concrète. Prévoyez le budget correspondant dans vos premiers frais d'installation, et ne comptez pas sur une couverture obtenue depuis votre pays pour remplacer la police exigée localement.",
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Comment placer ces examens dans votre rétroplanning',
            blocks: [
              {
                type: 'p',
                text: "Les analyses médicales ne sont pas la première pièce à préparer. Elles viennent après l'admission et, idéalement, juste avant le dépôt du dossier de visa : assez tôt pour être prêtes le jour du rendez-vous, assez tard pour rester dans leur durée de validité.",
              },
              {
                type: 'ul',
                items: [
                  "Admission et lettre d'invitation : d'abord, parce que sans elles le visa n'existe pas.",
                  'Rendez-vous consulaire : à fixer dès que la lettre arrive.',
                  'Analyses médicales : à programmer en fonction de la date du rendez-vous, pas avant.',
                  "Visite médicale russe : après l'arrivée, selon le calendrier de l'université.",
                ],
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
        ],
        faq: [
          {
            question: 'Combien de temps un certificat médical reste-t-il valable pour un visa étudiant russe ?',
            answer:
              "La durée de validité est fixée par le poste consulaire qui traite votre demande et nous ne l'inventerons pas. Demandez-la par écrit au moment où vous obtenez la liste des pièces, et faites vos analyses en fonction de cette réponse.",
          },
          {
            question: 'Faut-il faire les analyses avant ou après avoir reçu la lettre d’invitation ?',
            answer:
              "Après. La lettre d'invitation conditionne le rendez-vous consulaire, et c'est la date de ce rendez-vous qui doit guider la programmation des analyses, afin qu'elles soient encore valables le jour du dépôt.",
          },
          {
            question: "L'examen médical fait dans mon pays me dispense-t-il de la visite en Russie ?",
            answer:
              "Non. Ce sont deux démarches distinctes : l'une sert à obtenir le visa, l'autre à finaliser l'inscription auprès de l'université. Prévoyez les deux.",
          },
          {
            question: 'Un laboratoire privé est-il accepté ?',
            answer:
              "Cela dépend des exigences de forme du consulat. Certains postes acceptent un compte rendu de laboratoire privé, d'autres imposent un formulaire ou un établissement agréé. C'est précisément l'une des quatre questions à poser avant de payer.",
          },
        ],
        keywords: [
          'certificat médical visa étudiant russie',
          'test vih visa russie',
          'analyses médicales études russie',
          'visite médicale université russe',
          'pièces médicales dossier visa russe',
          'examen médical étudiant étranger russie',
        ],
      },
      en: {
        title: 'Medical certificates for a Russian student visa: what is required, and when | RusStudy',
        description:
          'HIV test, fitness certificate, medical check on arrival: how the medical side of a Russian student visa file is organised, and which questions to ask the consulate before paying a laboratory.',
        h1: 'Medical certificates for a Russian student visa: what is required, and when',
        publishedLabel: 'Published: October 2026',
        excerpt:
          'Many students run their tests too early, or in the wrong place, and have to pay for them twice. Here is how the medical steps fit together, from the visa file to the check-up at the university.',
        intro:
          'There are two separate medical appointments in a move to Russia, and they are often confused. The first feeds the visa file and happens in your own country, before departure. The second happens in Russia, after arrival, and conditions your administrative enrolment at the university. Doing them in the wrong order, or too early, costs money and weeks.',
        sections: [
          {
            heading: 'Two medical steps, two moments, two purposes',
            blocks: [
              {
                type: 'p',
                text: 'The first set of tests goes into the visa application filed with the Russian diplomatic mission responsible for your country of residence. The second is a medical check carried out in Russia, usually in the first weeks, by the university or by a health facility it directs you to.',
              },
              {
                type: 'ul',
                items: [
                  'Before departure: medical documents required for the visa application, assembled according to the consulate’s own list.',
                  'After arrival: medical examination in Russia, requested by the university to complete enrolment and access to student housing.',
                ],
              },
              {
                type: 'p',
                text: 'One does not replace the other. A student arriving with a complete medical file from home will still go through the local check-up.',
              },
            ],
          },
          {
            heading: 'The HIV certificate: the most frequently listed item',
            blocks: [
              {
                type: 'p',
                text: 'This is the test that appears most often in published document lists for a Russian study visa: a certificate attesting the absence of HIV infection, issued by a laboratory on the basis of a blood sample.',
              },
              {
                type: 'p',
                text: 'Three things separate an accepted certificate from a rejected one: the date, the format and the language. The date, because these documents have a limited validity period. The format, because some consular posts expect a specific form rather than a plain laboratory report. The language, because a translation may be required, with varying levels of certification.',
              },
              {
                type: 'strong',
                text: 'None of these three requirements is the same everywhere: we cannot guess them, and you should not accept any answer that does not come from the consulate itself.',
              },
            ],
          },
          {
            heading: 'The general fitness certificate',
            blocks: [
              {
                type: 'p',
                text: 'Alongside the HIV test, a general medical certificate is frequently requested: a document from a physician stating that your health is compatible with a period of study abroad. Its exact content varies — some consular posts accept a short statement, others expect a fuller assessment.',
              },
              {
                type: 'p',
                text: 'Our advice is not to order tests in advance. Get the consulate’s written list first, then go to the laboratory with that list in hand. The reverse order is the single most common reason for repeating tests.',
              },
            ],
          },
          {
            heading: 'Four questions to ask before paying a laboratory',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Which exact tests are required for a study visa under the list currently in force?',
                  'How long does a certificate remain valid from the date of the sample?',
                  'Is a specific form imposed, or is a laboratory report enough?',
                  'Is a translation needed, and in what form: sworn translator, legalisation, or neither?',
                ],
              },
              {
                type: 'p',
                text: 'Ask them in writing and keep the answer. If a document is later disputed, that written answer is your only protection.',
              },
            ],
          },
          {
            heading: 'The medical check in Russia, after arrival',
            blocks: [
              {
                type: 'p',
                text: 'Once on site, the university generally requires a local medical examination before completing administrative enrolment. It commonly includes a chest X-ray and basic tests, organised through the channel the institution indicates: a university medical service or a partner facility.',
              },
              {
                type: 'p',
                text: 'This is also when health insurance becomes concrete. Budget for it among your first settling-in costs, and do not assume that cover bought at home replaces the policy required locally.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Where these tests belong in your timeline',
            blocks: [
              {
                type: 'p',
                text: 'Medical tests are not the first item to prepare. They come after admission and, ideally, just before the visa file is submitted: early enough to be ready on the day of the appointment, late enough to still be within their validity period.',
              },
              {
                type: 'ul',
                items: [
                  'Admission and invitation letter: first, because without them there is no visa.',
                  'Consular appointment: booked as soon as the letter arrives.',
                  'Medical tests: scheduled around the appointment date, not before.',
                  'Russian medical check: after arrival, on the university’s calendar.',
                ],
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
        ],
        faq: [
          {
            question: 'How long is a medical certificate valid for a Russian student visa?',
            answer:
              'The validity period is set by the consular post handling your application and we will not invent it. Ask for it in writing when you obtain the document list, and schedule your tests around that answer.',
          },
          {
            question: 'Should tests be done before or after receiving the invitation letter?',
            answer:
              'After. The invitation letter conditions the consular appointment, and it is the date of that appointment that should drive the scheduling of tests, so they are still valid on the day of filing.',
          },
          {
            question: 'Does a medical exam done at home exempt me from the check-up in Russia?',
            answer:
              'No. These are two distinct steps: one serves the visa, the other completes enrolment at the university. Plan for both.',
          },
          {
            question: 'Is a private laboratory accepted?',
            answer:
              'That depends on the consulate’s format requirements. Some posts accept a private laboratory report, others impose a form or an approved facility. This is exactly one of the four questions to ask before paying.',
          },
        ],
        keywords: [
          'medical certificate russian student visa',
          'hiv test russia study visa',
          'medical tests studying in russia',
          'university medical check russia',
          'health documents russian visa',
          'medical exam international student russia',
        ],
      },
      ar: {
        title: 'الشهادات الطبية لتأشيرة الدراسة في روسيا: ما المطلوب ومتى | RusStudy',
        description:
          'تحليل فيروس نقص المناعة، شهادة اللياقة الصحية، الفحص الطبي بعد الوصول: كيف تُنظَّم الجوانب الطبية في ملف تأشيرة الدراسة الروسية، وما الأسئلة التي يجب طرحها على القنصلية قبل الدفع لأي مختبر.',
        h1: 'الشهادات الطبية لتأشيرة الدراسة في روسيا: ما المطلوب ومتى',
        publishedLabel: 'النشر: أكتوبر 2026',
        excerpt:
          'كثير من الطلبة يُجرون التحاليل مبكّرًا جدًّا أو في المكان الخطأ، فيضطرّون إلى إعادتها. هذا هو ترتيب الخطوات الطبية، من ملف التأشيرة إلى الفحص في الجامعة.',
        intro:
          'هناك موعدان طبيان منفصلان في أي سفر للدراسة في روسيا، وكثيرًا ما يُخلط بينهما. الأول يخدم ملف التأشيرة ويُجرى في بلدك قبل السفر. والثاني يجري في روسيا بعد الوصول، وهو شرط لإتمام التسجيل الإداري في الجامعة. القيام بهما بترتيب خاطئ، أو مبكّرًا جدًّا، يكلّف مالًا وأسابيع.',
        sections: [
          {
            heading: 'خطوتان طبيتان، وقتان مختلفان، غرضان مختلفان',
            blocks: [
              {
                type: 'p',
                text: 'المجموعة الأولى من التحاليل تدخل في ملف التأشيرة المقدَّم إلى البعثة الدبلوماسية الروسية المختصّة ببلد إقامتك. أما الثانية فهي فحص طبي يُجرى في روسيا، عادةً في الأسابيع الأولى، عن طريق الجامعة أو مؤسسة صحية توجّهك إليها.',
              },
              {
                type: 'ul',
                items: [
                  'قبل السفر: الوثائق الطبية المطلوبة لطلب التأشيرة، تُجمع وفق قائمة القنصلية نفسها.',
                  'بعد الوصول: فحص طبي في روسيا تطلبه الجامعة لإتمام التسجيل والحصول على السكن الجامعي.',
                ],
              },
              {
                type: 'p',
                text: 'أحدهما لا يعوّض الآخر. الطالب الذي يصل بملف طبي كامل من بلده سيخضع مع ذلك للفحص المحلي.',
              },
            ],
          },
          {
            heading: 'شهادة فيروس نقص المناعة: البند الأكثر تكرارًا في القوائم',
            blocks: [
              {
                type: 'p',
                text: 'هذا هو التحليل الذي يظهر أكثر من غيره في قوائم الوثائق المنشورة لتأشيرة الدراسة الروسية: شهادة تُثبت عدم الإصابة بفيروس نقص المناعة، يصدرها مختبر تحاليل على أساس عيّنة دم.',
              },
              {
                type: 'p',
                text: 'ثلاثة عناصر تفصل بين شهادة مقبولة وأخرى مرفوضة: التاريخ، والشكل، واللغة. التاريخ لأن لهذه الوثائق مدة صلاحية محدودة. والشكل لأن بعض المراكز القنصلية تنتظر نموذجًا محدّدًا لا مجرّد تقرير مختبر. واللغة لأن الترجمة قد تكون مطلوبة بدرجات توثيق متفاوتة.',
              },
              {
                type: 'strong',
                text: 'لا شيء من هذه الشروط الثلاثة موحَّد في كل مكان: لا يمكننا تخمينه، ولا ينبغي أن تقبل أي جواب لا يأتي من القنصلية نفسها.',
              },
            ],
          },
          {
            heading: 'شهادة اللياقة الصحية العامة',
            blocks: [
              {
                type: 'p',
                text: 'إلى جانب تحليل فيروس نقص المناعة، تُطلب غالبًا شهادة طبية عامة: وثيقة من طبيب تفيد أن حالتك الصحية تتوافق مع فترة دراسة في الخارج. مضمونها الدقيق يتغيّر؛ بعض المراكز القنصلية تقبل إفادة قصيرة، وأخرى تنتظر تقييمًا أوسع.',
              },
              {
                type: 'p',
                text: 'نصيحتنا ألّا تطلب أي تحليل مسبقًا. احصل أولًا على القائمة المكتوبة من القنصلية، ثم اذهب إلى المختبر وهي بيدك. الترتيب المعاكس هو السبب الأول في إعادة التحاليل.',
              },
            ],
          },
          {
            heading: 'أربعة أسئلة قبل الدفع لأي مختبر',
            blocks: [
              {
                type: 'ul',
                items: [
                  'ما التحاليل المطلوبة بالتحديد لتأشيرة الدراسة وفق القائمة السارية اليوم؟',
                  'كم تبقى الشهادة صالحة اعتبارًا من تاريخ أخذ العيّنة؟',
                  'هل يُفرض نموذج معيّن، أم يكفي تقرير المختبر؟',
                  'هل الترجمة لازمة، وبأي صيغة: مترجم محلَّف، تصديق، أو لا شيء من ذلك؟',
                ],
              },
              {
                type: 'p',
                text: 'اطرحها كتابيًّا واحفظ الجواب. إذا اعتُرض على وثيقة لاحقًا، فهذا الجواب المكتوب هو حمايتك الوحيدة.',
              },
            ],
          },
          {
            heading: 'الفحص الطبي في روسيا بعد الوصول',
            blocks: [
              {
                type: 'p',
                text: 'بعد الوصول، تطلب الجامعة عادةً فحصًا طبيًّا محليًّا قبل إتمام التسجيل الإداري. ويشمل في الغالب صورة أشعّة للصدر وتحاليل أساسية، ويُنظَّم عبر الجهة التي تحدّدها المؤسسة: المصلحة الطبية الجامعية أو مؤسسة شريكة.',
              },
              {
                type: 'p',
                text: 'هذه أيضًا اللحظة التي يصبح فيها التأمين الصحي أمرًا ملموسًا. احسب كلفته داخل مصاريف الأسابيع الأولى، ولا تفترض أن تغطية اشتريتها من بلدك تعوّض البوليصة المطلوبة محليًّا.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'موضع هذه التحاليل في جدولك الزمني',
            blocks: [
              {
                type: 'p',
                text: 'التحاليل الطبية ليست أول ما تُعدّه. تأتي بعد القبول، ومن الأفضل أن تكون قبل إيداع ملف التأشيرة بقليل: مبكّرة بما يكفي لتكون جاهزة يوم الموعد، ومتأخّرة بما يكفي لتبقى داخل مدة صلاحيتها.',
              },
              {
                type: 'ul',
                items: [
                  'القبول ودعوة الدراسة: أولًا، لأن التأشيرة لا توجد بدونهما.',
                  'الموعد القنصلي: يُحدَّد بمجرّد وصول الدعوة.',
                  'التحاليل الطبية: تُبرمج حسب تاريخ الموعد، لا قبله.',
                  'الفحص الطبي الروسي: بعد الوصول، وفق رُوزنامة الجامعة.',
                ],
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
        ],
        faq: [
          {
            question: 'كم تبقى الشهادة الطبية صالحة لتأشيرة الدراسة الروسية؟',
            answer:
              'مدة الصلاحية يحدّدها المركز القنصلي الذي يعالج طلبك، ولن نخترعها. اطلبها كتابيًّا عند الحصول على قائمة الوثائق، وبرمج تحاليلك على أساس ذلك الجواب.',
          },
          {
            question: 'هل تُجرى التحاليل قبل وصول دعوة الدراسة أم بعدها؟',
            answer:
              'بعدها. الدعوة شرط للموعد القنصلي، وتاريخ هذا الموعد هو ما يحدّد توقيت التحاليل حتى تبقى صالحة يوم الإيداع.',
          },
          {
            question: 'هل يعفيني الفحص في بلدي من الفحص في روسيا؟',
            answer:
              'لا. هما خطوتان مستقلّتان: الأولى للتأشيرة، والثانية لإتمام التسجيل في الجامعة. خطّط لكلتيهما.',
          },
          {
            question: 'هل يُقبل مختبر خاص؟',
            answer:
              'ذلك يتوقّف على شروط الشكل عند القنصلية. بعض المراكز تقبل تقرير مختبر خاص، وأخرى تفرض نموذجًا أو مؤسسة معتمدة. وهذا بالضبط أحد الأسئلة الأربعة قبل الدفع.',
          },
        ],
        keywords: [
          'شهادة طبية تأشيرة دراسة روسيا',
          'تحليل فيروس نقص المناعة تأشيرة روسيا',
          'تحاليل طبية الدراسة في روسيا',
          'فحص طبي جامعة روسية',
          'وثائق صحية ملف تأشيرة روسيا',
          'فحص الطلبة الأجانب في روسيا',
        ],
      },
      ru: {
        title: 'Медицинские справки для студенческой визы в Россию: что требуется и когда | RusStudy',
        description:
          'Справка об отсутствии ВИЧ, заключение о состоянии здоровья, медосмотр после приезда: как устроена медицинская часть визового пакета и какие вопросы задать консульству до оплаты лаборатории.',
        h1: 'Медицинские справки для студенческой визы: что требуется и в какой момент',
        publishedLabel: 'Публикация: октябрь 2026',
        excerpt:
          'Многие сдают анализы слишком рано или не там, где нужно, и платят дважды. Разбираем порядок медицинских шагов — от визового пакета до осмотра в вузе.',
        intro:
          'В подготовке к учёбе в России есть два отдельных медицинских этапа, и их часто путают. Первый нужен для визы и проходит в стране проживания до выезда. Второй проходит уже в России после приезда и необходим для административного зачисления в вузе. Если поменять их порядок или начать слишком рано, это стоит денег и недель.',
        sections: [
          {
            heading: 'Два этапа, два момента, два назначения',
            blocks: [
              {
                type: 'p',
                text: 'Первый набор анализов входит в визовый пакет, который подаётся в российское дипломатическое представительство, обслуживающее вашу страну проживания. Второй — медицинский осмотр в России, обычно в первые недели, через вуз или учреждение, на которое он направляет.',
              },
              {
                type: 'ul',
                items: [
                  'До выезда: медицинские документы для визовой заявки, собранные строго по списку консульства.',
                  'После приезда: медосмотр в России, который вуз запрашивает для завершения зачисления и получения места в общежитии.',
                ],
              },
              {
                type: 'p',
                text: 'Одно не заменяет другое. Студент, приехавший с полным медицинским пакетом из своей страны, всё равно проходит местный осмотр.',
              },
            ],
          },
          {
            heading: 'Справка об отсутствии ВИЧ: самый частый пункт списка',
            blocks: [
              {
                type: 'p',
                text: 'Это анализ, который чаще всего встречается в опубликованных перечнях документов для учебной визы: справка об отсутствии ВИЧ-инфекции, выданная лабораторией на основании анализа крови.',
              },
              {
                type: 'p',
                text: 'Принятую справку от отклонённой отличают три вещи: дата, форма и язык. Дата — потому что срок действия ограничен. Форма — потому что одни консульские учреждения ждут конкретный бланк, а не обычное заключение лаборатории. Язык — потому что перевод может требоваться, причём с разным уровнем заверения.',
              },
              {
                type: 'strong',
                text: 'Ни одно из этих трёх требований не одинаково везде: мы не станем его угадывать, и вам не стоит принимать ответ, полученный не от самого консульства.',
              },
            ],
          },
          {
            heading: 'Общее заключение о состоянии здоровья',
            blocks: [
              {
                type: 'p',
                text: 'Помимо анализа на ВИЧ часто запрашивают общую медицинскую справку: документ от врача о том, что состояние здоровья позволяет учиться за рубежом. Содержание различается: где-то достаточно короткой справки, где-то ждут более подробного заключения.',
              },
              {
                type: 'p',
                text: 'Наш совет — не сдавать анализы заранее. Сначала получите письменный список консульства, затем идите в лабораторию с этим списком. Обратный порядок — главная причина повторных анализов.',
              },
            ],
          },
          {
            heading: 'Четыре вопроса до оплаты лаборатории',
            blocks: [
              {
                type: 'ul',
                items: [
                  'Какие именно анализы требуются для учебной визы по действующему сегодня перечню?',
                  'Сколько справка действительна с даты взятия материала?',
                  'Обязателен ли определённый бланк или достаточно заключения лаборатории?',
                  'Нужен ли перевод и в какой форме: присяжный переводчик, легализация или ничего из этого?',
                ],
              },
              {
                type: 'p',
                text: 'Задайте их письменно и сохраните ответ. Если позже документ оспорят, этот письменный ответ — ваша единственная защита.',
              },
            ],
          },
          {
            heading: 'Медосмотр в России после приезда',
            blocks: [
              {
                type: 'p',
                text: 'На месте вуз, как правило, требует местный медицинский осмотр до завершения административного зачисления. Обычно он включает рентген грудной клетки и базовые анализы и организуется через указанную вузом структуру: университетскую медицинскую службу или партнёрское учреждение.',
              },
              {
                type: 'p',
                text: 'Это же момент, когда медицинская страховка становится конкретной. Заложите её в расходы первых недель и не рассчитывайте, что полис, купленный дома, заменит требуемый на месте.',
              },
              { type: 'related', slug: 'preparer-son-depart-hiver-russie' },
            ],
          },
          {
            heading: 'Место анализов в вашем графике',
            blocks: [
              {
                type: 'p',
                text: 'Анализы — не первый пункт подготовки. Они идут после зачисления и в идеале незадолго до подачи визового пакета: достаточно рано, чтобы быть готовыми к дате приёма, и достаточно поздно, чтобы остаться в пределах срока действия.',
              },
              {
                type: 'ul',
                items: [
                  'Зачисление и приглашение: сначала, без них визы не существует.',
                  'Запись в консульство: как только приглашение получено.',
                  'Анализы: по дате приёма, не раньше.',
                  'Российский медосмотр: после приезда, по календарю вуза.',
                ],
              },
              { type: 'related', slug: 'lettre-invitation-etudes-russie-delais' },
            ],
          },
        ],
        faq: [
          {
            question: 'Сколько действует медицинская справка для студенческой визы в Россию?',
            answer:
              'Срок устанавливает консульское учреждение, которое рассматривает заявку, и мы не станем его выдумывать. Запросите его письменно вместе со списком документов и планируйте анализы по этому ответу.',
          },
          {
            question: 'Сдавать анализы до или после получения приглашения?',
            answer:
              'После. Приглашение определяет запись в консульство, а дата приёма определяет сроки анализов, чтобы они оставались действительными в день подачи.',
          },
          {
            question: 'Освобождает ли осмотр в моей стране от осмотра в России?',
            answer:
              'Нет. Это два разных этапа: один нужен для визы, другой — для завершения зачисления в вузе. Планируйте оба.',
          },
          {
            question: 'Принимают ли частную лабораторию?',
            answer:
              'Зависит от требований консульства к форме. Одни учреждения принимают заключение частной лаборатории, другие требуют бланк или аккредитованную организацию. Это и есть один из четырёх вопросов до оплаты.',
          },
        ],
        keywords: [
          'медицинская справка студенческая виза Россия',
          'справка об отсутствии ВИЧ виза',
          'анализы для учёбы в России',
          'медосмотр в российском вузе',
          'медицинские документы для визы',
          'медосмотр иностранного студента',
        ],
      },
    },
  },
  {
    slug: 'apostille-ou-legalisation-consulaire-tunisie',
    publishedAt: '2026-10-19',
    copy: {
      fr: {
        title: 'Apostille ou légalisation consulaire : comment faire reconnaître son diplôme en Russie | RusStudy',
        description:
          "Deux mécanismes existent pour rendre un diplôme tunisien valable en Russie : l'apostille et la légalisation consulaire. Voici comment chacun fonctionne, dans quel ordre traduire, et à qui demander lequel s'applique à votre dossier.",
        h1: 'Apostille ou légalisation consulaire : comment rendre son diplôme valable en Russie',
        publishedLabel: 'Publication : Octobre 2026',
        excerpt:
          "Un diplôme tunisien n'a aucune valeur juridique en Russie tant qu'il n'a pas été authentifié. Deux voies existent. Voici comment elles fonctionnent et comment savoir laquelle s'applique à vous.",
        intro:
          "Votre baccalauréat est authentique, mais pour une administration russe il n'est qu'un papier étranger qu'elle n'a aucun moyen de vérifier. L'authentification sert exactement à cela : faire certifier par une autorité officielle que la signature et le sceau figurant sur votre diplôme sont bien ceux d'un agent habilité. Deux mécanismes différents remplissent cette fonction, et c'est là que les dossiers se perdent.",
        sections: [
          {
            heading: 'Deux mécanismes, un seul objectif',
            blocks: [
              {
                type: 'p',
                text: "L'apostille et la légalisation consulaire répondent à la même question : comment un État peut-il faire confiance à un document émis par un autre État ? Elles n'y répondent simplement pas de la même manière.",
              },
              {
                type: 'ul',
                items: [
                  "L'apostille : une seule attestation, délivrée par une autorité désignée du pays d'origine, qui vaut dans tous les États liés entre eux par la convention correspondante. Un cachet, une étape.",
                  "La légalisation consulaire : une chaîne de validations successives, qui remonte du ministère compétent du pays d'origine jusqu'à la représentation diplomatique du pays de destination. Plusieurs guichets, plusieurs délais.",
                ],
              },
              {
                type: 'p',
                text: "Dans les deux cas, personne ne vérifie le contenu de votre diplôme, ni votre niveau : seule l'authenticité de la signature et du sceau est en jeu.",
              },
            ],
          },
          {
            heading: "Comment fonctionne l'apostille",
            blocks: [
              {
                type: 'p',
                text: "L'apostille est un certificat normalisé apposé sur le document d'origine, ou sur une feuille annexée. Elle est délivrée dans le pays qui a émis le document, par l'autorité que ce pays a désignée à cet effet. Une fois apposée, elle est censée suffire : le pays destinataire n'a pas à ajouter d'étape supplémentaire.",
              },
              {
                type: 'p',
                text: "C'est la voie la plus rapide et la moins coûteuse lorsqu'elle est disponible. Elle suppose toutefois que le mécanisme s'applique effectivement entre les deux États concernés et pour le type de document présenté — ce qui n'est jamais à présumer.",
              },
            ],
          },
          {
            heading: 'Comment fonctionne la légalisation consulaire',
            blocks: [
              {
                type: 'p',
                text: "La légalisation consulaire est une succession d'authentifications. Schématiquement, chaque autorité certifie la signature de l'autorité précédente, jusqu'à ce que la représentation diplomatique du pays de destination apporte la dernière.",
              },
              {
                type: 'ul',
                items: [
                  "Authentification par l'autorité éducative qui a émis le diplôme.",
                  'Puis par le ministère compétent pour les affaires étrangères du pays d’origine.',
                  'Puis par la représentation diplomatique du pays de destination.',
                ],
              },
              {
                type: 'p',
                text: "Chaque guichet a ses horaires, ses frais et ses délais. C'est pour cela que la légalisation consulaire doit être lancée très en amont : c'est la pièce la plus longue d'un dossier, bien avant le visa.",
              },
            ],
          },
          {
            heading: 'Pourquoi nous ne tranchons pas à votre place',
            blocks: [
              {
                type: 'p',
                text: "Savoir lequel des deux mécanismes s'applique à un diplôme tunisien destiné à une université russe n'est pas une question de bon sens, c'est une question d'état du droit à la date où vous déposez. Elle dépend de l'adhésion des États concernés à la convention applicable, des réserves ou objections éventuellement formulées entre eux, du type de document, et parfois des exigences propres de l'établissement destinataire.",
              },
              {
                type: 'strong',
                text: "Nous ne publierons pas de réponse définitive sur ce point : une information périmée vous coûterait plusieurs semaines. Posez la question aux deux seules sources qui engagent leur responsabilité.",
              },
              {
                type: 'ul',
                items: [
                  "La représentation diplomatique russe compétente pour votre pays de résidence : « pour un diplôme de fin d'études secondaires tunisien, acceptez-vous l'apostille, ou exigez-vous la légalisation consulaire complète ? »",
                  "Le service des admissions internationales de l'université visée : « sous quelle forme exacte devez-vous recevoir le diplôme authentifié et sa traduction ? »",
                ],
              },
              {
                type: 'p',
                text: "Demandez-le par écrit. Une réponse par courriel, conservée, vaut mieux que dix avis recueillis dans un groupe de discussion.",
              },
            ],
          },
          {
            heading: 'Traduire avant ou après ? La question qui coûte le plus cher',
            blocks: [
              {
                type: 'p',
                text: "C'est l'erreur la plus répandue, et la plus chère : faire traduire le diplôme, puis l'authentifier. Dans ce sens, l'authentification porte sur la traduction et non sur le diplôme d'origine, et le dossier est renvoyé.",
              },
              {
                type: 'p',
                text: "L'ordre généralement attendu est l'inverse : authentifier d'abord le document original, puis faire traduire l'ensemble — document et mention d'authentification — par un traducteur dont le statut correspond à ce qu'exige le destinataire. Mais là encore, confirmez cet ordre auprès du consulat et de l'université avant d'engager des frais.",
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: "Ne pas confondre authentification et reconnaissance d'équivalence",
            blocks: [
              {
                type: 'p',
                text: "Authentifier un diplôme prouve qu'il est vrai. Le faire reconnaître prouve qu'il ouvre des droits. Ce sont deux procédures séparées, parfois dans deux pays différents, et à deux moments de votre parcours.",
              },
              {
                type: 'ul',
                items: [
                  "À l'aller : votre diplôme tunisien authentifié permet à l'université russe de vous admettre.",
                  'Au retour : votre diplôme russe devra suivre sa propre procédure pour être reconnu en Tunisie, ce qui ne se prépare pas le mois du retour.',
                ],
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Faut-il une apostille ou une légalisation consulaire pour un diplôme tunisien destiné à la Russie ?',
            answer:
              "Cela dépend de l'état du droit applicable à la date de votre dépôt et des exigences du poste consulaire et de l'université. Nous ne donnons pas de réponse générale : demandez-la par écrit à la représentation diplomatique russe compétente et au service des admissions de l'université.",
          },
          {
            question: 'Dois-je faire traduire mon diplôme avant de le faire authentifier ?',
            answer:
              "L'ordre généralement attendu est : authentification du document original d'abord, traduction ensuite. L'inverse fait porter l'authentification sur la traduction. Confirmez cet ordre auprès du consulat avant d'engager des frais de traduction.",
          },
          {
            question: 'Combien de temps prend la procédure ?',
            answer:
              "Les délais dépendent du nombre de guichets à franchir et de leur charge. Une apostille passe par une seule autorité ; une légalisation consulaire en traverse plusieurs. Dans tous les cas, c'est l'une des premières démarches à lancer, pas la dernière.",
          },
          {
            question: 'Le relevé de notes doit-il être authentifié comme le diplôme ?',
            answer:
              "Souvent oui, mais la liste exacte des pièces à authentifier est fixée par l'université. Demandez-lui cette liste avant de commencer, pour éviter de refaire la procédure sur une pièce oubliée.",
          },
        ],
        keywords: [
          'apostille diplôme tunisien russie',
          'légalisation consulaire diplôme russie',
          'authentifier baccalauréat pour la russie',
          'traduction diplôme russe assermentée',
          'reconnaissance diplôme études russie',
          'démarches diplôme université russe',
        ],
      },
      en: {
        title: 'Apostille or consular legalisation: making your diploma valid in Russia | RusStudy',
        description:
          'Two mechanisms can make a Tunisian diploma valid in Russia: apostille and consular legalisation. Here is how each works, in which order to translate, and who can tell you which applies to your file.',
        h1: 'Apostille or consular legalisation: making your diploma valid in Russia',
        publishedLabel: 'Published: October 2026',
        excerpt:
          'A Tunisian diploma has no legal standing in Russia until it has been authenticated. Two routes exist. Here is how they work, and how to find out which one applies to you.',
        intro:
          'Your secondary diploma is genuine, but to a Russian administration it is simply a foreign sheet of paper it has no way to verify. Authentication exists for exactly that: an official authority certifies that the signature and seal on your diploma really belong to an authorised officer. Two different mechanisms do that job, and this is where files get lost.',
        sections: [
          {
            heading: 'Two mechanisms, one purpose',
            blocks: [
              {
                type: 'p',
                text: 'Apostille and consular legalisation answer the same question: how can one state trust a document issued by another? They simply answer it differently.',
              },
              {
                type: 'ul',
                items: [
                  'Apostille: a single certificate issued by a designated authority in the country of origin, valid across the states bound to each other by the relevant convention. One stamp, one step.',
                  'Consular legalisation: a chain of successive validations running from the competent ministry of the issuing country up to the diplomatic mission of the destination country. Several counters, several waiting times.',
                ],
              },
              {
                type: 'p',
                text: 'In both cases nobody checks the content of your diploma or your academic level: only the authenticity of the signature and seal is at stake.',
              },
            ],
          },
          {
            heading: 'How the apostille works',
            blocks: [
              {
                type: 'p',
                text: 'An apostille is a standardised certificate placed on the original document or on an attached sheet. It is issued in the country that produced the document, by the authority that country has designated for the purpose. Once affixed, it is meant to be sufficient: the receiving country should not need to add a further step.',
              },
              {
                type: 'p',
                text: 'It is the faster and cheaper route where it is available. It does, however, assume that the mechanism genuinely applies between the two states concerned and for the type of document presented — which is never to be taken for granted.',
              },
            ],
          },
          {
            heading: 'How consular legalisation works',
            blocks: [
              {
                type: 'p',
                text: 'Consular legalisation is a sequence of authentications. In outline, each authority certifies the signature of the previous one, until the diplomatic mission of the destination country adds the last.',
              },
              {
                type: 'ul',
                items: [
                  'Authentication by the education authority that issued the diploma.',
                  'Then by the ministry responsible for foreign affairs in the country of origin.',
                  'Then by the diplomatic mission of the destination country.',
                ],
              },
              {
                type: 'p',
                text: 'Every counter has its own hours, fees and delays. That is why consular legalisation must be started very early: it is the slowest item in a file, well ahead of the visa.',
              },
            ],
          },
          {
            heading: 'Why we will not decide this for you',
            blocks: [
              {
                type: 'p',
                text: 'Knowing which of the two mechanisms applies to a Tunisian diploma destined for a Russian university is not a matter of common sense; it is a matter of the law in force on the day you file. It depends on which states are party to the applicable convention, on any reservations or objections raised between them, on the type of document, and sometimes on the receiving institution’s own requirements.',
              },
              {
                type: 'strong',
                text: 'We will not publish a definitive answer on this point: outdated information would cost you weeks. Put the question to the only two sources that answer under their own responsibility.',
              },
              {
                type: 'ul',
                items: [
                  'The Russian diplomatic mission covering your country of residence: “for a Tunisian secondary school diploma, do you accept an apostille, or do you require full consular legalisation?”',
                  'The international admissions office of your target university: “in exactly what form must you receive the authenticated diploma and its translation?”',
                ],
              },
              {
                type: 'p',
                text: 'Ask in writing. One email answer you keep is worth more than ten opinions collected in a chat group.',
              },
            ],
          },
          {
            heading: 'Translate before or after? The costliest question',
            blocks: [
              {
                type: 'p',
                text: 'This is the most widespread and most expensive mistake: having the diploma translated and then authenticated. In that order, the authentication covers the translation rather than the original diploma, and the file comes back.',
              },
              {
                type: 'p',
                text: 'The order generally expected is the reverse: authenticate the original document first, then have the whole thing — document and authentication — translated by a translator whose status matches what the recipient requires. Here too, confirm that order with the consulate and the university before spending anything.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Authentication is not recognition of equivalence',
            blocks: [
              {
                type: 'p',
                text: 'Authenticating a diploma proves it is genuine. Having it recognised proves it grants rights. These are two separate procedures, sometimes in two different countries, at two different points in your path.',
              },
              {
                type: 'ul',
                items: [
                  'On the way out: your authenticated Tunisian diploma allows the Russian university to admit you.',
                  'On the way back: your Russian diploma will need its own procedure to be recognised in Tunisia, which is not something to start in the month you return.',
                ],
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Does a Tunisian diploma for Russia need an apostille or consular legalisation?',
            answer:
              'That depends on the law applicable on the day you file and on the requirements of the consular post and the university. We give no general answer: ask in writing at the competent Russian diplomatic mission and at the university’s admissions office.',
          },
          {
            question: 'Should I have my diploma translated before authenticating it?',
            answer:
              'The order generally expected is authentication of the original document first, translation second. The reverse makes the authentication apply to the translation. Confirm the order with the consulate before paying for a translation.',
          },
          {
            question: 'How long does the procedure take?',
            answer:
              'Timelines depend on how many counters must be cleared and how busy they are. An apostille passes through a single authority; consular legalisation crosses several. Either way, it is one of the first steps to launch, not the last.',
          },
          {
            question: 'Does the transcript need authentication as well as the diploma?',
            answer:
              'Often yes, but the exact list of documents to authenticate is set by the university. Ask for that list before you start, so you do not have to repeat the procedure for one forgotten page.',
          },
        ],
        keywords: [
          'apostille tunisian diploma russia',
          'consular legalisation diploma russia',
          'authenticate secondary diploma for russia',
          'sworn translation diploma russian',
          'diploma recognition studying in russia',
          'document procedures russian university',
        ],
      },
      ar: {
        title: 'الأبوستيل أم التصديق القنصلي: كيف تجعل شهادتك صالحة في روسيا | RusStudy',
        description:
          'توجد طريقتان لجعل شهادة تونسية صالحة في روسيا: الأبوستيل والتصديق القنصلي. نشرح كيف تعمل كل واحدة، وفي أي ترتيب تُترجم، ومن يخبرك أيّهما ينطبق على ملفك.',
        h1: 'الأبوستيل أم التصديق القنصلي: كيف تجعل شهادتك صالحة في روسيا',
        publishedLabel: 'النشر: أكتوبر 2026',
        excerpt:
          'الشهادة التونسية لا قيمة قانونية لها في روسيا قبل توثيقها. وهناك مسلكان. نشرح كيف يعملان، وكيف تعرف أيّهما يخصّك.',
        intro:
          'شهادتك صحيحة، لكنها بالنسبة إلى إدارة روسية مجرّد ورقة أجنبية لا تملك وسيلة للتحقّق منها. والتوثيق موجود لهذا الغرض بالضبط: أن تشهد سلطة رسمية بأن التوقيع والخاتم على شهادتك يعودان فعلًا إلى موظّف مخوَّل. وهناك آليتان مختلفتان تؤدّيان هذه الوظيفة، وهنا تضيع الملفات.',
        sections: [
          {
            heading: 'آليتان، وهدف واحد',
            blocks: [
              {
                type: 'p',
                text: 'الأبوستيل والتصديق القنصلي يجيبان على السؤال نفسه: كيف تثق دولة بوثيقة أصدرتها دولة أخرى؟ لكنهما لا يجيبان بالطريقة نفسها.',
              },
              {
                type: 'ul',
                items: [
                  'الأبوستيل: شهادة واحدة تصدرها سلطة معيَّنة في بلد المنشأ، وتكون صالحة بين الدول المرتبطة ببعضها عبر الاتفاقية المعنيّة. خاتم واحد وخطوة واحدة.',
                  'التصديق القنصلي: سلسلة تصديقات متتالية تبدأ من الوزارة المختصّة في بلد الإصدار وتنتهي عند البعثة الدبلوماسية لبلد المقصد. شبابيك متعدّدة وآجال متعدّدة.',
                ],
              },
              {
                type: 'p',
                text: 'وفي الحالتين لا أحد يفحص مضمون شهادتك ولا مستواك الدراسي: المسألة محصورة في صحة التوقيع والخاتم.',
              },
            ],
          },
          {
            heading: 'كيف يعمل الأبوستيل',
            blocks: [
              {
                type: 'p',
                text: 'الأبوستيل شهادة موحّدة الشكل تُوضع على الوثيقة الأصلية أو على ورقة مرفقة بها. وتُصدر في البلد الذي أصدر الوثيقة، من السلطة التي عيّنها لهذا الغرض. وبمجرّد وضعها يُفترض أن تكون كافية، فلا يحتاج بلد المقصد إلى خطوة إضافية.',
              },
              {
                type: 'p',
                text: 'وهو المسلك الأسرع والأقلّ كلفة حيث يكون متاحًا. لكنه يفترض أن الآلية تنطبق فعلًا بين الدولتين المعنيّتين وعلى نوع الوثيقة المقدَّمة، وهذا ما لا يجوز افتراضه أبدًا.',
              },
            ],
          },
          {
            heading: 'كيف يعمل التصديق القنصلي',
            blocks: [
              {
                type: 'p',
                text: 'التصديق القنصلي سلسلة من التوثيقات. وبشكل مبسّط، تصدّق كل سلطة على توقيع السلطة التي سبقتها، حتى تضع البعثة الدبلوماسية لبلد المقصد التصديق الأخير.',
              },
              {
                type: 'ul',
                items: [
                  'توثيق من السلطة التعليمية التي أصدرت الشهادة.',
                  'ثم من الوزارة المختصّة بالشؤون الخارجية في بلد المنشأ.',
                  'ثم من البعثة الدبلوماسية لبلد المقصد.',
                ],
              },
              {
                type: 'p',
                text: 'ولكل شبّاك مواعيده ورسومه وآجاله. لذلك يجب إطلاق التصديق القنصلي في وقت مبكّر جدًّا: فهو أطول بند في الملف، وأسبق بكثير من التأشيرة.',
              },
            ],
          },
          {
            heading: 'لماذا لا نحسم الأمر مكانك',
            blocks: [
              {
                type: 'p',
                text: 'معرفة أيّ الآليتين تنطبق على شهادة تونسية موجَّهة إلى جامعة روسية ليست مسألة منطق، بل مسألة حالة القانون في تاريخ إيداعك. وهي تتوقّف على انتماء الدولتين إلى الاتفاقية المعنيّة، وعلى أي تحفّظات أو اعتراضات بينهما، وعلى نوع الوثيقة، وأحيانًا على شروط المؤسسة المستقبِلة نفسها.',
              },
              {
                type: 'strong',
                text: 'لن ننشر جوابًا نهائيًّا في هذه النقطة: معلومة متجاوَزة قد تكلّفك أسابيع. اطرح السؤال على المصدرين الوحيدين اللذين يجيبان على مسؤوليتهما.',
              },
              {
                type: 'ul',
                items: [
                  'البعثة الدبلوماسية الروسية المختصّة ببلد إقامتك: «بالنسبة إلى شهادة ختم التعليم الثانوي التونسية، هل تقبلون الأبوستيل أم تشترطون التصديق القنصلي الكامل؟»',
                  'مصلحة القبول الدولي في الجامعة المستهدفة: «بأي صيغة بالتحديد يجب أن تتلقّوا الشهادة الموثَّقة وترجمتها؟»',
                ],
              },
              {
                type: 'p',
                text: 'اطرح السؤال كتابيًّا. جواب واحد بالبريد الإلكتروني تحفظه أفضل من عشرة آراء تجمعها في مجموعة محادثة.',
              },
            ],
          },
          {
            heading: 'الترجمة قبل أم بعد؟ السؤال الأغلى ثمنًا',
            blocks: [
              {
                type: 'p',
                text: 'هذا أكثر الأخطاء شيوعًا وأغلاها: ترجمة الشهادة ثم توثيقها. بهذا الترتيب يقع التوثيق على الترجمة لا على الشهادة الأصلية، فيُعاد الملف.',
              },
              {
                type: 'p',
                text: 'الترتيب المنتظر عادةً هو العكس: توثيق الوثيقة الأصلية أولًا، ثم ترجمة المجموع — الوثيقة وبيان التوثيق — عند مترجم تتوافق صفته مع ما تشترطه الجهة المستقبِلة. وهنا أيضًا، أكّد هذا الترتيب مع القنصلية والجامعة قبل أي مصروف.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'لا تخلط بين التوثيق والاعتراف بالمعادلة',
            blocks: [
              {
                type: 'p',
                text: 'توثيق الشهادة يثبت أنها صحيحة. والاعتراف بها يثبت أنها تمنح حقوقًا. وهما إجراءان منفصلان، أحيانًا في بلدين مختلفين، وفي مرحلتين مختلفتين من مسارك.',
              },
              {
                type: 'ul',
                items: [
                  'في الذهاب: شهادتك التونسية الموثَّقة تتيح للجامعة الروسية قبولك.',
                  'في العودة: شهادتك الروسية ستحتاج إلى إجراء خاص بها للاعتراف بها في تونس، وهذا لا يُعدّ في شهر العودة.',
                ],
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل تحتاج الشهادة التونسية الموجَّهة إلى روسيا أبوستيل أم تصديقًا قنصليًّا؟',
            answer:
              'ذلك يتوقّف على القانون الساري في تاريخ إيداعك وعلى شروط المركز القنصلي والجامعة. لا نقدّم جوابًا عامًّا: اطلبه كتابيًّا من البعثة الدبلوماسية الروسية المختصّة ومن مصلحة القبول في الجامعة.',
          },
          {
            question: 'هل أترجم الشهادة قبل توثيقها؟',
            answer:
              'الترتيب المنتظر عادةً هو توثيق الوثيقة الأصلية أولًا ثم الترجمة. والعكس يجعل التوثيق واقعًا على الترجمة. أكّد الترتيب مع القنصلية قبل دفع أي أجر ترجمة.',
          },
          {
            question: 'كم تستغرق هذه الإجراءات؟',
            answer:
              'الآجال تتوقّف على عدد الشبابيك وعلى ضغط العمل فيها. الأبوستيل يمرّ بسلطة واحدة، والتصديق القنصلي يمرّ بعدة سلطات. وفي الحالتين هو من أوائل ما تُطلقه، لا آخره.',
          },
          {
            question: 'هل يجب توثيق كشف الأعداد مثل الشهادة؟',
            answer:
              'غالبًا نعم، لكن القائمة الدقيقة للوثائق التي تُوثَّق تحدّدها الجامعة. اطلب منها هذه القائمة قبل البدء حتى لا تعيد الإجراء من أجل ورقة منسيّة.',
          },
        ],
        keywords: [
          'أبوستيل شهادة تونسية روسيا',
          'تصديق قنصلي شهادة روسيا',
          'توثيق شهادة الباكالوريا للدراسة في روسيا',
          'ترجمة محلَّفة شهادة روسية',
          'الاعتراف بالشهادة الدراسة في روسيا',
          'إجراءات الوثائق جامعة روسية',
        ],
      },
      ru: {
        title: 'Апостиль или консульская легализация: как сделать диплом действительным в России | RusStudy',
        description:
          'Есть два механизма, позволяющих тунисскому диплому действовать в России: апостиль и консульская легализация. Разбираем, как работает каждый, в каком порядке переводить и у кого узнавать, что применимо к вашему случаю.',
        h1: 'Апостиль или консульская легализация: как сделать диплом действительным в России',
        publishedLabel: 'Публикация: октябрь 2026',
        excerpt:
          'Тунисский диплом не имеет юридической силы в России, пока он не удостоверен. Есть два пути. Объясняем, как они работают и как узнать, какой из них ваш.',
        intro:
          'Ваш диплом подлинный, но для российского учреждения это просто иностранная бумага, которую оно не может проверить. Удостоверение существует именно для этого: официальный орган подтверждает, что подпись и печать на дипломе действительно принадлежат уполномоченному лицу. Эту задачу решают два разных механизма, и именно здесь теряются документы.',
        sections: [
          {
            heading: 'Два механизма, одна цель',
            blocks: [
              {
                type: 'p',
                text: 'Апостиль и консульская легализация отвечают на один вопрос: как одно государство может доверять документу, выданному другим? Отвечают они по-разному.',
              },
              {
                type: 'ul',
                items: [
                  'Апостиль: одно свидетельство, выдаваемое назначенным органом страны происхождения и действующее между государствами, связанными соответствующей конвенцией. Один штамп, один шаг.',
                  'Консульская легализация: цепочка последовательных удостоверений — от профильного министерства страны выдачи до дипломатического представительства страны назначения. Несколько окон, несколько сроков.',
                ],
              },
              {
                type: 'p',
                text: 'В обоих случаях никто не проверяет содержание диплома или ваш уровень подготовки: речь только о подлинности подписи и печати.',
              },
            ],
          },
          {
            heading: 'Как работает апостиль',
            blocks: [
              {
                type: 'p',
                text: 'Апостиль — стандартизированное свидетельство, проставляемое на оригинале документа или на подшитом листе. Он выдаётся в стране, выпустившей документ, органом, который эта страна для этого назначила. После проставления он считается достаточным: принимающей стране не нужен дополнительный шаг.',
              },
              {
                type: 'p',
                text: 'Это более быстрый и дешёвый путь там, где он доступен. Но он предполагает, что механизм действительно применяется между двумя конкретными государствами и к данному типу документа, а это никогда нельзя считать само собой разумеющимся.',
              },
            ],
          },
          {
            heading: 'Как работает консульская легализация',
            blocks: [
              {
                type: 'p',
                text: 'Консульская легализация — последовательность удостоверений. Упрощённо: каждый орган удостоверяет подпись предыдущего, пока последнее удостоверение не поставит дипломатическое представительство страны назначения.',
              },
              {
                type: 'ul',
                items: [
                  'Удостоверение органом образования, выдавшим диплом.',
                  'Затем министерством, отвечающим за внешние дела страны происхождения.',
                  'Затем дипломатическим представительством страны назначения.',
                ],
              },
              {
                type: 'p',
                text: 'У каждого окна свои часы приёма, сборы и сроки. Поэтому консульскую легализацию нужно начинать очень заранее: это самый длительный пункт пакета, задолго до визы.',
              },
            ],
          },
          {
            heading: 'Почему мы не решаем это за вас',
            blocks: [
              {
                type: 'p',
                text: 'Какой из двух механизмов применим к тунисскому диплому для российского вуза — вопрос не здравого смысла, а действующего права на день подачи. Он зависит от участия обеих стран в применимой конвенции, от возможных оговорок и возражений между ними, от типа документа и иногда от собственных требований принимающего учреждения.',
              },
              {
                type: 'strong',
                text: 'Мы не публикуем окончательный ответ по этому пункту: устаревшие сведения стоили бы вам недель. Задайте вопрос двум источникам, которые отвечают под свою ответственность.',
              },
              {
                type: 'ul',
                items: [
                  'Российское дипломатическое представительство, обслуживающее страну вашего проживания: «для тунисского документа о среднем образовании вы принимаете апостиль или требуете полную консульскую легализацию?»',
                  'Отдел международного приёма выбранного вуза: «в какой именно форме вы должны получить удостоверенный диплом и его перевод?»',
                ],
              },
              {
                type: 'p',
                text: 'Спрашивайте письменно. Один сохранённый ответ по электронной почте дороже десяти мнений из чата.',
              },
            ],
          },
          {
            heading: 'Переводить до или после? Самый дорогой вопрос',
            blocks: [
              {
                type: 'p',
                text: 'Это самая частая и самая дорогая ошибка: сначала перевести диплом, потом удостоверить. В таком порядке удостоверение относится к переводу, а не к оригиналу, и пакет возвращают.',
              },
              {
                type: 'p',
                text: 'Обычно ожидают обратного: сначала удостоверить оригинал, затем перевести всё вместе — документ и отметку об удостоверении — у переводчика, чей статус соответствует требованиям получателя. И здесь тоже подтвердите порядок в консульстве и в вузе до любых расходов.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Удостоверение — не признание эквивалентности',
            blocks: [
              {
                type: 'p',
                text: 'Удостоверение доказывает, что диплом подлинный. Признание доказывает, что он даёт права. Это две отдельные процедуры, иногда в двух разных странах и на двух разных этапах пути.',
              },
              {
                type: 'ul',
                items: [
                  'На выезде: удостоверенный тунисский диплом позволяет российскому вузу вас зачислить.',
                  'На обратном пути: российскому диплому понадобится собственная процедура признания в Тунисе, и начинать её в месяц возвращения поздно.',
                ],
              },
              { type: 'related', slug: 'inscription-universite-russie-depuis-tunisie-2026' },
            ],
          },
        ],
        faq: [
          {
            question: 'Для тунисского диплома в Россию нужен апостиль или консульская легализация?',
            answer:
              'Это зависит от права, действующего на день подачи, и от требований консульского учреждения и вуза. Общего ответа мы не даём: запросите его письменно в компетентном российском дипломатическом представительстве и в приёмной комиссии вуза.',
          },
          {
            question: 'Переводить диплом до удостоверения?',
            answer:
              'Обычно ожидается сначала удостоверение оригинала, затем перевод. При обратном порядке удостоверение относится к переводу. Подтвердите порядок в консульстве до оплаты перевода.',
          },
          {
            question: 'Сколько занимает процедура?',
            answer:
              'Сроки зависят от числа инстанций и их загрузки. Апостиль проходит через один орган, консульская легализация — через несколько. В любом случае это один из первых шагов, а не последний.',
          },
          {
            question: 'Нужно ли удостоверять приложение с оценками, как и диплом?',
            answer:
              'Часто да, но точный перечень документов определяет вуз. Запросите этот перечень до начала, чтобы не повторять процедуру из-за одной забытой страницы.',
          },
        ],
        keywords: [
          'апостиль тунисский диплом Россия',
          'консульская легализация диплома',
          'удостоверение аттестата для России',
          'присяжный перевод диплома',
          'признание диплома учёба в России',
          'документы для российского вуза',
        ],
      },
    },
  },
  {
    slug: 'etudier-en-russie-depuis-la-libye',
    publishedAt: '2026-10-26',
    copy: {
      fr: {
        title: 'Étudier en Russie depuis la Libye : démarches, documents et accompagnement | RusStudy',
        description:
          "Guide pour les étudiants libyens qui envisagent des études en Russie : représentation consulaire compétente, authentification des documents libyens, filières accessibles, budget réaliste et étapes du dossier.",
        h1: 'Étudier en Russie depuis la Libye : ce qui change et ce qui ne change pas',
        publishedLabel: 'Publication : Octobre 2026',
        excerpt:
          "Les universités russes appliquent les mêmes règles d'admission à un étudiant libyen qu'à un étudiant tunisien. Ce qui diffère, c'est la chaîne administrative avant le départ.",
        intro:
          "Nous recevons de plus en plus de familles libyennes, et la première question est presque toujours la même : « est-ce que c'est différent pour nous ? » Du côté de l'université russe, non : le dossier, les critères et le calendrier sont les mêmes. Du côté des démarches à accomplir avant le départ, oui — et c'est là qu'il faut être précis.",
        sections: [
          {
            heading: 'Ce qui ne change pas : le dossier universitaire',
            blocks: [
              {
                type: 'p',
                text: "Une université russe examine un diplôme de fin d'études secondaires, un relevé de notes, un passeport et, selon la filière, une langue d'enseignement. L'origine du candidat ne modifie ni les pièces attendues, ni l'existence d'une année préparatoire de langue, ni la structure des cursus.",
              },
              {
                type: 'ul',
                items: [
                  'Mêmes filières accessibles : médecine, dentaire, pharmacie, ingénierie, informatique, économie.',
                  "Même possibilité d'année préparatoire de russe avant l'entrée dans le cursus.",
                  'Même calendrier : rentrée de septembre, et session de février dans les établissements qui la proposent.',
                  "Même chaîne : admission, puis lettre d'invitation, puis visa.",
                ],
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'Ce qui change : la représentation consulaire compétente',
            blocks: [
              {
                type: 'p',
                text: "C'est la toute première chose à établir, avant même de choisir une université : quelle représentation diplomatique russe traite les demandes de visa d'études pour les résidents en Libye, et où se dépose physiquement le dossier.",
              },
              {
                type: 'p',
                text: "Nous ne publions pas de réponse figée sur ce point, parce que la compétence territoriale d'un poste consulaire peut évoluer et qu'une information périmée ferait perdre un semestre. Vérifiez-la directement auprès de la représentation diplomatique russe, et confirmez trois choses : le lieu de dépôt, la liste des pièces exigées, et le délai de rendez-vous.",
              },
              {
                type: 'strong',
                text: "Tant que ces trois réponses ne sont pas écrites noir sur blanc, aucun rétroplanning n'est fiable.",
              },
            ],
          },
          {
            heading: "L'authentification des documents libyens",
            blocks: [
              {
                type: 'p',
                text: "Le diplôme de fin d'études secondaires libyen suit la même logique que tout document étranger : il doit être authentifié avant d'avoir une valeur pour une administration russe, puis traduit. L'ordre compte, et il est toujours le même : authentifier d'abord, traduire ensuite.",
              },
              {
                type: 'p',
                text: "La forme d'authentification applicable — apostille ou légalisation consulaire complète — dépend du cadre juridique en vigueur entre les deux États et des exigences du poste consulaire. C'est une question à poser, pas à deviner.",
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Le trajet : prévoir une correspondance',
            blocks: [
              {
                type: 'p',
                text: "Un départ depuis la Libye vers une ville universitaire russe passe presque toujours par un pays tiers. La combinaison la plus pratique dépend de la saison, des compagnies desservant votre aéroport de départ et de votre ville de destination en Russie.",
              },
              {
                type: 'p',
                text: "Deux conseils concrets : vérifiez la disponibilité réelle des vols au moment où le visa est délivré, pas plusieurs mois avant ; et renseignez-vous sur les conditions de transit du pays de correspondance, qui peuvent exiger leurs propres formalités selon la durée d'escale.",
              },
            ],
          },
          {
            heading: 'Le budget vu depuis la Libye',
            blocks: [
              {
                type: 'p',
                text: "La structure du budget est identique à celle de tout étudiant international : frais de scolarité annuels, logement, assurance santé, enregistrement administratif, vie courante. Trois postes méritent une attention particulière dans un dossier libyen.",
              },
              {
                type: 'ul',
                items: [
                  'Les frais de procédure avant le départ : authentifications, traductions, visa, déplacements vers le lieu de dépôt du dossier.',
                  "Le transfert de fonds : la méthode que vous utiliserez pour payer l'université et pour financer la vie sur place doit être identifiée avant le départ, pas découverte à l'arrivée.",
                  "Les premières semaines en Russie : examen médical, assurance, équipement d'hiver, caution éventuelle de logement.",
                ],
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Comment nous travaillons avec les familles libyennes',
            blocks: [
              {
                type: 'p',
                text: "Notre rôle est le même qu'avec une famille tunisienne : identifier les établissements dont le profil correspond réellement au dossier, préparer les pièces dans le bon ordre, suivre l'admission et la lettre d'invitation, puis accompagner la demande de visa et l'arrivée.",
              },
              {
                type: 'p',
                text: "Nous ne promettons ni admission garantie, ni visa garanti : ces décisions appartiennent aux universités et aux autorités consulaires. Ce que nous garantissons, c'est un dossier complet, dans l'ordre, et une information vérifiée plutôt que supposée.",
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Les universités russes acceptent-elles le diplôme de fin d’études secondaires libyen ?',
            answer:
              "Chaque université apprécie elle-même les diplômes étrangers qu'elle reçoit, selon la filière demandée. Le diplôme doit en tout état de cause être authentifié et traduit. La seule réponse qui vous engage est celle du service des admissions internationales de l'établissement visé.",
          },
          {
            question: 'Où dépose-t-on une demande de visa étudiant quand on réside en Libye ?',
            answer:
              "La compétence territoriale est fixée par les autorités consulaires russes et peut évoluer. Vérifiez-la auprès de la représentation diplomatique russe avant de construire votre calendrier, et faites-vous confirmer le lieu de dépôt, la liste des pièces et le délai de rendez-vous.",
          },
          {
            question: 'Faut-il parler russe pour commencer ?',
            answer:
              "Non, si vous passez par une année préparatoire de langue, qui existe précisément pour cela. Certains cursus sont également dispensés en anglais selon les établissements — à vérifier université par université, car l'offre varie.",
          },
          {
            question: 'Le budget est-il différent de celui d’un étudiant tunisien ?',
            answer:
              "Les frais de scolarité et de vie en Russie ne dépendent pas de la nationalité. Ce qui peut différer, ce sont les frais de procédure avant le départ et le coût du trajet avec correspondance.",
          },
        ],
        keywords: [
          'étudier en russie depuis la libye',
          'étudiant libyen université russe',
          'visa étudiant russie libye',
          'médecine en russie étudiant libyen',
          'authentification diplôme libyen russie',
          'inscription université russe libye',
        ],
      },
      en: {
        title: 'Studying in Russia from Libya: procedures, documents and support | RusStudy',
        description:
          'A guide for Libyan students considering studies in Russia: which consular mission applies, authenticating Libyan documents, available fields, a realistic budget and the steps of the file.',
        h1: 'Studying in Russia from Libya: what changes and what does not',
        publishedLabel: 'Published: October 2026',
        excerpt:
          'Russian universities apply the same admission rules to a Libyan student as to a Tunisian one. What differs is the administrative chain before departure.',
        intro:
          'We are hearing from more and more Libyan families, and the first question is almost always the same: “is it different for us?” On the university side, no: the file, the criteria and the calendar are the same. On the side of the paperwork before departure, yes — and that is where precision matters.',
        sections: [
          {
            heading: 'What does not change: the academic file',
            blocks: [
              {
                type: 'p',
                text: 'A Russian university looks at a secondary school diploma, a transcript, a passport and, depending on the field, a language of instruction. The applicant’s origin changes neither the expected documents, nor the existence of a preparatory language year, nor the structure of the programmes.',
              },
              {
                type: 'ul',
                items: [
                  'Same fields open: medicine, dentistry, pharmacy, engineering, computer science, economics.',
                  'Same option of a preparatory Russian year before entering the main programme.',
                  'Same calendar: September intake, and a February intake at institutions that offer one.',
                  'Same chain: admission, then invitation letter, then visa.',
                ],
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'What changes: the competent consular mission',
            blocks: [
              {
                type: 'p',
                text: 'This is the very first thing to establish, even before choosing a university: which Russian diplomatic mission handles study visa applications for residents of Libya, and where the file is physically submitted.',
              },
              {
                type: 'p',
                text: 'We do not publish a fixed answer on this point, because the territorial competence of a consular post can change and outdated information would cost a semester. Check it directly with the Russian diplomatic mission, and confirm three things: where to file, the list of required documents, and the waiting time for an appointment.',
              },
              {
                type: 'strong',
                text: 'Until those three answers are in writing, no timeline is reliable.',
              },
            ],
          },
          {
            heading: 'Authenticating Libyan documents',
            blocks: [
              {
                type: 'p',
                text: 'A Libyan secondary school diploma follows the same logic as any foreign document: it must be authenticated before it carries weight with a Russian administration, then translated. The order matters, and it is always the same: authenticate first, translate second.',
              },
              {
                type: 'p',
                text: 'Which form of authentication applies — apostille or full consular legalisation — depends on the legal framework in force between the two states and on the consular post’s requirements. That is a question to ask, not to guess.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'The journey: plan for a connection',
            blocks: [
              {
                type: 'p',
                text: 'Travelling from Libya to a Russian university city almost always involves a third country. The most practical combination depends on the season, on the carriers serving your departure airport and on your destination city in Russia.',
              },
              {
                type: 'p',
                text: 'Two concrete pieces of advice: check actual flight availability when the visa is issued, not months earlier; and look into the transit conditions of the connecting country, which may impose their own formalities depending on the layover.',
              },
            ],
          },
          {
            heading: 'The budget seen from Libya',
            blocks: [
              {
                type: 'p',
                text: 'The budget structure is identical to that of any international student: annual tuition, housing, health insurance, administrative registration, daily life. Three items deserve particular attention in a Libyan file.',
              },
              {
                type: 'ul',
                items: [
                  'Pre-departure procedure costs: authentications, translations, visa, travel to the place of filing.',
                  'Transferring funds: the method you will use to pay the university and to fund daily life must be identified before departure, not discovered on arrival.',
                  'The first weeks in Russia: medical examination, insurance, winter clothing, any housing deposit.',
                ],
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'How we work with Libyan families',
            blocks: [
              {
                type: 'p',
                text: 'Our role is the same as with a Tunisian family: identify the institutions whose profile genuinely matches the file, prepare the documents in the right order, follow the admission and the invitation letter, then support the visa application and the arrival.',
              },
              {
                type: 'p',
                text: 'We promise neither guaranteed admission nor a guaranteed visa: those decisions belong to the universities and the consular authorities. What we do guarantee is a complete file, in the right order, built on verified rather than assumed information.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Do Russian universities accept the Libyan secondary school diploma?',
            answer:
              'Each university assesses the foreign diplomas it receives itself, according to the field applied for. In any case the diploma must be authenticated and translated. The only binding answer is the one from the international admissions office of the target institution.',
          },
          {
            question: 'Where is a student visa application filed from Libya?',
            answer:
              'Territorial competence is set by the Russian consular authorities and can change. Check it with the Russian diplomatic mission before building your calendar, and have the place of filing, the document list and the appointment waiting time confirmed.',
          },
          {
            question: 'Do I need Russian to start?',
            answer:
              'Not if you take a preparatory language year, which exists precisely for that. Some programmes are also taught in English depending on the institution — to be checked university by university, as provision varies.',
          },
          {
            question: 'Is the budget different from a Tunisian student’s?',
            answer:
              'Tuition and living costs in Russia do not depend on nationality. What can differ are the pre-departure procedure costs and the price of a journey with a connection.',
          },
        ],
        keywords: [
          'studying in russia from libya',
          'libyan student russian university',
          'russia student visa libya',
          'medicine in russia libyan student',
          'authenticate libyan diploma russia',
          'apply russian university libya',
        ],
      },
      ar: {
        title: 'الدراسة في روسيا من ليبيا: الإجراءات والوثائق والمواكبة | RusStudy',
        description:
          'دليل للطلبة الليبيين الذين يفكّرون في الدراسة في روسيا: البعثة القنصلية المختصّة، توثيق الوثائق الليبية، التخصّصات المتاحة، ميزانية واقعية، ومراحل الملف.',
        h1: 'الدراسة في روسيا من ليبيا: ما يتغيّر وما لا يتغيّر',
        publishedLabel: 'النشر: أكتوبر 2026',
        excerpt:
          'الجامعات الروسية تطبّق على الطالب الليبي قواعد القبول نفسها التي تطبّقها على الطالب التونسي. ما يختلف هو السلسلة الإدارية قبل السفر.',
        intro:
          'تتواصل معنا عائلات ليبية أكثر فأكثر، والسؤال الأول هو نفسه تقريبًا دائمًا: «هل الأمر مختلف بالنسبة إلينا؟» من جهة الجامعة الروسية: لا، فالملف والمعايير والرُوزنامة واحدة. ومن جهة الإجراءات قبل السفر: نعم، وهنا يجب أن نكون دقيقين.',
        sections: [
          {
            heading: 'ما لا يتغيّر: الملف الجامعي',
            blocks: [
              {
                type: 'p',
                text: 'الجامعة الروسية تنظر في شهادة التعليم الثانوي، وكشف الأعداد، وجواز السفر، ولغة التدريس حسب التخصّص. وأصل المترشّح لا يغيّر الوثائق المطلوبة، ولا وجود سنة تحضيرية للغة، ولا بنية المسارات.',
              },
              {
                type: 'ul',
                items: [
                  'التخصّصات المتاحة نفسها: الطب، طب الأسنان، الصيدلة، الهندسة، الإعلامية، الاقتصاد.',
                  'نفس إمكانية السنة التحضيرية في اللغة الروسية قبل الدخول إلى المسار.',
                  'نفس الرُوزنامة: دخول سبتمبر، ودورة فبراير في المؤسسات التي توفّرها.',
                  'نفس السلسلة: القبول، ثم دعوة الدراسة، ثم التأشيرة.',
                ],
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'ما يتغيّر: البعثة القنصلية المختصّة',
            blocks: [
              {
                type: 'p',
                text: 'هذا أول ما يجب تحديده، حتى قبل اختيار الجامعة: أي بعثة دبلوماسية روسية تعالج طلبات تأشيرة الدراسة للمقيمين في ليبيا، وأين يُودع الملف فعليًّا.',
              },
              {
                type: 'p',
                text: 'لا ننشر جوابًا ثابتًا في هذه النقطة، لأن الاختصاص الترابي لمركز قنصلي قد يتغيّر، ومعلومة متجاوَزة قد تُضيّع سداسيًّا كاملًا. تحقّق منها مباشرة لدى البعثة الدبلوماسية الروسية، وأكّد ثلاثة أمور: مكان الإيداع، وقائمة الوثائق المطلوبة، وأجل الحصول على موعد.',
              },
              {
                type: 'strong',
                text: 'ما لم تكن هذه الأجوبة الثلاثة مكتوبة، لا يمكن الاعتماد على أي جدول زمني.',
              },
            ],
          },
          {
            heading: 'توثيق الوثائق الليبية',
            blocks: [
              {
                type: 'p',
                text: 'شهادة التعليم الثانوي الليبية تتبع منطق أي وثيقة أجنبية: يجب توثيقها قبل أن تكون لها قيمة لدى إدارة روسية، ثم ترجمتها. والترتيب مهم، وهو دائمًا نفسه: التوثيق أولًا ثم الترجمة.',
              },
              {
                type: 'p',
                text: 'أما صيغة التوثيق المنطبقة — أبوستيل أو تصديق قنصلي كامل — فتتوقّف على الإطار القانوني الساري بين الدولتين وعلى شروط المركز القنصلي. وهذا سؤال يُطرح ولا يُخمَّن.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'الرحلة: احسب وجود محطة ترانزيت',
            blocks: [
              {
                type: 'p',
                text: 'السفر من ليبيا إلى مدينة جامعية روسية يمرّ في الغالب ببلد ثالث. وأفضل تركيبة تتوقّف على الفصل، وعلى الشركات التي تخدم مطار المغادرة، وعلى مدينة الوصول في روسيا.',
              },
              {
                type: 'p',
                text: 'نصيحتان ملموستان: تحقّق من توفّر الرحلات فعليًّا عند إصدار التأشيرة لا قبل أشهر؛ واستفسر عن شروط العبور في بلد الترانزيت، فقد تفرض إجراءات خاصة حسب مدة التوقّف.',
              },
            ],
          },
          {
            heading: 'الميزانية من منظور ليبي',
            blocks: [
              {
                type: 'p',
                text: 'بنية الميزانية مماثلة لبنية ميزانية أي طالب دولي: معلوم الدراسة السنوي، السكن، التأمين الصحي، التسجيل الإداري، الحياة اليومية. وثلاثة بنود تستحقّ انتباهًا خاصًّا في ملف ليبي.',
              },
              {
                type: 'ul',
                items: [
                  'مصاريف الإجراءات قبل السفر: التوثيق، الترجمة، التأشيرة، التنقّل إلى مكان إيداع الملف.',
                  'تحويل الأموال: الطريقة التي ستستعملها لدفع معاليم الجامعة وتمويل الحياة هناك يجب تحديدها قبل السفر لا بعد الوصول.',
                  'الأسابيع الأولى في روسيا: الفحص الطبي، التأمين، لباس الشتاء، ضمان السكن إن وجد.',
                ],
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'كيف نعمل مع العائلات الليبية',
            blocks: [
              {
                type: 'p',
                text: 'دورنا هو نفسه مع أي عائلة تونسية: تحديد المؤسسات التي تتوافق مواصفاتها فعلًا مع الملف، وتحضير الوثائق بالترتيب الصحيح، ومتابعة القبول ودعوة الدراسة، ثم مواكبة طلب التأشيرة والوصول.',
              },
              {
                type: 'p',
                text: 'لا نَعِد بقبول مضمون ولا بتأشيرة مضمونة: هذه قرارات تعود إلى الجامعات وإلى السلطات القنصلية. ما نضمنه هو ملف كامل، بالترتيب، ومعلومة متحقَّق منها لا مفترَضة.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'هل تقبل الجامعات الروسية شهادة التعليم الثانوي الليبية؟',
            answer:
              'كل جامعة تقدّر بنفسها الشهادات الأجنبية التي تتلقّاها حسب التخصّص المطلوب. وفي كل الحالات يجب توثيق الشهادة وترجمتها. والجواب الملزم الوحيد هو جواب مصلحة القبول الدولي في المؤسسة المستهدفة.',
          },
          {
            question: 'أين يُودع طلب تأشيرة الدراسة عند الإقامة في ليبيا؟',
            answer:
              'الاختصاص الترابي تحدّده السلطات القنصلية الروسية وقد يتغيّر. تحقّق منه لدى البعثة الدبلوماسية الروسية قبل بناء جدولك الزمني، واطلب تأكيد مكان الإيداع وقائمة الوثائق وأجل الموعد.',
          },
          {
            question: 'هل يجب إتقان الروسية للبدء؟',
            answer:
              'لا، إذا مررت بالسنة التحضيرية للغة، فهي موجودة لهذا الغرض بالضبط. وبعض المسارات تُدرَّس بالإنجليزية حسب المؤسسات، وهذا يُتحقَّق منه جامعةً جامعةً لأن العرض يختلف.',
          },
          {
            question: 'هل الميزانية مختلفة عن ميزانية طالب تونسي؟',
            answer:
              'معاليم الدراسة وكلفة الحياة في روسيا لا تتوقّف على الجنسية. ما قد يختلف هو مصاريف الإجراءات قبل السفر وكلفة الرحلة مع محطة ترانزيت.',
          },
        ],
        keywords: [
          'الدراسة في روسيا من ليبيا',
          'طالب ليبي جامعة روسية',
          'تأشيرة دراسة روسيا ليبيا',
          'الطب في روسيا للطلبة الليبيين',
          'توثيق شهادة ليبية روسيا',
          'التسجيل في جامعة روسية من ليبيا',
        ],
      },
      ru: {
        title: 'Учёба в России для абитуриентов из Ливии: процедуры, документы, поддержка | RusStudy',
        description:
          'Руководство для ливийских студентов, рассматривающих учёбу в России: какое консульское учреждение компетентно, удостоверение ливийских документов, доступные направления, реалистичный бюджет и этапы пакета.',
        h1: 'Учёба в России из Ливии: что меняется, а что нет',
        publishedLabel: 'Публикация: октябрь 2026',
        excerpt:
          'Российские вузы применяют к ливийскому абитуриенту те же правила приёма, что и к тунисскому. Отличается административная цепочка до выезда.',
        intro:
          'К нам обращается всё больше ливийских семей, и первый вопрос почти всегда один: «у нас всё иначе?» Со стороны российского вуза — нет: пакет, критерии и календарь те же. Со стороны формальностей до выезда — да, и здесь нужна точность.',
        sections: [
          {
            heading: 'Что не меняется: академический пакет',
            blocks: [
              {
                type: 'p',
                text: 'Российский вуз рассматривает документ о среднем образовании, приложение с оценками, паспорт и, в зависимости от направления, язык обучения. Происхождение абитуриента не меняет ни перечень документов, ни наличие подготовительного года по языку, ни структуру программ.',
              },
              {
                type: 'ul',
                items: [
                  'Те же доступные направления: лечебное дело, стоматология, фармация, инженерия, информационные технологии, экономика.',
                  'Та же возможность подготовительного года русского языка до входа в программу.',
                  'Тот же календарь: сентябрьский набор и февральский в вузах, где он есть.',
                  'Та же цепочка: зачисление, затем приглашение, затем виза.',
                ],
              },
              { type: 'related', slug: 'annee-preparatoire-langue-russe' },
            ],
          },
          {
            heading: 'Что меняется: компетентное консульское учреждение',
            blocks: [
              {
                type: 'p',
                text: 'Это самое первое, что нужно установить, ещё до выбора вуза: какое российское дипломатическое представительство рассматривает заявки на учебную визу для проживающих в Ливии и где физически подаётся пакет.',
              },
              {
                type: 'p',
                text: 'Мы не публикуем фиксированный ответ по этому пункту, потому что территориальная компетенция консульского учреждения может меняться, а устаревшие сведения стоили бы семестра. Проверьте напрямую в российском дипломатическом представительстве и подтвердите три вещи: место подачи, перечень требуемых документов и срок ожидания приёма.',
              },
              {
                type: 'strong',
                text: 'Пока этих трёх ответов нет в письменном виде, ни один график не надёжен.',
              },
            ],
          },
          {
            heading: 'Удостоверение ливийских документов',
            blocks: [
              {
                type: 'p',
                text: 'Ливийский документ о среднем образовании подчиняется той же логике, что любой иностранный документ: сначала удостоверение, иначе он не имеет веса для российского учреждения, затем перевод. Порядок важен и всегда один: сначала удостоверить, затем перевести.',
              },
              {
                type: 'p',
                text: 'Какая форма удостоверения применима — апостиль или полная консульская легализация — зависит от правовых рамок между двумя государствами и от требований консульского учреждения. Это вопрос, который задают, а не угадывают.',
              },
              { type: 'related', slug: 'equivalence-diplome-russe-tunisie' },
            ],
          },
          {
            heading: 'Дорога: рассчитывайте на стыковку',
            blocks: [
              {
                type: 'p',
                text: 'Путь из Ливии в российский университетский город почти всегда проходит через третью страну. Самая удобная комбинация зависит от сезона, от перевозчиков, обслуживающих аэропорт вылета, и от города назначения в России.',
              },
              {
                type: 'p',
                text: 'Два конкретных совета: проверяйте фактическое наличие рейсов в момент выдачи визы, а не за месяцы до него; и уточните условия транзита в стране стыковки — в зависимости от длительности пересадки могут понадобиться собственные формальности.',
              },
            ],
          },
          {
            heading: 'Бюджет с ливийской точки зрения',
            blocks: [
              {
                type: 'p',
                text: 'Структура бюджета та же, что у любого иностранного студента: годовое обучение, жильё, медицинская страховка, административная регистрация, повседневная жизнь. Три позиции в ливийском пакете требуют особого внимания.',
              },
              {
                type: 'ul',
                items: [
                  'Расходы на процедуры до выезда: удостоверения, переводы, виза, поездки к месту подачи.',
                  'Перевод средств: способ оплаты вуза и финансирования жизни на месте нужно определить до выезда, а не выяснять по прибытии.',
                  'Первые недели в России: медосмотр, страховка, зимняя одежда, возможный залог за жильё.',
                ],
              },
              { type: 'related', slug: 'budget-familial-etudes-russie' },
            ],
          },
          {
            heading: 'Как мы работаем с ливийскими семьями',
            blocks: [
              {
                type: 'p',
                text: 'Наша роль та же, что и с тунисской семьёй: подобрать учреждения, профиль которых действительно соответствует пакету, подготовить документы в правильном порядке, провести зачисление и приглашение, затем сопроводить визовую заявку и приезд.',
              },
              {
                type: 'p',
                text: 'Мы не обещаем ни гарантированного зачисления, ни гарантированной визы: эти решения принимают вузы и консульские органы. Мы гарантируем полный пакет в правильном порядке и проверенную, а не предполагаемую информацию.',
              },
              { type: 'related', slug: 'guide-des-parents-etudes-russie' },
            ],
          },
        ],
        faq: [
          {
            question: 'Принимают ли российские вузы ливийский документ о среднем образовании?',
            answer:
              'Каждый вуз сам оценивает получаемые иностранные документы с учётом направления. В любом случае документ должен быть удостоверен и переведён. Обязывающий ответ даёт только отдел международного приёма выбранного учреждения.',
          },
          {
            question: 'Где подаётся заявка на учебную визу при проживании в Ливии?',
            answer:
              'Территориальную компетенцию определяют российские консульские органы, и она может меняться. Проверьте её в российском дипломатическом представительстве до составления календаря и подтвердите место подачи, перечень документов и срок приёма.',
          },
          {
            question: 'Нужно ли знать русский язык для начала?',
            answer:
              'Нет, если вы проходите подготовительный год по языку — он существует именно для этого. Некоторые программы читаются на английском в зависимости от вуза; это проверяется по каждому вузу отдельно, так как предложение различается.',
          },
          {
            question: 'Отличается ли бюджет от бюджета тунисского студента?',
            answer:
              'Стоимость обучения и жизни в России не зависит от гражданства. Отличаться могут расходы на процедуры до выезда и стоимость дороги со стыковкой.',
          },
        ],
        keywords: [
          'учёба в России из Ливии',
          'ливийский студент российский вуз',
          'студенческая виза Россия Ливия',
          'медицина в России ливийский студент',
          'удостоверение ливийского диплома',
          'поступление в российский вуз из Ливии',
        ],
      },
    },
  },
];
