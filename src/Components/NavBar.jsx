import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { logo } from "../assets";
import { toggleTheme } from "../Redux/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";

const links = [
  { id: 1, name: "Home", path: "#hero" },
  { id: 2, name: "About Me", path: "#about" },
  { id: 3, name: "skills", path: "#skills" },
  { id: 4, name: "Services", path: "#service" },
  { id: 5, name: "Projects", path: "#projects" },
  { id: 6, name: "Contact", path: "#contact" },
   
];

const NavBar = () => {
  const [open, setOpen] = useState(false);


  const Theme_Select =useSelector((state)=> state.ThemeReducer.mode)
const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white px-8 md:px-16 lg:px-24 shadow-md transition-colors duration-300">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <img src={logo} alt="logo" className="w-[70px]" />

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-2 md:px-0 lg:text-xl font-medium hover:text-green-400 transition duration-500"
            >
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={() =>dispatch(toggleTheme())}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {Theme_Select  === "dark" ? (
              <RiSunFill className="text-yellow-400 text-lg" />
            ) : (
              <RiMoonFill className="text-gray-800 text-lg" />
            )}
          </button>

          {/* Connect Me Button */}
          <div className="hidden md:flex bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
            <button>Connect Me</button>
          </div>

          {/* Mobile Menu Icon */}
          <div onClick={() => setOpen(!open)} className="md:hidden cursor-pointer">
            {!open ? <FaBars className="text-2xl" /> : <IoCloseSharp className="text-2xl" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 top-0 right-0 w-[200px] h-full bg-white dark:bg-gray-900 border-l border-gray-300 dark:border-gray-700 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="absolute top-4 left-2 cursor-pointer" onClick={() => setOpen(false)}>
          <IoCloseSharp className="text-2xl" />
        </div>

        <ul className="flex flex-col gap-7 px-4 mt-16 text-black dark:text-white">
          {links.map((link) => (
            <li key={link.id} className="hover:text-green-400 transition duration-500">
              <a href={link.path} onClick={() => setOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col mt-7 px-4 gap-4">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 font-medium text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;