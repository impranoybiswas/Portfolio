import React, { useEffect } from "react";
import Header from "./layouts/Header";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Container from "./customs/Container";
import Aos from "aos";
import 'aos/dist/aos.css';
import Skills from "./layouts/Skills";
import { Element } from "react-scroll";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,       
      easing: "ease-in-out",
      once: false,          
      mirror: true, 

      
    });Aos.refresh();
  }, []);
  return (
    <Element>
      <Navbar />
      <Header />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </Element>
  );
}
