import "swiper/css";
import "swiper/css/autoplay";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    background:
      "bg-[linear-gradient(rgba(51,33,29,0.7)),url('/image/index-slide-1.jpg')]",
  },
  {
    id: 2,
    background:
      "bg-[linear-gradient(rgba(51,33,29,0.7)),url('/image/index-slide-2.jpg')]",
  },
];

const Intro = () => {
  return (
    <Swiper
      className="w-full h-svh text-white relative after:absolute after:left-0 after:right-0 after:bottom-0 after:w-full after:h-3 after:z-10 paper-torn-piece-bottom"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      allowTouchMove={false}
      simulateTouch={false}
      modules={[Autoplay]}
      speed={1200}
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className={`w-full h-full flex flex-col justify-center items-center gap-2 bg-cover bg-center bg-no-repeat ${slide.background}`}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-primary text-shadow-xs text-shadow-white">
              We Have Been Serving
            </h2>
            <p className="text-6xl md:text-9xl font-bold uppercase">coffee</p>
            <p className="text-2xl md:text-4xl font-semibold uppercase">
              since 1950
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Intro;
