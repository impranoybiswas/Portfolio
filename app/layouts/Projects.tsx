import React from "react";

import ProjectCard from "../components/ProjectCard";
import Section from "../ui/Section";
import { projects } from "../libs/Projects";

export default function Projects() {
  return (
    <Section

      name="projects"
      title="Projects"
      subtitle="Projects I have worked on"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
