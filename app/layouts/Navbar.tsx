"use client";
import React, { useContext, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { ScrollContext } from "../providers/ScrollProvider";
import Button from "../ui/Button";
import SiteTitle from "../ui/SiteTitle";
import MenuButton from "../ui/MenuButton";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

export const resumeLink =
  "https://drive.google.com/file/d/1q1GvCYP-pihc6pnOu5fgY5zN-USw33Sk/view";

export default function Navbar() {
  const context = useContext(ScrollContext);
  const isScrolled = context?.isScrolled ?? false;
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={`fixed top-0 left-0 z-50 bg-base-100 h-fit w-full px-5 md:px-12 lg:px-25 text-white
    ${isScrolled ? "shadow-sm shadow-secondary/30" : ""} `}
    >
      <section className="w-full hidden md:flex justify-between mx-auto h-16 items-center gap-2">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1"
        >
          <SiteTitle />
        </motion.div>

        <div className="flex-3 flex justify-center items-center gap-5 z-50 text-white/80">
          {navLinks.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                type: "spring",
                stiffness: 80,
                damping: 15,
                mass: 1.5,
              }}
              viewport={{ once: true, amount: 0.2 }}
              key={i}
            >
              <ScrollLink
                to={item.path}
                smooth={true}
                duration={300}
                spy={true}
                offset={-80}
                activeClass="text-pink-600 font-semibold"
                className="flex cursor-pointer hover:text-secondary transition text-lg"
              >
                {item.name}
              </ScrollLink>
            </motion.div>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 80,
            damping: 15,
            mass: 1.5,
          }}
          href={resumeLink}
          target="_blank"
          className="flex-1 flex justify-end items-center"
        >
          <Button
            label="Resume"
            leftIcon={<SiReaddotcv />}
            isOutline={false}
            isLarge={false}
          />
        </motion.a>
      </section>

      {/* Medium Screen */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 80,
          damping: 15,
          mass: 1.5,
        }}
        className="flex md:hidden justify-between items-center h-16 w-full"
      >
        <SiteTitle />

        <div className="flex justify-center items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/impranoybiswas/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-white"
          >
            <FaLinkedin size={25} />
          </Link>
          <Link
            href="https://www.github.com/impranoybiswas/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-white"
          >
            <FaGithub size={25} />
          </Link>
          <MenuButton
            menuOpen={open}
            setMenuOpen={setOpen}
            className="size-6"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className={`absolute top-16 right-0 w-full h-[calc(100vh-64px)] bg-transparent flex justify-end
          trasition duration-500 ease-in-out 
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <div className="flex flex-col items-end py-5 gap-0 bg-accent shadow-lg rounded-bl-lg w-fit h-fit border-l border-b border-secondary/30">
            {navLinks.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.path}
                smooth={true}
                duration={300}
                spy={true}
                offset={-80}
                className="relative font-semibold cursor-pointer pr-5 py-3 text-xl uppercase tracking-wider border-r-7 border-r-accent trasition duration-300 ease-in-out"
                activeClass=" border-r-secondary"
              >
                {item.name}
              </ScrollLink>
            ))}
            <Link className="mt-5 mx-5" href={resumeLink} target="_blank">
              <Button
                label="Resume"
                leftIcon={<SiReaddotcv />}
                isOutline={false}
                isLarge={false}
              />
            </Link>
          </div>
        </div>
      </motion.section>
    </nav>
  );
}
