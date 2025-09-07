import React from "react";
import Link from "next/link";
import useMobileMenuAnimation from "@/components/ui/header/animations/useMobileMenuAnimation";
import { useMobileMenuStore } from "@/components/ui/header/stores/headerStores";
import { mobileMenuItems } from "@/components/ui/header/constants/menuItems";

const DATA_ANIMATE = "mobile-menu-items";

const MobileMenu = () => {
  const { setIsMenuAvailable, isMenuAvailable } = useMobileMenuStore();

  const { containerRef } = useMobileMenuAnimation({
    isMenuAvailable,
    itemsDataAnimate: DATA_ANIMATE,
  });

  const closeMenuOnItemsClick = () => setIsMenuAvailable(false);

  return (
    <nav
      className="block md:hidden border-b-2 border-b-secondary-foreground w-full absolute left-0 m-auto top-10"
      ref={containerRef}
    >
      <ul className="text-center p-4 bg-secondary space-y-4 capitalize font-semibold">
        {mobileMenuItems.map((menuItem) => (
          <li
            className="transform-gpu will-change-transform"
            onClick={closeMenuOnItemsClick}
            data-animate={DATA_ANIMATE}
            key={menuItem.id}
          >
            <Link href={menuItem.href}>{menuItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
