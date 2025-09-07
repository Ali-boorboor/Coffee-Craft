import ProductInfos from "@/components/templates/single-product/ProductInfos";
import Comments from "@/components/templates/single-product/Comments";
import React from "react";

const comments = [
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
    commenter: "reza",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-3.jpg",
  },
  {
    id: "4",
    commenter: "amir",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-2.jpg",
  },
  {
    id: "5",
    commenter: "amirhossein",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-3.jpg",
  },
];

const Product = () => {
  return (
    <section className="space-y-10 md:space-y-20">
      <ProductInfos
        image="/image/black-coffee.png"
        name="black coffee"
        price="10"
        id="1"
      />

      <Comments comments={comments} productName="black coffee" />
    </section>
  );
};

export default Product;
