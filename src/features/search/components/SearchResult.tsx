import React from "react";
import Image from "next/image";
import Alert from "@/components/ui/alert/Alert";
import ProductCard from "@/components/ui/product-card/ProductCard";
import SectionHeader from "@/components/ui/section-header/SectionHeader";
import { Product } from "@/types";

type SearchResultProps = {
  matchedProducts: Product[];
};

const SearchResult = ({ matchedProducts }: SearchResultProps) => {
  const isProductsFound = matchedProducts.length;

  return (
    <section className="px-4 md:px-0 transform-gpu will-change-transform">
      <div className="container m-auto flex flex-col gap-6 md:gap-10">
        {isProductsFound ? (
          <>
            <SectionHeader title="search result" text="found products" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {matchedProducts.map((item) => (
                <ProductCard key={item._id} {...item} />
              ))}
            </div>
          </>
        ) : (
          <>
            <Alert title="no products found" />
            <Image
              className="w-60 h-60 md:w-80 md:h-80 object-cover object-center m-auto"
              src="/image/flying-coffee-cup.png"
              alt="flying coffee cup"
              width={1000}
              height={400}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default SearchResult;
