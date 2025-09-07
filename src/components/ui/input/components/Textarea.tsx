import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={twMerge(
        clsx(
          "capitalize shadow-xs py-1.5 px-2.5 w-full font-semibold rounded-md transition-colors duration-300 ease-linear",
          "bg-primary/50 border-2 border-primary text-primary-foreground placeholder:text-primary-foreground/50 shadow-primary focus-within:inset-ring-2 focus-within:inset-ring-primary-foreground",
          "max-h-80 min-h-32",
          className
        )
      )}
      {...props}
    />
  );
};

export default Textarea;
