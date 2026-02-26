import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";

const SLIDES = [
  {
    text: "ёлочка английская",
    title: "Völke Herringbone HDF",
    img: "/banners/1.jpg",
  },
  {
    text: "ёлочка английская",
    title: "Völke Herringbone HDF",
    img: "/banners/2.jpg",
  },
  {
    text: "ёлочка английская",
    title: "Völke Herringbone HDF",
    img: "/banners/3.jpg",
  },
];
function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev < SLIDES.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearTimeout(timer);
  }, [index]);
  return (
    <section className="py-5">
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex overflow-hidden">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.img}
              style={{
                backgroundImage: `url(${slide.img})`,
                transform: `translateX(-${index * 100}%)`,
              }}
              className="w-full min-w-full h-[540px] text-white transition-all"
            >
              <div className="max-w-[960px] mx-auto h-full">
                {i === index && (
                  <div className="flex flex-col h-full justify-center items-start">
                    <motion.p
                      initial={{ marginLeft: 200, opacity: 0 }}
                      animate={{ marginLeft: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-[29px] uppercase font-bold [text-shadow:0_4px_8px_rgba(0,0,0,0.9)]"
                    >
                      {slide.text}
                    </motion.p>
                    <motion.h1
                      initial={{ marginLeft: 80, opacity: 0 }}
                      animate={{ marginLeft: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-[52px] uppercase font-bold [text-shadow:0_4px_8px_rgba(0,0,0,0.9)]"
                    >
                      {slide.title}
                    </motion.h1>
                    <Link to={ROUTES.CATALOG}>
                      <button className="bg-(--prime) py-2.25 px-5.5 leading-[20px] cursor-pointer">
                        Подробнее
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slider;
