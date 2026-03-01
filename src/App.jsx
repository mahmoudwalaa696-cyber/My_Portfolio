import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import MyProjects from "./Components/MyProjects";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Service />
      <MyProjects/>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
