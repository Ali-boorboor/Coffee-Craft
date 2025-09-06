import ServiceCard from "@/components/ui/service-card/ServiceCard";
import SectionHeader from "@/components/ui/section-header";
import iconLoader from "@/utils/dynamicIconLoader";
import React from "react";

type ServicesDetailsProps = {
  services: {
    id: number;
    image: string;
    title: string;
    description: string;
    iconName: string;
    iconPack: string;
  }[];
};

const ServicesDetails = ({ services }: ServicesDetailsProps) => {
  return (
    <section className="container m-auto space-y-10 md:space-y-20 md:px-0 px-4">
      <SectionHeader title="Our Services" text="Fresh & Organic Beans" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6 w-full lg:w-2/3 m-auto">
        {services.map((service) => {
          const Icon = iconLoader(service.iconPack, service.iconName);

          return <ServiceCard Icon={Icon} {...service} />;
        })}
      </div>
    </section>
  );
};

export default ServicesDetails;
