import React from "react";
import Comments from "@/components/templates/single-product/Comments";
import ProductInfos from "@/components/templates/single-product/ProductInfos";
import { IoIosWarning } from "react-icons/io";
import { Product as ProductType } from "@/types";

type ProductProps = { product: ProductType };

const Product = ({ product }: ProductProps) => {
  return (
    <section className="space-y-20 md:space-y-40">
      <ProductInfos {...product} />
      {product.comments.length ? (
        <Comments comments={product.comments} productName={product.title} />
      ) : (
        <div className="px-4 w-full md:max-w-1/2 m-auto">
          <p className="capitalize text-base md:text-4xl font-bold bg-primary py-2 px-4 rounded-md border-2 border-primary-foreground flex items-center justify-center gap-2">
            <IoIosWarning className="size-4 md:size-9" />
            no comments found
            <IoIosWarning className="size-4 md:size-9" />
          </p>
        </div>
      )}
    </section>
  );
};

export default Product;
