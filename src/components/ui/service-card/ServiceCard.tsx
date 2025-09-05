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
    <div className="flex justify-between items-center w-full aspect-video bg-primary text-primary-foreground border-2 border-white/60 rounded-md overflow-hidden drop-shadow-xs drop-shadow-white">
      <img
        className="w-1/2 h-full object-cover object-center border-r-2 border-white/60 transform-gpu will-change-transform"
        src={image}
        alt="service-image"
      />
      <div className="flex flex-col justify-center items-start gap-2 h-full px-3 py-2">
        <Icon className="size-6 hidden xl:block" />

        <h4 className="text-base md:text-lg font-bold capitalize transform-gpu will-change-transform">
          {title}
        </h4>
        <p className="leading-5 text-sm font-normal md:text-base line-clamp-3 sm:line-clamp-4 xl:line-clamp-5 transform-gpu will-change-transform">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
