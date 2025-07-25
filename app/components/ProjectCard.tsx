'use client';

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { ReactNode } from "react";

interface TechStack {
  name: string;
  icon: ReactNode;
  color: string;
  bg: string;
}

interface Project {
  name: string;
  image: string;
  description: string;
  stack: TechStack[];
  live: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, image, description, stack, live, github } = project;

  return (
    <div
      data-aos="fade-in"
      data-aos-delay="100"
      className="bg-black/25 rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8"
    >
      {/* Image Section */}
      <div className="md:w-1/2 w-full rounded-lg overflow-y-scroll h-64 shadow-md">
        <img
          src={image}
          alt={name}
          className="w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 w-full space-y-4">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-gray-100 text-justify">{description}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((tech, index) => (
            <span
              key={index}
              className={`flex items-center gap-1 px-3 py-1 rounded-md shadow-sm text-sm ${tech.bg} ${tech.color}`}
            >
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
          >
            <TbWorld size={18} /> Live
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
          >
            <FaGithub size={18} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
