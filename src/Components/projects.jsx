import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Calculator, Clock, Movie, products } from "../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
 <div
  id="projects"
  className="py-16 px-4 transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white"
>
  <h1 className="text-4xl font-bold text-center">My Projects</h1>

  <div className="mt-5 mb-12 w-[100px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl mx-auto"></div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {projectss.map((project, index) => (
  <div
    key={project.id}
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 hover:border-blue-400 dark:hover:border-green-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
  >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-5 flex flex-col flex-grow">
          <h2 className="text-xl font-bold text-center mb-4">
            {project.title}
          </h2>

          <div className="mt-auto flex justify-center gap-3">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default Projects;