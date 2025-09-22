import React from "react";
import Button from "@/components/ui/button/Button";
import apiRequest from "@/utils/axios/axiosInstance";
import { MdLogin, MdLogout } from "react-icons/md";
import { useAuthStore } from "@/features/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ToggleLogout = () => {
  const router = useRouter();

  const { isUserLogin, setIsUserLogin } = useAuthStore();

  const logoutHandler = async () => {
    const response = await apiRequest.get("/auth/logout");

    if (response.status === 200) {
      toast.success("Logged out Successfully");

      setIsUserLogin(false);
    }
  };

  const loginHandler = () => router.push("/login");

  return (
    <>
      {isUserLogin ? (
        <Button
          onClick={logoutHandler}
          variant="danger"
          title="logout"
          size="icon"
        >
          <MdLogout className="size-4 md:size-6" />
        </Button>
      ) : (
        <Button onClick={loginHandler} title="login" size="icon">
          <MdLogin className="size-4 md:size-6" />
        </Button>
      )}
    </>
  );
};

export default ToggleLogout;
