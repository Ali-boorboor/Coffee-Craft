import React from "react";
import Button from "@/components/ui/button";
import { FaCartShopping } from "react-icons/fa6";

type MenuCardProps = {
  title: string;
  image: string;
  price: number;
  description: string;
  dataAnimate?: string;
};

const MenuCard = ({
  title,
  image,
  price,
  description,
  dataAnimate,
}: MenuCardProps) => {
  return (
    <div
      className="bg-primary text-primary-foreground flex flex-col rounded-md overflow-hidden border-2 border-primary drop-shadow-xs shadow-xs drop-shadow-white shadow-white relative group"
      data-animate={dataAnimate}
    >
      <div className="h-52 md:h-72 bg-primary-foreground overflow-hidden rounded-b-3xl">
        <img
          className="w-full h-full object-cover object-center scale-95 transition-transform duration-300 ease-linear group-hover:scale-105 transform-gpu will-change-transform"
          alt="menu-card-image"
          src={image}
        />
      </div>

      <div className="absolute -right-6 top-1 rotate-45 inline-block w-20 bg-primary text-center text-lg font-bold transform-gpu will-change-transform">
        <span className="-rotate-45">{price} $</span>
      </div>

      <div className="p-4 flex flex-col gap-4 justify-between">
        <div className="space-y-2">
          <h4 className="text-xl font-bold transform-gpu will-change-transform">
            {title}
          </h4>

          <p className="line-clamp-3 leading-6 font-normal transform-gpu will-change-transform">
            {description}
          </p>
        </div>

        <Button className="flex justify-center items-center gap-4">
          <FaCartShopping className="size-4 md:size-6" />
          <span className="hidden md:inline-block">add to cart</span>
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
