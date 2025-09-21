import FilterButtons from "@/features/menu-filter";
import SectionHeader from "@/components/ui/section-header";
import ProductCard from "@/components/ui/product-card/ProductCard";
import React, { useEffect } from "react";
import { useMenuFilterStore, useMenuAnimations } from "@/features/menu-filter";
import { Product } from "@/types";

type MenuProps = {
  menuItems: Product[];
};

const ITEMS_DATA_ANIMATE = "menu-zoom-in";

const Menu = ({ menuItems }: MenuProps) => {
  const { menuFilterType, setMenuFilterType } = useMenuFilterStore();
  const { containerRef } = useMenuAnimations({
    itemsDataAnimate: ITEMS_DATA_ANIMATE,
    menuFilterType,
  });

  useEffect(() => {
    setMenuFilterType("all");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="py-10 md:py-20 px-4 md:px-0 text-white relative paper-torn-piece-bottom paper-torn-piece-top coffee-background"
      ref={containerRef}
    >
      <div className="container m-auto flex flex-col gap-4">
        <SectionHeader title="Menu & Pricing" text="Competitive Pricing" />

        <FilterButtons />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {menuFilterType === "all" &&
            menuItems
              .slice(0, 4)
              .map((item) => (
                <ProductCard
                  dataAnimate={ITEMS_DATA_ANIMATE}
                  key={item._id}
                  {...item}
                />
              ))}

          {menuFilterType !== "all" &&
            menuItems
              .filter((item) => item.type === menuFilterType)
              .slice(0, 4)
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

export default Menu;
