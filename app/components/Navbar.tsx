"use client";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-scroll";

const navLinks = [
  { name: "About", path: "about" },
  { name: "Skills", path: "skills" },
  { name: "Projects", path: "projects" },
  { name: "Contact", path: "contact" },
];

const resumeLink = "";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-primary h-fit w-full text-white">
      <section className="hidden w-full mx-auto lg:flex justify-between h-16 items-center gap-2">
        <Link
          to="home"
          className="flex justify-center items-center gap-2 text-xl font-semibold cursor-pointer"
        >
          <img className="w-5 h-5" src="./logo.svg" alt="" />
          PRANOY
        </Link>

        <div className="flex justify-center items-center gap-5 text-white/70">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              smooth={true}
              duration={300}
              spy={true}
              offset={-80}
              activeClass="text-secondary font-semibold"
              className="cursor-pointer hover:text-secondary transition text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div>
          <a
            className="rounded-md flex justify-center items-center gap-2 py-1 px-4 bg-secondary/90 hover:bg-secondary text-lg font-semibold cursor-pointer transition "
            href={resumeLink}
            target="_blank"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </section>

      <section className="flex lg:hidden justify-between items-center h-16 w-full px-3 md:px-10">
        <Link
          to="home"
          className="flex justify-center items-center gap-2 text-xl font-semibold"
        >
          <img className="w-5 h-5" src="./logo.svg" alt="" /> PRANOY
        </Link>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex justify-center items-center w-10 h-10 text-2xl text-white"
          >
            <CgMenuRightAlt />
          </div>
          <div
            tabIndex={0}
            className="dropdown-content bg-primary rounded-box z-1 w-60 py-2 mt-2 shadow-sm flex flex-col px-4 gap-2"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                smooth={true}
                duration={300}
                spy={true}
                offset={-80} // Adjust based on your navbar height
                activeClass="text-secondary font-semibold"
                className="cursor-pointer hover:text-secondary transition text-lg"
              >
                {item.name}
              </Link>
            ))}
            <a
              className="rounded-md flex justify-center items-center gap-2 py-1 px-4 bg-secondary/90 hover:bg-secondary text-lg font-semibold cursor-pointer transition mt-4"
              href="https://drive.google.com/file/d/1lHkLVej0L2loUSMB6FY5U2Ak2v67c3eS/view"
              target="_blank"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </div>
      </section>
    </nav>
  );
}
