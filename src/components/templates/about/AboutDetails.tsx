import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import SectionHeader from "@/components/ui/section-header";
import Image from "next/image";
import React from "react";

const AboutDetails = () => {
  const { containerRef } = useFadeUpAnimation();

  return (
    <section
      className="flex flex-col justify-center items-center gap-2 md:gap-6 container m-auto md:px-0 px-4 transform-gpu will-change-transform"
      ref={containerRef}
    >
      <SectionHeader title="about us" text="serving since 2004" />

      <p className="md:max-w-96 w-full m-auto md:leading-6 text-center font-normal">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don&apos;t look even slightly believable. If you
        are going to use a passage of Lorem Ipsum, you need to be sure there
        isn&apos;t anything embarrassing hidden in the middle of text. All
      </p>

      <Image
        className="w-60 h-60 md:w-80 md:h-80 object-cover object-center"
        src="/image/flying-coffee-cup.png"
        alt="flying coffee cup"
        width={1000}
        height={400}
      />
    </section>
  );
};

export default AboutDetails;
