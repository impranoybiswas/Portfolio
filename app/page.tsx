import Navbar from "./components/Navbar";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Header from "./layouts/Header";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";
import Footer from "./layouts/Footer";
import AOSInit from "./components/AOSInit";

export default function Home() {
  return (
    <>
      <AOSInit />
      <main className="w-full px-5 md:px-12 lg:px-25 mx-auto flex flex-col items-center text-white overflow-hidden font-poppins">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
