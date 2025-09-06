import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h5 className="text-lg md:text-2xl font-semibold uppercase tracking-widest">
        Follow Us
      </h5>

      <p className="text-sm md:text-lg font-normal text-center max-w-52">
        Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
      </p>

      <div className="flex items-center gap-3">
        <span className="size-9 inline-block bg-secondary-foreground text-secondary rounded-md transition-colors duration-300 ease-linear hover:bg-secondary hover:text-secondary-foreground">
          <FaSquareXTwitter className="size-full" />
        </span>

        <span className="size-9 inline-block bg-secondary-foreground text-secondary rounded-md transition-colors duration-300 ease-linear hover:bg-secondary hover:text-secondary-foreground">
          <FaSquareFacebook className="size-full" />
        </span>

        <span className="size-9 inline-block bg-secondary-foreground text-secondary rounded-md transition-colors duration-300 ease-linear hover:bg-secondary hover:text-secondary-foreground">
          <FaLinkedin className="size-full" />
        </span>

        <span className="size-9 inline-block bg-secondary-foreground text-secondary rounded-md transition-colors duration-300 ease-linear hover:bg-secondary hover:text-secondary-foreground">
          <FaSquareInstagram className="size-full" />
        </span>
      </div>
    </div>
  );
};

export default Socials;
