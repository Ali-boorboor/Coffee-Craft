import React from "react";
import { useMobileMenuStore } from "@/components/ui/header/stores/headerStores";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

const ToggleMobileMenu = () => {
  const { isMenuAvailable, setIsMenuAvailable } = useMobileMenuStore();

  const toggleMobileMenu = () => setIsMenuAvailable(!isMenuAvailable);

  return (
    <button
      className="overflow-hidden bg-primary text-primary-foreground rounded-md p-1 border-2 border-primary-foreground shadow-sm shadow-primary/60 block md:hidden"
      onClick={toggleMobileMenu}
    >
      <IoMdClose
        className={`size-4 transition-all duration-300 ease-linear ${
          isMenuAvailable
            ? "opacity-100 rotate-0 relative"
            : "opacity-0 rotate-45 absolute inset-0"
        }`}
      />

      <HiMenu
        className={`size-4 transition-all duration-300 ease-linear ${
          isMenuAvailable
            ? "opacity-0 rotate-45 absolute inset-0"
            : "opacity-100 rotate-0 relative"
        }`}
      />
    </button>
  );
};

export default ToggleMobileMenu;
