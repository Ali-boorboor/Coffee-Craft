import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type InputVariant = "default" | "ghost";
type InputProps = {
  variant?: InputVariant;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ variant = "default", className, ...props }: InputProps) => {
  const baseStyles =
    "capitalize shadow-xs py-1.5 px-2.5 w-full font-semibold rounded-md transition-colors duration-300 ease-linear";

  const variants = {
    default:
      "bg-primary/50 border-2 border-primary text-primary-foreground placeholder:text-primary-foreground/50 shadow-primary focus-within:inset-ring-2 focus-within:inset-ring-primary-foreground",
    ghost: "bg-transparent px-0",
  };

  return (
    <input
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      {...props}
    />
  );
};

export default Input;
