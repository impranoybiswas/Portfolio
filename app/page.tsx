import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Header from "./layouts/Header";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";
import GridBackground from "./components/GridBackground";
import GoToTop from "./components/GoToTop";
import SpecialDayPopup from "./components/SpecialDayPopup";

/**
 * Home Page
 *
 * The main landing page of the portfolio.
 * Assembles various sections (Header, About, Skills, Projects, Contact)
 * and includes global UI elements like the GridBackground and GoToTop button.
 *
 * @returns {JSX.Element} The home page component
 */
export default function Home() {
  return (
    <main className="bg-base-100 w-full px-5 md:px-12 lg:px-20 mx-auto flex flex-col items-center text-white overflow-hidden font-poppins">
      <GridBackground />
      <GoToTop />
      <SpecialDayPopup />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
