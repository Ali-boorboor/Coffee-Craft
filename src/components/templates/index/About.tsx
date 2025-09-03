import useAboutAnimations from "@/components/templates/index/animations/useAboutAnimations";
import Button from "@/components/ui/button";
import React from "react";

const LINES_DATA_ANIMATE = "about-lines";

const About = () => {
  const { containerRef, imageRef } = useAboutAnimations({
    linesDataAnimate: LINES_DATA_ANIMATE,
  });

  return (
    <section
      className="flex justify-center items-center px-4 overflow-hidden relative"
      ref={containerRef}
    >
      <div className="flex flex-col justify-center items-center gap-2 md:gap-6 container">
        <h3
          className="capitalize text-2xl md:text-4xl font-semibold text-primary text-shadow-xs text-shadow-white transform-gpu will-change-transform"
          data-animate={LINES_DATA_ANIMATE}
        >
          about us
        </h3>

        <p
          className="text-3xl md:text-5xl font-bold capitalize transform-gpu will-change-transform"
          data-animate={LINES_DATA_ANIMATE}
        >
          Serving Since 1950
        </p>

        <p
          className="md:max-w-96 w-full m-auto md:leading-6 text-center md:text-justify font-normal transform-gpu will-change-transform"
          data-animate={LINES_DATA_ANIMATE}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
        </p>

        <Button>learn more</Button>

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
