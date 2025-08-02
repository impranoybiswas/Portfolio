import React from "react";

import {

  SiDaisyui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import Section from "../ui/Section";
import { FaGithub } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import Button from "../ui/Button";
import { projects } from "../libs/Projects";

export default function Projects() {
 

  return (
    <Section
      name="projects"
      title="Projects"
      subtitle="Projects I have worked on"
    >
      <div className="w-full grid grid-cols-1 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* This Portfolio Card */}
        <div
          data-aos="fade-in"
          data-aos-delay="100"
          className="bg-accent rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-6 border border-primary/20"
        >
          {/* Content Section */}
          <div className=" w-full space-y-4">
            <h2 className="text-3xl font-bold text-center">THIS PORTFOLIO</h2>
            <p className="text-gray-100 text-center">
              This website is my frist NextJS Project. I made it using stack
              below :
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <span
                className={`flex items-center gap-1 px-3 py-1 rounded-md shadow-sm text-sm
                    bg-black text-white `}
              >
                <RiNextjsLine /> Next JS
              </span>
              <span
                className={`flex items-center gap-1 px-3 py-1 rounded-md shadow-sm text-sm
                    text-blue-500 bg-blue-100 `}
              >
                <SiTypescript /> TypeScript
              </span>
              <span
                className={`flex items-center gap-1 px-3 py-1 rounded-md shadow-sm text-sm
                    text-sky-600 bg-sky-50 `}
              >
                <SiTailwindcss /> TailwindCSS
              </span>
              <span
                className={`flex items-center gap-1 px-3 py-1 rounded-md shadow-sm text-sm
                    text-amber-600 bg-amber-50 `}
              >
                <SiDaisyui /> DaisyUI
              </span>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-6 justify-center">
              <a
                href={"https://github.com/impranoybiswas/Portfolio"}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  isLarge={false}
                  isOutline={false}
                  label="GitHub"
                  leftIcon={<FaGithub />}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
