import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import useProductInfosAniamtion from "@/components/templates/single-product/animations/useProductInfosAniamtion";
import { useAddProductToCart } from "@/features/cart";
import { FaCartShopping } from "react-icons/fa6";
import { useAuthStore } from "@/features/auth";
import { MdLogin } from "react-icons/md";
import { useRouter } from "next/router";
import { Product } from "@/types";

const ProductInfos = ({ _id, title, price, image }: Product) => {
  const router = useRouter();

  const { containerRef, productImageRef, coffeeBeanImageRef } =
    useProductInfosAniamtion();

  const { addProductToCart } = useAddProductToCart();
  const { isUserLogin } = useAuthStore();

  const loginHandler = () => router.push("/login");

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

        <Image
          className="w-60 h-60 md:w-96 md:h-96 object-contain object-center z-20"
          ref={productImageRef}
          alt="product image"
          src={image}
          width={1000}
          height={400}
        />

        {isUserLogin ? (
          <Button
            className="flex justify-center items-center gap-4"
            onClick={() => addProductToCart({ productID: _id })}
          >
            <FaCartShopping className="size-4 md:size-6" />
            <span>add to cart</span>
          </Button>
        ) : (
          <Button
            className="flex justify-center items-center gap-4"
            onClick={loginHandler}
          >
            <MdLogin className="size-4 md:size-6" />
            <span>login</span>
          </Button>
        )}

        <Image
          className="w-40 h-40 md:w-72 md:h-72 object-cover object-center absolute right-0 top-0 z-10 transform-gpu will-change-transform"
          src="/image/coffee-beans.png"
          ref={coffeeBeanImageRef}
          alt="product image"
          width={1000}
          height={400}
        />
      </div>
    </div>
  );
};

export default ProductInfos;
