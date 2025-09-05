import "swiper/css";
import "swiper/css/autoplay";
import React from "react";
import iconLoader from "@/utils/dynamicIconLoader";
import SectionHeader from "@/components/ui/section-header";
import useServicesAnimations from "@/components/templates/index/animations/useServicesAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type ServicesProps = {
  services: {
    id: number;
    image: string;
    title: string;
    description: string;
    iconName: string;
    iconPack: string;
  }[];
};

const LINES_DATA_ANIMATE = "services-lines";
const SLIDES_DATA_ANIMATE = "services-slides";

const Services = ({ services }: ServicesProps) => {
  const { containerRef } = useServicesAnimations({
    linesDataAnimate: LINES_DATA_ANIMATE,
    slidesDataAnimate: SLIDES_DATA_ANIMATE,
  });

  return (
    <section
      className="py-10 md:py-20 px-4 md:px-0 text-white relative paper-torn-piece-bottom paper-torn-piece-top coffee-background"
      ref={containerRef}
    >
      <div className="container m-auto space-y-10 md:space-y-20">
        <SectionHeader
          title="Our Services"
          text="Fresh & Organic Beans"
          linesDataAnimate={LINES_DATA_ANIMATE}
        />

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
          {services.map((service) => {
            const Icon = iconLoader(service.iconPack, service.iconName);

            return (
              <SwiperSlide data-animate={SLIDES_DATA_ANIMATE} key={service.id}>
                <div className="flex justify-between items-center w-full aspect-video bg-primary text-primary-foreground border-2 border-white/60 rounded-md overflow-hidden">
                  <img
                    className="w-1/2 h-full object-cover object-center border-r-2 border-white/60"
                    src={service.image}
                    alt="service-image"
                  />
                  <div className="flex flex-col justify-center items-start gap-2 h-full px-3 py-2">
                    <Icon className="size-6 hidden xl:block" />

                    <h4 className="text-base md:text-lg font-bold capitalize transform-gpu will-change-transform">
                      {service.title}
                    </h4>
                    <p className="leading-5 text-sm md:text-base line-clamp-3 sm:line-clamp-4 xl:line-clamp-5 transform-gpu will-change-transform">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
