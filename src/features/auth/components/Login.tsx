import React from "react";
import Form from "@/features/auth/components/Form";
import apiRequest from "@/utils/axios/axiosInstance";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import SectionHeader from "@/components/ui/section-header";
import validationSchema from "@/validations/validationSchema";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import validateInputValues from "@/validations/validateInputValues";
import { nameValidations, passwordValidations } from "@/validations";
import { onSubmitHandlerProps } from "@/features/auth/types";
import { useAuthStore } from "@/features/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();

  const { setIsUserLogin } = useAuthStore();
  const { containerRef } = useFadeUpAnimation();

  const onSubmitHandler = async ({
    event,
    username,
    password,
  }: onSubmitHandlerProps) => {
    event.preventDefault();

    const schema = validationSchema({
      username: nameValidations,
      password: passwordValidations,
    });

    const isValid = await validateInputValues({
      values: { username, password },
      schema,
    });

    if (!isValid) return;

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
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="login" />

      <section
        className="px-4 space-y-20 md:space-y-40 transform-gpu will-change-transform"
        ref={containerRef}
      >
        <SectionHeader
          title="login to you account"
          text="to use cart features"
        />

        <Form
          submitButtonTitle="login"
          redirectButtonTitle="signup"
          redirectButtonHref="/signup"
          onSubmitHandler={onSubmitHandler}
        />
      </section>
    </main>
  );
};

export default Login;
