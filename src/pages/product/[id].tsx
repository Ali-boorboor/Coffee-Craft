import React from "react";
import Head from "next/head";
import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import jsonDataParser from "@/utils/jsonDataParser";
import Product from "@/components/templates/single-product/Product";
import { Product as ProductType } from "@/types";
import { GetStaticPropsContext } from "next";

type SingleProductProps = { head: { title: string }; product: ProductType };

const SingleProduct = ({ head, product }: SingleProductProps) => {
  return (
    <>
      <Head>
        <title>Coffee Craft | {head.title}</title>
      </Head>

      <main>
        <Product product={product} />
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  await connectToDB();

  const products = await ProductModel.find({}).lean();

  const paths = products.map((product) => ({
    params: { id: String(product._id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  await connectToDB();

  const productID = context.params?.id;

  const product = await ProductModel.findById(productID, "-__v")
    .populate({
      path: "comments",
      populate: {
        path: "commenter",
        select: "username",
      },
    })
    .lean();
  const parsedProduct = jsonDataParser(product);

  return {
    props: { head: { title: parsedProduct?.title }, product: parsedProduct },
    revalidate: 60 * 60 * 24,
  };
};

export default SingleProduct;
