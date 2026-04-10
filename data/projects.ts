import bashraAiCover from "@/public/projects/covers/Bashra Ai.png";
import dalilkCover from "@/public/projects/covers/Dalilk.png";
import dermaAiCover from "@/public/projects/covers/Derma Ai.png";
import healthoGymCover from "@/public/projects/covers/Healtho Gym.png";
import moazezAppCover from "@/public/projects/covers/Moazez App.png";
import moazezWebCover from "@/public/projects/covers/Moazez_website.png";
import mshwarCover from "@/public/projects/covers/Mshwar.png";
import multqiElnorCover from "@/public/projects/covers/multqi_elnor.png";
import zakroonCover from "@/public/projects/covers/zakroon.png";

import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "bashra-ai",
    name: "Bashra AI",
    shortDescription: {
      en: "An AI-assisted beauty consultation platform combining a premium web funnel with a mobile care experience.",
      ar: "منصة استشارات تجميل مدعومة بالذكاء الاصطناعي تجمع بين تجربة ويب تسويقية راقية وتطبيق متابعة على الموبايل.",
    },
    detailedDescription: {
      en: "Bashra AI was positioned as a premium beauty-tech product that needed to feel trustworthy, modern, and commercially polished. The engagement combined landing-page conversion strategy, mobile product design, and a strong technical foundation for personalized care flows.",
      ar: "تموضع Bashra AI كمنتج تجميلي تقني يحتاج إلى الثقة والحداثة وصورة تجارية راقية. جمع المشروع بين استراتيجية تحويل قوية على الويب وتصميم منتج موبايل وبنية تقنية تدعم مسارات رعاية شخصية.",
    },
    categoryKey: "ai",
    category: {
      en: "AI Product",
      ar: "منتج ذكاء اصطناعي",
    },
    industryKey: "healthcare",
    industry: {
      en: "Beauty & healthcare",
      ar: "التجميل والرعاية الصحية",
    },
    coverImage: bashraAiCover,
    gallery: [
      {
        src: bashraAiCover,
        alt: {
          en: "Bashra AI brand cover",
          ar: "غلاف مشروع Bashra AI",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Premium beauty consultation visual",
          ar: "مشهد بصري لتجربة استشارة تجميل راقية",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Healthcare technology workflow visual",
          ar: "مشهد يعكس تدفقاً تقنياً في قطاع الرعاية",
        },
      },
    ],
    serviceSlugs: [
      "ui-ux-design",
      "web-system-development",
      "mobile-application-development",
      "software-testing-qa",
    ],
    techStack: ["Next.js", "Flutter", "TypeScript", "Firebase", "Analytics"],
    features: {
      en: [
        "AI-guided consultation flow",
        "Mobile after-care dashboard",
        "Lead capture and qualification funnel",
        "Appointment and routine touchpoints",
        "Bilingual-ready product structure",
      ],
      ar: [
        "مسار استشارة موجّه بالذكاء الاصطناعي",
        "لوحة متابعة بعد الاستشارة على الموبايل",
        "قمع لالتقاط وتأهيل العملاء",
        "نقاط تواصل للمواعيد والروتين",
        "هيكل منتج جاهز للثنائية اللغوية",
      ],
    },
    challenges: [
      {
        title: {
          en: "Building trust around an AI-led service",
          ar: "بناء الثقة حول خدمة يقودها الذكاء الاصطناعي",
        },
        description: {
          en: "The experience needed to feel premium and medically informed without becoming cold or overly technical.",
          ar: "كان يجب أن تبدو التجربة راقية وواعية طبياً دون أن تصبح باردة أو معقدة تقنياً.",
        },
      },
      {
        title: {
          en: "Connecting conversion with product depth",
          ar: "ربط التحويل بعمق المنتج",
        },
        description: {
          en: "The landing journey had to convert quickly while still preparing users for a richer mobile follow-up experience.",
          ar: "كان على رحلة الويب أن تحقّق التحويل بسرعة مع تجهيز المستخدم لتجربة متابعة أعمق على الموبايل.",
        },
      },
    ],
    solutions: [
      {
        title: {
          en: "Premium funnel architecture",
          ar: "هندسة قمع تحويل راقٍ",
        },
        description: {
          en: "We created a layered landing experience with high-trust storytelling, strong visual cues, and focused CTAs.",
          ar: "أنشأنا تجربة هبوط متعددة الطبقات بسرد عالي الثقة وإشارات بصرية واضحة ودعوات مركزة للتحويل.",
        },
      },
      {
        title: {
          en: "Companion mobile flow",
          ar: "مسار موبايل مكمّل",
        },
        description: {
          en: "The mobile app was framed as the continuity layer where users track routines, outcomes, and guided next steps.",
          ar: "تمت صياغة تطبيق الموبايل كطبقة استمرارية يتابع فيها المستخدم الروتين والنتائج والخطوات الموصى بها.",
        },
      },
    ],
    results: [
      {
        value: "+38%",
        label: {
          en: "lead qualification rate",
          ar: "معدل تأهيل العملاء",
        },
        description: {
          en: "Sharper conversion flow and clearer trust cues improved inquiry quality.",
          ar: "أسهم مسار التحويل الأوضح وعناصر الثقة في رفع جودة الاستفسارات.",
        },
      },
      {
        value: "4.8/5",
        label: {
          en: "prototype satisfaction",
          ar: "رضا عن النموذج",
        },
        description: {
          en: "Stakeholder review sessions consistently rated the design direction as premium and intuitive.",
          ar: "قيّمت جلسات المراجعة اتجاه التصميم بأنه راقٍ وسهل الفهم بشكل متكرر.",
        },
      },
      {
        value: "12 weeks",
        label: {
          en: "delivery timeline",
          ar: "مدة التنفيذ",
        },
        description: {
          en: "A phased rollout covered strategy, design, frontend, QA, and launch prep.",
          ar: "شمل التنفيذ على مراحل الاستراتيجية والتصميم والواجهة والاختبار وتجهيز الإطلاق.",
        },
      },
    ],
    timeline: {
      en: "12-week phased delivery",
      ar: "تنفيذ مرحلي خلال 12 أسبوعاً",
    },
    projectType: "website-mobile",
    links: {
      website: "https://bashra-ai.example.com",
      googlePlay: "https://play.google.com/store/apps/details?id=com.blackfalcon.bashraai",
      appStore: "https://apps.apple.com/app/id650000001",
      caseStudy: "https://behance.net/gallery/blackfalcon-bashra-ai",
    },
    heroAccent: "#ff9d3c",
    relatedProjectSlugs: ["derma-ai", "healtho-gym", "moazez-app"],
    featured: true,
  },
  {
    slug: "dalilk",
    name: "Dalilk",
    shortDescription: {
      en: "A service discovery platform with strong information architecture, filtering, and trust-driven content.",
      ar: "منصة لاكتشاف الخدمات بهندسة معلومات قوية وفلاتر واضحة ومحتوى يعزز الثقة.",
    },
    detailedDescription: {
      en: "Dalilk was structured as a discovery-focused web platform that needed to balance searchability, clarity, and conversion. The product had to feel useful at first glance while still handling content density gracefully.",
      ar: "صُمم Dalilk كمنصة ويب تركز على الاكتشاف، وكان مطلوباً أن توازن بين سهولة البحث والوضوح والتحويل. كما كان يجب أن تكون مفيدة من أول نظرة مع التعامل مع كثافة المحتوى بسلاسة.",
    },
    categoryKey: "platform",
    category: {
      en: "Discovery platform",
      ar: "منصة اكتشاف",
    },
    industryKey: "business",
    industry: {
      en: "Business services",
      ar: "خدمات الأعمال",
    },
    coverImage: dalilkCover,
    gallery: [
      {
        src: dalilkCover,
        alt: {
          en: "Dalilk platform cover",
          ar: "غلاف منصة Dalilk",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Business data browsing interface visual",
          ar: "صورة توحي بواجهة تصفح بيانات أعمال",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Collaborative operations planning visual",
          ar: "صورة تعكس تخطيطاً تعاونياً للعمليات",
        },
      },
    ],
    serviceSlugs: [
      "web-system-development",
      "website-design",
      "ui-ux-design",
      "devops-server-management",
    ],
    techStack: ["Next.js", "TypeScript", "Search indexing", "CMS-ready content model", "Vercel"],
    features: {
      en: [
        "Multi-criteria filtering",
        "Structured listing detail pages",
        "Search-first information architecture",
        "Content modules for editorial updates",
        "Responsive discovery flow",
      ],
      ar: [
        "فلاتر متعددة المعايير",
        "صفحات تفاصيل منظمة للعناصر",
        "هندسة معلومات مبنية على البحث",
        "وحدات محتوى قابلة للتحديث",
        "تجربة اكتشاف متجاوبة",
      ],
    },
    challenges: [
      {
        title: {
          en: "Avoiding content overload",
          ar: "تجنب إرهاق المستخدم بالمحتوى",
        },
        description: {
          en: "The product had to present many options without feeling crowded or hard to navigate.",
          ar: "كان على المنتج عرض عدد كبير من الخيارات دون أن يبدو مزدحماً أو صعب التصفح.",
        },
      },
      {
        title: {
          en: "Making trust visible",
          ar: "إظهار الثقة بصرياً",
        },
        description: {
          en: "Users needed quick signals around relevance, credibility, and next actions.",
          ar: "كان المستخدم بحاجة إلى إشارات سريعة توضح الملاءمة والمصداقية والخطوة التالية.",
        },
      },
    ],
    solutions: [
      {
        title: {
          en: "Progressive discovery layers",
          ar: "طبقات اكتشاف تدريجية",
        },
        description: {
          en: "We organized the browsing experience so users could move from broad exploration to qualified detail naturally.",
          ar: "نظمنا التجربة بحيث ينتقل المستخدم من الاستكشاف العام إلى التفاصيل المؤهلة بشكل طبيعي.",
        },
      },
      {
        title: {
          en: "Conversion-ready page structure",
          ar: "هيكل صفحات جاهز للتحويل",
        },
        description: {
          en: "Every result detail page was structured around proof, CTA logic, and friction reduction.",
          ar: "صممنا صفحات التفاصيل حول البراهين والدعوات الواضحة وتقليل الاحتكاك.",
        },
      },
    ],
    results: [
      {
        value: "2.1x",
        label: {
          en: "deeper session engagement",
          ar: "زيادة عمق التفاعل",
        },
        description: {
          en: "The improved structure encouraged users to move past the first listing layer.",
          ar: "شجعت البنية الجديدة المستخدمين على التعمق بعد طبقة التصفح الأولى.",
        },
      },
      {
        value: "-31%",
        label: {
          en: "navigation confusion",
          ar: "انخفاض الالتباس في التصفح",
        },
        description: {
          en: "Stakeholder testing showed smoother movement through categories and results.",
          ar: "أظهرت اختبارات المراجعة سلاسة أعلى في الانتقال بين الفئات والنتائج.",
        },
      },
      {
        value: "10 weeks",
        label: {
          en: "delivery window",
          ar: "فترة التنفيذ",
        },
        description: {
          en: "A fast execution cycle covered UX definition, premium UI, and frontend implementation.",
          ar: "غطت دورة سريعة تعريف UX والتصميم الراقي وتنفيذ الواجهة.",
        },
      },
    ],
    timeline: {
      en: "10-week platform launch",
      ar: "إطلاق المنصة خلال 10 أسابيع",
    },
    projectType: "website",
    links: {
      website: "https://dalilk.example.com",
      caseStudy: "https://behance.net/gallery/blackfalcon-dalilk",
    },
    heroAccent: "#f59e0b",
    relatedProjectSlugs: ["moazez-web", "multqi-elnor", "zakroon"],
    featured: true,
  },
  {
    slug: "derma-ai",
    name: "Derma AI",
    shortDescription: {
      en: "A diagnostic guidance concept for dermatology services spanning web onboarding and mobile continuity.",
      ar: "مفهوم منتج للإرشاد التشخيصي في الجلدية يجمع بين Onboarding الويب واستمرارية الموبايل.",
    },
    detailedDescription: {
      en: "Derma AI explored how an AI-informed dermatology product could feel clinically trustworthy while remaining usable for everyday consumers. The solution balanced a premium interface language with disciplined product flow and health-tech positioning.",
      ar: "استكشف مشروع Derma AI كيف يمكن لمنتج جلدية مدعوم بالذكاء الاصطناعي أن يبدو موثوقاً طبياً وسهل الاستخدام للمستخدم اليومي. وازن الحل بين لغة واجهة راقية وتدفق منتج منضبط وتموضع صحي تقني.",
    },
    categoryKey: "ai",
    category: {
      en: "Clinical AI experience",
      ar: "تجربة ذكاء اصطناعي علاجية",
    },
    industryKey: "healthcare",
    industry: {
      en: "Healthcare",
      ar: "الرعاية الصحية",
    },
    coverImage: dermaAiCover,
    gallery: [
      {
        src: dermaAiCover,
        alt: {
          en: "Derma AI project cover",
          ar: "غلاف مشروع Derma AI",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Medical consultation visual",
          ar: "مشهد يعكس استشارة طبية",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Mobile healthcare product visual",
          ar: "مشهد يعكس منتج رعاية صحية على الموبايل",
        },
      },
    ],
    serviceSlugs: [
      "ui-ux-design",
      "mobile-application-development",
      "web-system-development",
      "software-testing-qa",
    ],
    techStack: ["Next.js", "Flutter", "TypeScript", "Healthcare workflows", "Analytics"],
    features: {
      en: [
        "Clinical intake flow",
        "Personalized guidance states",
        "Mobile tracking companion",
        "Trust-driven interface language",
        "Health-oriented content modules",
      ],
      ar: [
        "مسار إدخال معلومات علاجي",
        "حالات إرشاد شخصية",
        "تطبيق متابعة على الموبايل",
        "لغة واجهة تعزز الثقة",
        "وحدات محتوى موجهة للصحة",
      ],
    },
    challenges: [
      {
        title: {
          en: "Sensitive product positioning",
          ar: "تموضع منتج حساس",
        },
        description: {
          en: "The product needed to communicate care and accuracy without making promises it could not substantiate.",
          ar: "كان على المنتج أن يوصل العناية والدقة دون مبالغات أو وعود غير واقعية.",
        },
      },
      {
        title: {
          en: "Balancing reassurance and speed",
          ar: "الموازنة بين الطمأنة والسرعة",
        },
        description: {
          en: "Users needed confidence-building detail, but the interaction still had to feel lightweight.",
          ar: "احتاج المستخدم إلى تفاصيل تبني الثقة مع بقاء التفاعل خفيفاً وسريعاً.",
        },
      },
    ],
    solutions: [
      {
        title: {
          en: "Precision-led visual hierarchy",
          ar: "هرمية بصرية دقيقة",
        },
        description: {
          en: "We used spacing, typography, and structured cards to make the experience feel careful and credible.",
          ar: "استخدمنا المساحات والخطوط والبطاقات المنظمة ليبدو المنتج حذراً وموثوقاً.",
        },
      },
      {
        title: {
          en: "Guided mobile continuity",
          ar: "استمرارية موجّهة على الموبايل",
        },
        description: {
          en: "The app framed next steps, follow-ups, and progress in a calm, clear manner.",
          ar: "قدّم التطبيق الخطوات التالية والمتابعات والتقدّم بطريقة هادئة وواضحة.",
        },
      },
    ],
    results: [
      {
        value: "89%",
        label: {
          en: "test flow completion",
          ar: "إكمال التدفق الاختباري",
        },
        description: {
          en: "Prototype testing showed strong completion across the key intake journey.",
          ar: "أظهرت الاختبارات إكمالاً مرتفعاً لمسار الإدخال الرئيسي.",
        },
      },
      {
        value: "-27%",
        label: {
          en: "decision hesitation",
          ar: "انخفاض التردد",
        },
        description: {
          en: "Clearer guidance states reduced uncertainty during the consultation flow.",
          ar: "قلّلت حالات الإرشاد الأوضح من التردد أثناء مسار الاستشارة.",
        },
      },
      {
        value: "11 weeks",
        label: {
          en: "design-to-build cycle",
          ar: "دورة التصميم إلى التنفيذ",
        },
        description: {
          en: "The full flow moved quickly while preserving clinical tone and product clarity.",
          ar: "تحرك التنفيذ بسرعة مع الحفاظ على النبرة العلاجية ووضوح المنتج.",
        },
      },
    ],
    timeline: {
      en: "11-week concept-to-product cycle",
      ar: "دورة من الفكرة إلى المنتج خلال 11 أسبوعاً",
    },
    projectType: "website-mobile",
    links: {
      website: "https://derma-ai.example.com",
      googlePlay: "https://play.google.com/store/apps/details?id=com.blackfalcon.dermaai",
      appStore: "https://apps.apple.com/app/id650000002",
    },
    heroAccent: "#ffb45e",
    relatedProjectSlugs: ["bashra-ai", "healtho-gym", "zakroon"],
  },
  {
    slug: "healtho-gym",
    name: "Healtho Gym",
    shortDescription: {
      en: "A fitness platform unifying membership journeys, performance content, and a companion mobile app.",
      ar: "منصة لياقة توحّد رحلات الاشتراك والمحتوى والأداء مع تطبيق موبايل مكمّل.",
    },
    detailedDescription: {
      en: "Healtho Gym needed to feel aspirational and operational at the same time. The product experience had to support membership conversion, routine engagement, and app-led retention without losing brand energy.",
      ar: "احتاج Healtho Gym إلى الجمع بين الطموح والبعد التشغيلي في نفس الوقت. كان على التجربة دعم تحويل الاشتراكات والتفاعل مع الروتين والاحتفاظ عبر التطبيق دون فقدان طاقة العلامة.",
    },
    categoryKey: "platform",
    category: {
      en: "Fitness platform",
      ar: "منصة لياقة",
    },
    industryKey: "fitness",
    industry: {
      en: "Fitness & wellness",
      ar: "اللياقة والعافية",
    },
    coverImage: healthoGymCover,
    gallery: [
      {
        src: healthoGymCover,
        alt: {
          en: "Healtho Gym project cover",
          ar: "غلاف مشروع Healtho Gym",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Fitness lifestyle visual",
          ar: "مشهد يعكس أسلوب حياة رياضي",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Workout tracking product visual",
          ar: "مشهد يوحي بمنتج لتتبع التمارين",
        },
      },
    ],
    serviceSlugs: [
      "website-design",
      "ui-ux-design",
      "mobile-application-development",
      "software-testing-qa",
    ],
    techStack: ["Next.js", "Flutter", "TypeScript", "Membership workflows", "Push notifications"],
    features: {
      en: [
        "Membership signup funnel",
        "Training content hub",
        "Habit and progress tracking",
        "Trainer communication touchpoints",
        "Cross-device product consistency",
      ],
      ar: [
        "قمع تسجيل الاشتراكات",
        "مكتبة محتوى التدريب",
        "تتبع العادات والتقدم",
        "نقاط تواصل مع المدربين",
        "اتساق المنتج عبر الأجهزة",
      ],
    },
    challenges: [
      {
        title: {
          en: "Blending energy with clarity",
          ar: "دمج الحماس مع الوضوح",
        },
        description: {
          en: "The brand needed momentum and intensity while still making the product easy to navigate.",
          ar: "احتاجت العلامة إلى طاقة وحيوية مع بقاء المنتج سهل التصفح والفهم.",
        },
      },
      {
        title: {
          en: "Keeping engagement after signup",
          ar: "الحفاظ على التفاعل بعد التسجيل",
        },
        description: {
          en: "The experience had to move users from subscription intent into sustained routine usage.",
          ar: "كان على التجربة نقل المستخدم من نية الاشتراك إلى الاستمرار الفعلي في الاستخدام.",
        },
      },
    ],
    solutions: [
      {
        title: {
          en: "Layered conversion design",
          ar: "تصميم تحويل متعدد الطبقات",
        },
        description: {
          en: "We built a web funnel that combined membership proof, community energy, and practical plan clarity.",
          ar: "بنيناً مسار ويب يجمع بين براهين الاشتراك وطاقة المجتمع ووضوح الباقات.",
        },
      },
      {
        title: {
          en: "Retention-focused mobile UX",
          ar: "UX يركز على الاحتفاظ",
        },
        description: {
          en: "The app centered routines, reminders, and visible progress to keep momentum alive.",
          ar: "ركز التطبيق على الروتين والتذكيرات وإظهار التقدم للحفاظ على الاستمرارية.",
        },
      },
    ],
    results: [
      {
        value: "+44%",
        label: {
          en: "membership intent",
          ar: "ارتفاع نية الاشتراك",
        },
        description: {
          en: "Sharper landing hierarchy improved CTA engagement across primary plans.",
          ar: "حسّنت الهرمية الأوضح في الواجهة التفاعل مع الدعوات الخاصة بالباقات الأساسية.",
        },
      },
      {
        value: "3.2x",
        label: {
          en: "repeat app sessions",
          ar: "جلسات التطبيق المتكررة",
        },
        description: {
          en: "The routine and progress flows made the mobile experience feel habit-forming.",
          ar: "جعلت مسارات الروتين والتقدم تجربة التطبيق أكثر قابلية للاعتياد.",
        },
      },
      {
        value: "9 weeks",
        label: {
          en: "launch sprint",
          ar: "مدة الإطلاق",
        },
        description: {
          en: "A focused launch track connected website, app, and QA readiness efficiently.",
          ar: "ربط مسار إطلاق مركز بين الموقع والتطبيق والاختبار بكفاءة.",
        },
      },
    ],
    timeline: {
      en: "9-week launch sprint",
      ar: "مسار إطلاق خلال 9 أسابيع",
    },
    projectType: "website-mobile",
    links: {
      website: "https://healtho-gym.example.com",
      googlePlay: "https://play.google.com/store/apps/details?id=com.blackfalcon.healthogym",
      appStore: "https://apps.apple.com/app/id650000003",
    },
    heroAccent: "#ff8f2f",
    relatedProjectSlugs: ["bashra-ai", "moazez-app", "mshwar"],
    featured: true,
  },
  {
    slug: "moazez-app",
    name: "Moazez App",
    shortDescription: {
      en: "A community-centric mobile application built to strengthen engagement, participation, and recurring use.",
      ar: "تطبيق موبايل مجتمعي صُمم لتعزيز التفاعل والمشاركة والعودة المتكررة.",
    },
    detailedDescription: {
      en: "Moazez App focused on mobile-first community engagement. The challenge was to make the experience feel active and welcoming while giving the platform enough structure to scale content, updates, and user participation.",
      ar: "ركز مشروع Moazez App على التفاعل المجتمعي من منظور mobile-first. كان التحدي هو جعل التجربة نشطة ومرحبّة مع منح المنصة هيكلاً كافياً للتوسع في المحتوى والتحديثات والمشاركة.",
    },
    categoryKey: "community",
    category: {
      en: "Community app",
      ar: "تطبيق مجتمعي",
    },
    industryKey: "community",
    industry: {
      en: "Community & engagement",
      ar: "المجتمع والتفاعل",
    },
    coverImage: moazezAppCover,
    gallery: [
      {
        src: moazezAppCover,
        alt: {
          en: "Moazez App cover",
          ar: "غلاف Moazez App",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Community connection visual",
          ar: "مشهد يعكس التواصل المجتمعي",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Mobile social interaction visual",
          ar: "مشهد يوحي بتفاعل اجتماعي عبر الموبايل",
        },
      },
    ],
    serviceSlugs: [
      "mobile-application-development",
      "ui-ux-design",
      "software-testing-qa",
    ],
    techStack: ["Flutter", "Firebase", "Push notifications", "Analytics", "Content modules"],
    features: {
      en: [
        "Community feed modules",
        "Event and update touchpoints",
        "Push-led re-engagement flow",
        "Structured member participation",
        "Retention-aware mobile UX",
      ],
      ar: [
        "وحدات تغذية مجتمعية",
        "نقاط تفاعل للأحداث والتحديثات",
        "مسار إعادة تفاعل بالإشعارات",
        "مشاركة أعضاء منظمة",
        "UX يراعي الاحتفاظ",
      ],
    },
    challenges: [
      {
        title: {
          en: "Keeping the experience alive",
          ar: "الحفاظ على حيوية التجربة",
        },
        description: {
          en: "Community products quickly lose momentum when update patterns and visual hierarchy are weak.",
          ar: "تفقد المنتجات المجتمعية زخمها بسرعة عندما تكون أنماط التحديث والهرمية البصرية ضعيفة.",
        },
      },
      {
        title: {
          en: "Designing for recurring use",
          ar: "التصميم للاستخدام المتكرر",
        },
        description: {
          en: "The product needed to create enough freshness and clarity to bring users back often.",
          ar: "كان على المنتج أن يقدّم قدراً كافياً من التجدد والوضوح ليشجع على العودة المتكررة.",
        },
      },
    ],
    solutions: [
      {
        title: {
          en: "Modular feed architecture",
          ar: "بنية تغذية معيارية",
        },
        description: {
          en: "We organized content into digestible modules with clear priorities and stronger motion cues.",
          ar: "نظمنا المحتوى في وحدات سهلة الفهم بأولويات واضحة وإشارات حركة أقوى.",
        },
      },
      {
        title: {
          en: "Retention-focused communication",
          ar: "تواصل يركز على الاحتفاظ",
        },
        description: {
          en: "We built the mobile experience around useful prompts, updates, and quick interaction loops.",
          ar: "بنينا التجربة حول تنبيهات مفيدة وتحديثات وحلقات تفاعل سريعة.",
        },
      },
    ],
    results: [
      {
        value: "+52%",
        label: {
          en: "returning users",
          ar: "زيادة المستخدمين العائدين",
        },
        description: {
          en: "The revised interaction loop encouraged stronger repeat visits.",
          ar: "شجعت حلقة التفاعل الجديدة على عودة المستخدمين بشكل أوضح.",
        },
      },
      {
        value: "4.7/5",
        label: {
          en: "mobile UX feedback",
          ar: "تقييم تجربة الموبايل",
        },
        description: {
          en: "Pilot users responded positively to the app’s clarity and energy.",
          ar: "استجاب المستخدمون التجريبيون بإيجابية لوضوح التطبيق وحيويته.",
        },
      },
      {
        value: "8 weeks",
        label: {
          en: "build duration",
          ar: "مدة التنفيذ",
        },
        description: {
          en: "The product moved from flow design to mobile QA in a compact timeframe.",
          ar: "انتقل المنتج من تصميم التدفقات إلى اختبار الموبايل خلال فترة مركزة.",
        },
      },
    ],
    timeline: {
      en: "8-week mobile release",
      ar: "إطلاق موبايل خلال 8 أسابيع",
    },
    projectType: "mobile",
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.blackfalcon.moazez",
      appStore: "https://apps.apple.com/app/id650000004",
    },
    heroAccent: "#ff9f50",
    relatedProjectSlugs: ["moazez-web", "healtho-gym", "multqi-elnor"],
  },
  {
    slug: "moazez-web",
    name: "Moazez Website",
    shortDescription: {
      en: "A brand and acquisition website created to support the wider Moazez product ecosystem.",
      ar: "موقع علامة وتحويل صُمم لدعم منظومة Moazez الرقمية الأوسع.",
    },
    detailedDescription: {
      en: "Moazez Website acted as the public-facing gateway for a larger community product. It needed to communicate purpose, value, and momentum quickly, while preparing users to move toward the mobile experience.",
      ar: "عمل موقع Moazez كواجهة عامة لمنتج مجتمعي أكبر. وكان مطلوباً أن يوصل الهدف والقيمة والزخم بسرعة، مع تهيئة المستخدم للانتقال إلى تجربة الموبايل.",
    },
    categoryKey: "brand",
    category: {
      en: "Brand website",
      ar: "موقع علامة",
    },
    industryKey: "community",
    industry: {
      en: "Community & engagement",
      ar: "المجتمع والتفاعل",
    },
    coverImage: moazezWebCover,
    gallery: [
      {
        src: moazezWebCover,
        alt: {
          en: "Moazez Website cover",
          ar: "غلاف موقع Moazez",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Modern digital brand workspace visual",
          ar: "مشهد يعكس مساحة عمل رقمية حديثة",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Presentation-led website visual",
          ar: "مشهد يوحي بموقع عرض احترافي",
        },
      },
    ],
    serviceSlugs: ["website-design", "ui-ux-design", "web-system-development"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion design", "SEO"],
    features: {
      en: [
        "Brand-first landing structure",
        "Community proof blocks",
        "App conversion pathways",
        "Narrative-rich content flow",
        "Responsive performance-focused build",
      ],
      ar: [
        "هيكل هبوط مبني على العلامة",
        "كتل إثبات للمجتمع",
        "مسارات تحويل إلى التطبيق",
        "تدفق محتوى غني بالسرد",
        "بناء متجاوب يركز على الأداء",
      ],
    },
    challenges: [
      {
        title: {
          en: "Selling a growing ecosystem",
          ar: "عرض منظومة في طور النمو",
        },
        description: {
          en: "The website had to communicate more than a single feature set; it had to present a movement and product direction.",
          ar: "كان على الموقع أن يبيع أكثر من ميزة واحدة؛ بل أن يعرض توجهاً ومنظومة متنامية.",
        },
      },
      {
        title: {
          en: "Connecting brand and product",
          ar: "ربط العلامة بالمنتج",
        },
        description: {
          en: "The site needed a smooth bridge between public brand messaging and in-app action.",
          ar: "كان على الموقع أن يصنع جسراً سلساً بين رسائل العلامة العامة والاستخدام داخل التطبيق.",
        },
      },
    ],
    solutions: [
      {
        title: {
          en: "High-trust landing narrative",
          ar: "سرد هبوط يعزز الثقة",
        },
        description: {
          en: "We positioned the website around clarity, community proof, and strong directional CTAs.",
          ar: "تمحور الموقع حول الوضوح والبراهين المجتمعية والدعوات القوية للتقدم.",
        },
      },
      {
        title: {
          en: "Shared visual language",
          ar: "لغة بصرية موحدة",
        },
        description: {
          en: "The site mirrored the energy and tone of the mobile product so the journey felt cohesive.",
          ar: "عكس الموقع نفس طاقة ونبرة التطبيق ليشعر المستخدم باتساق الرحلة.",
        },
      },
    ],
    results: [
      {
        value: "+41%",
        label: {
          en: "app interest lift",
          ar: "ارتفاع الاهتمام بالتطبيق",
        },
        description: {
          en: "Clearer web positioning improved app-click intent from new visitors.",
          ar: "أسهم التموضع الأوضح على الويب في رفع نية الانتقال للتطبيق لدى الزوار الجدد.",
        },
      },
      {
        value: "-24%",
        label: {
          en: "bounce reduction",
          ar: "انخفاض الارتداد",
        },
        description: {
          en: "A stronger visual rhythm and narrative flow reduced early exits.",
          ar: "خفض الإيقاع البصري الأقوى والتدفق السردي الواضح الخروج المبكر.",
        },
      },
      {
        value: "6 weeks",
        label: {
          en: "delivery cycle",
          ar: "دورة التنفيذ",
        },
        description: {
          en: "A lean production cycle supported a fast public-facing launch.",
          ar: "دعم مسار إنتاج رشيق إطلاقاً عاماً سريعاً.",
        },
      },
    ],
    timeline: {
      en: "6-week website rollout",
      ar: "إطلاق الموقع خلال 6 أسابيع",
    },
    projectType: "website",
    links: {
      website: "https://moazez.example.com",
    },
    heroAccent: "#f7a14a",
    relatedProjectSlugs: ["moazez-app", "multqi-elnor", "dalilk"],
  },
  {
    slug: "mshwar",
    name: "Mshwar",
    shortDescription: {
      en: "A mobility and operations product for coordinating trips, requests, and service visibility across channels.",
      ar: "منتج للتنقل والعمليات ينسق الرحلات والطلبات ووضوح الخدمة عبر القنوات المختلفة.",
    },
    detailedDescription: {
      en: "Mshwar required a strong operations mindset. The product experience had to support real-world coordination, status clarity, and multi-step interactions across website and mobile contexts.",
      ar: "احتاج Mshwar إلى عقلية تشغيلية واضحة. كان على التجربة أن تدعم التنسيق الواقعي ووضوح الحالة والتفاعلات متعددة الخطوات عبر الويب والموبايل.",
    },
    categoryKey: "operations",
    category: {
      en: "Operations platform",
      ar: "منصة تشغيلية",
    },
    industryKey: "mobility",
    industry: {
      en: "Mobility",
      ar: "التنقل",
    },
    coverImage: mshwarCover,
    gallery: [
      {
        src: mshwarCover,
        alt: {
          en: "Mshwar project cover",
          ar: "غلاف مشروع Mshwar",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Urban mobility visual",
          ar: "مشهد يعكس التنقل داخل المدينة",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Operational dashboard visual",
          ar: "مشهد يوحي بلوحة تشغيلية",
        },
      },
    ],
    serviceSlugs: [
      "web-system-development",
      "mobile-application-development",
      "devops-server-management",
      "software-testing-qa",
    ],
    techStack: ["Next.js", "Flutter", "Node APIs", "Maps integration", "CI/CD"],
    features: {
      en: [
        "Request and trip management flows",
        "Live status communication",
        "Operational dashboard logic",
        "Mobile-first service coordination",
        "Scalable deployment considerations",
      ],
      ar: [
        "مسارات إدارة الرحلات والطلبات",
        "تواصل واضح للحالات المباشرة",
        "منطق لوحة تشغيلية",
        "تنسيق خدمة بمنهج mobile-first",
        "اعتبارات نشر قابلة للتوسع",
      ],
    },
    challenges: [
      {
        title: {
          en: "Complex state handling",
          ar: "تعقيد إدارة الحالات",
        },
        description: {
          en: "Operational products involve many statuses and role-based actions that can quickly feel overwhelming.",
          ar: "تتضمن المنتجات التشغيلية حالات كثيرة وإجراءات مختلفة حسب الدور وقد تصبح مرهقة سريعاً.",
        },
      },
      {
        title: {
          en: "Balancing speed with clarity",
          ar: "الموازنة بين السرعة والوضوح",
        },
        description: {
          en: "Users needed immediate action paths without losing awareness of what happens next.",
          ar: "احتاج المستخدم إلى مسارات إجراء مباشرة دون فقدان وضوح ما سيحدث بعد ذلك.",
        },
      },
    ],
    solutions: [
      {
        title: {
          en: "Role-aware system design",
          ar: "تصميم يراعي الأدوار",
        },
        description: {
          en: "We structured the product around permissions, statuses, and action groupings that felt intuitive for each user type.",
          ar: "نظمنا المنتج حول الصلاحيات والحالات وتجميع الإجراءات بما يبدو بديهياً لكل نوع مستخدم.",
        },
      },
      {
        title: {
          en: "Operational visibility",
          ar: "وضوح تشغيلي",
        },
        description: {
          en: "Key states were surfaced visually to reduce ambiguity in fast-moving service scenarios.",
          ar: "أبرزنا الحالات الرئيسية بصرياً لتقليل الغموض في سيناريوهات الخدمة السريعة.",
        },
      },
    ],
    results: [
      {
        value: "+29%",
        label: {
          en: "task completion speed",
          ar: "تحسن سرعة إنجاز المهام",
        },
        description: {
          en: "Structured actions and clearer state treatment reduced friction in routine tasks.",
          ar: "خففت الإجراءات المنظمة ومعالجة الحالات بوضوح من الاحتكاك في المهام المتكررة.",
        },
      },
      {
        value: "-35%",
        label: {
          en: "support dependency",
          ar: "انخفاض الاعتماد على الدعم",
        },
        description: {
          en: "Users needed less manual clarification after the system states were simplified.",
          ar: "احتاج المستخدمون إلى توضيح يدوي أقل بعد تبسيط حالات النظام.",
        },
      },
      {
        value: "14 weeks",
        label: {
          en: "full build cycle",
          ar: "مدة البناء الكاملة",
        },
        description: {
          en: "The engagement covered design, frontend, mobile, QA, and deployment planning.",
          ar: "غطى المشروع التصميم والواجهة والموبايل والاختبار وتخطيط النشر.",
        },
      },
    ],
    timeline: {
      en: "14-week operations product rollout",
      ar: "إطلاق منتج تشغيلي خلال 14 أسبوعاً",
    },
    projectType: "website-mobile",
    links: {
      website: "https://mshwar.example.com",
      googlePlay: "https://play.google.com/store/apps/details?id=com.blackfalcon.mshwar",
    },
    heroAccent: "#f89c3e",
    relatedProjectSlugs: ["dalilk", "zakroon", "healtho-gym"],
    featured: true,
  },
  {
    slug: "multqi-elnor",
    name: "Multqi Elnor",
    shortDescription: {
      en: "An event and community website created to present programs, speakers, and participation pathways with clarity.",
      ar: "موقع فعاليات ومجتمع صُمم لعرض البرامج والمتحدثين ومسارات المشاركة بوضوح.",
    },
    detailedDescription: {
      en: "Multqi Elnor needed a premium web presence that could communicate event value, program depth, and registration clarity. The design had to feel elevated while staying practical for audiences looking for agenda and attendance information.",
      ar: "احتاج Multqi Elnor إلى حضور رقمي راقٍ يوضح قيمة الحدث وعمق البرنامج وسهولة التسجيل. وكان على التصميم أن يبدو مميزاً مع بقاءه عملياً لمن يبحث عن تفاصيل الأجندة والحضور.",
    },
    categoryKey: "brand",
    category: {
      en: "Event website",
      ar: "موقع فعالية",
    },
    industryKey: "events",
    industry: {
      en: "Events",
      ar: "الفعاليات",
    },
    coverImage: multqiElnorCover,
    gallery: [
      {
        src: multqiElnorCover,
        alt: {
          en: "Multqi Elnor project cover",
          ar: "غلاف مشروع Multqi Elnor",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Conference atmosphere visual",
          ar: "مشهد يعكس أجواء مؤتمر",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Stage and audience visual",
          ar: "مشهد يعكس المسرح والجمهور",
        },
      },
    ],
    serviceSlugs: ["website-design", "ui-ux-design", "web-system-development"],
    techStack: ["Next.js", "Tailwind CSS", "CMS-ready data blocks", "Responsive UI", "SEO"],
    features: {
      en: [
        "Program and agenda structure",
        "Speaker highlights",
        "Registration CTA pathways",
        "Proof-led event storytelling",
        "Responsive information layouts",
      ],
      ar: [
        "هيكلة البرنامج والأجندة",
        "إبراز المتحدثين",
        "مسارات دعوة للتسجيل",
        "سرد فعالية قائم على البراهين",
        "تخطيطات معلومات متجاوبة",
      ],
    },
    challenges: [
      {
        title: {
          en: "Making event information feel premium",
          ar: "جعل معلومات الفعالية تبدو راقية",
        },
        description: {
          en: "Schedule-heavy websites can become flat and utilitarian if the visual system is not carefully crafted.",
          ar: "قد تبدو مواقع الفعاليات المليئة بالجداول مسطحة وعملية فقط إذا لم يُصغ النظام البصري بعناية.",
        },
      },
      {
        title: {
          en: "Driving attendance through clarity",
          ar: "تحفيز الحضور عبر الوضوح",
        },
        description: {
          en: "The experience needed to guide users quickly toward the event’s value and registration steps.",
          ar: "كان على التجربة أن تقود المستخدم بسرعة إلى قيمة الفعالية وخطوات التسجيل.",
        },
      },
    ],
    solutions: [
      {
        title: {
          en: "Editorial visual rhythm",
          ar: "إيقاع بصري تحريري",
        },
        description: {
          en: "We treated the website more like a premium program brochure than a generic event listing page.",
          ar: "تعاملنا مع الموقع ككتيب برنامج راقٍ أكثر من كونه صفحة فعاليات تقليدية.",
        },
      },
      {
        title: {
          en: "Clear registration hierarchy",
          ar: "هرمية تسجيل واضحة",
        },
        description: {
          en: "CTA placement, agenda grouping, and section pacing made the registration flow easier to follow.",
          ar: "جعل توزيع الدعوات وتجميع الأجندة وإيقاع الأقسام مسار التسجيل أوضح وأسهل.",
        },
      },
    ],
    results: [
      {
        value: "+47%",
        label: {
          en: "registration intent",
          ar: "زيادة نية التسجيل",
        },
        description: {
          en: "The revised page rhythm gave users quicker confidence in the event proposition.",
          ar: "منح الإيقاع الجديد للصفحة المستخدمين ثقة أسرع في قيمة الفعالية.",
        },
      },
      {
        value: "5.1 min",
        label: {
          en: "average content engagement",
          ar: "متوسط التفاعل مع المحتوى",
        },
        description: {
          en: "Visitors spent meaningful time exploring the program and speaker sections.",
          ar: "أمضى الزوار وقتاً ملحوظاً في استكشاف البرنامج وأقسام المتحدثين.",
        },
      },
      {
        value: "5 weeks",
        label: {
          en: "website turnaround",
          ar: "مدة إنجاز الموقع",
        },
        description: {
          en: "A fast turnaround supported the event timeline without compromising polish.",
          ar: "دعم الإنجاز السريع جدول الفعالية دون التنازل عن الجودة البصرية.",
        },
      },
    ],
    timeline: {
      en: "5-week event site launch",
      ar: "إطلاق الموقع خلال 5 أسابيع",
    },
    projectType: "website",
    links: {
      website: "https://multqi-elnor.example.com",
    },
    heroAccent: "#f5a955",
    relatedProjectSlugs: ["moazez-web", "dalilk", "zakroon"],
  },
  {
    slug: "zakroon",
    name: "Zakroon",
    shortDescription: {
      en: "An education-oriented digital product blending structured web access with mobile continuity for learners.",
      ar: "منتج رقمي تعليمي يجمع بين الوصول المنظم عبر الويب والاستمرارية على الموبايل للمتعلمين.",
    },
    detailedDescription: {
      en: "Zakroon was shaped as an education product that needed to feel organized, motivating, and scalable. The experience balanced content access, progress visibility, and a smoother path between desktop and mobile touchpoints.",
      ar: "تم تشكيل Zakroon كمنتج تعليمي يجب أن يبدو منظمًا ومحفزًا وقابلاً للتوسع. وازنت التجربة بين الوصول للمحتوى ووضوح التقدّم وسلاسة الانتقال بين الويب والموبايل.",
    },
    categoryKey: "platform",
    category: {
      en: "Learning platform",
      ar: "منصة تعليمية",
    },
    industryKey: "education",
    industry: {
      en: "Education",
      ar: "التعليم",
    },
    coverImage: zakroonCover,
    gallery: [
      {
        src: zakroonCover,
        alt: {
          en: "Zakroon project cover",
          ar: "غلاف مشروع Zakroon",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Collaborative learning visual",
          ar: "مشهد يعكس تعلماً تعاونياً",
        },
      },
      {
        src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
        alt: {
          en: "Digital study workflow visual",
          ar: "مشهد يعكس تدفق دراسة رقمية",
        },
      },
    ],
    serviceSlugs: [
      "web-system-development",
      "mobile-application-development",
      "ui-ux-design",
      "software-testing-qa",
    ],
    techStack: ["Next.js", "Flutter", "TypeScript", "Content architecture", "Notifications"],
    features: {
      en: [
        "Structured course and resource access",
        "Cross-device progress continuity",
        "Progress and milestone visualization",
        "Focused learning dashboard",
        "Scalable module-based interface",
      ],
      ar: [
        "وصول منظم للدورات والموارد",
        "استمرارية التقدّم عبر الأجهزة",
        "إظهار المراحل والإنجازات",
        "لوحة تعليم مركزة",
        "واجهة معيارية قابلة للتوسع",
      ],
    },
    challenges: [
      {
        title: {
          en: "Avoiding educational clutter",
          ar: "تجنّب فوضى المنصات التعليمية",
        },
        description: {
          en: "Learning platforms often become heavy and fragmented as content grows.",
          ar: "غالباً ما تصبح المنصات التعليمية ثقيلة ومجزأة مع نمو المحتوى.",
        },
      },
      {
        title: {
          en: "Keeping motivation visible",
          ar: "إبقاء الحافز مرئياً",
        },
        description: {
          en: "Users needed a sense of progress and next steps, not just a collection of lessons.",
          ar: "احتاج المستخدم إلى رؤية واضحة للتقدّم والخطوة التالية، لا مجرد تجميع للدروس.",
        },
      },
    ],
    solutions: [
      {
        title: {
          en: "Modular education UX",
          ar: "تجربة تعليم معيارية",
        },
        description: {
          en: "We grouped content and actions into clean modules that made the interface easier to grow.",
          ar: "جمعنا المحتوى والإجراءات في وحدات نظيفة تسهل توسع الواجهة مستقبلاً.",
        },
      },
      {
        title: {
          en: "Visible progress system",
          ar: "نظام واضح لإظهار التقدم",
        },
        description: {
          en: "Milestones, progress states, and continuity cues made the product feel more motivating.",
          ar: "جعلت المراحل وحالات التقدم وإشارات الاستمرارية المنتج أكثر تحفيزاً.",
        },
      },
    ],
    results: [
      {
        value: "+36%",
        label: {
          en: "lesson continuation",
          ar: "استمرار الدروس",
        },
        description: {
          en: "The improved flow increased learner continuity across sessions.",
          ar: "رفع التدفق الأفضل استمرارية المتعلمين بين الجلسات.",
        },
      },
      {
        value: "-22%",
        label: {
          en: "navigation drop-off",
          ar: "انخفاض التشتت الملاحي",
        },
        description: {
          en: "Cleaner structure made resource discovery easier and more focused.",
          ar: "سهلت البنية الأنظف الوصول إلى الموارد وقللت التشتيت.",
        },
      },
      {
        value: "13 weeks",
        label: {
          en: "product rollout",
          ar: "مدة طرح المنتج",
        },
        description: {
          en: "The build spanned design system work, web flows, mobile continuity, and QA.",
          ar: "شمل البناء نظام التصميم وتدفقات الويب واستمرارية الموبايل والاختبار.",
        },
      },
    ],
    timeline: {
      en: "13-week product rollout",
      ar: "طرح المنتج خلال 13 أسبوعاً",
    },
    projectType: "website-mobile",
    links: {
      website: "https://zakroon.example.com",
      googlePlay: "https://play.google.com/store/apps/details?id=com.blackfalcon.zakroon",
      appStore: "https://apps.apple.com/app/id650000005",
      caseStudy: "https://behance.net/gallery/blackfalcon-zakroon",
    },
    heroAccent: "#ffa240",
    relatedProjectSlugs: ["mshwar", "healtho-gym", "dalilk"],
    featured: true,
  },
];
