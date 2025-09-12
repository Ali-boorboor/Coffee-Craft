import ServicesDetails from "@/components/templates/services/ServicesDetails";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import jsonDataParser from "@/utils/jsonDataParser";
import connectToDB from "@/database/dbConnection";
import ServiceModel from "@/models/Service";
import React from "react";
import { Service } from "@/types";

type ServicesProps = { services: Service[] };

const Services = ({ services }: ServicesProps) => {
  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="services" href="/services" />

      <ServicesDetails services={services} />
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

export default Services;
