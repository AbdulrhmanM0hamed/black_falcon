import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "web-system-development",
    iconKey: "web-development",
    image: "/services/web_dev.svg",
    name: {
      en: "Web & System Development",
      ar: "تطوير الويب والأنظمة",
    },
    summary: {
      en: "Production-grade platforms, dashboards, portals, and internal systems engineered for growth.",
      ar: "منصات ولوحات تحكم وأنظمة داخلية مطورة بجودة إنتاجية وقابلة للنمو.",
    },
    headline: {
      en: "Robust product architecture for companies that need more than a brochure website.",
      ar: "معمارية منتج قوية للشركات التي تحتاج أكثر من مجرد موقع تعريفي.",
    },
    description: {
      en: "We design and build web products that support real business operations, user workflows, and scale requirements. From customer-facing platforms to internal operations systems, we focus on clarity, performance, and maintainability.",
      ar: "نصمم ونطوّر منتجات ويب تدعم عمليات الأعمال الحقيقية ومسارات المستخدم ومتطلبات التوسع. من المنصات المواجهة للعملاء إلى الأنظمة التشغيلية الداخلية، نركز على الوضوح والأداء وقابلية الصيانة.",
    },
    keyFeatures: {
      en: [
        "Custom dashboards and portals",
        "Role-based workflows and permissions",
        "API-ready frontend architecture",
        "Performance-focused interfaces",
        "Scalable component systems",
      ],
      ar: [
        "لوحات تحكم وبوابات مخصصة",
        "صلاحيات ومسارات عمل متعددة الأدوار",
        "هيكل واجهة جاهز للربط مع API",
        "واجهات تركز على الأداء",
        "أنظمة مكوّنات قابلة للتوسع",
      ],
    },
    benefits: {
      en: [
        "Shorter path from scope to usable platform",
        "Cleaner handoff to backend integration",
        "Higher confidence in long-term maintainability",
      ],
      ar: [
        "تقليل الوقت من النطاق إلى منصة قابلة للاستخدام",
        "تجهيز أنظف للربط مع الخلفية",
        "ثقة أعلى في الصيانة على المدى الطويل",
      ],
    },
    deliverables: {
      en: [
        "Information architecture",
        "Responsive frontend implementation",
        "Reusable UI component layer",
        "QA-ready acceptance criteria",
      ],
      ar: [
        "هندسة معلومات واضحة",
        "تنفيذ واجهة متجاوبة",
        "طبقة مكوّنات قابلة لإعادة الاستخدام",
        "معايير قبول جاهزة للاختبار",
      ],
    },
    process: [
      {
        title: {
          en: "Scope the workflow",
          ar: "تحديد مسار العمل",
        },
        description: {
          en: "We map the screens, roles, states, and data dependencies before the build begins.",
          ar: "نرسم الشاشات والأدوار والحالات واعتماديات البيانات قبل بدء التطوير.",
        },
      },
      {
        title: {
          en: "Engineer the system",
          ar: "هندسة النظام",
        },
        description: {
          en: "We implement the frontend with reusable structure, strong typing, and future backend contracts in mind.",
          ar: "ننفذ الواجهة بهيكل قابل لإعادة الاستخدام وأنواع قوية مع مراعاة عقود الربط الخلفي لاحقاً.",
        },
      },
      {
        title: {
          en: "Validate and optimize",
          ar: "التحقق والتحسين",
        },
        description: {
          en: "We review edge cases, responsiveness, and performance before release preparation.",
          ar: "نراجع الحالات الطرفية والاستجابة والأداء قبل تجهيز الإطلاق.",
        },
      },
    ],
    technologies: ["Next.js", "TypeScript", "React", "REST APIs", "PostgreSQL"],
    highlights: [
      {
        value: "Enterprise-ready",
        label: {
          en: "delivery posture",
          ar: "جاهزية التنفيذ",
        },
      },
      {
        value: "API-first",
        label: {
          en: "integration mindset",
          ar: "منهج التكامل",
        },
      },
      {
        value: "Modular UI",
        label: {
          en: "system structure",
          ar: "هيكل الواجهة",
        },
      },
    ],
    relatedProjectSlugs: ["dalilk", "mshwar", "zakroon"],
    featured: true,
  },
  {
    slug: "website-design",
    iconKey: "website-design",
    image: "/services/web_design.svg",
    name: {
      en: "Website Design",
      ar: "تصميم المواقع",
    },
    summary: {
      en: "High-conversion company websites and launch pages designed to elevate trust instantly.",
      ar: "مواقع شركات وصفحات إطلاق عالية التحويل ترفع الثقة فوراً.",
    },
    headline: {
      en: "Premium brand presentation with the polish expected from serious digital companies.",
      ar: "عرض بصري راقٍ يليق بالشركات الرقمية الجادة ويعكس قوة العلامة.",
    },
    description: {
      en: "We create websites that act as commercial assets, not placeholder pages. The focus is on strong hierarchy, premium visual rhythm, conversion cues, and a polished content narrative.",
      ar: "نصمم مواقع تعمل كأصول تجارية حقيقية لا صفحات شكلية. نركز على الهرمية الواضحة والإيقاع البصري الراقي وعناصر التحويل والسرد المحتوى المتقن.",
    },
    keyFeatures: {
      en: [
        "Premium landing page composition",
        "Conversion-oriented content hierarchy",
        "Responsive brand storytelling",
        "Elegant transitions and interactions",
        "SEO-conscious page structure",
      ],
      ar: [
        "تركيب صفحات هبوط احترافي",
        "هرمية محتوى موجهة للتحويل",
        "سرد بصري متجاوب للعلامة",
        "انتقالات وتفاعلات أنيقة",
        "هيكل صفحات يراعي SEO",
      ],
    },
    benefits: {
      en: [
        "Stronger first impression for prospects",
        "Clearer positioning and credibility",
        "Higher intent from inbound leads",
      ],
      ar: [
        "انطباع أول أقوى لدى العملاء المحتملين",
        "تموضع ومصداقية أوضح",
        "رفع جودة العملاء الواردين",
      ],
    },
    deliverables: {
      en: [
        "Wireframes and layout direction",
        "High-fidelity visual design",
        "Responsive implementation",
        "CTA and conversion pattern planning",
      ],
      ar: [
        "وايرفريم واتجاه تخطيطي",
        "تصميم بصري عالي الدقة",
        "تنفيذ متجاوب",
        "تخطيط عناصر التحويل والدعوات",
      ],
    },
    process: [
      {
        title: {
          en: "Shape the narrative",
          ar: "صياغة السرد",
        },
        description: {
          en: "We define the story, proof, service hierarchy, and conversion flow before visual exploration.",
          ar: "نحدد القصة والبراهين وهرمية الخدمات وتدفق التحويل قبل الاستكشاف البصري.",
        },
      },
      {
        title: {
          en: "Craft the interface",
          ar: "صياغة الواجهة",
        },
        description: {
          en: "We turn the narrative into a premium responsive visual system with bold hierarchy and detail.",
          ar: "نحوّل السرد إلى نظام بصري متجاوب وراقي به هرمية واضحة واهتمام بالتفاصيل.",
        },
      },
      {
        title: {
          en: "Refine conversion points",
          ar: "تحسين نقاط التحويل",
        },
        description: {
          en: "We place smart CTAs, proof blocks, and trust signals across the experience.",
          ar: "نوزع الدعوات الذكية والبراهين وعناصر الثقة عبر التجربة بالكامل.",
        },
      },
    ],
    technologies: ["Figma", "Next.js", "Tailwind CSS", "SEO basics", "Content systems"],
    highlights: [
      {
        value: "Premium UI",
        label: {
          en: "visual positioning",
          ar: "التموضع البصري",
        },
      },
      {
        value: "Conversion-led",
        label: {
          en: "page strategy",
          ar: "استراتيجية الصفحة",
        },
      },
      {
        value: "Fully responsive",
        label: {
          en: "experience quality",
          ar: "جودة التجربة",
        },
      },
    ],
    relatedProjectSlugs: ["multqi-elnor", "moazez-web", "dalilk"],
    featured: true,
  },
  {
    slug: "ui-ux-design",
    iconKey: "ui-ux",
    image: "/services/ui_ux.svg",
    name: {
      en: "UI/UX Design",
      ar: "تصميم الواجهات وتجربة المستخدم",
    },
    summary: {
      en: "Intentional product design systems that improve clarity, flow, and brand confidence.",
      ar: "أنظمة تصميم منتج مدروسة تعزز الوضوح والانسيابية وثقة العلامة.",
    },
    headline: {
      en: "We turn product complexity into interfaces that feel clear, elegant, and commercially strong.",
      ar: "نحوّل تعقيد المنتج إلى واجهات واضحة وأنيقة وقوية تجارياً.",
    },
    description: {
      en: "Our UI/UX work balances product logic, user psychology, and visual polish. We focus on flows that reduce friction, interfaces that guide attention, and systems that scale across screens and devices.",
      ar: "يرتكز عملنا في UI/UX على موازنة منطق المنتج مع فهم المستخدم والجودة البصرية. نركز على مسارات تقلل الاحتكاك وواجهات توجه الانتباه وأنظمة قابلة للتوسع عبر الشاشات والأجهزة.",
    },
    keyFeatures: {
      en: [
        "User flow design and prioritization",
        "Design systems and token thinking",
        "High-fidelity interface direction",
        "Responsive behavior planning",
        "Accessibility-aware decisions",
      ],
      ar: [
        "تصميم وترتيب مسارات المستخدم",
        "أنظمة تصميم وتفكير قائم على التوكنز",
        "اتجاه بصري عالي الدقة",
        "تخطيط السلوك المتجاوب",
        "قرارات تراعي الوصولية",
      ],
    },
    benefits: {
      en: [
        "Lower friction in key journeys",
        "Faster alignment between design and development",
        "A stronger, more consistent product identity",
      ],
      ar: [
        "تقليل الاحتكاك في المسارات الرئيسية",
        "تسريع التوافق بين التصميم والتطوير",
        "هوية منتج أقوى وأكثر اتساقاً",
      ],
    },
    deliverables: {
      en: [
        "Journey maps and wireframes",
        "Component patterns and variants",
        "Interactive design mockups",
        "Developer-friendly design handoff",
      ],
      ar: [
        "خرائط رحلات ووايرفريم",
        "أنماط مكونات ومتغيرات",
        "نماذج تصميم تفاعلية",
        "تسليم تصميم مناسب للمطورين",
      ],
    },
    process: [
      {
        title: {
          en: "Audit and prioritize",
          ar: "التحليل وتحديد الأولويات",
        },
        description: {
          en: "We review current experience gaps, business goals, and user expectations.",
          ar: "نراجع فجوات التجربة الحالية والأهداف التجارية وتوقعات المستخدمين.",
        },
      },
      {
        title: {
          en: "Design the flows",
          ar: "تصميم التدفقات",
        },
        description: {
          en: "We define how users move through the product with less confusion and more confidence.",
          ar: "نحدد كيف يتحرك المستخدم داخل المنتج بوضوح أكبر وثقة أعلى.",
        },
      },
      {
        title: {
          en: "Systemize the interface",
          ar: "بناء النظام الواجهي",
        },
        description: {
          en: "We create reusable visual patterns that make delivery faster and the product more coherent.",
          ar: "نبني أنماطاً بصرية قابلة لإعادة الاستخدام تجعل التنفيذ أسرع والمنتج أكثر اتساقاً.",
        },
      },
    ],
    technologies: ["Figma", "Design tokens", "Wireframing", "Interaction design", "Usability"],
    highlights: [
      {
        value: "UX-led",
        label: {
          en: "decision model",
          ar: "نموذج القرار",
        },
      },
      {
        value: "System thinking",
        label: {
          en: "design discipline",
          ar: "انضباط التصميم",
        },
      },
      {
        value: "Developer-friendly",
        label: {
          en: "handoff quality",
          ar: "جودة التسليم",
        },
      },
    ],
    relatedProjectSlugs: ["bashra-ai", "healtho-gym", "derma-ai"],
    featured: true,
  },
  {
    slug: "software-testing-qa",
    iconKey: "qa",
    image: "/services/software_testing.svg",
    name: {
      en: "Software Testing / QA",
      ar: "اختبار البرمجيات وضمان الجودة",
    },
    summary: {
      en: "QA planning and validation workflows that reduce risk before launch and after iteration.",
      ar: "تخطيط جودة ومسارات تحقق تقلل المخاطر قبل الإطلاق وبعده.",
    },
    headline: {
      en: "Quality is treated as a delivery system, not a late-stage checkbox.",
      ar: "نتعامل مع الجودة كنظام تسليم متكامل لا كخطوة أخيرة فقط.",
    },
    description: {
      en: "We help teams surface defects earlier, validate critical flows, and create more confidence around release readiness. This includes scenario planning, regression awareness, and quality-minded collaboration with design and engineering.",
      ar: "نساعد الفرق على اكتشاف العيوب مبكراً والتحقق من المسارات الحرجة ورفع الثقة في جاهزية الإطلاق. يشمل ذلك تخطيط السيناريوهات ومراعاة الانحدارات والتعاون مع التصميم والهندسة بعين الجودة.",
    },
    keyFeatures: {
      en: [
        "Critical flow validation",
        "Regression-focused testing",
        "Structured QA reporting",
        "Responsive and cross-browser checks",
        "Release readiness reviews",
      ],
      ar: [
        "التحقق من المسارات الحرجة",
        "اختبارات تراعي الانحدارات",
        "تقارير جودة منظمة",
        "فحوصات الاستجابة والمتصفحات",
        "مراجعات جاهزية الإطلاق",
      ],
    },
    benefits: {
      en: [
        "Fewer surprises before deployment",
        "Clearer defect prioritization",
        "Higher confidence in shipping quality",
      ],
      ar: [
        "مفاجآت أقل قبل النشر",
        "ترتيب أوضح لأولويات العيوب",
        "ثقة أعلى في جودة الإطلاق",
      ],
    },
    deliverables: {
      en: [
        "Test plans and validation matrices",
        "Bug reporting structure",
        "Pre-launch QA summaries",
        "Quality handoff notes",
      ],
      ar: [
        "خطط اختبار ومصفوفات تحقق",
        "هيكل تقارير العيوب",
        "ملخصات جودة ما قبل الإطلاق",
        "ملاحظات تسليم الجودة",
      ],
    },
    process: [
      {
        title: {
          en: "Map risk areas",
          ar: "تحديد مناطق المخاطر",
        },
        description: {
          en: "We identify flows where errors would hurt trust, revenue, or operational confidence the most.",
          ar: "نحدد المسارات التي قد تؤثر أخطاؤها بقوة على الثقة أو الإيراد أو الاستقرار التشغيلي.",
        },
      },
      {
        title: {
          en: "Run structured validation",
          ar: "تنفيذ تحقق منظم",
        },
        description: {
          en: "We validate logic, states, responsiveness, and usability across the relevant scenarios.",
          ar: "نختبر المنطق والحالات والاستجابة وقابلية الاستخدام عبر السيناريوهات المناسبة.",
        },
      },
      {
        title: {
          en: "Prepare for release",
          ar: "تجهيز الإطلاق",
        },
        description: {
          en: "We summarize blockers, edge cases, and final recommendations before the product goes live.",
          ar: "نلخص العوائق والحالات الطرفية والتوصيات النهائية قبل الإطلاق.",
        },
      },
    ],
    technologies: ["Playwright", "Manual QA", "Responsive testing", "Bug triage", "Release checklists"],
    highlights: [
      {
        value: "Risk-aware",
        label: {
          en: "testing posture",
          ar: "منهج الاختبار",
        },
      },
      {
        value: "Launch-ready",
        label: {
          en: "release discipline",
          ar: "انضباط الإطلاق",
        },
      },
      {
        value: "Cross-device",
        label: {
          en: "coverage focus",
          ar: "نطاق التغطية",
        },
      },
    ],
    relatedProjectSlugs: ["healtho-gym", "zakroon", "mshwar"],
  },
  {
    slug: "devops-server-management",
    iconKey: "devops",
    image: "/services/server_managment.svg",
    name: {
      en: "DevOps / Server Management",
      ar: "DevOps وإدارة الخوادم",
    },
    summary: {
      en: "Deployment, environments, and operational discipline that keep products stable and scalable.",
      ar: "نشر وبيئات وانضباط تشغيلي يحافظ على استقرار المنتجات وقابليتها للتوسع.",
    },
    headline: {
      en: "Operational reliability is part of the product experience.",
      ar: "الاعتمادية التشغيلية جزء أصيل من تجربة المنتج.",
    },
    description: {
      en: "We help teams move from fragile hosting setups to cleaner release flows, better environment control, and stronger confidence in uptime and observability.",
      ar: "نساعد الفرق على الانتقال من استضافات هشة إلى تدفقات نشر أنظف وتحكم أفضل في البيئات وثقة أكبر في الاستقرار والمراقبة.",
    },
    keyFeatures: {
      en: [
        "Deployment pipeline planning",
        "Server hardening and provisioning",
        "Monitoring and uptime visibility",
        "Environment and secret handling guidance",
        "Performance and reliability checks",
      ],
      ar: [
        "تخطيط خطوط النشر",
        "تهيئة وتأمين الخوادم",
        "مراقبة ووضوح حالة الاستقرار",
        "إدارة البيئات والأسرار",
        "فحوصات الأداء والاعتمادية",
      ],
    },
    benefits: {
      en: [
        "More confidence in production releases",
        "Better resilience as usage grows",
        "Cleaner operational visibility for teams",
      ],
      ar: [
        "ثقة أكبر في الإصدارات الإنتاجية",
        "مرونة أفضل مع زيادة الاستخدام",
        "وضوح تشغيلي أنظف للفرق",
      ],
    },
    deliverables: {
      en: [
        "Environment mapping",
        "Deployment recommendations",
        "Server setup guidelines",
        "Operational documentation",
      ],
      ar: [
        "خريطة البيئات",
        "توصيات النشر",
        "إرشادات إعداد الخوادم",
        "توثيق تشغيلي",
      ],
    },
    process: [
      {
        title: {
          en: "Audit the current stack",
          ar: "تحليل الوضع الحالي",
        },
        description: {
          en: "We inspect deployment paths, hosting assumptions, and failure risks.",
          ar: "نفحص مسارات النشر وافتراضات الاستضافة ومخاطر الفشل.",
        },
      },
      {
        title: {
          en: "Stabilize environments",
          ar: "تثبيت البيئات",
        },
        description: {
          en: "We organize staging and production expectations, access, and release flow.",
          ar: "ننظم التوقعات والوصول ومسار الإصدارات بين الاختبار والإنتاج.",
        },
      },
      {
        title: {
          en: "Improve observability",
          ar: "رفع مستوى المراقبة",
        },
        description: {
          en: "We make system health, incidents, and performance easier to read and act on.",
          ar: "نجعل صحة النظام والحوادث والأداء أوضح وأسهل في المتابعة واتخاذ القرار.",
        },
      },
    ],
    technologies: ["Docker", "Linux", "Nginx", "CI/CD", "Monitoring", "VPS management"],
    highlights: [
      {
        value: "Release confidence",
        label: {
          en: "operational outcome",
          ar: "النتيجة التشغيلية",
        },
      },
      {
        value: "Hardened environments",
        label: {
          en: "production posture",
          ar: "جاهزية الإنتاج",
        },
      },
      {
        value: "Observability",
        label: {
          en: "system visibility",
          ar: "رؤية النظام",
        },
      },
    ],
    relatedProjectSlugs: ["mshwar", "dalilk", "bashra-ai"],
  },
  {
    slug: "mobile-application-development",
    iconKey: "mobile",
    image: "/services/mobile%20_app.svg",
    name: {
      en: "Mobile Application Development",
      ar: "تطوير تطبيقات الموبايل",
    },
    summary: {
      en: "Cross-platform mobile apps with refined UX, clear onboarding, and reliable product logic.",
      ar: "تطبيقات موبايل متعددة المنصات بتجربة مصقولة وتدفقات واضحة ومنطق منتج موثوق.",
    },
    headline: {
      en: "Mobile products that feel cohesive from first impression to daily use.",
      ar: "منتجات موبايل متماسكة من أول انطباع وحتى الاستخدام اليومي.",
    },
    description: {
      en: "We build mobile experiences that combine sharp design, strong usability, and scalable architecture. Whether the app stands alone or complements a website, we keep the experience consistent and commercial-ready.",
      ar: "نبني تجارب موبايل تجمع بين التصميم القوي وسهولة الاستخدام والمعمارية القابلة للتوسع. سواء كان التطبيق مستقلاً أو مكملاً لموقع، نحافظ على اتساق التجربة وجاهزيتها التجارية.",
    },
    keyFeatures: {
      en: [
        "Cross-platform mobile UI",
        "Onboarding and retention flows",
        "App-store-ready delivery",
        "Shared product language with web",
        "Scalable screens and state handling",
      ],
      ar: [
        "واجهات موبايل متعددة المنصات",
        "مسارات Onboarding ورفع الاحتفاظ",
        "تسليم جاهز للمتاجر",
        "لغة منتج موحدة مع الويب",
        "إدارة شاشات وحالات قابلة للتوسع",
      ],
    },
    benefits: {
      en: [
        "Faster route to a polished mobile MVP",
        "Consistent experience across product touchpoints",
        "Stronger readiness for store submission and iteration",
      ],
      ar: [
        "طريق أسرع إلى MVP موبايل مصقول",
        "تجربة أكثر اتساقاً عبر نقاط التفاعل",
        "جاهزية أفضل للنشر في المتاجر والتطوير اللاحق",
      ],
    },
    deliverables: {
      en: [
        "Mobile product flows",
        "App UI implementation",
        "QA and release preparation",
        "Cross-platform design alignment",
      ],
      ar: [
        "مسارات منتج الموبايل",
        "تنفيذ واجهة التطبيق",
        "الاختبار وتجهيز الإطلاق",
        "مواءمة التصميم بين المنصات",
      ],
    },
    process: [
      {
        title: {
          en: "Define the key journeys",
          ar: "تحديد الرحلات الأساسية",
        },
        description: {
          en: "We focus on the screens and actions that create the product’s first real value.",
          ar: "نركز على الشاشات والإجراءات التي تصنع أول قيمة حقيقية داخل المنتج.",
        },
      },
      {
        title: {
          en: "Build the mobile system",
          ar: "بناء نظام التطبيق",
        },
        description: {
          en: "We implement the interface, states, and reusable patterns for a smooth multi-screen experience.",
          ar: "ننّفذ الواجهة والحالات والأنماط القابلة لإعادة الاستخدام لتجربة سلسة عبر الشاشات.",
        },
      },
      {
        title: {
          en: "Prepare for scale",
          ar: "التجهيز للتوسع",
        },
        description: {
          en: "We validate device behavior, release readiness, and the connection to future product growth.",
          ar: "نتحقق من سلوك الأجهزة وجاهزية الإصدار وارتباط التطبيق بالتوسع المستقبلي للمنتج.",
        },
      },
    ],
    technologies: ["Flutter", "React Native", "Firebase", "Mobile UI systems", "App release flow"],
    highlights: [
      {
        value: "Cross-platform",
        label: {
          en: "build approach",
          ar: "منهج التنفيذ",
        },
      },
      {
        value: "Store-ready",
        label: {
          en: "launch posture",
          ar: "جاهزية الإطلاق",
        },
      },
      {
        value: "Retention-aware",
        label: {
          en: "experience planning",
          ar: "تخطيط التجربة",
        },
      },
    ],
    relatedProjectSlugs: ["bashra-ai", "moazez-app", "healtho-gym"],
    featured: true,
  },
];
