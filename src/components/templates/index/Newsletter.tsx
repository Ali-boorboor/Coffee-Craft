import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import apiRequest from "@/utils/axios/axiosInstance";
import SectionHeader from "@/components/ui/section-header";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const FADE_UP_DATA_ANIMATE = "newsletter-fadeUp";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const { containerRef, imageRef } = useFadeUpAnimation({
    fadeUpDataAnimate: FADE_UP_DATA_ANIMATE,
  });

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await apiRequest.post("/newsletter", { email });

    if (response.status === 201) {
      toast.success("Email Saved Successfully");

      setEmail("");
    }
  };

  return (
    <section className="px-4" ref={containerRef}>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-6 container m-auto">
        <SectionHeader
          title="news letter"
          text="join us for offers and news"
          linesDataAnimate={FADE_UP_DATA_ANIMATE}
        />

        <form
          className="flex flex-wrap sm:flex-nowrap gap-2 max-w-full sm:max-w-xl w-full"
          data-animate={FADE_UP_DATA_ANIMATE}
          onSubmit={handleFormSubmit}
        >
          <Input
            className="grow transform-gpu will-change-transform normal-case"
            onChange={handleEmailInputChange}
            placeholder="email..."
            value={email}
            type="email"
          />
          <Button
            className="grow transform-gpu will-change-transform"
            variant="ghost"
            type="submit"
          >
            join
          </Button>
        </form>

        <img
          className="w-60 h-60 md:w-80 md:h-80 object-cover object-center"
          src="/image/coffeeBean-bag.png"
          alt="coffee-bean-bag"
          ref={imageRef}
        />
      </div>
    </section>
  );
};

export default Newsletter;
