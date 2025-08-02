import React from "react";
import SkillSections from "../components/SkillSections";
import Section from "../ui/Section";
import Image from "next/image";
import { backendSkills, frontendSkills, graphicsSkills } from "../libs/Skills";

export default function Skills() {
  return (
    <Section
      name="skills"
      className="relative"
      title="Skills & Technologies"
      subtitle="Technologies I master to build exceptional digital experiences"
    >
      <div className="size-40 md:size-90 absolute right-0 -bottom-10 z-5 opacity-5">
        <Image alt="circuit" src="/assets/circuit.png" fill />
      </div>

      <SkillSections title="Frontend" skills={frontendSkills} />
      <SkillSections title="Backend" skills={backendSkills} />
      <SkillSections title="Graphic Design" skills={graphicsSkills} />
    </Section>
  );
}
