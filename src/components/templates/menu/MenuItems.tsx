import FilterButtons from "@/features/menu-filter";
import SectionHeader from "@/components/ui/section-header";
import ProductCard from "@/components/ui/product-card/ProductCard";
import React, { useEffect } from "react";
import { useMenuFilterStore, useMenuAnimations } from "@/features/menu-filter";
import { Product } from "@/types";

type MenuItemsProps = {
  menuItems: Product[];
};

const ITEMS_DATA_ANIMATE = "#menu_items";

const MenuItems = ({ menuItems }: MenuItemsProps) => {
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
      className="container m-auto flex flex-col gap-4 px-4 md:px-0"
      ref={containerRef}
    >
      <SectionHeader title="Menu & Pricing" text="Competitive Pricing" />

      <FilterButtons />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {menuFilterType === "all" &&
          menuItems.map((item) => (
            <ProductCard
              dataAnimate={ITEMS_DATA_ANIMATE}
              key={item._id}
              {...item}
            />
          ))}

        {menuFilterType !== "all" &&
          menuItems
            .filter((item) => item.type === menuFilterType)
            .map((item) => (
              <ProductCard
                dataAnimate={ITEMS_DATA_ANIMATE}
                key={item._id}
                {...item}
              />
            ))}
      </div>
    </section>
  );
};

export default MenuItems;
