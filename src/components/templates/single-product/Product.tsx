import ProductInfos from "@/components/templates/single-product/ProductInfos";
import Comments from "@/components/templates/single-product/Comments";
import React from "react";

type ProductProps = {
  price: number;
  image: string;
  name: string;
  id: string;
  comments: {
    id: string;
    commenter: string;
    commentBody: string;
    image: string;
  }[];
};

const Product = (props: ProductProps) => {
  return (
    <section className="space-y-10 md:space-y-20">
      <ProductInfos {...props} />

      <Comments comments={props.comments} productName="black coffee" />
    </section>
  );
};

export default Product;
