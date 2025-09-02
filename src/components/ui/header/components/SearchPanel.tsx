import React from "react";
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
      className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-4 px-4 coffee-background pointer-events-none [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)]"
      ref={containerRef}
    >
      <button
        className="bg-red-500/20 p-1.5 rounded-md border-2 border-red-500 cursor-pointer opacity-0 -translate-y-10"
        onClick={closeSearchInputPanel}
        data-animate={DATA_ANIMATE}
      >
        <IoMdClose className="size-4 md:size-6 text-red-500" />
      </button>

      <div
        className="flex items-center justify-between gap-2 bg-primary/50 border-2 border-primary text-primary-foreground placeholder:text-primary-foreground/50 font-semibold rounded-md py-1.5 px-2.5 max-w-lg w-full shadow-sm shadow-primary/60 focus-within:inset-ring-primary-foreground focus-within:inset-ring-2 opacity-0 -translate-y-10"
        data-animate={DATA_ANIMATE}
      >
        <input
          onKeyDown={handleInputOnEnterPressed}
          onChange={handleInputChange}
          placeholder="Search..."
          value={searchValue}
          className="w-full"
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
