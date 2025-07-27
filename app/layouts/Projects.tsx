import React from "react";

import {
  SiReact,
  SiTailwindcss,
  SiDaisyui,
  SiReactrouter,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import Section from "../ui/Section";
import { FaGithub } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Tower Edge",
      image:
        "https://res.cloudinary.com/dudvlnxio/image/upload/v1753454186/tower-edge_cynmxr.png",
      description:
        "Tower Edge is a full-stack web application designed to streamline apartment management tasks for both building admins and residents. It includes role-based dashboards for admins, members, and general users, providing a seamless, digital experience in managing building activities, communication, payments, and more.",
      live: "https://tower-edge-pranoy.netlify.app/",
      github: "https://github.com/impranoybiswas/PH_A12_Tower_Edge",
      stack: [
        {
          name: "React",
          icon: <SiReact />,
          color: "text-sky-500",
          bg: "bg-sky-50",
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss />,
          color: "text-sky-600",
          bg: "bg-sky-100",
        },
        {
          name: "DaisyUI",
          icon: <SiDaisyui />,
          color: "text-amber-600",
          bg: "bg-amber-50",
        },
        {
          name: "React Router",
          icon: <SiReactrouter />,
          color: "text-red-500",
          bg: "bg-red-50",
        },
        {
          name: "Firebase",
          icon: <SiFirebase />,
          color: "text-yellow-600",
          bg: "bg-yellow-50",
        },
      ],
    },
    {
      id: 2,
      name: "Share Bite",
      image:
        "https://res.cloudinary.com/dudvlnxio/image/upload/v1753454185/share-bite_xx2bdd.png",
      description:
        "Share Bite is a community-driven food sharing platform that helps reduce food waste by connecting donors and receivers. Built with React and Tailwind CSS, it allows users to share surplus food from events or households. The app promotes sustainability through real-time listings, location-based sharing, and secure user interaction.",
      live: "https://share-bite-pranoy.netlify.app/",
      github: "https://github.com/impranoybiswas/PH_A11_Share_Bite",
      stack: [
        {
          name: "React",
          icon: <SiReact />,
          color: "text-sky-500",
          bg: "bg-sky-50",
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss />,
          color: "text-sky-600",
          bg: "bg-sky-100",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "text-green-600",
          bg: "bg-green-50",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          color: "text-gray-700",
          bg: "bg-gray-100",
        },
        {
          name: "Firebase",
          icon: <SiFirebase />,
          color: "text-yellow-600",
          bg: "bg-yellow-50",
        },
      ],
    },
    {
      id: 3,
      name: "Work Nest",
      image:
        "https://res.cloudinary.com/dudvlnxio/image/upload/v1753454186/work-nest_gl8xep.png",
      description:
        "Work Nest is a modern freelance task posting platform where clients can post jobs and freelancers can bid for work. Built with React and Tailwind CSS, it ensures a responsive, user-friendly experience. Features include real-time bidding, secure authentication, and dynamic task management for seamless collaboration.",
      live: "https://work-nest-pranoy.netlify.app/",
      github: "https://github.com/impranoybiswas/PH_A10_Work_Nest",
      stack: [
        {
          name: "React",
          icon: <SiReact />,
          color: "text-sky-500",
          bg: "bg-sky-50",
        },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss />,
          color: "text-sky-600",
          bg: "bg-sky-100",
        },
        {
          name: "DaisyUI",
          icon: <SiDaisyui />,
          color: "text-amber-600",
          bg: "bg-amber-50",
        },
        {
          name: "React Router",
          icon: <SiReactrouter />,
          color: "text-red-500",
          bg: "bg-red-50",
        },
        {
          name: "Firebase",
          icon: <SiFirebase />,
          color: "text-yellow-600",
          bg: "bg-yellow-50",
        },
      ],
    },
  ];
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

        <div
          data-aos="fade-in"
          data-aos-delay="100"
          className="bg-accent rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8"
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
                    bg-gray-800 text-white `}
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
                className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
              >
                <FaGithub size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
