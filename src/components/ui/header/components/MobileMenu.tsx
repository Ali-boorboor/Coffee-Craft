import React from "react";
import Link from "next/link";
import useMobileMenuAnimation from "@/components/ui/header/animations/useMobileMenuAnimation";
import { mobileMenuItems } from "@/components/ui/header/constants/menuItems";
import { useMobileMenuStore } from "@/components/ui/header/stores";

const DATA_ANIMATE = "mobile-menu-items";

const MobileMenu = () => {
  const { setIsMenuAvailable, isMenuAvailable } = useMobileMenuStore();

  const { containerRef } = useMobileMenuAnimation({
    itemsDataAnimate: DATA_ANIMATE,
    isMenuAvailable,
  });

  const closeMenuOnItemsClick = () => setIsMenuAvailable(false);

  return (
    <nav
      className="block md:hidden border-b-2 border-b-secondary-foreground w-full absolute left-0 m-auto top-10 transform-gpu will-change-transform [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)]"
      ref={containerRef}
    >
      <ul className="text-center p-4 bg-secondary space-y-4 capitalize font-semibold">
        {mobileMenuItems.map((menuItem) => (
          <li
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
