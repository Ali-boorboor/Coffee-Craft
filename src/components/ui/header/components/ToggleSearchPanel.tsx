import React from "react";
import { useSearchStore } from "@/components/ui/header/stores/searchStores";
import { IoSearchOutline } from "react-icons/io5";

const ToggleSearchPanel = () => {
  const { isSearchInputAvailable, setIsSearchInputAvailable } =
    useSearchStore();

  const toggleSearchInput = () => {
    setIsSearchInputAvailable(!isSearchInputAvailable);
  };

  return (
    <button
      className="cursor-pointer bg-primary text-primary-foreground p-1 md:p-1.5 rounded-md border-2 border-primary-foreground shadow-sm shadow-primary/60 transition-all duration-300 ease-linear hover:text-primary hover:bg-primary-foreground hover:border-primary"
      onClick={toggleSearchInput}
    >
      <IoSearchOutline className="size-4 md:size-6" />
    </button>
  );
};

export default ToggleSearchPanel;
