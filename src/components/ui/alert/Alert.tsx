import React from "react";
import { IoIosWarning } from "react-icons/io";

type AlertProps = { title: string };

const Alert = ({ title }: AlertProps) => {
  return (
    <div className="px-4 w-full md:max-w-1/2 m-auto">
      <p className="capitalize text-base md:text-4xl font-bold bg-primary py-2 px-4 rounded-md border-2 border-primary-foreground flex items-center justify-center gap-2">
        <IoIosWarning className="size-4 md:size-9" />
        {title}
        <IoIosWarning className="size-4 md:size-9" />
      </p>
    </div>
  );
};

export default Alert;
