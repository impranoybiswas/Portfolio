import React from "react";
import Container from "../customs/Container";
import Title from "../customs/Title";
import SkillSections from "../components/SkillSections";

import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
import { FaReact, FaJs } from "react-icons/fa";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiCanva } from "react-icons/si";

const frontendSkills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    bgColor: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    bgColor: "bg-blue-50",
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    bgColor: "bg-yellow-50",
    color: "text-yellow-500",
  },
  {
    name: "React",
    icon: <FaReact />,
    bgColor: "bg-cyan-50",
    color: "text-cyan-500",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    bgColor: "bg-slate-50",
    color: "text-gray-900",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    bgColor: "bg-sky-50",
    color: "text-sky-500",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    bgColor: "bg-lime-50",
    color: "text-lime-600",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    bgColor: "bg-gray-100",
    color: "text-gray-700",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    bgColor: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    bgColor: "bg-yellow-50",
    color: "text-yellow-500",
  },
];

const graphicsSkills = [
  {
    name: "Figma",
    icon: <SiFigma />,
    bgColor: "bg-purple-50",
    color: "text-purple-500",
  },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
    bgColor: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    name: "Illustrator",
    icon: <SiAdobeillustrator />,
    bgColor: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    name: "Canva",
    icon: <SiCanva />,
    bgColor: "bg-indigo-50",
    color: "text-indigo-500",
  },
];

export default function Skills() {
  return (
    <Container id={"skills"}>
      <Title
        title="Skills & Technologies"
        subtitle={
          "Technologies I master to build exceptional digital experiences"
        }
      />

      <img
        src="./assets/circuit.png"
        className="h-40 w-40 md:w-80 md::h-80 lg:w-100 lg:h-100 absolute right-0 bottom-0 z-5 opacity-5"
      />

      <SkillSections title="Frontend" skills={frontendSkills} />
      <SkillSections title="Backend" skills={backendSkills} />
      <SkillSections title="Graphic Design" skills={graphicsSkills} />
    </Container>
  );
}
