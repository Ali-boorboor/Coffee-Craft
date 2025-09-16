import React from "react";

type SectionHeaderProps = {
  title: string;
  text: string;
};

const SectionHeader = ({ title, text }: SectionHeaderProps) => {
  return (
    <div className="text-center">
      <h3 className="capitalize text-2xl md:text-4xl font-semibold text-primary text-shadow-xs text-shadow-white">
        {title}
      </h3>

      <p className="text-3xl md:text-5xl font-bold capitalize">{text}</p>
    </div>
  );
};

export default SectionHeader;
