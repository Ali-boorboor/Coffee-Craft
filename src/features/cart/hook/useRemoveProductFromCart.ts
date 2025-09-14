import apiRequest from "@/utils/axios/axiosInstance";
import { useUserCartStore } from "@/features/cart";
import { CartData } from "@/features/cart/types";
import { toast } from "react-toastify";

type removeProductFromCartProps = {
  productID: string;
  productQuantity: number;
};

const useRemoveProductFromCart = () => {
  const { setUserCart } = useUserCartStore();

  const removeProductFromCart = async ({
    productID,
    productQuantity,
  }: removeProductFromCartProps) => {
    const response = await apiRequest.delete("/cart", {
      data: { productID, productQuantity },
    });

    if (response.status === 200) {
      toast.success("Product Removed Successfully");

      apiRequest
        .get("/cart", { skipErrorHandler: true })
        .then((response) => response.data)
        .then((data: CartData) => setUserCart(data?.userCart));
    }
  };

  return { removeProductFromCart };
};

export default useRemoveProductFromCart;
