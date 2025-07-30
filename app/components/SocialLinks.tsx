import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaBehance,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/impranoybiswas/",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/impranoybiswas",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/impranoybiswas",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/impranoybiswas",
  },
  {
    name: "Behance",
    icon: <FaBehance />,
    link: "https://www.behance.com/impranoybiswas",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/impranoybiswas",
  },
  {
    name: "Threads",
    icon: <FaThreads />,
    link: "https://www.threads.net/@impranoybiswas",
  },
];

export default function SocialLinks() {
  return (
    <div className="relative size-60 bg-transparent rounded-full mx-auto my-20 animate-socialSpin">
      {socialLinks.map((link, i) => {
        const angle = ((i+1) * 360) / socialLinks.length;
        const radius = 100; // adjust based on parent size
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <a
            key={i}
            href={link.link}
            target="_blank"
            className={`bg-gradient-to-r from-primary/50 to-black/60 hover:bg-secondary hover:scale-110 transition-all duration-800 shadow-md rounded-full flex items-center justify-center gap-4 size-14 md:size-16 text-white cursor-pointer text-3xl md:text-4xl absolute text-shadow-sm animate-sillyZoom`}
            style={{
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="animate-socialSpinR">{link.icon}</span>
          </a>
        );
      })}
    </div>
  );
}
