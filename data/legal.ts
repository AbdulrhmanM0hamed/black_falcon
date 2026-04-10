import type { LegalSection } from "@/types/content";

export const privacySections: LegalSection[] = [
  {
    title: {
      en: "Information we collect",
      ar: "المعلومات التي نجمعها",
    },
    body: {
      en: [
        "When you use the contact form or direct communication links, we may receive details such as your name, company, email, phone number, requested service, and project brief.",
        "We may also collect basic technical usage information required for performance, security, and analytics when this frontend is connected to production services.",
      ],
      ar: [
        "عند استخدام نموذج التواصل أو قنوات التواصل المباشر، قد نستقبل بيانات مثل الاسم واسم الشركة والبريد الإلكتروني ورقم الهاتف والخدمة المطلوبة وملخص المشروع.",
        "وقد نجمع أيضاً معلومات تقنية أساسية تتعلق بالأداء والأمان والتحليلات عندما يتم ربط هذه الواجهة بخدمات إنتاج حقيقية.",
      ],
    },
  },
  {
    title: {
      en: "How information is used",
      ar: "كيف نستخدم المعلومات",
    },
    body: {
      en: [
        "Information is used to respond to inquiries, evaluate project fit, plan communication, and improve the quality of the website experience.",
        "We do not position this portfolio website as a public data marketplace or open user-generated platform.",
      ],
      ar: [
        "تُستخدم المعلومات للرد على الاستفسارات وتقييم ملاءمة المشروع وتنظيم التواصل وتحسين جودة تجربة الموقع.",
        "هذا الموقع التعريفي ليس منصة عامة لتبادل البيانات أو المحتوى الذي ينشئه المستخدمون.",
      ],
    },
  },
  {
    title: {
      en: "Data handling and retention",
      ar: "التعامل مع البيانات والاحتفاظ بها",
    },
    body: {
      en: [
        "Inquiry data should only be retained for as long as needed to manage the related discussion, commercial follow-up, or service planning.",
        "As backend systems are introduced, storage, retention, and deletion practices should be updated to match the final production architecture.",
      ],
      ar: [
        "يجب الاحتفاظ ببيانات الاستفسار فقط للمدة اللازمة لإدارة النقاش المرتبط بها أو المتابعة التجارية أو تخطيط الخدمة.",
        "ومع إضافة الأنظمة الخلفية لاحقاً، ينبغي تحديث ممارسات التخزين والاحتفاظ والحذف بما يتوافق مع البنية الإنتاجية النهائية.",
      ],
    },
  },
  {
    title: {
      en: "Third-party services",
      ar: "خدمات الطرف الثالث",
    },
    body: {
      en: [
        "The website may link to external services such as WhatsApp, social platforms, or map providers. Those services operate under their own privacy and security policies.",
      ],
      ar: [
        "قد يربط الموقع بخدمات خارجية مثل واتساب أو المنصات الاجتماعية أو خدمات الخرائط، وتخضع تلك الخدمات لسياسات الخصوصية والأمان الخاصة بها.",
      ],
    },
  },
];

export const termsSections: LegalSection[] = [
  {
    title: {
      en: "Website purpose",
      ar: "غرض الموقع",
    },
    body: {
      en: [
        "This website presents the capabilities, services, and portfolio positioning of Black Falcon as a software company.",
        "Content is provided for informational, inquiry, and business development purposes.",
      ],
      ar: [
        "يعرض هذا الموقع قدرات وخدمات وتموضع بلاك فالكون كشركة برمجيات.",
        "ويُقدَّم المحتوى لأغراض تعريفية وتجارية واستقبال الاستفسارات.",
      ],
    },
  },
  {
    title: {
      en: "Intellectual property",
      ar: "الملكية الفكرية",
    },
    body: {
      en: [
        "Website copy, branding, interface treatments, layouts, and presentation assets should be treated as protected intellectual property unless otherwise stated.",
        "Project references shown here may include adapted or illustrative presentation content for portfolio purposes.",
      ],
      ar: [
        "يجب التعامل مع النصوص والهوية البصرية والمعالجات الواجهية والتخطيطات والأصول التقديمية باعتبارها ملكية فكرية محمية ما لم يُذكر خلاف ذلك.",
        "وقد تتضمن بعض الإشارات إلى المشاريع محتوى عرضياً أو توضيحياً معدلاً لأغراض المعرض التعريفي.",
      ],
    },
  },
  {
    title: {
      en: "No guaranteed engagement",
      ar: "لا يوجد التزام تلقائي بالتعاون",
    },
    body: {
      en: [
        "Submitting an inquiry or using the website does not create a contractual relationship, service guarantee, or binding delivery obligation.",
        "Commercial engagement should only begin once scope, terms, timelines, and responsibilities are formally agreed upon.",
      ],
      ar: [
        "إرسال استفسار أو استخدام الموقع لا ينشئ علاقة تعاقدية أو ضمان خدمة أو التزاماً تنفيذياً ملزماً.",
        "ويبدأ التعاون التجاري فقط بعد الاتفاق الرسمي على النطاق والشروط والجدول الزمني والمسؤوليات.",
      ],
    },
  },
  {
    title: {
      en: "Reasonable use",
      ar: "الاستخدام المقبول",
    },
    body: {
      en: [
        "Users should not attempt to misuse forms, impersonate identities, scrape protected content, or interfere with the operation of the website.",
      ],
      ar: [
        "يجب عدم إساءة استخدام النماذج أو انتحال الهويات أو نسخ المحتوى المحمي أو التدخل في تشغيل الموقع.",
      ],
    },
  },
];
