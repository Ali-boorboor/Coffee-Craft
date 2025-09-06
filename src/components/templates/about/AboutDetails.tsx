import useAboutDetailsAnimations from "@/components/templates/about/animations/useAboutDetailsAnimations";
import SectionHeader from "@/components/ui/section-header";
import React from "react";

const LINES_DATA_ANIMATE = "#about_lines";

const AboutDetails = () => {
  const { imageRef } = useAboutDetailsAnimations({
    linesDataAnimate: LINES_DATA_ANIMATE,
  });

  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-6 container m-auto">
      <SectionHeader
        title="about us"
        text="serving since 2004"
        linesDataAnimate={LINES_DATA_ANIMATE}
      />

      <p
        className="md:max-w-96 w-full m-auto md:leading-6 text-center font-normal transform-gpu will-change-transform"
        data-animate={LINES_DATA_ANIMATE}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All
      </p>

      <img
        className="w-60 h-60 md:w-80 md:h-80 object-cover object-center"
        src="/image/flying-coffee-cup.png"
        alt="flying-coffee-cup"
        ref={imageRef}
      />
    </div>
  );
};

export default AboutDetails;
