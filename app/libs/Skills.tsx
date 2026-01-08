import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiTypescript } from "react-icons/si";
import { FaReact, FaJs } from "react-icons/fa";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

export const frontendSkills = [
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
    name: "TypeScript",
    icon: <SiTypescript />,
    bgColor: "bg-blue-50",
    color: "text-blue-500",
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

export const backendSkills = [
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
  {
    name: "Supabase",
    icon: <RiSupabaseFill />,
    bgColor: "bg-green-50",
    color: "text-green-500",
  },
];

export const graphicsSkills = [
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
