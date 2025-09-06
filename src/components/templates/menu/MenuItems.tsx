import React from "react";
import FilterButtons from "@/features/menu-filter";
import MenuCard from "@/components/ui/menu-card/MenuCard";
import SectionHeader from "@/components/ui/section-header";
import { useMenuFilterStore, useMenuAnimations } from "@/features/menu-filter";

type MenuItemsProps = {
  menuItems: {
    id: number;
    type: string;
    title: string;
    image: string;
    price: number;
    description: string;
  }[];
};

const ITEMS_DATA_ANIMATE = "#menu_items";

const MenuItems = ({ menuItems }: MenuItemsProps) => {
  const { menuFilterType } = useMenuFilterStore();
  const { containerRef } = useMenuAnimations({
    itemsDataAnimate: ITEMS_DATA_ANIMATE,
    menuFilterType,
  });

  return (
    <div className="container m-auto flex flex-col gap-4" ref={containerRef}>
      <SectionHeader title="Menu & Pricing" text="Competitive Pricing" />

      <FilterButtons />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {menuFilterType === "all" &&
          menuItems.map((item) => (
            <MenuCard
              dataAnimate={ITEMS_DATA_ANIMATE}
              key={item.id}
              {...item}
            />
          ))}

        {menuFilterType !== "all" &&
          menuItems
            .filter((item) => item.type === menuFilterType)
            .map((item) => (
              <MenuCard
                dataAnimate={ITEMS_DATA_ANIMATE}
                key={item.id}
                {...item}
              />
            ))}
      </div>
    </div>
  );
};

export default MenuItems;
