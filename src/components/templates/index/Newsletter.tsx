import Image from "next/image";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button/Button";
import apiRequest from "@/utils/axios/axiosInstance";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import validationSchema from "@/utils/validators/validationSchema";
import SectionHeader from "@/components/ui/section-header/SectionHeader";
import validateInputValues from "@/utils/validators/validateInputValues";
import React, { useState } from "react";
import { emailValidations } from "@/validations";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const { containerRef } = useFadeUpAnimation();

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const schema = validationSchema({ email: emailValidations });

    const isValid = await validateInputValues({ values: { email }, schema });

    if (!isValid) return;

    const response = await apiRequest.post("/newsletter", { email });

    if (response.status === 201) {
      toast.success("Email Saved Successfully");

      setEmail("");
    } else if (response.status === 409) {
      toast.error("Email Already Exist!");
    }
  };

  return (
    <section
      className="px-4 transform-gpu will-change-transform"
      ref={containerRef}
    >
      <div className="flex flex-col justify-center items-center gap-2 md:gap-6 container m-auto">
        <SectionHeader title="news letter" text="join us for offers and news" />

        <form
          className="flex flex-wrap sm:flex-nowrap gap-2 max-w-full sm:max-w-xl w-full"
          onSubmit={handleFormSubmit}
        >
          <Input
            className="grow"
            onChange={handleEmailInputChange}
            placeholder="email..."
            value={email}
            type="text"
          />
          <Button className="grow" variant="ghost" type="submit">
            join
          </Button>
        </form>

        <Image
          className="w-60 h-60 md:w-80 md:h-80 object-cover object-center"
          src="/image/coffeeBean-bag.png"
          alt="coffee bean bag"
          width={1000}
          height={400}
        />
      </div>
    </section>
  );
};

export default Newsletter;
