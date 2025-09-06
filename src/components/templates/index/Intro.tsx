import React from "react";
import Slider from "@/features/slider";
import { SwiperSlide } from "swiper/react";
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
    <section className="w-full h-svh text-white relative paper-torn-piece-bottom">
      <Slider
        className="w-full h-full"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        allowTouchMove={false}
        simulateTouch={false}
        modules={[Autoplay]}
        speed={1000}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`w-full h-full flex flex-col justify-center items-center gap-2 bg-cover bg-center bg-no-repeat ${slide.background}`}
            >
              <p className="capitalize text-2xl md:text-4xl font-semibold text-primary text-shadow-xs text-shadow-white">
                We Have Been Serving
              </p>
              <h2 className="text-6xl md:text-9xl font-bold uppercase">
                coffee
              </h2>
              <p className="text-2xl md:text-4xl font-semibold uppercase">
                since 2004
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};

export default Intro;
