import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import ProductModel from "@/models/Product";
import connectToDB from "@/database/dbConnection";
import jsonDataParser from "@/utils/jsonDataParser";
import validationSchema from "@/utils/validators/validationSchema";
import validateInputValues from "@/utils/validators/validateInputValues";
import { searchValidations } from "@/validations";
import { NextPageContext } from "next";
import { Product } from "@/types";

const PageBreadcrumb = dynamic(
  () => import("@/components/ui/page-breadcrumb"),
  { ssr: false }
);

const SearchResult = dynamic(
  () => import("@/features/search/components/SearchResult"),
  { ssr: false }
);

type SearchProps = { matchedProducts: Product[] };

const Search = ({ matchedProducts }: SearchProps) => {
  return (
    <>
      <Head>
        <title>Coffee Craft | Search</title>
      </Head>

      <main className="space-y-20 md:space-y-40">
        <PageBreadcrumb title="search" />

        <SearchResult matchedProducts={matchedProducts} />
      </main>
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  await connectToDB();

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
