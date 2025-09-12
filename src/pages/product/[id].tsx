import React from "react";
import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import jsonDataParser from "@/utils/jsonDataParser";
import Product from "@/components/templates/single-product/Product";
import { NextPageContext } from "next";
import { Product as ProductType } from "@/types";

type SingleProductProps = { product: ProductType };

const SingleProduct = ({ product }: SingleProductProps) => {
  return (
    <main>
      <Product product={product} />
    </main>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  connectToDB();

  const { id } = context.query;

  const product = await ProductModel.findById(id, "-__v")
    .populate("comments")
    .lean();
  const parsedProduct = jsonDataParser(product);

  return { props: { product: parsedProduct } };
};

export default SingleProduct;
