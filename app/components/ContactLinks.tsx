"use client";

import { FaEnvelope, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IconWrapper } from "./SocialLinks";
import Link from "next/link";
import { motion } from "motion/react";

const messengers = [
  {
    name: "Email",
    url: "mailto:impranoybiswas@gmail.com",
    ariaLabel: "Send email",
    icon: <FaEnvelope />,
    hoverColor: "hover:text-blue-800",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/8801521305572",
    ariaLabel: "Chat on WhatsApp",
    icon: <FaWhatsapp />,
    hoverColor: "hover:text-green-600",
  },
  {
    name: "Telegram",
    url: "https://t.me/impranoybiswas",
    ariaLabel: "Chat on Telegram",
    icon: <FaTelegramPlane />,
    hoverColor: "hover:text-orange-400",
  },
];

export default function ContactLinks() {
  return (
    <div className="w-full text-center relative">
      <div className="flex items-center justify-center gap-4 absolute -top-15 left-1/2 -translate-x-1/2 z-5">
        {messengers.map((messenger, index) => (
          <motion.div
            key={index}
            className="size-15 group relative"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 20 }}
            whileHover={{ scale: 1.15, y: 0 }}
            transition={{
              delay: index * 0.3,
              type: "spring",
              stiffness: 80,
              damping: 15,
              mass: 1.5,
            }}
          >
            <Link target="_blank" href={messenger.url}>
              <IconWrapper
                className={`size-12 text-2xl text-shadow-sm group-hover:shadow-md group-hover:shadow-secondary/30`}
                isHovered={true}
                animationDelay={0.2}
              >
                {messenger.icon}
                <span className="absolute top-0 left-0 text-xs scale-0 group-hover:scale-100 group-hover:-top-6 group-hover:-left-9 transition-all duration-500 ease-in-out bg-primary px-2 py-1 rounded-full border-secondary border shadow-xs whitespace-nowrap">
                  {messenger.name}
                </span>
              </IconWrapper>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="w-full h-10 bg-base-100/60 backdrop-blur-xl absolute top-0 left-0 z-5" />

      <div className="w-full md:w-3/5 mx-auto mb-3 h-[2px] bg-linear-to-r via-primary/60 via-50% from-transparent to-transparent relative z-10" />
      <span className="text-white text-xl lg:text-2xl font-semibold relative z-10">
        Contact Me
      </span>
    </div>
  );
}
