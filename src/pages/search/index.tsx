import React from "react";
import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import jsonDataParser from "@/utils/jsonDataParser";
import PageHeading from "@/components/ui/page-breadcrumb";
import SearchResult from "@/features/search/components/SearchResult";
import { NextPageContext } from "next";
import { Product } from "@/types";

type SearchProps = { matchedProducts: Product[] };

const Search = ({ matchedProducts }: SearchProps) => {
  return (
    <main className="space-y-20 md:space-y-40">
      <PageHeading title="search" />

      <SearchResult matchedProducts={matchedProducts} />
    </main>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  connectToDB();

  const { product_name } = context.query;

  const query = String(product_name).toLowerCase();

  const matchedProducts = await ProductModel.find({
    title: { $regex: query, $options: "i" },
  }).lean();

  const parsedMatchedProducts = jsonDataParser(matchedProducts);

  return { props: { matchedProducts: parsedMatchedProducts } };
};

export default Search;
