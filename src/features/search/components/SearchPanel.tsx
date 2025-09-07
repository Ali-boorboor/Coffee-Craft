import React from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import usePanelAnimation from "@/animations/usePanelAnimation";
import useSearchPanel from "@/features/search/hooks/useSearchPanel";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const DATA_ANIMATE = "search-panel-items";

const SearchPanel = () => {
  const {
    searchValue,
    closeSearchPanel,
    isSearchInputAvailable,
    handleInputOnEnterPressed,
    handleInputChange,
    redirectToSearchPage,
  } = useSearchPanel();

  const { containerRef } = usePanelAnimation({
    itemsDataAnimate: DATA_ANIMATE,
    isPanelAvailable: isSearchInputAvailable,
  });

  return (
    <section
      className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-4 px-4 text-white coffee-background"
      ref={containerRef}
    >
      <Button
        onClick={closeSearchPanel}
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
    </section>
  );
};

export default SearchPanel;
