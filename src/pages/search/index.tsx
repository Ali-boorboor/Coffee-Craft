import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import jsonDataParser from "@/utils/jsonDataParser";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import validationSchema from "@/validations/validationSchema";
import validateInputValues from "@/validations/validateInputValues";
import SearchResult from "@/features/search/components/SearchResult";
import React, { useEffect } from "react";
import { searchValidations } from "@/validations";
import { NextPageContext } from "next";
import { Product } from "@/types";

type SearchProps = { matchedProducts: Product[] };

const Search = ({ matchedProducts }: SearchProps) => {
  useEffect(() => {
    document.title = "Coffee Craft | Search";
  }, []);

  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="search" />

      <SearchResult matchedProducts={matchedProducts} />
    </main>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  connectToDB();

  const { product_name } = context.query;

  const schema = validationSchema({ searchQuery: searchValidations });

  const isValid = await validateInputValues({
    values: { searchQuery: product_name },
    schema,
  });

  if (!isValid) {
    return {
      props: { matchedProducts: [] },
    };
  }

  const query = String(product_name).toLowerCase();

  const matchedProducts = await ProductModel.find({
    title: { $regex: query, $options: "i" },
  }).lean();

  const parsedMatchedProducts = jsonDataParser(matchedProducts);

  return { props: { matchedProducts: parsedMatchedProducts } };
};

export default Search;
