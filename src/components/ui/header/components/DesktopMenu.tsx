import React from "react";
import { useInputStore } from "@/components/ui/header/stores/HeaderStores";
import { IoSearchOutline } from "react-icons/io5";

const DesktopMenu = () => {
  const { isSearchInputAvailable, setIsSearchInputAvailable } = useInputStore();

  const searchInputToggler = () => {
    setIsSearchInputAvailable(!isSearchInputAvailable);
  };

  return (
    <>
      <nav className="hidden md:flex justify-center items-center gap-6 capitalize font-semibold">
        <li>
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            home
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            about
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            service
          </a>
        </li>
        <li>
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            menu
          </a>
        </li>
        <li className="relative group">
          <span className="cursor-pointer">pages</span>
          <ul className="absolute -translate-x-1/2 left-1/2 top-6 w-36 bg-secondary text-secondary-foreground/50 border-2 border-secondary-foreground/50 py-2 rounded-md text-center shadow-sm shadow-secondary/60 opacity-0 translate-y-10 pointer-events-none transition-all duration-300 ease-linear delay-100 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
            <li className="border-b border-b-secondary-foreground/50 last:border-0">
              <a
                className="inline-block w-full py-2 px-4 transition-all duration-300 ease-linear hover:bg-primary hover:text-primary-foreground"
                href="#"
              >
                reservation
              </a>
            </li>
            <li className="border-b border-b-secondary-foreground/50 last:border-0">
              <a
                className="inline-block w-full py-2 px-4 transition-all duration-300 ease-linear hover:bg-primary hover:text-primary-foreground"
                href="#"
              >
                testimonial
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            contact
          </a>
        </li>
      </nav>

      <button
        className="cursor-pointer bg-primary text-primary-foreground p-1.5 rounded-md border-2 border-primary-foreground shadow-sm shadow-primary/60 hidden md:block transition-all duration-300 ease-linear hover:text-primary hover:bg-primary-foreground hover:border-primary"
        onClick={searchInputToggler}
      >
        <IoSearchOutline className="size-6" />
      </button>
    </>
  );
};

export default DesktopMenu;
