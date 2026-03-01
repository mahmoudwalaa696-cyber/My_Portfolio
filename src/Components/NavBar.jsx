import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
const links = [
  { id: 1, name: "Home", path: "#hero" },
  { id: 2, name: "About Me", path: "#about" },
  { id: 3, name: "Services", path: "#service" },
  { id: 4, name: "Projects", path: "#projects" },
  { id: 5, name: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className=" bg-black text-white  px-8 md:px-16 lg:px-24">
      <div className="container mx-auto py-2 flex justify-between md:justify-between md:gap-5 items-center">
        <div className="text-2xl font-bold ">
          <h1>Walaa</h1>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li
              className="px-2  md:px-0 lg:text-xl hover:text-green-400  transition duration-500"
              key={link.id}
            >
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-3 py-1 text-sm
md:px-4 md:py-2 md:text-base rounded-full">
          <button>Connect Me</button>
        </div>

        <div
          onClick={() => setopen(!open)}
          className="md:hidden relative cursor-pointer text-white"
        >
          {!open ? (
            <FaBars className=" text-2xl text-white cursor-pointer" />
          ) : (
            <IoCloseSharp className=" text-2xl text-white cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={`fixed z-50 top-0 right-0 bg-black border border-white/30 w-[200px]  h-[100%] transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div
          className="absolute top-4 left-2 text-white cursor-pointer"
          onClick={() => setopen(false)}
        >
          <IoCloseSharp fontSize="24px" />
        </div>

        <ul className="flex flex-col gap-7 text-white px-4 mt-16">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-2 hover:text-green-400  transition duration-500"
            >
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col mt-7 px-4 gap-4 ">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 font-medium  text-white  px-4 py-2 transform transition-transform duration-300 hover:scale-105 rounded-full">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
