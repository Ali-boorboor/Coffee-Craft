import React from "react";
import Button from "@/components/ui/button";
import useProductInfosAniamtion from "@/components/templates/single-product/animations/useProductInfosAniamtion";
import { FaCartShopping } from "react-icons/fa6";
import { Product } from "@/types";

const ProductInfos = ({ title, price, image }: Product) => {
  const { containerRef, productImageRef, coffeeBeanImageRef } =
    useProductInfosAniamtion();

  return (
    <div
      className="coffee-background py-10 md:py-20 text-white relative paper-torn-piece-bottom"
      ref={containerRef}
    >
      <div className="container m-auto flex flex-col gap-2 md:gap-4 justify-center items-center">
        <h2 className="text-2xl md:text-5xl font-bold text-primary capitalize text-shadow-xs text-shadow-white z-20">
          {title}
        </h2>

        <p className="text-lg md:text-2xl font-semibold bg-primary text-primary-foreground py-0.5 px-8 rounded-md drop-shadow-sm drop-shadow-white z-20">
          {price} $
        </p>

        <img
          className="w-60 h-60 md:w-96 md:h-96 object-cover object-center z-20"
          ref={productImageRef}
          alt="product-image"
          src={image}
        />

        <Button className="flex justify-center items-center gap-2 md:gap-4 z-20">
          <FaCartShopping className="size-4 md:size-6" />
          <span>add to cart</span>
        </Button>

        <img
          className="w-40 h-40 md:w-72 md:h-72 object-cover object-center absolute right-0 top-0 z-10 transform-gpu will-change-transform"
          src="/image/coffee-beans.png"
          ref={coffeeBeanImageRef}
          alt="product-image"
        />
      </div>
    </div>
  );
};

export default ProductInfos;
