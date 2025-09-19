import React from "react";
import Head from "next/head";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import MenuItems from "@/components/templates/menu/MenuItems";
import jsonDataParser from "@/utils/jsonDataParser";
import connectToDB from "@/database/dbConnection";
import ProductModel from "@/models/Product";
import { Product } from "@/types";

type MenuProps = { products: Product[] };

const Menu = ({ products }: MenuProps) => {
  return (
    <>
      <Head>
        <title>Coffee Craft | Menu</title>
      </Head>

      <main className="space-y-20 md:space-y-40">
        <PageBreadcrumb title="menu" href="/menu" />

        <MenuItems menuItems={products} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  connectToDB();

  const products = await ProductModel.find({}).lean();
  const parsedProducts = jsonDataParser(products);

  return {
    props: {
      products: parsedProducts,
    },
    revalidate: 60 * 60 * 48,
  };
};

export default Menu;
