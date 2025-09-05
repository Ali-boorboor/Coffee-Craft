import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import SectionHeader from "@/components/ui/section-header";
import Button from "@/components/ui/button";
import React from "react";

const FADE_UP_DATA_ANIMATE = "about-fadeUp";

const About = () => {
  const { containerRef, imageRef } = useFadeUpAnimation({
    fadeUpDataAnimate: FADE_UP_DATA_ANIMATE,
  });

  return (
    <section className="px-4" ref={containerRef}>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-6 container m-auto">
        <SectionHeader
          title="about us"
          text="serving since 2004"
          linesDataAnimate={FADE_UP_DATA_ANIMATE}
        />

        <p
          className="md:max-w-96 w-full m-auto md:leading-6 text-center md:text-justify font-normal transform-gpu will-change-transform"
          data-animate={FADE_UP_DATA_ANIMATE}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
        </p>

        <Button data-animate={FADE_UP_DATA_ANIMATE}>learn more</Button>

        <img
          className="w-60 h-60 md:w-80 md:h-80 object-cover object-center"
          src="/image/flying-coffee-cup.png"
          alt="flying-coffee-cup"
          ref={imageRef}
        />
      </div>
    </section>
  );
};

export default About;
