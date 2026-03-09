import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Calculator, Clock, Movie, products } from "../assets";

const projectss = [
  {
    id: 1,
    title: "Movie",
    image: Movie,
    liveDemo: "https://team-project-ivory-two.vercel.app/",
    github: "https://github.com/asil-creator2/Team-Project.git",
  },
  {
    id: 2,
    title: "Calculator",
    image: Calculator,
    liveDemo: "https://calculator-jade-eta-76.vercel.app/",
    github: "https://github.com/mahmoudwalaa696-cyber/calculator.git",
  },
  {
    id: 3,
    title: "Clock",
    image: Clock,
    liveDemo: "https://task-time-roan.vercel.app/",
    github: "https://github.com/mahmoudwalaa696-cyber/task.Time.git",
  },
  {
    id: 4,
    title: "Products",
    image: products,
    liveDemo: "https://final-task-js-3oyg.vercel.app/",
    github: "https://github.com/mahmoudwalaa696-cyber/final-_task_js.git",
  },
];

const Projects = () => {
  const Theme_Select = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div
      id="projects"
      className="py-10 overflow-hidden transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <h1 className="text-4xl font-bold text-center">My Projects</h1>

      <div className="mt-5 mb-12 w-[100px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl mx-auto"></div>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projectss.map((project) => (
          <SwiperSlide
            key={project.id}
            className="p-2 rounded-lg hover:shadow-lg transition-colors duration-500 bg-gray-100 dark:bg-gray-800"
          >
            <div className="flex flex-col items-center m-1">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />

              <h1 className="text-xl font-bold mb-4 mt-3">
                {project.title}
              </h1>

              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                >
                  GitHub
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;