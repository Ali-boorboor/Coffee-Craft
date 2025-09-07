import React from "react";
import Button from "@/components/ui/button";
import { useCartStore } from "@/features/cart/stores/cartStores";
import { FaCartShopping } from "react-icons/fa6";

const ToggleCartPanel = () => {
  const { isCartPanelAvailable, setIsCartPanelAvailable } = useCartStore();

  const toggleCartPanel = () => {
    setIsCartPanelAvailable(!isCartPanelAvailable);
  };

  return (
    <Button size="icon" onClick={toggleCartPanel}>
      <FaCartShopping className="size-4 md:size-6" />
    </Button>
  );
};

export default ToggleCartPanel;
