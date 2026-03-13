import { useSelector } from "react-redux";
import { Heroimg } from "../assets";

const About = () => {
  const Theme_Select = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div
      id="about"
      className="py-20 transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center">About Me</h1>

       
 <div className="mt-5 mb-12 w-[100px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl mx-auto"></div>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Heroimg}
            alt="Hero"
            data-aos="fade-right"
            data-aos-duration="3000"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />

          <div data-aos="fade-left" data-aos-duration="3000" className="flex-1">
            <p className="text-lg mb-8 text-gray-800 dark:text-gray-300">
              I am a passionate front-end developer focused on building modern
              and responsive web applications. With expertise in HTML, CSS,
              JavaScript, Tailwind, and React, I create seamless and efficient
              user experiences.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {[
                { skill: "HTML & CSS", w: "w-10/12" },
                { skill: "React JS", w: "w-11/12" },
                { skill: "Tailwind", w: "w-9/12" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <label className="w-2/12">{item.skill}</label>

                  <div className="grow rounded-full h-2.5 bg-gray-200 dark:bg-gray-700">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${item.w}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 flex justify-between text-center">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "10+", label: "Happy Clients" },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {item.number}
                  </h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;