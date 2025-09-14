import apiRequest from "@/utils/axios/axiosInstance";
import { toast } from "react-toastify";

type addProductToCartProps = { productID: string };

const useAddProductToCart = () => {
  const addProductToCart = async ({ productID }: addProductToCartProps) => {
    const response = await apiRequest.post("/cart", { productID });

    if (response.status === 201) {
      toast.success("Product Added Successfully");
    }
  };

  return { addProductToCart };
};

export default useAddProductToCart;
