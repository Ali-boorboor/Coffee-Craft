import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BiSolidPhone } from "react-icons/bi";

const Contacts = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
      <div className="flex flex-col gap-2 md:gap-2.5 items-center">
        <MdLocationOn className="size-6 md:size-8" />
        <h6 className="text-xl md:text-2xl font-bold">Address</h6>
        <p className="text-base md:text-lg">123 Street, New York, USA</p>
      </div>

      <div className="flex flex-col gap-2 md:gap-2.5 items-center">
        <BiSolidPhone className="size-6 md:size-8" />
        <h6 className="text-xl md:text-2xl font-bold">Phone</h6>
        <p className="text-base md:text-lg">+012 345 6789</p>
      </div>

      <div className="flex flex-col gap-2 md:gap-2.5 items-center">
        <MdEmail className="size-6 md:size-8" />
        <h6 className="text-xl md:text-2xl font-bold">Email</h6>
        <p className="text-base md:text-lg">info@example.com</p>
      </div>
    </div>
  );
};

export default Contacts;
