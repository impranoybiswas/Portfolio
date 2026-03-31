"use client";

import { Link as ScrollLink } from "react-scroll";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { House , User, CodeXml, FolderGit, AtSign  } from "lucide-react";



export default function Navbar() {
  const t = useTranslations("navbar");

  const navLinks = [
  { name: t("about"), path: "about", icon: <User /> },
  { name: t("skills"), path: "skills", icon: <CodeXml /> },
  { name: "", path: "home", icon: <House /> },
  { name: t("projects"), path: "projects", icon: <FolderGit /> },
  { name: t("contact"), path: "contact", icon: <AtSign /> },
];
  return (
    <motion.nav 
    initial={{ opacity: 0, scaleX: 0.7 }}
    animate={{ opacity: 1, scaleX: 0.99 }}
    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
    viewport={{ once: true, amount: 0.2 }}
    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 scale-99 hover:scale-100 transition-all duration-500 ease-in-out">
      <div className="flex items-center gap-3 rounded-full border border-secondary/40 bg-background/50 backdrop-blur-md p-2 shadow-2xl text-foreground">
        {navLinks.map((link) => {
          return (
            <ScrollLink
              key={link.name}
              to={link.path}
              smooth={true}
              duration={1000}
              spy={true}
              offset={-30}
              className="group h-10 w-10 md:w-auto flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:bg-secondary cursor-pointer md:px-4 text-shadow-xs text-lg md:text-base"
              activeClass="bg-secondary text-white ring-1 ring-secondary/30 whitespace-nowrap"
            >
              <motion.div className="flex items-center gap-2" whileTap={{ scale: 0.9 }}>{link.icon}
              {link.name !== "" && (
                <span
                  className="hidden md:inline-block"
                >
                  {link.name}
                </span>
              )}
              
              </motion.div>
            </ScrollLink>
          );
        })}
      </div>
    </motion.nav>
  );
}
