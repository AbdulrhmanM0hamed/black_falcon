import type {
  CompanyValue,
  ContactMethod,
  ProcessStep,
  SiteSettings,
  SiteStats,
  TechnologyGroup,
} from "@/types/content";

export const siteSettings: SiteSettings = {
  name: "Black Falcon",
  summary: {
    en: "Black Falcon is a premium software company focused on product design, engineering quality, and delivery confidence.",
    ar: "بلاك فالكون شركة برمجيات فاخرة تركّز على جودة المنتج والهندسة والانضباط في التسليم.",
  },
  tagline: {
    en: "Design, engineer, and scale digital products with confidence.",
    ar: "صمّم وطوّر ووسّع المنتجات الرقمية بثقة.",
  },
  mission: {
    en: "To help ambitious companies launch sharper products with stronger UX, cleaner engineering, and more reliable delivery systems.",
    ar: "مهمتنا هي مساعدة الشركات الطموحة على إطلاق منتجات أكثر جودة عبر تجربة أفضل وهندسة أنظف وتسليم أكثر موثوقية.",
  },
  address: {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر",
  },
  email: "hello@blackfalcon.dev",
  phone: "+20 103 035 7911",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=%2B201030357911&text&type=phone_number&app_absent=0",
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com/company/black-falcon" },
    { label: "Behance", href: "https://behance.net/blackfalcon" },
    { label: "GitHub", href: "https://github.com/blackfalcon" },
  ],
};

export const siteStats: SiteStats[] = [
  {
    value: "24+",
    label: {
      en: "delivery sprints coordinated",
      ar: "سبرنتات تسليم منسّقة",
    },
    description: {
      en: "Structured execution across design, engineering, QA, and launch phases.",
      ar: "تنفيذ منظم عبر التصميم والهندسة والاختبار والإطلاق.",
    },
  },
  {
    value: "9",
    label: {
      en: "portfolio launches presented",
      ar: "إطلاقات معروضة ضمن الأعمال",
    },
    description: {
      en: "A portfolio mix spanning AI, healthcare, mobility, community, and commerce.",
      ar: "مزيج أعمال يغطي الذكاء الاصطناعي والرعاية الصحية والتنقل والمجتمعات والتجارة.",
    },
  },
  {
    value: "96%",
    label: {
      en: "quality pass target",
      ar: "مستهدف اجتياز الجودة",
    },
    description: {
      en: "A testing-first mindset applied before handoff and release readiness.",
      ar: "ذهنية تركّز على الجودة قبل التسليم والاستعداد للإطلاق.",
    },
  },
  {
    value: "6",
    label: {
      en: "specialized service lines",
      ar: "مسارات خدمة متخصصة",
    },
    description: {
      en: "Capabilities designed to work together across the full product lifecycle.",
      ar: "قدرات متكاملة تدعم دورة حياة المنتج كاملة.",
    },
  },
];

export const trustSignals = [
  {
    en: "Product strategy and UX thinking aligned with engineering reality",
    ar: "استراتيجية المنتج وتجربة المستخدم متوافقة مع الواقع الهندسي",
  },
  {
    en: "Strong QA discipline before public release and post-launch scaling",
    ar: "انضباط واضح في ضمان الجودة قبل الإطلاق العام وبعده",
  },
  {
    en: "Delivery communication built for founders, operators, and internal teams",
    ar: "تواصل تنفيذي مناسب للمؤسسين والفرق التشغيلية والفرق الداخلية",
  },
  {
    en: "Operational readiness from infrastructure to observability and release flow",
    ar: "جاهزية تشغيلية من البنية التحتية إلى المراقبة وتدفق الإصدارات",
  },
] as const;

export const companyValues: CompanyValue[] = [
  {
    iconKey: "strategy",
    title: {
      en: "Strategic clarity",
      ar: "وضوح استراتيجي",
    },
    description: {
      en: "We align every design and engineering decision with business objectives and product positioning.",
      ar: "نربط كل قرار تصميمي وهندسي بالأهداف التجارية وتموضع المنتج.",
    },
  },
  {
    iconKey: "layers",
    title: {
      en: "Premium execution",
      ar: "تنفيذ فاخر",
    },
    description: {
      en: "Interfaces, systems, and interactions are crafted with detail, polish, and consistency.",
      ar: "نصيغ الواجهات والأنظمة والتفاعلات بعناية واتساق وجودة بصرية واضحة.",
    },
  },
  {
    iconKey: "shield",
    title: {
      en: "Quality discipline",
      ar: "انضباط في الجودة",
    },
    description: {
      en: "We reduce risk with thorough QA thinking, careful implementation, and clean review standards.",
      ar: "نقلّل المخاطر عبر تفكير اختباري متين وتنفيذ مدروس ومعايير مراجعة نظيفة.",
    },
  },
  {
    iconKey: "rocket",
    title: {
      en: "Momentum with control",
      ar: "سرعة مع تحكّم",
    },
    description: {
      en: "We keep delivery moving without sacrificing maintainability, communication, or technical depth.",
      ar: "نحافظ على التقدم دون التضحية بالقابلية للصيانة أو وضوح التواصل أو العمق التقني.",
    },
  },
];

