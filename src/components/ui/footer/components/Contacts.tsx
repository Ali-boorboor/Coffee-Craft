import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h5 className="text-lg md:text-2xl font-semibold uppercase tracking-widest">
        Get In Touch
      </h5>

      <p className="text-sm md:text-lg font-normal flex gap-1 items-center">
        <MdLocationOn />
        <span>123 Street, New York, USA</span>
      </p>

      <p className="text-sm md:text-lg font-normal flex gap-1 items-center">
        <BiSolidPhone />
        <span>+012 345 67890</span>
      </p>

      <p className="text-sm md:text-lg font-normal flex gap-1 items-center">
        <MdEmail />
        <span>info@example.com</span>
      </p>
    </div>
  );
};

export default Contacts;
