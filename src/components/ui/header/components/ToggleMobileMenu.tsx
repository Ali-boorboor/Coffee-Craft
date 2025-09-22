import React from "react";
import Button from "@/components/ui/button/Button";
import { useMobileMenuStore } from "@/components/ui/header/stores/headerStores";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

const ToggleMobileMenu = () => {
  const { isMenuAvailable, setIsMenuAvailable } = useMobileMenuStore();

  const toggleMobileMenu = () => setIsMenuAvailable(!isMenuAvailable);

  return (
    <Button
      className="inline-block md:hidden"
      onClick={toggleMobileMenu}
      size="icon"
    >
      <IoMdClose
        className={`size-4 md:size-6 transition-transform duration-300 ease-linear ${
          isMenuAvailable
            ? "opacity-100 rotate-0 relative"
            : "opacity-0 rotate-45 absolute inset-0"
        }`}
      />

      <HiMenu
        className={`size-4 md:size-6 transition-transform duration-300 ease-linear ${
          isMenuAvailable
            ? "opacity-0 rotate-45 absolute inset-0"
            : "opacity-100 rotate-0 relative"
        }`}
      />
    </Button>
  );
};

export default ToggleMobileMenu;