export const deliveryProcess: ProcessStep[] = [
  {
    title: {
      en: "Product framing",
      ar: "تأطير المنتج",
    },
    description: {
      en: "We clarify goals, user flows, functional scope, and delivery priorities before we start building.",
      ar: "نوضح الأهداف ومسارات المستخدم ونطاق الوظائف وأولويات التسليم قبل البدء في البناء.",
    },
  },
  {
    title: {
      en: "Experience and system design",
      ar: "تصميم التجربة والنظام",
    },
    description: {
      en: "We shape the interface, architecture direction, and reusable UI patterns in parallel.",
      ar: "نصمم الواجهة واتجاه المعمارية ومكوّنات الواجهة القابلة لإعادة الاستخدام بالتوازي.",
    },
  },
  {
    title: {
      en: "Engineering and QA",
      ar: "التطوير والاختبار",
    },
    description: {
      en: "Build quality is reinforced with implementation reviews, validation passes, and release-focused QA.",
      ar: "نرفع جودة البناء عبر المراجعة الفنية والتحقق المستمر واختبارات موجهة للإطلاق.",
    },
  },
  {
    title: {
      en: "Launch and scale",
      ar: "الإطلاق والتوسّع",
    },
    description: {
      en: "We prepare deployment, observability, optimization, and the next iteration roadmap for growth.",
      ar: "نجهز النشر والمراقبة والتحسين وخارطة الخطوات التالية للنمو.",
    },
  },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    title: {
      en: "Frontend systems",
      ar: "أنظمة الواجهة الأمامية",
    },
    description: {
      en: "Modern UI stacks for polished, fast, and scalable interfaces.",
      ar: "تقنيات حديثة لبناء واجهات سريعة وراقية وقابلة للتوسع.",
    },
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/ui"],
  },
  {
    title: {
      en: "Backend and product services",
      ar: "الخلفية وخدمات المنتج",
    },
    description: {
      en: "Reliable APIs, integrations, and data layers designed for maintainable growth.",
      ar: "واجهات وخدمات وطبقات بيانات موثوقة تدعم النمو القابل للصيانة.",
    },
    items: ["Node.js", "NestJS", "REST APIs", "GraphQL", "PostgreSQL", "Prisma"],
  },
  {
    title: {
      en: "Mobile and cross-platform",
      ar: "الموبايل والتطبيقات متعددة المنصات",
    },
    description: {
      en: "Native-feeling mobile products with strong design system consistency.",
      ar: "تطبيقات موبايل بإحساس أصيل مع اتساق قوي في نظام التصميم.",
    },
    items: ["Flutter", "React Native", "Firebase", "App Store Delivery", "Google Play Delivery"],
  },
  {
    title: {
      en: "Infrastructure and quality",
      ar: "البنية التحتية والجودة",
    },
    description: {
      en: "Release confidence through CI/CD, containerized environments, and testing rigor.",
      ar: "ثقة في الإطلاق عبر خطوط CI/CD وبيئات الحاويات وانضباط الاختبار.",
    },
    items: ["Docker", "GitHub Actions", "Nginx", "Linux", "Playwright", "Postman"],
  },
];

export const contactMethods: ContactMethod[] = [
  {
    iconKey: "whatsapp",
    title: {
      en: "WhatsApp",
      ar: "واتساب",
    },
    description: {
      en: "Fastest route for a first conversation or project inquiry.",
      ar: "أسرع طريق لبدء المحادثة أو إرسال استفسار مشروع.",
    },
    value: siteSettings.phone,
    href: siteSettings.whatsapp,
  },
  {
    iconKey: "mail",
    title: {
      en: "Email",
      ar: "البريد الإلكتروني",
    },
    description: {
      en: "Best for sending project details, references, or partnership context.",
      ar: "الأفضل لإرسال تفاصيل المشروع أو المراجع أو سياق الشراكة.",
    },
    value: siteSettings.email,
    href: `mailto:${siteSettings.email}`,
  },
  {
    iconKey: "location",
    title: {
      en: "Base of operations",
      ar: "موقع العمل",
    },
    description: {
      en: "Operating from Cairo with regional and remote collaboration flexibility.",
      ar: "نعمل من القاهرة مع مرونة في التعاون الإقليمي وعن بعد.",
    },
    value: "Cairo, Egypt",
    href: "https://maps.google.com/?q=Cairo+Egypt",
  },
];
