"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaBehance,
  FaInstagram,
  FaTwitter,
  FaHashtag,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

interface SocialLink {
  id: number;
  name: string;
  icon: React.ReactNode;
  link: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/impranoybiswas/",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/impranoybiswas",
  },
  {
    id: 3,
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/impranoybiswas",
  },
  {
    id: 4,
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/impranoybiswas",
  },
  {
    id: 5,
    name: "Behance",
    icon: <FaBehance />,
    link: "https://www.behance.com/impranoybiswas",
  },
  {
    id: 6,
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/impranoybiswas",
  },
  {
    id: 7,
    name: "Threads",
    icon: <FaThreads />,
    link: "https://www.threads.net/@impranoybiswas",
  },
];

export const IconWrapper = ({
  children,
  className = "",
  isHighlighted = false,
  isHovered = false,
  animationDelay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  isHighlighted?: boolean;
  isHovered?: boolean;
  animationDelay?: number;
}) => (
  <div
    className={`
        backdrop-blur-xl rounded-full flex items-center justify-center transition-all duration-300 border
        ${
          isHighlighted
            ? " bg-gradient-to-r from-primary/50 to-black/60 border-secondary/50 dark:shadow-blue-500/20 shadow-secondary/40 shadow-2xl animate-breathing-glow"
            : `bg-secondery ${!isHovered && "animate-float"}`
        }
        ${
          isHovered
            ? " bg-gradient-to-r from-secondary/50 to-black/60 border-secondary/60 scale-110  shadow-blue-400/40 shadow-2xl"
            : "bg-gradient-to-r from-primary/50 to-black/60 border-secondary/50"
        }
        ${className}
    `}
    style={{ animationDelay: `${animationDelay}s` }}
  >
    {children}
  </div>
);

const IconGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Constants for layout calculation
  const radius = 160;
  const centralIconRadius = 48; // w-24 is 96px, radius is 48px
  const outerIconRadius = 32; // w-16 is 64px, radius is 32px
  const svgSize = 400;
  const svgCenter = svgSize / 2;

  return (
    // Use scale to make the entire component responsive
    <div className="relative w-[400px] h-[500px] scale-75 lg:scale-100">
      {/* SVG container for all connecting lines, drawn underneath the icons */}
      <svg
        width={svgSize}
        height={svgSize}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g>
          {/* Draw lines between outer icons (the "web") */}
          {socialLinks.map((link, i) => {
            const nextIndex = (i + 1) % socialLinks.length;
            const nextIcon = socialLinks[nextIndex];

            const angle1 =
              (-90 + i * (360 / socialLinks.length)) * (Math.PI / 180);
            const x1 =
              svgCenter + (radius - outerIconRadius) * Math.cos(angle1);
            const y1 =
              svgCenter + (radius - outerIconRadius) * Math.sin(angle1);

            const angle2 =
              (-90 + nextIndex * (360 / socialLinks.length)) * (Math.PI / 180);
            const x2 =
              svgCenter + (radius - outerIconRadius) * Math.cos(angle2);
            const y2 =
              svgCenter + (radius - outerIconRadius) * Math.sin(angle2);

            const isLineActive =
              hoveredId === link.id || hoveredId === nextIcon.id;

            return (
              <line
                key={`web-line-${link.id}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isLineActive ? "#852ef4" : "#6B7280"}
                strokeWidth="1.5"
                className="transition-all duration-300 ease-in-out"
                style={{ opacity: isLineActive ? 0.8 : 0.25 }}
                filter={isLineActive ? "url(#glow)" : "none"}
              />
            );
          })}

          {/* Draw lines from center to outer icons (the "spokes") */}
          {socialLinks.map((icon, i) => {
            const angleInDegrees = -90 + i * (360 / socialLinks.length);
            const angleInRadians = angleInDegrees * (Math.PI / 180);

            const startX =
              svgCenter + centralIconRadius * Math.cos(angleInRadians);
            const startY =
              svgCenter + centralIconRadius * Math.sin(angleInRadians);
            const endX =
              svgCenter + (radius - outerIconRadius) * Math.cos(angleInRadians);
            const endY =
              svgCenter + (radius - outerIconRadius) * Math.sin(angleInRadians);
            const isSpokeActive = hoveredId === icon.id;

            return (
              <line
                key={`spoke-line-${icon.id}`}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke={isSpokeActive ? "#852ef4" : "#6B7280"}
                strokeWidth="1.5"
                className="transition-all duration-300 ease-in-out"
                style={{ opacity: isSpokeActive ? 1 : 0.25 }}
                filter={isSpokeActive ? "url(#glow)" : "none"}
              />
            );
          })}
        </g>
      </svg>

      {/* The main container that acts as the center for the circle */}
      <div className="absolute top-1/2 left-1/2">
        {/* Center Icon */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10">
          <IconWrapper
            className="w-25 h-25 text-5xl text-secondary text-shadow-sm relative group"
            isHighlighted={true}
            animationDelay={0}
          >
            <FaHashtag />
            <span className="absolute top-0 left-0 text-sm scale-0 group-hover:scale-100 group-hover:-top-4 group-hover:-left-7 transition-all duration-500 ease-in-out bg-primary px-3 py-1 rounded-full border-secondary border shadow-xs text-white">
              Social Media
            </span>
          </IconWrapper>
        </div>

        {/* Mapping over the outer icons to place them */}
        {socialLinks.map((link, i) => {
          const angleInDegrees = -90 + i * (360 / socialLinks.length);
          const angleInRadians = angleInDegrees * (Math.PI / 180);
          const x = radius * Math.cos(angleInRadians);
          const y = radius * Math.sin(angleInRadians);

          const iconStyle = {
            transform: `translate(${x}px, ${y}px)`,
          };
          const isHovered = hoveredId === link.id;

          return (
            <Link
              href={link.link}
              target="_blank"
              key={link.id}
              className="absolute z-10"
              style={iconStyle}
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 relative">
                {/* Spotlight effect */}
                <div
                  className={`absolute inset-[-20px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-2xl transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                ></div>

                <IconWrapper
                  className="w-16 h-16 text-3xl relative text-shadow-sm group"
                  isHovered={isHovered}
                  animationDelay={i * 0.2}
                >
                  {link.icon}
                  <span className="absolute top-0 left-0 text-xs scale-0 group-hover:scale-100 group-hover:-top-4 group-hover:-left-7 transition-all duration-500 ease-in-out bg-primary px-3 py-1 rounded-full border-secondary border shadow-xs">
                    {link.name}
                  </span>
                </IconWrapper>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default function SocialLinks() {
  return (
    <div className="w-full flex items-center justify-center font-sans p-4 sm:p-8 overflow-hidden">
      {/* Style block to define the animations. */}
      <style>
        {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                @keyframes breathing-glow {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.1); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                }
                @keyframes breathing-glow-light {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.05); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                }
                .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                .dark .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                :not(.dark) .animate-breathing-glow {
                    animation: breathing-glow-light 3s ease-in-out infinite;
                }
            `}
      </style>

      {/* Enhanced background with a radial gradient */}

      <div className="relative z-10 container mx-auto flex items-center justify-center">
        <IconGrid />
      </div>
    </div>
  );
}
