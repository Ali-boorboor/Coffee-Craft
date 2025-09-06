import Intro from "@/components/templates/index/Intro";
import About from "@/components/templates/index/About";
import Services from "@/components/templates/index/Services";
import Newsletter from "@/components/templates/index/Newsletter";
import Menu from "@/components/templates/index/Menu";
import Testimonial from "@/components/templates/index/Testimonial";
import React from "react";

const services = [
  {
    id: 1,
    image: "/image/service-img-1.jpg",
    title: "Fastest Door Delivery",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    iconName: "TbTruckDelivery",
    iconPack: "tb",
  },
  {
    id: 2,
    image: "/image/service-img-2.jpg",
    title: "Fresh Coffee Beans",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    iconName: "PiCoffeeBeanDuotone",
    iconPack: "pi",
  },
  {
    id: 3,
    image: "/image/service-img-3.jpg",
    title: "Best Quality Coffee",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    iconName: "FaAward",
    iconPack: "fa",
  },
  {
    id: 4,
    image: "/image/service-img-4.jpg",
    title: "Online Table Booking",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
    iconName: "BsTable",
    iconPack: "bs",
  },
];

const menuItems = [
  {
    id: 1,
    type: "hot",
    title: "black coffee",
    image: "/image/black-coffee.png",
    price: 10,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: 1,
    type: "hot",
    title: "cappuccino",
    image: "/image/cappuccino.png",
    price: 15,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: 3,
    type: "cold",
    title: "banana milk",
    image: "/image/cappuccino.png",
    price: 5,
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: 4,
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
    id: 1,
    commenter: "sara",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-1.jpg",
  },
  {
    id: 2,
    commenter: "ali",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-2.jpg",
  },
  {
    id: 3,
    commenter: "reza",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-3.jpg",
  },
  {
    id: 4,
    commenter: "amir",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-2.jpg",
  },
  {
    id: 5,
    commenter: "amirhossein",
    commentBody:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio facilis error culpa tenetur fugit facere adipisci, laudantium numquam ullam dicta?",
    image: "/image/testimonial-3.jpg",
  },
];

const Index = () => {
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

export default Index;
