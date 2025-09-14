import apiRequest from "@/utils/axios/axiosInstance";
import { toast } from "react-toastify";

type addProductToCart = { productID: string };

const useAddProductToCart = () => {
  const addProductToCart = async ({ productID }: addProductToCart) => {
    const response = await apiRequest.post("/cart/add-product", { productID });

    if (response.status === 201) {
      toast.success("Product Added To Cart Successfully");
    }
  };

  return { addProductToCart };
};

export default useAddProductToCart;
