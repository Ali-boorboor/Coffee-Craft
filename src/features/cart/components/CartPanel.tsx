import React from "react";
import Button from "@/components/ui/button";
import Table from "@/features/cart/components/Table";
import usePanelAnimation from "@/animations/usePanelAnimation";
import { useCartStore } from "@/features/cart/stores/cartStores";
import { IoMdClose } from "react-icons/io";

const cartDatas = {
  products: [
    { id: "1", name: "black coffee", quantity: 2, price: 20 },
    { id: "2", name: "cappuccino", quantity: 2, price: 30 },
  ],
  totalPrice: 50,
  totalQuantity: 4,
};

const DATA_ANIMATE = "cart-panel-items";

const CartPanel = () => {
  const { setIsCartPanelAvailable, isCartPanelAvailable } = useCartStore();

  const { containerRef } = usePanelAnimation({
    itemsDataAnimate: DATA_ANIMATE,
    isPanelAvailable: isCartPanelAvailable,
    fromClipPath: "polygon(100% 0%,100% 0%,100% 100%,100% 100%)",
  });

  const toggleCartPanel = () => {
    setIsCartPanelAvailable(!isCartPanelAvailable);
  };

  return (
    <section
      className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-4 px-4 text-white coffee-background"
      ref={containerRef}
    >
      <Button
        onClick={toggleCartPanel}
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
        cart
      </p>

      <Table cartDatas={cartDatas} dataAnimate={DATA_ANIMATE} />
    </section>
  );
};

export default CartPanel;
