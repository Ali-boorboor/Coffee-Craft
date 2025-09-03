import "swiper/css";
import "swiper/css/autoplay";
import gsap from "gsap";
import SectionHeader from "@/components/ui/section-header";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useGSAP } from "@gsap/react";

const LINES_DATA_ANIMATE = "services-lines";
const SLIDES_DATA_ANIMATE = "services-slides";

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const gsapTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: 99999,
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power4.inOut", duration: 1 },
      });

      gsapTimeline.fromTo(
        `[data-animate='${LINES_DATA_ANIMATE}']`,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );

      gsapTimeline.fromTo(
        `[data-animate='${SLIDES_DATA_ANIMATE}']`,
        { clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)" },
        { clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)" },
        "-=1"
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section
      className="flex flex-col justify-center items-center gap-10 md:gap-20 py-10 md:py-20 px-4 md:px-0 text-white relative paper-torn-piece-bottom paper-torn-piece-top coffee-background"
      ref={containerRef}
    >
      <SectionHeader
        title="Our Services"
        text="Fresh & Organic Beans"
        linesDataAnimate={LINES_DATA_ANIMATE}
      />

      <div className="container">
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          speed={1000}
          grabCursor
          loop
        >
          <SwiperSlide className="w-96" data-animate={SLIDES_DATA_ANIMATE}>
            <div className="flex justify-center items-center w-full aspect-video bg-primary drop-shadow-sm drop-shadow-white text-primary-foreground border-2 border-white/60 rounded-md">
              test
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-96" data-animate={SLIDES_DATA_ANIMATE}>
            <div className="flex justify-center items-center w-full aspect-video bg-primary drop-shadow-sm drop-shadow-white text-primary-foreground border-2 border-white/60 rounded-md">
              test
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-96" data-animate={SLIDES_DATA_ANIMATE}>
            <div className="flex justify-center items-center w-full aspect-video bg-primary drop-shadow-sm drop-shadow-white text-primary-foreground border-2 border-white/60 rounded-md">
              test
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-96" data-animate={SLIDES_DATA_ANIMATE}>
            <div className="flex justify-center items-center w-full aspect-video bg-primary drop-shadow-sm drop-shadow-white text-primary-foreground border-2 border-white/60 rounded-md">
              test
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-96" data-animate={SLIDES_DATA_ANIMATE}>
            <div className="flex justify-center items-center w-full aspect-video bg-primary drop-shadow-sm drop-shadow-white text-primary-foreground border-2 border-white/60 rounded-md">
              test
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
