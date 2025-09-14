import React from "react";
import ProductCard from "@/components/ui/product-card/ProductCard";
import SectionHeader from "@/components/ui/section-header";
import FilterButtons, {
  useMenuAnimations,
  useMenuFilterStore,
} from "@/features/menu-filter";
import { Product } from "@/types";

type SearchResultProps = {
  matchedProducts: Product[];
};

const ITEMS_DATA_ANIMATE = "#search-result_items";

const SearchResult = ({ matchedProducts }: SearchResultProps) => {
  const { menuFilterType } = useMenuFilterStore();
  const { containerRef } = useMenuAnimations({
    itemsDataAnimate: ITEMS_DATA_ANIMATE,
    menuFilterType,
  });

  return (
    <section className="px-4 md:px-0" ref={containerRef}>
      <div className="container m-auto flex flex-col gap-4">
        <SectionHeader title="search result" text="found products" />

        <FilterButtons />

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
