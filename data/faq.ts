import type { FaqItem } from "@/types/content";

export const faqItems: FaqItem[] = [
  {
    id: "timeline",
    category: "engagement",
    question: {
      en: "How do you usually structure a new project?",
      ar: "كيف تنظّمون عادة بداية أي مشروع جديد؟",
    },
    answer: {
      en: "We usually begin with discovery, scope clarification, user flow mapping, and a phased delivery plan. That keeps design, engineering, QA, and launch priorities aligned from the start.",
      ar: "نبدأ عادة بمرحلة اكتشاف وتوضيح النطاق ورسم مسارات المستخدم وخطة تسليم مرحلية، حتى تظل أولويات التصميم والهندسة والاختبار والإطلاق متسقة منذ البداية.",
    },
  },
  {
    id: "design-development",
    category: "process",
    question: {
      en: "Do you handle design and development together?",
      ar: "هل تتولون التصميم والتطوير معاً؟",
    },
    answer: {
      en: "Yes. Black Falcon is positioned to support the full product lifecycle, from interface strategy and UI/UX to implementation, testing, and deployment.",
      ar: "نعم. بلاك فالكون مهيأة لدعم دورة حياة المنتج بالكامل، من استراتيجية الواجهة وتجربة المستخدم إلى التطوير والاختبار والنشر.",
    },
  },
  {
    id: "qa",
    category: "quality",
    question: {
      en: "What role does QA play in your workflow?",
      ar: "ما دور ضمان الجودة داخل سير العمل لديكم؟",
    },
    answer: {
      en: "QA is not treated as a final checkbox. It is built into implementation reviews, validation passes, release readiness, and regression thinking across the engagement.",
      ar: "لا نتعامل مع الجودة كخطوة أخيرة فقط، بل تدخل في مراجعات التنفيذ والتحقق المستمر والاستعداد للإطلاق والتفكير في الانحدارات طوال فترة التعاون.",
    },
  },
  {
    id: "devops",
    category: "operations",
    question: {
      en: "Can you support deployment and server management after launch?",
      ar: "هل يمكنكم دعم النشر وإدارة الخوادم بعد الإطلاق؟",
    },
    answer: {
      en: "Yes. Our DevOps and server management capability covers deployment workflows, environment hardening, monitoring, performance optimization, and post-launch operational support.",
      ar: "نعم. تشمل خدمة DevOps وإدارة الخوادم لدينا مسارات النشر وتأمين البيئات والمراقبة وتحسين الأداء والدعم التشغيلي بعد الإطلاق.",
    },
  },
  {
    id: "mobile-web",
    category: "scope",
    question: {
      en: "Can one engagement include both a website and a mobile app?",
      ar: "هل يمكن أن يشمل التعاون موقعاً إلكترونياً وتطبيق موبايل معاً؟",
    },
    answer: {
      en: "Absolutely. Several portfolio projects are modeled as cross-platform engagements where the website, dashboards, and mobile products share a cohesive product language.",
      ar: "بالتأكيد. عدد من مشاريعنا مصمم كتجارب متعددة المنصات حيث يشترك الموقع ولوحات التحكم وتطبيقات الموبايل في لغة منتج موحدة.",
    },
  },
  {
    id: "handoff",
    category: "delivery",
    question: {
      en: "How do you make the frontend ready for future backend integration?",
      ar: "كيف تجعلون الواجهة الأمامية جاهزة للربط مع الخلفية لاحقاً؟",
    },
    answer: {
      en: "We structure data, components, and page rendering with clear typing, reusable contracts, and API-ready access layers so backend services can be introduced with minimal refactoring.",
      ar: "ننظم البيانات والمكوّنات وبناء الصفحات من خلال أنواع واضحة وعقود قابلة لإعادة الاستخدام وطبقات وصول جاهزة لـ API حتى يمكن إضافة الخدمات الخلفية بأقل قدر من إعادة الهيكلة.",
    },
  },
  {
    id: "communication",
    category: "engagement",
    question: {
      en: "What can clients expect from communication and progress updates?",
      ar: "ماذا يتوقع العميل من حيث التواصل ومتابعة التقدم؟",
    },
    answer: {
      en: "Clear checkpoints, practical delivery summaries, and a transparent view of decisions, blockers, and next actions. We aim to reduce ambiguity, not add to it.",
      ar: "نقاط متابعة واضحة وملخصات عملية للتقدم ورؤية شفافة للقرارات والعوائق والخطوات التالية. هدفنا تقليل الغموض لا زيادته.",
    },
  },
  {
    id: "nda",
    category: "commercial",
    question: {
      en: "Can you work under confidentiality or NDA requirements?",
      ar: "هل يمكنكم العمل ضمن متطلبات سرية أو اتفاقيات عدم إفصاح؟",
    },
    answer: {
      en: "Yes. We can align around confidentiality expectations for product details, staging environments, source material, and client communication flows.",
      ar: "نعم. يمكننا الالتزام بمتطلبات السرية المتعلقة بتفاصيل المنتج وبيئات الاختبار والمواد المصدرية ومسارات التواصل مع العميل.",
    },
  },
];
