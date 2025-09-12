import axios from "axios";
import { toast } from "react-toastify";

const apiRequest = axios.create({
  baseURL: "/api",
});

apiRequest.interceptors.response.use(
  (response) => response,

  (error) => {
    toast.error("An Error Has Occurred!");

    return error;
  }
);

export default apiRequest;
