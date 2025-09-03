import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonSize = "default" | "icon";
type ButtonVariant = "default" | "ghost" | "secondary" | "danger";
type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  size = "default",
  variant = "default",
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "capitalize border-2 shadow-xs font-semibold rounded-md cursor-pointer transition-colors duration-300 ease-linear";

  const variants = {
    default:
      "bg-primary text-primary-foreground border-primary-foreground shadow-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary",
    ghost:
      "bg-primary/60 border-primary shadow-primary hover:text-primary-foreground hover:bg-primary/80",
    secondary:
      "bg-secondary text-secondary-foreground border-secondary-foreground shadow-secondary-foreground hover:bg-secondary-foreground hover:text-secondary hover:border-secondary",
    danger:
      "bg-red-500/20 text-red-500 border-red-500 hover:bg-red-500/40 hover:border-red-500",
  };

  const sizes = {
    default: "px-2.5 py-1.5 md:px-4 md:py-2",
    icon: "p-1.5",
  };

  return (
    <button
      className={twMerge(
        clsx(baseStyles, sizes[size], variants[variant], className)
      )}
      {...props}
    />
  );
};

export default Button;
