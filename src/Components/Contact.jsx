import { useSelector } from "react-redux";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const Theme_Select = useSelector((state) => state.ThemeReducer.mode);

  return (
    <div
      id="contact"
      className="py-20 transition-colors duration-500 bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
        <div className="mt-5 mb-12 w-[100px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl mx-auto"></div>

        <div className="flex flex-col md:flex-row items-center md:gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right" data-aos-duration="3000" className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-800 dark:text-gray-300">
              I'm open to discussing web development projects or partnership opportunities.
            </p>

            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="#" className="hover:underline">
                WalaaMahmoud@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>01012345689</span>
            </div>

            <div className="mb-4">
              <FaMapMarkerAlt className="inline-block text-green-400 mr-2" />
              <span>street, city, province, country</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full mt-5 md:mt-0">
            <form className="space-y-4">
              {[{ label: "Your Name", placeholder: "Enter Your Name" }, { label: "Email", placeholder: "Enter Your Email" }].map(
                (field, index) => (
                  <div key={index}>
                    <label className="block mb-2">{field.label}</label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full p-2 rounded border bg-gray-100 border-gray-300 text-black focus:outline-none focus:border-green-400 transition-colors duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                )
              )}

              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Enter Your Message"
                  className="w-full p-2 rounded border bg-gray-100 border-gray-300 text-black focus:outline-none focus:border-green-400 transition-colors duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
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