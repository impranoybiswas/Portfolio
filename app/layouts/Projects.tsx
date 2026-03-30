"use client";
import React from "react";

import ProjectCard from "../components/ProjectCard";
import Section from "../ui/Section";
import { projects } from "../libs/Projects";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <Section name="projects" title={t("title")} subtitle={t("subtitle")}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project as any} />
        ))}
      </div>
    </Section>
  );
}
