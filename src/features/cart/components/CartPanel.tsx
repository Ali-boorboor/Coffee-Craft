import Alert from "@/components/ui/alert/Alert";
import Button from "@/components/ui/button/Button";
import apiRequest from "@/utils/axios/axiosInstance";
import Table from "@/features/cart/components/Table";
import usePanelAnimation from "@/animations/usePanelAnimation";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useCartStore } from "@/features/cart";
import { CartData } from "@/features/cart/types";

const DATA_ANIMATE = "cart-panel-items";

const CartPanel = () => {
  const {
    isCartPanelAvailable,
    userCart,
    setIsCartPanelAvailable,
    setUserCart,
  } = useCartStore();

  const { containerRef } = usePanelAnimation({
    itemsDataAnimate: DATA_ANIMATE,
    isPanelAvailable: isCartPanelAvailable,
    fromClipPath: "polygon(100% 0%,100% 0%,100% 100%,100% 100%)",
  });

  const toggleCartPanel = () => {
    setIsCartPanelAvailable(!isCartPanelAvailable);
  };

  useEffect(() => {
    if (isCartPanelAvailable) {
      apiRequest
        .get("/cart", { skipErrorHandler: true })
        .then((response) => response.data)
        .then((data: CartData) => setUserCart(data?.userCart));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCartPanelAvailable]);

  return (
    <section
      className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-4 p-4 text-white coffee-background [clip-path:polygon(100%_0%,100%_0%,100%_100%,100%_100%)]"
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

      {userCart?.products?.length ? (
        <Table dataAnimate={DATA_ANIMATE} />
      ) : (
        <div
          className="text-primary-foreground w-full"
          data-animate={DATA_ANIMATE}
        >
          <Alert title="no product is in your cart" />
        </div>
      )}
    </section>
  );
};

export default CartPanel;
