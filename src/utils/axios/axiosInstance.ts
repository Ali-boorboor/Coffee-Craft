import axios from "axios";
import { toast } from "react-toastify";

const apiRequest = axios.create({
  baseURL: "/api",
});

declare module "axios" {
  export interface AxiosRequestConfig {
    skipErrorHandler?: boolean;
  }
}

apiRequest.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.config?.skipErrorHandler) {
      return error;
    }

    toast.error("An Error Has Occurred!");

    return error;
  }
);

export default apiRequest;
