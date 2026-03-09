import { useSelector } from "react-redux";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const Theme_Select = useSelector((state) => state.ThemeReducer.mode);

  return (
    <footer className="py-8 transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* About + Newsletter */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          {/* About */}
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Walaa Mahmoud
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              I’m Walaa, A Front-end Developer. I create modern, responsive web
              applications using HTML, CSS, JavaScript, Tailwind, and React.
            </p>
          </div>

          {/* Newsletter */}
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full p-2 rounded-l-lg border bg-gray-100 border-gray-300 text-black focus:outline-none focus:border-green-400 transition-colors duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()}</p>

          <div className="flex space-x-4 my-4 md:my-0 px-5">
            {[FaFacebook, IoLogoTwitter, FaLinkedin, FaGithub].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="flex space-x-4">
            <a className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors duration-300" href="#">
              Privacy
            </a>
            <a className="text-gray-600 dark:text-gray-400 hover:text-white transition-colors duration-300" href="#">
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;