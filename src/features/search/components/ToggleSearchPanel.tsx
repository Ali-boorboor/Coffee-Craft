import React from "react";
import Button from "@/components/ui/button";
import { useSearchStore } from "@/features/search/stores/searchStores";
import { IoSearchOutline } from "react-icons/io5";

const ToggleSearchPanel = () => {
  const { isSearchInputAvailable, setIsSearchInputAvailable } =
    useSearchStore();

  const toggleSearchInput = () => {
    setIsSearchInputAvailable(!isSearchInputAvailable);
  };

  return (
    <Button size="icon" onClick={toggleSearchInput}>
      <IoSearchOutline className="size-4 md:size-6" />
    </Button>
  );
};

export default ToggleSearchPanel;
