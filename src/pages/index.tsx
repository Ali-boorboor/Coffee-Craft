import Intro from "@/components/templates/index/Intro";
import About from "@/components/templates/index/About";
import Services from "@/components/templates/index/Services";
import Newsletter from "@/components/templates/index/Newsletter";
import Menu from "@/components/templates/index/Menu";
import Testimonial from "@/components/templates/index/Testimonial";
import jsonDataParser from "@/utils/jsonDataParser";
import connectToDB from "@/database/dbConnection";
import ServiceModel from "@/models/Service";
import ProductModel from "@/models/Product";
import React from "react";
import { Product, Service } from "@/types";

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

type IndexProps = { services: Service[]; products: Product[] };

const Index = ({ services, products }: IndexProps) => {
  return (
    <main className="space-y-40 md:space-y-80">
      <Intro />

      <About />

      <Services services={services} />

      <Newsletter />

      <Menu menuItems={products} />

      <Testimonial comments={comments} />
    </main>
  );
};

export const getStaticProps = async () => {
  connectToDB();

  const services = await ServiceModel.find({}).lean();
  const parsedServices = jsonDataParser(services);

  const products = await ProductModel.find({}).lean();
  const parsedProducts = jsonDataParser(products);

  return {
    props: {
      services: parsedServices,
      products: parsedProducts,
    },
  };
};

export default Index;
