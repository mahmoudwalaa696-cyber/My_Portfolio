import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Heroimg } from "../assets";
import { useSelector } from "react-redux";


const Hero = () => {
   const Theme_Select =useSelector((state)=> state.ThemeReducer.mode)
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
        strings: [
        // هنا نحط النص بدون class للون
        `Hi <span style="background: linear-gradient(to right, #22c55e, #3b82f6); -webkit-background-clip: text; color: transparent;">I’m Walaa Mahmoud, </span>A Front-end Developer`,
      ],
      typeSpeed: 70,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    });
    

    return () => typed.destroy();
  }, [Theme_Select]);

  return (
    <div className={`transition-colors duration-500 bg-white dark:bg-gray-900`}>
      <div className="container mx-auto text-center py-16">
        <img
          src={Heroimg}
          alt="Hero"
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-4xl font-bold mb-4">
          <span ref={typedRef}></span>
        </h1>
        <p className={`mt-4 text-lg text-gray-800 dark:text-gray-300 `}>
          “I create modern, responsive web applications using <br /> HTML, CSS, JavaScript, Tailwind, and React.”
        </p>
      </div>
    </div>
  );
};

export default Hero;