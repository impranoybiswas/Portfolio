"use client";

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { ReactNode } from "react";
import Image from "next/image";
import Button from "../ui/Button";

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px,  #7522c2, #260a2e, #260a2e)`;

    e.currentTarget.style.border = "none";
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
 
    e.currentTarget.style.background = "#260a2e";
    e.currentTarget.style.border = "1px solid #852ef430";
  };

  return (
    <div
      data-aos="fade-in"
      data-aos-delay="200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-overlay flex justify-center items-center p-[1px] bg-accent border border-primary/30 rounded-2xl shadow-md group"
    >
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10 bg-accent/85 rounded-2xl group-hover:border group-hover:border-transparent">
        
          {/* Image Section */}
          <div className="md:w-1/2 w-full overflow-y-scroll h-72 shadow-lg rounded-lg">
            <div className="w-full h-auto relative ">
              <Image
                src={image}
                alt={name}
                height={1000}
                width={1000}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
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
              <a href={github} target="_blank" rel="noreferrer">
                <Button
                  isLarge={false}
                  isOutline={false}
                  label="GitHub"
                  leftIcon={<FaGithub />}
                />
              </a>
              <a href={live} target="_blank" rel="noreferrer">
                <Button
                  isLarge={false}
                  isOutline={true}
                  label="Live"
                  leftIcon={<TbWorld />}
                />
              </a>
            </div>
          </div>
        </div>
     
    </div>
  );
}
