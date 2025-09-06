import React from "react";
import Link from "next/link";
import useDesktopMenuAnimation from "@/components/ui/header/animations/useDesktopMenuAnimation";
import { desktopMenuItems } from "@/components/ui/header/constants/menuItems";
import { IoIosArrowDown } from "react-icons/io";

const DATA_ANIMATE = "desktop-menu-items";

const DesktopMenu = () => {
  useDesktopMenuAnimation({ itemsDataAnimate: DATA_ANIMATE });

  return (
    <nav className="hidden md:block">
      <ul className="flex justify-center items-center gap-6 capitalize font-semibold">
        {desktopMenuItems.map((menuItem) => {
          if (menuItem.children) {
            return (
              <li
                className="relative group -translate-y-20 transform-gpu will-change-transform"
                data-animate={DATA_ANIMATE}
                key={menuItem.id}
              >
                <span className="cursor-pointer flex items-center gap-1 transition-all duration-300 ease-linear group-hover:text-primary">
                  {menuItem.title}
                  <IoIosArrowDown className="size-4 transition-all duration-300 ease-linear group-hover:rotate-180" />
                </span>
                <ul className="absolute -translate-x-1/2 left-1/2 top-6 w-36 bg-secondary text-secondary-foreground border border-secondary-foreground/50 py-2 rounded-md text-center shadow-xs shadow-secondary opacity-0 translate-y-10 pointer-events-none transition-all duration-300 ease-linear delay-100 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  {menuItem.children.map((menuItemChild) => (
                    <li
                      className="border-b border-b-secondary-foreground/50 last:border-0"
                      key={menuItemChild.id}
                    >
                      <Link
                        className="inline-block w-full py-2 px-4 transition-all duration-300 ease-linear hover:bg-primary hover:text-primary-foreground"
                        href={menuItemChild.href}
                      >
                        {menuItemChild.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li
                className="-translate-y-20 transform-gpu will-change-transform"
                data-animate={DATA_ANIMATE}
                key={menuItem.id}
              >
                <Link
                  className="transition-all duration-300 ease-linear hover:text-primary"
                  href={menuItem.href}
                >
                  {menuItem.title}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
