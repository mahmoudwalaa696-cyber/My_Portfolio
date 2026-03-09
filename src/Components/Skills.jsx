import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// استيراد الصور
import { Bootstrap, CSS3, GitHub, HTML5, JavaScript, ReactIcon, Tailwind, Vite } from "../assets";
import { useSelector } from "react-redux";

const skills = [
  { id: 1, name: "HTML5", desc: "Markup Language", img: HTML5 },
  { id: 2, name: "CSS3", desc: "User Interface", img: CSS3 },
  { id: 3, name: "Bootstrap", desc: "UI Framework", img: Bootstrap },
  { id: 4, name: "JavaScript", desc: "Interaction", img: JavaScript },
  { id: 5, name: "React", desc: "Frontend Library", img: ReactIcon },
  { id: 6, name: "Vite", desc: "Build Tool", img: Vite },
  { id: 7, name: "Tailwind", desc: "CSS Framework", img: Tailwind },
  { id: 8, name: "GitHub", desc: "Version Control", img: GitHub },
];

const Skills = () => {
  const Theme_Select = useSelector((state) => state.ThemeReducer.mode);

  // تهيئة AOS عند mount
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      id="skills"
      className="py-20 transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Title */}
        <h3 className="text-center text-green-400 text-sm">What Skills I Have</h3>
        <h1 className="text-4xl font-bold text-center mt-2">My Experience</h1>
        <div className="mt-5 mb-12 w-[120px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl mx-auto"></div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="transform transition-transform duration-300 hover:scale-105 p-6 rounded-xl border border-gray-200 hover:border-blue-400 text-center dark:border-gray-700 dark:hover:border-green-400"
            >
              {/* عنصر داخلي للـ AOS */}
              <div data-aos="fade-up">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h2 className="text-xl font-semibold">{skill.name}</h2>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;