import React from "react";
import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import jsonDataParser from "@/utils/jsonDataParser";
import Product from "@/components/templates/single-product/Product";
import { GetStaticPropsContext } from "next";
import { Product as ProductType } from "@/types";

type SingleProductProps = { product: ProductType };

const SingleProduct = ({ product }: SingleProductProps) => {
  return (
    <main>
      <Product product={product} />
    </main>
  );
};

export const getStaticPaths = async () => {
  connectToDB();

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
  connectToDB();

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

  return { props: { product: parsedProduct } };
};

export default SingleProduct;
