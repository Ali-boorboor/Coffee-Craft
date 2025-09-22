import React from "react";
import Button from "@/components/ui/button/Button";
import { useMenuFilterStore } from "@/features/menu-filter";

const FilterButtons = () => {
  const { setMenuFilterType } = useMenuFilterStore();

  return (
    <div className="mt-16 flex justify-center items-center gap-4">
      <Button onClick={() => setMenuFilterType("all")}>all</Button>
      <Button onClick={() => setMenuFilterType("hot")}>hot drinks</Button>
      <Button onClick={() => setMenuFilterType("cold")}>cold drinks</Button>
    </div>
  );
};

export default FilterButtons;
