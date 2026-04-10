import type { StaticImageData } from "next/image";

export type Locale = "en" | "ar";
export type Direction = "ltr" | "rtl";
export type LocalizedValue<T> = Record<Locale, T>;

export type ServiceSlug =
  | "web-system-development"
  | "website-design"
  | "ui-ux-design"
  | "software-testing-qa"
  | "devops-server-management"
  | "mobile-application-development";

export type ServiceIconKey =
  | "web-development"
  | "website-design"
  | "ui-ux"
  | "qa"
  | "devops"
  | "mobile";

export type IconKey =
  | ServiceIconKey
  | "strategy"
  | "shield"
  | "rocket"
  | "layers"
  | "workflow"
  | "messages"
  | "mail"
  | "whatsapp"
  | "location"
  | "clock"
  | "chart"
  | "sparkles"
  | "users"
  | "globe"
  | "server"
  | "smartphone"
  | "badge"
  | "target"
  | "shield-check"
  | "users-round";

export type ProjectType = "website" | "mobile" | "website-mobile";

export type ProjectCategory =
  | "platform"
  | "ai"
  | "commerce"
  | "operations"
  | "community"
  | "brand";

export type IndustryKey =
  | "healthcare"
  | "fitness"
  | "education"
  | "community"
  | "events"
  | "real-estate"
  | "mobility"
  | "lifestyle"
  | "business";

export interface TrustSignal {
  iconKey: IconKey;
  en: string;
  ar: string;
}

export interface Metric {
  value: string;
  label: LocalizedValue<string>;
  description?: LocalizedValue<string>;
}

export interface ContentBlock {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface ProcessStep {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactMethod {
  iconKey: IconKey;
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
  value: string;
  href: string;
}

export interface CompanyValue {
  iconKey: IconKey;
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface TechnologyGroup {
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
  items: string[];
}

export interface Service {
  slug: ServiceSlug;
  iconKey: ServiceIconKey;
  image: string;
  name: LocalizedValue<string>;
  summary: LocalizedValue<string>;
  headline: LocalizedValue<string>;
  description: LocalizedValue<string>;
  keyFeatures: LocalizedValue<string[]>;
  benefits: LocalizedValue<string[]>;
  deliverables: LocalizedValue<string[]>;
  process: ProcessStep[];
  technologies: string[];
  highlights: Metric[];
  relatedProjectSlugs: string[];
  featured?: boolean;
}

export interface ProjectLinkSet {
  website?: string;
  googlePlay?: string;
  appStore?: string;
  caseStudy?: string;
}

export interface GalleryImage {
  src: StaticImageData | string;
  alt: LocalizedValue<string>;
}

export interface Project {
  slug: string;
  name: LocalizedValue<string>;
  shortDescription: LocalizedValue<string>;
  detailedDescription: LocalizedValue<string>;
  categoryKey: ProjectCategory;
  category: LocalizedValue<string>;
  industryKey: IndustryKey;
  industry: LocalizedValue<string>;
  coverImage: StaticImageData;
  gallery: GalleryImage[];
  serviceSlugs: ServiceSlug[];
  techStack: string[];
  features: LocalizedValue<string[]>;
  challenges: ContentBlock[];
  solutions: ContentBlock[];
  results: Metric[];
  timeline: LocalizedValue<string>;
  projectType: ProjectType;
  links: ProjectLinkSet;
  heroAccent: string;
  relatedProjectSlugs: string[];
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: LocalizedValue<string>;
  company: string;
  quote: LocalizedValue<string>;
}

export interface FaqItem {
  id: string;
  category: string;
  question: LocalizedValue<string>;
  answer: LocalizedValue<string>;
}

export interface LegalSection {
  title: LocalizedValue<string>;
  body: LocalizedValue<string[]>;
}

export interface SiteStats {
  value: string;
  label: LocalizedValue<string>;
  description: LocalizedValue<string>;
}

export interface SiteSettings {
  name: string;
  summary: LocalizedValue<string>;
  tagline: LocalizedValue<string>;
  mission: LocalizedValue<string>;
  address: LocalizedValue<string>;
  email: string;
  phone: string;
  whatsapp: string;
  socialLinks: SocialLink[];
}
