import React from "react";

type SectionHeaderProps = {
  title: string;
  text: string;
  linesDataAnimate?: string;
};

const SectionHeader = ({
  title,
  text,
  linesDataAnimate,
}: SectionHeaderProps) => {
  return (
    <div className="text-center">
      <h3
        className="capitalize text-2xl md:text-4xl font-semibold text-primary text-shadow-xs text-shadow-white transform-gpu will-change-transform"
        data-animate={linesDataAnimate}
      >
        {title}
      </h3>

      <p
        className="text-3xl md:text-5xl font-bold capitalize transform-gpu will-change-transform"
        data-animate={linesDataAnimate}
      >
        {text}
      </p>
    </div>
  );
};

export default SectionHeader;
