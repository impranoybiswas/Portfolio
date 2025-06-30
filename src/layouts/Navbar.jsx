import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa6";
import { CgMenuRightAlt } from "react-icons/cg";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollY = window.scrollY + 100; // Adjust offset as needed

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (
          section?.offsetTop <= scrollY &&
          section.offsetTop + section.offsetHeight > scrollY
        ) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 bg-primary text-white shadow-sm h-fit w-full">
      <section className="hidden lg:px-20 w-full mx-auto lg:flex justify-between h-18 items-center gap-2">
        <div className="flex justify-center items-center gap-2">
          <img className="w-5 h-5" src="./logo.svg" alt="" />
          <a className="text-xl font-semibold" href="#home">
            PRANOY
          </a>
        </div>

        <div className="flex justify-center items-center gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-semibold transition-colors duration-300 py-1 px-4 rounded-full ${
                activeSection === item.href
                  ? "bg-secondary"
                  : "hover:text-red-400"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <a
            className="rounded-md flex justify-center items-center gap-2 py-1 px-4 bg-secondary/90 hover:bg-secondary text-lg font-semibold"
            href="https://drive.google.com/file/d/1lHkLVej0L2loUSMB6FY5U2Ak2v67c3eS/view"
            target="_blank"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </section>

      <section className="flex lg:hidden justify-between items-center h-16 w-full px-3">
        <div className="flex justify-center items-center gap-2">
          <img className="w-5 h-5" src="./logo.svg" alt="" />
          <a className="text-xl font-semibold" href="#home">
            PRANOY
          </a>
        </div>

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
            className="dropdown-content bg-primary rounded-box z-1 w-60 py-2 mt-2 shadow-sm flex flex-col px-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-semibold transition-colors duration-300 py-1 px-4 rounded-full ${
                  activeSection === item.href
                    ? "bg-secondary"
                    : "hover:text-red-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </nav>
  );
}
