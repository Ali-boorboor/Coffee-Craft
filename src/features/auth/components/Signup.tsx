import React from "react";
import Form from "@/features/auth/components/Form";
import apiRequest from "@/utils/axios/axiosInstance";
import PageHeading from "@/components/ui/page-breadcrumb";
import SectionHeader from "@/components/ui/section-header";
import validationSchema from "@/validations/validationSchema";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import validateInputValues from "@/validations/validateInputValues";
import { nameValidations, passwordValidations } from "@/validations";
import { onSubmitHandlerProps } from "@/features/auth/types";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const FADE_UP_DATA_ANIMATE = "#singup_data_animate";

const Signup = () => {
  const router = useRouter();

  const { containerRef } = useFadeUpAnimation({
    fadeUpDataAnimate: FADE_UP_DATA_ANIMATE,
  });

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
    <main className="space-y-20 md:space-y-40" ref={containerRef}>
      <PageHeading title="signup" />

      <section className="px-4 space-y-20 md:space-y-40">
        <SectionHeader
          title="create an account"
          text="to use cart features"
          linesDataAnimate={FADE_UP_DATA_ANIMATE}
        />

        <Form
          submitButtonTitle="signup"
          redirectButtonTitle="login"
          redirectButtonHref="/login"
          dataAnimate={FADE_UP_DATA_ANIMATE}
          onSubmitHandler={onSubmitHandler}
        />
      </section>
    </main>
  );
};

export default Signup;
