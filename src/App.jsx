
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Projects from "./Components/projects";
import Testimonials from "./Components/testimonials";
import Skills from "./Components/Skills";
import { useSelector } from "react-redux";

const App = () => {
  // Aos Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const Theme_Select =useSelector((state)=> state.ThemeReducer.mode)

  useEffect(() => {
    if (Theme_Select === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [Theme_Select]);

  return (
  
      <div  className={`max-h-screen overflow-x-hidden transition-colors duration-300 
        ${Theme_Select === "dark" ? " dark:bg-gray-900 dark:text-white" : "bg-white text-black"}`}>
        <NavBar/>
        <Hero />
        <About />
        <Skills />
        <Service />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

  );
};

export default App;
