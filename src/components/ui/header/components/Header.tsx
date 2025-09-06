import React from "react";
import MobileMenu from "@/components/ui/header/components/MobileMenu";
import DesktopMenu from "@/components/ui/header/components/DesktopMenu";
import ToggleMobileMenu from "@/components/ui/header/components/ToggleMobileMenu";
import { ToggleSearchPanel } from "@/features/search";

const Header = () => {
  return (
    <header className="bg-secondary text-secondary-foreground shadow-xs shadow-secondary-foreground fixed left-0 right-0 top-0 border-b border-b-secondary-foreground z-30">
      <div className="container m-auto flex justify-between items-center py-2 md:py-4 px-4 md:px-0">
        <h1 className="text-lg md:text-2xl font-bold capitalize text-primary transition-all duration-300 ease-linear group">
          <a
            className="text-shadow-xs text-shadow-white relative after:absolute after:bg-primary after:-bottom-1 after:left-0 after:right-0 after:m-auto after:w-0 after:h-0.5 after:opacity-0 after:transition-all after:duration-300 after:ease-linear group-hover:after:w-full group-hover:after:opacity-100"
            href="#"
          >
            coffee craft
          </a>
        </h1>

        <DesktopMenu />

        <MobileMenu />

        <div className="flex items-center gap-2">
          <ToggleSearchPanel />

          <ToggleMobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
