import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import React from "react";
import { Swiper, SwiperProps } from "swiper/react";

type SliderProps = SwiperProps & { children: React.ReactNode };

const Slider = ({ className, children, ...props }: SliderProps) => {
  return (
    <Swiper className={className} {...props}>
      {children}
    </Swiper>
  );
};

export default Slider;
