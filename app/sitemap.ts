import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { locales, withLocale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/metadata";

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedStaticRoutes = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: absoluteUrl(withLocale(locale, route)),
      lastModified: new Date(),
    })),
  );

  const localizedServiceRoutes = locales.flatMap((locale) =>
    services.map((service) => ({
      url: absoluteUrl(withLocale(locale, `/services/${service.slug}`)),
      lastModified: new Date(),
    })),
  );

  const localizedProjectRoutes = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: absoluteUrl(withLocale(locale, `/projects/${project.slug}`)),
      lastModified: new Date(),
    })),
  );

  return [
    ...localizedStaticRoutes,
    ...localizedServiceRoutes,
    ...localizedProjectRoutes,
  ];
}
