"use client";

import { FaHome, FaUserAlt } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { IoMdSettings } from "react-icons/io";
import { MdDisplaySettings } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { motion } from "motion/react";

const navLinks = [
  { name: "About", path: "about", icon: <FaUserAlt size={18} /> },
  { name: "Skills", path: "skills", icon: <IoMdSettings size={23} /> },
  { name: "", path: "home", icon: <FaHome size={23} /> },
  { name: "Projects", path: "projects", icon: <MdDisplaySettings size={23} /> },
  { name: "Contact", path: "contact", icon: <LuContact size={22} /> },
];

export default function Navbar() {
  return (
    <motion.nav 
    initial={{ opacity: 0, scaleX: 0.7 }}
    animate={{ opacity: 1, scaleX: 0.99 }}
    transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
    viewport={{ once: true, amount: 0.2 }}
    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 scale-99 hover:scale-100 transition-all duration-500 ease-in-out">
      <div className="flex items-center gap-3 rounded-full border border-secondary/40 bg-primary/20 backdrop-blur-md p-2 shadow-2xl text-white">
        {navLinks.map((link) => {
          return (
            <ScrollLink
              key={link.name}
              to={link.path}
              smooth={true}
              duration={1000}
              spy={true}
              offset={-30}
              className="group h-10 w-10 md:w-auto flex items-center justify-center rounded-full transition-all duration-300 ease-in-out text-white hover:bg-primary/20 cursor-pointer md:px-4 text-shadow-xs text-lg md:text-base"
              activeClass="bg-pink-600 text-secondary ring-1 ring-secondary/30 whitespace-nowrap"
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
