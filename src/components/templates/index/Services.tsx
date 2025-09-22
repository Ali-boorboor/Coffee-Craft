import React from "react";
import Slider from "@/features/slider";
import iconLoader from "@/utils/dynamicIconLoader";
import ServiceCard from "@/components/ui/service-card/ServiceCard";
import SectionHeader from "@/components/ui/section-header/SectionHeader";
import { useSliderAnimation } from "@/features/slider";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Service } from "@/types";

type ServicesProps = {
  services: Service[];
};

const SLIDES_DATA_ANIMATE = "services-slides";

const Services = ({ services }: ServicesProps) => {
  const { containerRef } = useSliderAnimation({
    slidesDataAnimate: SLIDES_DATA_ANIMATE,
  });

  return (
    <section
      className="py-10 md:py-20 px-4 md:px-0 text-white relative paper-torn-piece-bottom paper-torn-piece-top coffee-background"
      ref={containerRef}
    >
      <div className="container m-auto space-y-10 md:space-y-20">
        <SectionHeader title="Our Services" text="Fresh & Organic Beans" />

        <Slider
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
              <SwiperSlide data-animate={SLIDES_DATA_ANIMATE} key={service._id}>
                <ServiceCard Icon={Icon} {...service} />
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
