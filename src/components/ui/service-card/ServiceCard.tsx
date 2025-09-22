import Image from "next/image";
import React from "react";

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{
    className?: string;
  }>;
};

const ServiceCard = ({ image, title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="flex h-40 md:h-60 justify-between items-center w-full bg-primary text-primary-foreground border-2 border-white/60 rounded-md overflow-hidden drop-shadow-xs drop-shadow-white">
      <Image
        className="w-1/2 h-full object-cover object-center border-r-2 border-white/60"
        alt="service image"
        src={image}
        width={1000}
        height={400}
      />
      <div className="flex flex-col justify-center items-start gap-2 h-full px-3 py-2">
        <Icon className="size-6 hidden xl:block" />

        <h4 className="text-base md:text-lg font-bold capitalize">{title}</h4>
        <p className="leading-5 text-sm font-normal md:text-base line-clamp-3 sm:line-clamp-4 xl:line-clamp-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
