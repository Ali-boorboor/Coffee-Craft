import ServicesDetails from "@/components/templates/services/ServicesDetails";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
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

const Services = () => {
  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="services" href="/services" />

      <ServicesDetails services={services} />
    </main>
  );
};

export default Services;
