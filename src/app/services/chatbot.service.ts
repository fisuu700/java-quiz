import { Injectable } from '@angular/core';

interface KnowledgeEntry {
  patterns: RegExp[];
  responseEn: string;
  responseFr: string;
  responseAr: string;
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    patterns: [/hello|hi|hey|greetings|good morning|good evening|bonjour|salut|coucou|مرحبا|السلام عليكم|أهلا|صباح الخير/i],
    responseEn: '👋 Hello! Welcome to JavaQuiz, your interactive platform for mastering Java programming! How can I help you today?',
    responseFr: '👋 Bonjour ! Bienvenue sur JavaQuiz, votre plateforme interactive pour maîtriser la programmation Java ! Comment puis-je vous aider ?',
    responseAr: '👋 مرحباً! أهلاً بك في JavaQuiz، منصتك التفاعلية لإتقان برمجة جافا! كيف يمكنني مساعدتك اليوم؟'
  },
  {
    patterns: [/what is (this|javaquiz|the platform)|what (is|does) (this )?(app|platform|site|website)|tell me about|c'est quoi|qu'est-ce que|presente? toi|présente? toi|ما هو|عرفني|عن المنصة|ماهي/i],
    responseEn: 'JavaQuiz is an interactive learning platform designed to help you master Java programming. It features 50 progressive levels with 500+ questions, covering everything from basic syntax to advanced design patterns. You can also upload PDF documents to generate custom quizzes!',
    responseFr: 'JavaQuiz est une plateforme d\'apprentissage interactive conçue pour vous aider à maîtriser la programmation Java. Elle propose 50 niveaux progressifs avec plus de 500 questions, couvrant tout de la syntaxe de base aux motifs de conception avancés. Vous pouvez aussi télécharger des documents PDF pour générer des quiz personnalisés !',
    responseAr: 'JavaQuiz هي منصة تعليمية تفاعلية مصممة لمساعدتك على إتقان برمجة جافا. تتميز بـ ٥٠ مستوى تصاعدياً مع أكثر من ٥٠٠ سؤال، تغطي كل شيء من بناء الجملة الأساسي إلى أنماط التصميم المتقدمة. يمكنك أيضاً تحميل مستندات PDF لإنشاء اختبارات مخصصة!'
  },
  {
    patterns: [/how many (levels|stages)|number of levels|combien (de niveaux|d? levels)|level|niveau|مستوى|كم مستوى|المستويات/i],
    responseEn: 'There are 50 progressive levels in JavaQuiz! Each level contains 10 questions, and you need to score at least 70% to unlock the next one. The levels progress from beginner to expert difficulty.',
    responseFr: 'Il y a 50 niveaux progressifs dans JavaQuiz ! Chaque niveau contient 10 questions, et vous devez obtenir au moins 70% pour débloquer le suivant. Les niveaux vont du débutant à l\'expert.',
    responseAr: 'يوجد ٥٠ مستوى تصاعدياً في JavaQuiz! كل مستوى يحتوي على ١٠ أسئلة، وتحتاج إلى تحقيق ٧٠٪ على الأقل لفتح المستوى التالي. تنتقل المستويات من المبتدئ إلى الخبير.'
  },
  {
    patterns: [/how many questions|number of questions|questions count|combien de questions|أسئلة|كم سؤال/i],
    responseEn: 'JavaQuiz has over 500 questions across 50 levels. Each level has 10 carefully crafted questions covering Java fundamentals, OOP, data structures, algorithms, design patterns, and more!',
    responseFr: 'JavaQuiz propose plus de 500 questions réparties sur 50 niveaux. Chaque niveau contient 10 questions soigneusement conçues couvrant les fondamentaux Java, la POO, les structures de données, les algorithmes, les motifs de conception, et plus !',
    responseAr: 'يحتوي JavaQuiz على أكثر من ٥٠٠ سؤال موزعة على ٥٠ مستوى. كل مستوى يحتوي على ١٠ أسئلة مصممة بعناية تغطي أساسيات جافا، البرمجة كائنية التوجه، هياكل البيانات، الخوارزميات، أنماط التصميم، وأكثر!'
  },
  {
    patterns: [/pass(ing)? (score|rate|mark|grade)?|70%|70 percent|score to (pass|unlock)|réussir|note (de passage|requise)|70 pourcent|درجة النجاح|٧٠٪|نجاح/i],
    responseEn: 'To pass a level and unlock the next one, you need to score at least 70% (7 out of 10 questions correct). Don\'t worry if you fail - you can review the AI feedback and try again!',
    responseFr: 'Pour réussir un niveau et débloquer le suivant, vous devez obtenir au moins 70% (7 bonnes réponses sur 10). Ne vous inquiétez pas si vous échouez - vous pouvez consulter les retours AI et réessayer !',
    responseAr: 'لاجتياز مستوى وفتح المستوى التالي، تحتاج إلى تحقيق ٧٠٪ على الأقل (٧ إجابات صحيحة من ١٠). لا تقلق إذا فشلت - يمكنك مراجعة ملاحظات الذكاء الاصطناعي والمحاولة مرة أخرى!'
  },
  {
    patterns: [/pdf|upload|document|generate (quiz|questions) from|quiz from|تélécharger.*pdf|pdf.*quiz|générer.*pdf|créer.*pdf|PDF/i],
    responseEn: 'The PDF Quiz feature lets you upload any PDF document and JavaQuiz will automatically create a 10-question fill-in-the-blank quiz based on its content. It\'s perfect for studying from textbooks, articles, or any learning material!',
    responseFr: 'La fonction Quiz PDF vous permet de télécharger n\'importe quel document PDF et JavaQuiz créera automatiquement un quiz de 10 questions à trous basé sur son contenu. C\'est parfait pour étudier à partir de manuels, articles ou tout matériel d\'apprentissage !',
    responseAr: 'ميزة اختبار PDF تتيح لك تحميل أي مستند PDF وسيقوم JavaQuiz تلقائياً بإنشاء اختبار من ١٠ أسئلة ملء الفراغات بناءً على محتواه. إنها مثالية للدراسة من الكتب المدرسية أو المقالات أو أي مواد تعليمية!'
  },
  {
    patterns: [/download|install|apk|mobile|app|android|télécharger|installer|apk|mobile|application|تحميل|تثبيت|تطبيق|جوال|أندرويد/i],
    responseEn: 'JavaQuiz is available as a Progressive Web App (PWA) that works in any browser, and you can also download the Android APK from the homepage! The app works offline after the first visit.',
    responseFr: 'JavaQuiz est disponible en tant qu\'application web progressive (PWA) qui fonctionne dans n\'importe quel navigateur, et vous pouvez aussi télécharger l\'APK Android depuis la page d\'accueil ! L\'application fonctionne hors ligne après la première visite.',
    responseAr: 'JavaQuiz متاح كتطبيق ويب تدريجي (PWA) يعمل في أي متصفح، ويمكنك أيضاً تنزيل APK لنظام أندرويد من الصفحة الرئيسية! التطبيق يعمل بدون إنترنت بعد الزيارة الأولى.'
  },
  {
    patterns: [/unlock|next level|how to (unlock|progress)|open next|débloquer|niveau suivant|ouvrir|فتح|المستوى التالي|التقدم/i],
    responseEn: 'You unlock the next level by scoring at least 70% on your current level. Your progress is automatically saved in your browser, so you can continue anytime!',
    responseFr: 'Vous débloquez le niveau suivant en obtenant au moins 70% à votre niveau actuel. Votre progression est automatiquement sauvegardée dans votre navigateur, vous pouvez donc continuer à tout moment !',
    responseAr: 'يمكنك فتح المستوى التالي بتحقيق ٧٠٪ على الأقل في مستواك الحالي. يتم حفظ تقدمك تلقائياً في متصفحك، لذا يمكنك الاستمرار في أي وقت!'
  },
  {
    patterns: [/free|cost|price|pay|subscription|pricing|gratuit|coût|prix|payer|abonnement|مجاني|تكلفة|سعر|دفع|اشتراك/i],
    responseEn: 'JavaQuiz is completely FREE! All 50 levels, 500+ questions, PDF quiz generation, and AI feedback are available at no cost. No subscription or payment required.',
    responseFr: 'JavaQuiz est entièrement GRATUIT ! Les 50 niveaux, plus de 500 questions, la génération de quiz PDF et les retours AI sont disponibles sans aucun coût. Aucun abonnement ni paiement requis.',
    responseAr: 'JavaQuiz مجاني تماماً! جميع المستويات الخمسين، أكثر من ٥٠٠ سؤال، إنشاء اختبارات PDF، وملاحظات الذكاء الاصطناعي متاحة بدون أي تكلفة. لا حاجة لأي اشتراك أو دفع.'
  },
  {
    patterns: [/difficult(y|é)|(beginner|easy|hard|advanced|expert|intermediate)|débutant|avancé|difficile|facile|مبتدئ|متقدم|صعب|سهل/i],
    responseEn: 'JavaQuiz has 4 difficulty levels: Beginner (levels 1-15), Intermediate (levels 16-30), Advanced (levels 31-40), and Expert (levels 41-50). The questions gradually increase in complexity as you progress!',
    responseFr: 'JavaQuiz propose 4 niveaux de difficulté : Débutant (niveaux 1-15), Intermédiaire (niveaux 16-30), Avancé (niveaux 31-40) et Expert (niveaux 41-50). Les questions augmentent progressivement en complexité au fur et à mesure de votre progression !',
    responseAr: 'يقدم JavaQuiz ٤ مستويات صعوبة: مبتدئ (المستويات ١-١٥)، متوسط (المستويات ١٦-٣٠)، متقدم (المستويات ٣١-٤٠)، وخبير (المستويات ٤١-٥٠). تزداد الأسئلة في التعقيد تدريجياً مع تقدمك!'
  },
  {
    patterns: [/java|programming language|why java|about java|langage|جافا|لغة برمجة/i],
    responseEn: 'Java is one of the most popular programming languages in the world, used for web applications, Android apps, enterprise software, and more. JavaQuiz helps you master it step by step through interactive quizzes!',
    responseFr: 'Java est l\'un des langages de programmation les plus populaires au monde, utilisé pour les applications web, les apps Android, les logiciels d\'entreprise, et plus. JavaQuiz vous aide à le maîtriser étape par étape à travers des quiz interactifs !',
    responseAr: 'جافا هي واحدة من أشهر لغات البرمجة في العالم، تستخدم لتطبيقات الويب، تطبيقات أندرويد، البرمجيات المؤسسية، وأكثر. JavaQuiz يساعدك على إتقانها خطوة بخطوة من خلال اختبارات تفاعلية!'
  },
  {
    patterns: [/feature|functionality|what can (i|you) do|what (does|is) this|what is available|fonctionnalité|que (puis-je|peut-on) faire|ميزة|ماذا (يمكنني|أستطيع) (فعله|أن أفعل)/i],
    responseEn: 'JavaQuiz offers: 📚 50 levels of Java quizzes with progressive difficulty, 📄 PDF quiz generation from any document, 🤖 AI-powered feedback on your mistakes, 📱 PWA & Android APK for mobile learning, and 🔒 Offline support after first visit!',
    responseFr: 'JavaQuiz propose : 📚 50 niveaux de quiz Java avec difficulté progressive, 📄 Génération de quiz PDF depuis n\'importe quel document, 🤖 Retours AI sur vos erreurs, 📱 PWA & APK Android pour l\'apprentissage mobile, et 🔒 Support hors ligne après la première visite !',
    responseAr: 'يقدم JavaQuiz: 📚 ٥٠ مستوى من اختبارات جافا بصعوبة تصاعدية، 📄 إنشاء اختبارات PDF من أي مستند، 🤖 ملاحظات الذكاء الاصطناعي على أخطائك، 📱 PWA وتطبيق أندرويد للتعلم المحمول، و 🔒 دعم العمل بدون إنترنت بعد الزيارة الأولى!'
  },
  {
    patterns: [/help|guide|how (do|can) i (use|start)|how to (use|start|begin)|tutorial|aide|comment (utiliser|commencer)|guide|débuter|مساعدة|كيف (أستخدم|أبدأ|أتعلم)|دليل/i],
    responseEn: 'Getting started is easy! Go to the Dashboard, select Level 1, and answer the 10 questions. You need 70% to unlock Level 2. If you get stuck, use the PDF quiz feature to study your materials, then try again!',
    responseFr: 'Pour commencer, c\'est simple ! Allez au Tableau de bord, sélectionnez le Niveau 1 et répondez aux 10 questions. Vous avez besoin de 70% pour débloquer le Niveau 2. Si vous bloquez, utilisez la fonction Quiz PDF pour étudier vos documents, puis réessayez !',
    responseAr: 'البداية سهلة! اذهب إلى لوحة التحكم، اختر المستوى ١، وأجب على ١٠ أسئلة. تحتاج ٧٠٪ لفتح المستوى ٢. إذا واجهت صعوبة، استخدم ميزة اختبار PDF لدراسة موادك، ثم حاول مرة أخرى!'
  },
  {
    patterns: [/feedback|mistake|wrong|error|correction|corriger|faute|erreur|retour|feedback|خطأ|تصحيح|ملاحظات/i],
    responseEn: 'After completing a quiz, you\'ll see AI-powered feedback for each wrong answer. It shows your answer, the correct answer, and an explanation to help you understand the concept better.',
    responseFr: 'Après avoir terminé un quiz, vous verrez des retours AI pour chaque réponse incorrecte. Cela montre votre réponse, la bonne réponse, et une explication pour vous aider à mieux comprendre le concept.',
    responseAr: 'بعد إكمال الاختبار، سترى ملاحظات الذكاء الاصطناعي لكل إجابة خاطئة. تظهر إجابتك، الإجابة الصحيحة، وشرحاً لمساعدتك على فهم المفهوم بشكل أفضل.'
  },
  {
    patterns: [/progress|save|continue|resume|persist|history|sauvegarder|continuer|progresser|تقدم|حفظ|استمرار|سجل/i],
    responseEn: 'Your progress is automatically saved in your browser\'s local storage. This means you can close the app and come back anytime - you\'ll continue right where you left off!',
    responseFr: 'Votre progression est automatiquement sauvegardée dans le stockage local de votre navigateur. Vous pouvez fermer l\'application et revenir à tout moment - vous continuerez là où vous vous êtes arrêté !',
    responseAr: 'يتم حفظ تقدمك تلقائياً في التخزين المحلي للمتصفح. يمكنك إغلاق التطبيق والعودة في أي وقت - ستستمر من حيث توقفت!'
  },
  {
    patterns: [/thank|thanks|merci|شكرا/i],
    responseEn: 'You\'re welcome! 😊 Happy learning with JavaQuiz! If you have any more questions, feel free to ask.',
    responseFr: 'De rien ! 😊 Bon apprentissage avec JavaQuiz ! Si vous avez d\'autres questions, n\'hésitez pas à demander.',
    responseAr: 'على الرحب والسعة! 😊 تعلم سعيد مع JavaQuiz! إذا كان لديك أي أسئلة أخرى، فلا تتردد في السؤال.'
  },
  {
    patterns: [/bye|goodbye|au revoir|à bientôt|مع السلامة|وداعا/i],
    responseEn: 'Goodbye! 🚀 Keep coding and see you next time on JavaQuiz!',
    responseFr: 'Au revoir ! 🚀 Continuez à coder et à bientôt sur JavaQuiz !',
    responseAr: 'مع السلامة! 🚀 استمر في البرمجة ونراكم قريباً على JavaQuiz!'
  }
];

const fallbackEn = 'I\'m not sure I understood your question. Try asking about: levels, questions, passing score, PDF quiz, features, difficulty, or how to get started!';
const fallbackFr = 'Je ne suis pas sûr d\'avoir compris votre question. Essayez de demander : niveaux, questions, note de passage, quiz PDF, fonctionnalités, difficulté, ou comment commencer !';
const fallbackAr = 'لست متأكداً أنني فهمت سؤالك. حاول أن تسأل عن: المستويات، الأسئلة، درجة النجاح، اختبار PDF، الميزات، الصعوبة، أو كيفية البدء!';

@Injectable({ providedIn: 'root' })
export class ChatbotService {

  getResponse(query: string, lang: string): string {
    const normalized = query.toLowerCase().trim();

    for (const entry of knowledgeBase) {
      for (const pattern of entry.patterns) {
        if (pattern.test(normalized)) {
          switch (lang) {
            case 'fr': return entry.responseFr;
            case 'ar': return entry.responseAr;
            default: return entry.responseEn;
          }
        }
      }
    }

    switch (lang) {
      case 'fr': return fallbackFr;
      case 'ar': return fallbackAr;
      default: return fallbackEn;
    }
  }
}
