import React from "react";
import Form from "@/features/auth/components/Form";
import apiRequest from "@/utils/axios/axiosInstance";
import PageHeading from "@/components/ui/page-breadcrumb";
import SectionHeader from "@/components/ui/section-header";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import { onSubmitHandlerProps } from "@/features/auth/types";
import { useAuthStore } from "@/features/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const FADE_UP_DATA_ANIMATE = "#login_data_animate";

const Login = () => {
  const router = useRouter();

  const { setIsUserLogin } = useAuthStore();
  const { containerRef } = useFadeUpAnimation({
    fadeUpDataAnimate: FADE_UP_DATA_ANIMATE,
  });

  const onSubmitHandler = async ({
    event,
    username,
    password,
  }: onSubmitHandlerProps) => {
    event.preventDefault();

    const response = await apiRequest.post("/auth/login", {
      username,
      password,
    });

    if (response.status === 200) {
      toast.success("Logged In Successfully");

      setIsUserLogin(true);

      router.replace("/");
    } else if (response.status === 404) {
      toast.error("User Not Found!");
    } else if (response.status === 401) {
      toast.error("Username OR Password Is Wrong!");
    }
  };

  return (
    <main className="space-y-20 md:space-y-40" ref={containerRef}>
      <PageHeading title="login" />

      <section className="px-4 space-y-20 md:space-y-40">
        <SectionHeader
          title="login to you account"
          text="to use cart features"
          linesDataAnimate={FADE_UP_DATA_ANIMATE}
        />

        <Form
          submitButtonTitle="login"
          redirectButtonTitle="signup"
          redirectButtonHref="/signup"
          dataAnimate={FADE_UP_DATA_ANIMATE}
          onSubmitHandler={onSubmitHandler}
        />
      </section>
    </main>
  );
};

export default Login;
