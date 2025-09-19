import React from "react";
import Head from "next/head";
import ServiceModel from "@/models/Service";
import connectToDB from "@/database/dbConnection";
import jsonDataParser from "@/utils/jsonDataParser";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import ServicesDetails from "@/components/templates/services/ServicesDetails";
import { Service } from "@/types";

type ServicesProps = { services: Service[] };

const Services = ({ services }: ServicesProps) => {
  return (
    <>
      <Head>
        <title>Coffee Craft | Services</title>
      </Head>

      <main className="space-y-20 md:space-y-40">
        <PageBreadcrumb title="services" href="/services" />

        <ServicesDetails services={services} />
      </main>
    </>
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
    revalidate: 60 * 60 * 72,
  };
};

export default Services;
