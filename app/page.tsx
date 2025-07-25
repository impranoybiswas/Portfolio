import Navbar from "./components/Navbar";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
