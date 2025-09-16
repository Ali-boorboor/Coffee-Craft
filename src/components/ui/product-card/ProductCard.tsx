import React from "react";
import Link from "next/link";
import Button from "@/components/ui/button";
import { useAddProductToCart } from "@/features/cart";
import { FaCartShopping } from "react-icons/fa6";
import { useAuthStore } from "@/features/auth";
import { MdLogin } from "react-icons/md";
import { useRouter } from "next/router";

type ProductCardProps = {
  _id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  dataAnimate?: string;
};

const ProductCard = ({
  _id,
  title,
  image,
  price,
  description,
  dataAnimate,
}: ProductCardProps) => {
  const router = useRouter();

  const { addProductToCart } = useAddProductToCart();
  const { isUserLogin } = useAuthStore();

  const loginHandler = () => router.push("/login");

  return (
    <div
      className="bg-primary text-primary-foreground flex flex-col rounded-md overflow-hidden border-2 border-primary drop-shadow-xs shadow-xs drop-shadow-white shadow-white relative group"
      data-animate={dataAnimate}
    >
      <div className="h-52 md:h-72 bg-primary-foreground overflow-hidden rounded-b-3xl">
        <Link href={`/product/${_id}`}>
          <img
            className="w-full h-full object-contain object-center scale-95 transition-transform duration-300 ease-linear group-hover:scale-105"
            alt="menu-card-image"
            src={image}
          />
        </Link>
      </div>

      <div className="absolute -right-6 top-1 rotate-45 inline-block w-20 bg-primary text-center text-lg font-bold">
        <span className="-rotate-45">{price} $</span>
      </div>

      <div className="p-4 flex flex-col gap-4 justify-between">
        <div className="space-y-2">
          <h4 className="text-xl font-bold">
            <Link
              href={`/product/${_id}`}
              className="relative after:absolute after:bg-primary-foreground after:-bottom-1 after:left-0 after:right-0 after:m-auto after:w-0 after:h-0.5 after:opacity-0 after:transition-all after:duration-300 after:ease-linear hover:after:w-full hover:after:opacity-100"
            >
              {title}
            </Link>
          </h4>

          <p className="line-clamp-3 leading-6 font-normal">{description}</p>
        </div>

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
      </div>
    </div>
  );
};

export default ProductCard;
