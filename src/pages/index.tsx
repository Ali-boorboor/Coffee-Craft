import React from "react";
import Head from "next/head";
import ServiceModel from "@/models/Service";
import ProductModel from "@/models/Product";
import CommentModel from "@/models/Comment";
import connectToDB from "@/database/dbConnection";
import jsonDataParser from "@/utils/jsonDataParser";
import Menu from "@/components/templates/index/Menu";
import Intro from "@/components/templates/index/Intro";
import About from "@/components/templates/index/About";
import Services from "@/components/templates/index/Services";
import Newsletter from "@/components/templates/index/Newsletter";
import Testimonial from "@/components/templates/index/Testimonial";
import { Comment, Product, Service } from "@/types";

type IndexProps = {
  services: Service[];
  products: Product[];
  comments: Comment[];
};

const Index = ({ services, products, comments }: IndexProps) => {
  return (
    <>
      <Head>
        <title>Coffee Craft</title>
      </Head>

      <main className="space-y-40 md:space-y-80">
        <Intro />

        <About />

        <Services services={services} />

        <Newsletter />

        <Menu menuItems={products} />

        <Testimonial comments={comments} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  await connectToDB();

  const services = await ServiceModel.find({}).lean();
  const parsedServices = jsonDataParser(services);

  const products = await ProductModel.find({}).lean();
  const parsedProducts = jsonDataParser(products);

  const comments = await CommentModel.find({})
    .populate("commenter", "username")
    .lean();
  const parsedComments = jsonDataParser(comments);

  return {
    props: {
      services: parsedServices,
      products: parsedProducts,
      comments: parsedComments,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Index;
