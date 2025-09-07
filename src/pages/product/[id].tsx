import Product from "@/components/templates/single-product/Product";
import React from "react";

const productComments = [
  {
    id: "1",
    commenter: "sara",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-1.jpg",
  },
  {
    id: "2",
    commenter: "ali",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-2.jpg",
  },
  {
    id: "3",
    commenter: "amir",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-3.jpg",
  },
];

const SingleProduct = () => {
  return (
    <main className="space-y-20 md:space-y-40">
      <Product
        comments={productComments}
        image="/image/black-coffee.png"
        name="black coffee"
        price={10}
        id="1"
      />
    </main>
  );
};

export default SingleProduct;
