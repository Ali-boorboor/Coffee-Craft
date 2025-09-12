import React from "react";
import Alert from "@/components/ui/alert/Alert";
import Comments from "@/components/templates/single-product/Comments";
import ProductInfos from "@/components/templates/single-product/ProductInfos";
import { Product as ProductType } from "@/types";

type ProductProps = { product: ProductType };

const Product = ({ product }: ProductProps) => {
  return (
    <section className="space-y-20 md:space-y-40">
      <ProductInfos {...product} />
      {product.comments.length ? (
        <Comments comments={product.comments} productName={product.title} />
      ) : (
        <Alert title="no comments found" />
      )}
    </section>
  );
};

export default Product;
