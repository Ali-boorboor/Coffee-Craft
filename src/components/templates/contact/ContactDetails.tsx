import SectionHeader from "@/components/ui/section-header/SectionHeader";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import Contacts from "@/components/templates/contact/Contacts";
import Form from "@/components/templates/contact/Form";
import Map from "@/components/templates/contact/Map";
import React from "react";

const ContactDetails = () => {
  const { containerRef } = useFadeUpAnimation();

  return (
    <section
      className="container m-auto space-y-5 md:space-y-10 transform-gpu will-change-transform"
      ref={containerRef}
    >
      <SectionHeader title="Contact Us" text="Feel Free To Contact" />

      <Contacts />

      <div className="flex flex-wrap-reverse md:flex-nowrap gap-4 justify-center md:justify-between items-stretch px-4 md:px-0">
        <Map />

        <Form />
      </div>
    </section>
  );
};

export default ContactDetails;
