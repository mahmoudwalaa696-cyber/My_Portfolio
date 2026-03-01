import React from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web interfaces with React and Tailwind.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user experiences for web applications.",
  },
  {
    id: 4,
    title: "React Development",
    description: "Developing dynamic single-page applications using React.js.",
  },
  {
    id: 5,
    title: "Tailwind CSS",
    description:
      "Creating modern, responsive layouts quickly with Tailwind CSS.",
  },
  {
    id: 6,
    title: "Website Optimization",
    description:
      "Enhancing performance, accessibility, and responsiveness of web apps.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-12">My Services</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              data-aos-duration="3000"
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
