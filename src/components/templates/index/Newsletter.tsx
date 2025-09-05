import React from "react";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";

const FADE_UP_DATA_ANIMATE = "newsletter-fadeUp";

const Newsletter = () => {
  const { containerRef, imageRef } = useFadeUpAnimation({
    fadeUpDataAnimate: FADE_UP_DATA_ANIMATE,
  });

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
        >
          <Input
            className="grow transform-gpu will-change-transform"
            placeholder="email..."
            type="email"
          />
          <Button
            className="grow transform-gpu will-change-transform"
            variant="ghost"
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
