import React from "react";
import iconLoader from "@/utils/dynamicIconLoader";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import ServiceCard from "@/components/ui/service-card/ServiceCard";
import SectionHeader from "@/components/ui/section-header/SectionHeader";
import { Service } from "@/types";

type ServicesDetailsProps = {
  services: Service[];
};

const ServicesDetails = ({ services }: ServicesDetailsProps) => {
  const { containerRef } = useFadeUpAnimation();

  return (
    <section
      className="container m-auto space-y-10 md:space-y-20 md:px-0 px-4 transform-gpu will-change-transform"
      ref={containerRef}
    >
      <SectionHeader title="Our Services" text="Fresh & Organic Beans" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 w-full lg:w-2/3 m-auto">
        {services.map((service) => {
          const Icon = iconLoader(service.iconPack, service.iconName);

          return <ServiceCard Icon={Icon} {...service} key={service._id} />;
        })}
      </div>
    </section>
  );
};

export default ServicesDetails;
