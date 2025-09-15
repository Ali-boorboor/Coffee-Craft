import React from "react";
import Alert from "@/components/ui/alert/Alert";
import ProductCard from "@/components/ui/product-card/ProductCard";
import SectionHeader from "@/components/ui/section-header";
import FilterButtons, {
  useMenuAnimations,
  useMenuFilterStore,
} from "@/features/menu-filter";
import { Product } from "@/types";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";

type SearchResultProps = {
  matchedProducts: Product[];
};

const ITEMS_DATA_ANIMATE = "#search-result_items";
const FADE_UP_DATA_ANIMATE = "#search-result_lines";

const SearchResult = ({ matchedProducts }: SearchResultProps) => {
  const { menuFilterType } = useMenuFilterStore();

  const { containerRef: fadeUpContainerRef, imageRef } = useFadeUpAnimation({
    fadeUpDataAnimate: FADE_UP_DATA_ANIMATE,
  });
  const { containerRef } = useMenuAnimations({
    itemsDataAnimate: ITEMS_DATA_ANIMATE,
    menuFilterType,
  });

  return (
    <section className="px-4 md:px-0" ref={containerRef}>
      <div
        className="container m-auto flex flex-col gap-4"
        ref={fadeUpContainerRef}
      >
        <SectionHeader
          linesDataAnimate={FADE_UP_DATA_ANIMATE}
          title="search result"
          text="found products"
        />

        {matchedProducts.length ? (
          <FilterButtons />
        ) : (
          <>
            <Alert
              dataAnimate={FADE_UP_DATA_ANIMATE}
              title="no products found"
            />
            <img
              className="w-60 h-60 md:w-80 md:h-80 object-cover object-center m-auto"
              src="/image/flying-coffee-cup.png"
              alt="flying-coffee-cup-image"
              ref={imageRef}
            />
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {menuFilterType === "all" &&
            matchedProducts.map((item) => (
              <ProductCard
                dataAnimate={ITEMS_DATA_ANIMATE}
                key={item._id}
                {...item}
              />
            ))}

          {menuFilterType !== "all" &&
            matchedProducts
              .filter((item) => item.type === menuFilterType)
              .map((item) => (
                <ProductCard
                  dataAnimate={ITEMS_DATA_ANIMATE}
                  key={item._id}
                  {...item}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
