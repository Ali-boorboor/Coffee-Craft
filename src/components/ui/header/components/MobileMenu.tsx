import gsap from "gsap";
import React, { useRef } from "react";
import {
  useInputStore,
  useMenuStore,
} from "@/components/ui/header/stores/HeaderStores";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { useGSAP } from "@gsap/react";

const MobileMenu = () => {
  const { isSearchInputAvailable, setIsSearchInputAvailable } = useInputStore();
  const { isMenuAvailable, setIsMenuAvailable } = useMenuStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const searchInputToggler = () => {
    setIsSearchInputAvailable(!isSearchInputAvailable);
  };

  const menuToggler = () => {
    setIsMenuAvailable(!isMenuAvailable);
  };

  useGSAP(() => {
    if (isMenuAvailable) {
      const timeline = gsap.timeline();

      timeline.to(containerRef.current, {
        height: "auto",
        autoAlpha: 1,
        ease: "linear",
      });

      timeline.to("[data-animate='mobile-menu-items']", {
        y: 0,
        opacity: 1,
        height: "auto",
        stagger: 0.15,
        ease: "linear",
      });
    } else {
      const timeline = gsap.timeline();

      timeline.to("[data-animate='mobile-menu-items']", {
        y: -20,
        opacity: 0,
        height: 0,
        ease: "linear",
      });

      timeline.to(containerRef.current, {
        height: 0,
        autoAlpha: 0,
        ease: "linear",
      });
    }
  }, [isMenuAvailable]);

  return (
    <>
      <nav
        className="flex flex-col h-0 opacity-0 pointer-events-none absolute p-4 w-full left-0 m-auto top-10 bg-secondary justify-center items-center gap-6 capitalize font-semibold text-sm"
        ref={containerRef}
      >
        <li
          className="opacity-0 -translate-y-5 h-0"
          data-animate="mobile-menu-items"
        >
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            home
          </a>
        </li>
        <li
          className="opacity-0 -translate-y-5 h-0"
          data-animate="mobile-menu-items"
        >
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            about
          </a>
        </li>
        <li
          className="opacity-0 -translate-y-5 h-0"
          data-animate="mobile-menu-items"
        >
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            service
          </a>
        </li>
        <li
          className="opacity-0 -translate-y-5 h-0"
          data-animate="mobile-menu-items"
        >
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            menu
          </a>
        </li>
        <li
          className="opacity-0 -translate-y-5 h-0"
          data-animate="mobile-menu-items"
        >
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            reservation
          </a>
        </li>
        <li
          className="opacity-0 -translate-y-5 h-0"
          data-animate="mobile-menu-items"
        >
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            testimonial
          </a>
        </li>
        <li
          className="opacity-0 -translate-y-5 h-0"
          data-animate="mobile-menu-items"
        >
          <a
            className="transition-all duration-300 ease-linear hover:text-primary"
            href="#"
          >
            contact
          </a>
        </li>
        <li
          className="opacity-0 -translate-y-5 h-0"
          data-animate="mobile-menu-items"
        >
          <button
            className="cursor-pointer bg-primary text-primary-foreground p-1 rounded-md border-2 border-primary-foreground shadow-sm shadow-primary/60 transition-all duration-300 ease-linear hover:text-primary hover:bg-primary-foreground hover:border-primary"
            onClick={searchInputToggler}
          >
            <IoSearchOutline className="size-4" />
          </button>
        </li>
      </nav>

      <button
        className="cursor-pointer bg-primary text-primary-foreground p-1 rounded-md border-2 border-primary-foreground shadow-sm shadow-primary/60 block md:hidden transition-all duration-300 ease-linear hover:text-primary hover:bg-primary-foreground hover:border-primary"
        onClick={menuToggler}
      >
        {isMenuAvailable ? (
          <IoMdClose className="size-4" />
        ) : (
          <HiMenu className="size-4" />
        )}
      </button>
    </>
  );
};

export default MobileMenu;
