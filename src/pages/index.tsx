import Intro from "@/components/templates/index/Intro";
import About from "@/components/templates/index/About";
import Services from "@/components/templates/index/Services";
import Newsletter from "@/components/templates/index/Newsletter";
import Menu from "@/components/templates/index/Menu";
import Testimonial from "@/components/templates/index/Testimonial";
import jsonDataParser from "@/utils/jsonDataParser";
import connectToDB from "@/database/dbConnection";
import ServiceModel from "@/models/Service";
import React from "react";
import { Service } from "@/types";

const menuItems = [
  {
    id: "1",
    type: "hot",
    title: "black coffee",
    image: "/image/black-coffee.png",
    price: 10,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: "2",
    type: "hot",
    title: "cappuccino",
    image: "/image/cappuccino.png",
    price: 15,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: "3",
    type: "cold",
    title: "banana milk",
    image: "/image/cappuccino.png",
    price: 5,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: "4",
    type: "cold",
    title: "milk",
    image: "/image/cappuccino.png",
    price: 2,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
];

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

type IndexProps = { services: Service[] };

const Index = ({ services }: IndexProps) => {
  return (
    <main className="space-y-40 md:space-y-80">
      <Intro />

      <About />

      <Services services={services} />

      <Newsletter />

      <Menu menuItems={menuItems} />

      <Testimonial comments={comments} />
    </main>
  );
};

export const getStaticProps = async () => {
  connectToDB();

  const services = await ServiceModel.find({}).lean();

  const parsedServices = jsonDataParser(services);

  return {
    props: {
      services: parsedServices,
    },
  };
};

export default Index;
