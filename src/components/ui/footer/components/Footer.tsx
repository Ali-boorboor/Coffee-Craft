import React from "react";
import Contacts from "@/components/ui/footer/components/Contacts";
import Socials from "@/components/ui/footer/components/Socials";
import ShopDetails from "@/components/ui/footer/components/ShopDetails";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-10 md:pt-20 px-4 md:px-0 mt-20 md:mt-40 relative paper-torn-piece-top">
      <div className="flex flex-wrap gap-8 justify-center md:justify-between items-start container m-auto">
        <Contacts />

        <Socials />

        <ShopDetails />
      </div>

      <p className="text-base md:text-lg font-semibold text-center mt-10 p-2 border-t-2 border-t-secondary-foreground/50 capitalize">
        made with ❤️ by{" "}
        <span className="text-primary text-nowrap">Ali boorboor</span>
      </p>
    </footer>
  );
};

export default Footer;
