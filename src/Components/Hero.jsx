import { Heroimg } from "../assets";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        '<span class="text-white">Hi <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">I’m Walaa, </span>A Front-end Developer </span>',
      ],
      typeSpeed: 70, 
      backSpeed: 20, 
      backDelay: 1000, 
      loop: true, 
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
  <div className="bg-black">
      <div className="container mx-auto text-white text-center py-16" id="hero">
      <img
        src={Heroimg}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
    transition-transform duration-300 hover:scale-105"
      />
      <h1 className=" text-4xl font-bold">
        <span ref={typedRef}></span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        “I create modern, responsive web applications using <br /> HTML, CSS,
        JavaScript, Tailwind, and React.”
      </p>

      <div className="mt-8 space-x-4">
        <button
          data-aos="fade-right"
          data-aos-duration="3000"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white 
 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button>
        <button
          data-aos="fade-left"
          data-aos-duration="3000"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  </div>
  );
};

export default Hero;
