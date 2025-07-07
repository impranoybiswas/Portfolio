import React from "react";
import Container from "../customs/Container";
import Title from "../customs/Title";

import {
  SiReact,
  SiTailwindcss,
  SiDaisyui,
  SiReactrouter,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import ProjectCard from "../components/ProjectCard";


export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Work Nest",
      image: "https://i.ibb.co/fG1spYNY/work-nest.png",
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
    {
      id: 2,
      name: "Share Bite",
      image: "https://i.ibb.co/YGr9hMc/share-bite.png",
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
  ];
  return (
    <Container id="projects">
      <Title title="Projects" subtitle="Projects I have worked on" />
      <div className="w-full grid grid-cols-1 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
}
