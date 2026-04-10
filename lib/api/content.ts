import { cache } from "react";

import { faqItems } from "@/data/faq";
import { privacySections, termsSections } from "@/data/legal";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import {
  companyValues,
  contactMethods,
  deliveryProcess,
  siteSettings,
  siteStats,
  technologyGroups,
  trustSignals,
} from "@/data/site";
import { testimonials } from "@/data/testimonials";

export const getSiteSettings = cache(async () => siteSettings);
export const getSiteStats = cache(async () => siteStats);
export const getTrustSignals = cache(async () => trustSignals);
export const getCompanyValues = cache(async () => companyValues);
export const getDeliveryProcess = cache(async () => deliveryProcess);
export const getTechnologyGroups = cache(async () => technologyGroups);
export const getContactMethods = cache(async () => contactMethods);
export const getTestimonials = cache(async () => testimonials);
export const getFaqItems = cache(async () => faqItems);
export const getPrivacySections = cache(async () => privacySections);
export const getTermsSections = cache(async () => termsSections);

export const getServices = cache(async () => services);
export const getFeaturedServices = cache(async () =>
  services.filter((service) => service.featured),
);
export const getServiceBySlug = cache(async (slug: string) =>
  services.find((service) => service.slug === slug),
);

export const getProjects = cache(async () => projects);
export const getFeaturedProjects = cache(async () =>
  projects.filter((project) => project.featured),
);
export const getProjectBySlug = cache(async (slug: string) =>
  projects.find((project) => project.slug === slug),
);
export const getRelatedProjects = cache(async (slugs: string[]) =>
  projects.filter((project) => slugs.includes(project.slug)),
);
