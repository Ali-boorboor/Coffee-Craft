import React from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import useSearchPanel from "@/components/ui/header/hooks/useSearchPanel";
import useSearchPanelAnimation from "@/components/ui/header/animations/useSearchPanelAnimation";
import { useSearchStore } from "@/components/ui/header/stores/searchStores";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const DATA_ANIMATE = "search-bar-items";

const SearchPanel = () => {
  const { setIsSearchInputAvailable } = useSearchStore();

  const {
    searchValue,
    handleInputOnEnterPressed,
    handleInputChange,
    redirectToSearchPage,
  } = useSearchPanel();

  const { containerRef } = useSearchPanelAnimation({
    itemsDataAnimate: DATA_ANIMATE,
  });

  const closeSearchInputPanel = () => setIsSearchInputAvailable(false);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-4 px-4 text-white coffee-background"
      ref={containerRef}
    >
      <Button
        onClick={closeSearchInputPanel}
        data-animate={DATA_ANIMATE}
        variant="danger"
        size="icon"
      >
        <IoMdClose className="size-4 md:size-6" />
      </Button>

      <p
        className="capitalize font-bold text-2xl md:text-5xl transform-gpu will-change-transform"
        data-animate={DATA_ANIMATE}
      >
        search product
      </p>

      <div
        className="flex items-center gap-1 justify-between bg-primary/50 border-2 border-primary rounded-md px-2.5 max-w-lg w-full shadow-xs shadow-white focus-within:ring-white focus-within:ring-2 transition-colors duration-300 ease-linear transform-gpu will-change-transform"
        data-animate={DATA_ANIMATE}
      >
        <Input
          onKeyDown={handleInputOnEnterPressed}
          onChange={handleInputChange}
          placeholder="Search..."
          value={searchValue}
          variant="ghost"
          type="text"
        />

        <IoSearchOutline
          className="size-6 cursor-pointer"
          onClick={redirectToSearchPage}
        />
      </div>
    </div>
  );
};

export default SearchPanel;
