import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
        <div className="flex flex-col md:flex-row items-center md:gap-12">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex-1"
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projecys or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="#" className="hover:underline">
                WalaaMahmoud@gmail.com
              </a>
            </div>

            <div className="mb-4 ">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>01012345689</span>
            </div>

            <div className="mb-4 ">
              <FaMapMarkerAlt className="inline-block text-green-400 mr-2" />
              <span>sreet, city, pronice, country</span>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="flex-1 w-full mt-5 md:mt-0"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter You Name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label htmlFor="emial" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter You Email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Email
                </label>
                <textarea
                  type="text"
                  rows="5"
                  placeholder="Enter You message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>

              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
