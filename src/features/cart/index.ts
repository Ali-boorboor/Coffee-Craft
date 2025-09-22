import CartPanel from "@/features/cart/components/CartPanel";
import useAddProductToCart from "@/features/cart/hook/useAddProductToCart";
import useRemoveProductFromCart from "@/features/cart/hook/useRemoveProductFromCart";
import { useCartStore } from "@/features/cart/stores/cartStores";

export default CartPanel;
export {
  CartPanel,
  useCartStore,
  useAddProductToCart,
  useRemoveProductFromCart,
};
