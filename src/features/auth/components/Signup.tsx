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
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Signup = () => {
  const router = useRouter();

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

    const response = await apiRequest.post("/auth/signup", {
      username,
      password,
    });

    if (response.status === 201) {
      toast.success("Signed up Successfully");

      router.replace("/login");
    } else if (response.status === 409) {
      toast.error("User Already Exist!");
    }
  };

  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="signup" />

      <section
        className="px-4 space-y-20 md:space-y-40 transform-gpu will-change-transform"
        ref={containerRef}
      >
        <SectionHeader title="create an account" text="to use cart features" />

        <Form
          submitButtonTitle="signup"
          redirectButtonTitle="login"
          redirectButtonHref="/login"
          onSubmitHandler={onSubmitHandler}
        />
      </section>
    </main>
  );
};

export default Signup;
