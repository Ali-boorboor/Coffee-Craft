import React from "react";
import useMobileMenuAnimation from "@/components/ui/header/animations/useMobileMenuAnimation";
import { useMobileMenuStore } from "@/components/ui/header/stores/headerStores";
import { mobileMenuItems } from "@/components/ui/header/constants/menuItems";

const DATA_ANIMATE = "mobile-menu-items";

const MobileMenu = () => {
  const { isMenuAvailable } = useMobileMenuStore();

  const { containerRef } = useMobileMenuAnimation({
    isMenuAvailable,
    itemsDataAnimate: DATA_ANIMATE,
  });

  return (
    <nav
      className="block md:hidden border-b-2 border-b-secondary-foreground w-full absolute left-0 m-auto top-10 pointer-events-none [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]"
      ref={containerRef}
    >
      <ul className="text-center p-4 bg-secondary space-y-4 capitalize font-semibold">
        {mobileMenuItems.map((menuItem) => (
          <li
            className="opacity-0 -translate-y-5 transform-gpu will-change-transform"
            data-animate={DATA_ANIMATE}
            key={menuItem.id}
          >
            <a href={menuItem.href}>{menuItem.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
