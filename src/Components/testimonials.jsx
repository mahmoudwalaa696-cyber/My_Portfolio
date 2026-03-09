import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { useState, forwardRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Asil Ahmed",
    role: "Frontend Developer",
    image: "/avatars/asil.jpg",
    rating: 4.5,
    comment:
      "You are a brilliant programmer. You approach problems logically and deliver clean, well-structured solutions. You are a dedicated developer who is clearly committed to improving her skills and building great projects."
  },
  {
    id: 2,
    name: "Hala Attar",
    role: "Software Engineer",
    image: "/avatars/hala.jpg",
    rating: 5,
    comment:
      "You consistently produce great work. Your dedication and attention to detail are truly admirable. I’m really proud of you—keep going and never stop striving for success. 👏🏻♥️"
  },
  {
    id: 3,
    name: "Omima Salah",
    role: "Full Stack Developer",
    image: "/avatars/omima.jpg",
    rating: 4.5,
    comment: `It's clear you're a skilled developer and genuinely love your work.

Your problem-solving approach and code organization demonstrate your experience and strong understanding.

Keep up the good work; your projects clearly show a lot of effort.

Best of luck with your future projects! 👍💻`
  },
  {
    id: 4,
    name: "Mahmoud Habib",
    role: "Web Development Instructor",
    image: "/avatars/mahmoud.jpg",
    rating: 5,
    comment: `بصراحة يا ولاء أنا مبسوط جدًا بالمستوى اللي وصلتي له في الكورس.
كنتِ من أكتر الطلبة التزامًا وحضورًا، ودايمًا واضح إن عندك شغف حقيقي بتعلم البرمجة.

التطور اللي حصل لك خلال فترة الكورس كان ملحوظ جدًا، واشتغلتي على المشاريع بشكل منظم وكنتِ حريصة تفهمي التفاصيل مش بس تطبقي.

فخور بيكي جدًا كإنستركتور، ومتاكد إنك تقدري تعملي مستقبل كويس في مجال ال Web Development إن شاء الله.
كملي بنفس الاجتهاد ده وإن شاء الله توصلي لحاجات كبيرة. 👏`
  }
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} />);
    else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} />);
    else stars.push(<FaRegStar key={i} />);
  }
  return stars;
};

export default function Testimonials() {

  const items = testimonials;
  const [selectedItem, setSelectedItem] = useState(0);
  const [direction, setDirection] = useState(1);

 const nextSlide = (dir) => {
  setSelectedItem((prev) => wrap(0, items.length, prev + dir));
  setDirection(dir);
};

  useEffect(() => {
    const timer = setInterval(() => nextSlide(1), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 flex flex-col items-center">

      {/* Header */}
      <div className="text-center max-w-2xl px-4 mb-14">

        <h1 className="text-4xl  font-bold">
          What My Clients Say
        </h1>

        <div className="mt-5 w-[120px] h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto"></div>

      

      </div>

      {/* Slider */}
      <div className="relative w-full max-w-2xl px-6">

        <AnimatePresence custom={direction} mode="popLayout">
          <Slide
            key={items[selectedItem].id}
            item={items[selectedItem]}
            custom={direction}
            nextSlide={nextSlide}
          />
        </AnimatePresence>

      </div>

    </section>
  );
}

const Slide = forwardRef(function Slide({ item, custom, nextSlide }, ref) {

  const direction = custom;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -60 }}
      transition={{ type: "spring", bounce: 0.35, duration: 0.6 }}
      className="relative flex items-center gap-6 bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg"
    >

      {/* Left Arrow */}
      <motion.button
        onClick={() => nextSlide(-1)}
        whileTap={{ scale: 0.9 }}
        className="absolute -left-6 md:-left-12 w-10 h-10 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center shadow-md"
      >
        &#8592;
      </motion.button>

   

      {/* Content */}
      <div className="flex-1">

        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg leading-relaxed">
          "{item.comment}"
        </p>

        <h3 className="mt-3 font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          {item.name}
        </h3>

        <div className="flex text-yellow-400 mt-2">
          {renderStars(item.rating)}
        </div>

      </div>

      {/* Right Arrow */}
      <motion.button
        onClick={() => nextSlide(1)}
        whileTap={{ scale: 0.9 }}
        className="absolute -right-6 md:-right-12 w-10 h-10 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center shadow-md"
      >
        &#8594;
      </motion.button>

    </motion.div>
  );
});