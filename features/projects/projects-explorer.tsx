"use client";

import { useDeferredValue, useState } from "react";

import { ProjectCard } from "@/components/common/project-card";
import { Button } from "@/components/ui/button";
import { localize } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/messages/en";
import type { Locale, Project, Service } from "@/types/content";

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm transition-all duration-300",
        active
          ? "border-[#ffa240]/55 bg-[#ffa240]/12 text-[#ffd3a0]"
          : "border-white/10 bg-white/[0.04] text-white/62 hover:border-white/20 hover:text-white",
      )}
    >
      {label}
    </button>
  );
}

export function ProjectsExplorer({
  locale,
  projects,
  services,
  dictionary,
  common,
}: {
  locale: Locale;
  projects: Project[];
  services: Service[];
  dictionary: Dictionary["projectsPage"];
  common: Dictionary["common"];
}) {
  const [search, setSearch] = useState("");
  const [activeService, setActiveService] = useState("all");
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      deferredSearch.length === 0 ||
      localize(project.name, locale).toLowerCase().includes(deferredSearch) ||
      project.techStack.join(" ").toLowerCase().includes(deferredSearch);

    const matchesService =
      activeService === "all" || project.serviceSlugs.includes(activeService as Service["slug"]);

    return matchesSearch && matchesService;
  });

  function clearFilters() {
    setSearch("");
    setActiveService("all");
  }

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <label htmlFor="project-search" className="mb-3 block text-sm text-white/72">
              {common.search}
            </label>
            <input
              id="project-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={dictionary.searchPlaceholder}
              className="h-12 w-full rounded-full border border-white/10 bg-black/20 px-5 text-sm text-white placeholder:text-white/36 outline-none transition-colors duration-300 focus:border-[#ffa240]/55"
            />
          </div>
          <div className="flex items-end xl:justify-end">
            <div className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-white/62">
              {filteredProjects.length} / {projects.length}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <div className="text-sm text-white/62">{dictionary.serviceFilter}</div>
          <div className="flex flex-wrap gap-3">
            <FilterChip
              active={activeService === "all"}
              label={common.all}
              onClick={() => setActiveService("all")}
            />
            {services.map((service) => (
              <FilterChip
                key={service.slug}
                active={activeService === service.slug}
                label={localize(service.name, locale)}
                onClick={() => setActiveService(service.slug)}
              />
            ))}
          </div>
        </div>
      </div>

      {filteredProjects.length ? (
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
              delay={index * 0.04}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-[2rem] border border-dashed border-white/12 bg-white/[0.03] p-10 text-center">
          <h3 className="text-2xl font-semibold text-white">{common.noResultsTitle}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/62">
            {common.noResultsDescription}
          </p>
          <div className="mt-6">
            <Button variant="secondary" onClick={clearFilters}>
              {common.clearFilters}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
