import React from "react";

const ShopDetails = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h5 className="text-lg md:text-2xl font-semibold uppercase tracking-widest">
        Open Hours
      </h5>

      <div className="text-sm md:text-lg font-normal text-center">
        <p>Monday - Friday</p>
        <p>8.00 AM - 8.00 PM</p>
      </div>

      <div className="text-sm md:text-lg font-normal text-center">
        <p>Saturday - Sunday</p>
        <p>2.00 PM - 8.00 PM</p>
      </div>
    </div>
  );
};

export default ShopDetails;
