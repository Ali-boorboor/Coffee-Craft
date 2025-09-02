import gsap from "gsap";
import React, { useRef } from "react";
import { useInputStore } from "@/components/ui/header/stores/HeaderStores";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useGSAP } from "@gsap/react";

const SearchBar = () => {
  const { isSearchInputAvailable, setIsSearchInputAvailable } = useInputStore();
  const containerRef = useRef<HTMLDivElement>(null);

  const searchInputToggler = () => {
    setIsSearchInputAvailable(!isSearchInputAvailable);
  };

  useGSAP(() => {
    if (isSearchInputAvailable) {
      const timeline = gsap.timeline();

      timeline.to(containerRef.current, {
        right: 0,
        opacity: 1,
        ease: "linear",
      });

      timeline.to("[data-animate='search-input-content']", {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "linear",
      });
    } else {
      const timeline = gsap.timeline();

      timeline.to(containerRef.current, {
        right: "100%",
        opacity: 0,
        ease: "linear",
      });

      timeline.to("[data-animate='search-input-content']", {
        y: 100,
        opacity: 0,
      });
    }
  }, [isSearchInputAvailable]);

  return (
    <div
      className="fixed right-full left-0 top-0 bottom-0 opacity-0 z-50 flex flex-col justify-center items-center gap-4 px-4 coffee-background bg-cover"
      ref={containerRef}
    >
      <button
        className="bg-red-500/20 p-1.5 rounded-md border-2 border-red-500 cursor-pointer opacity-0"
        data-animate="search-input-content"
        onClick={searchInputToggler}
      >
        <IoMdClose className="size-6 text-red-500" />
      </button>

      <div
        className="flex items-center justify-between gap-1 opacity-0 bg-primary/50 border-2 border-primary text-primary-foreground placeholder:text-primary-foreground/50 font-semibold rounded-md py-1.5 px-2.5 max-w-lg w-full shadow-sm shadow-primary/60 transition-all duration-300 ease-linear focus-within:ring-primary-foreground focus-within:ring-2"
        data-animate="search-input-content"
      >
        <input placeholder="Search..." type="text" />

        <IoSearchOutline className="size-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;
