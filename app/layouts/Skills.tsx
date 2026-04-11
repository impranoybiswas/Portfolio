"use client";
import React from "react";
import SkillSections from "../components/SkillSections";
import Section from "../ui/Section";
import Image from "next/image";
import { backendSkills, frontendSkills, graphicsSkills } from "../lib/Skills";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <Section
      name="skills"
      className="relative"
      title={t("title")}
      subtitle={t("subtitle")}
    >
      <div className="size-40 md:size-90 absolute right-0 -bottom-10 z-5 opacity-5">
        <Image alt="circuit" src="/images/circuit.png" fill />
      </div>

      <SkillSections title={t("categories.frontend")} skills={frontendSkills} />
      <SkillSections title={t("categories.backend")} skills={backendSkills} />
      <SkillSections title={t("categories.graphics")} skills={graphicsSkills} />
    </Section>
  );
}
