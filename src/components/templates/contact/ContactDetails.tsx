import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import Contacts from "@/components/templates/contact/Contacts";
import SectionHeader from "@/components/ui/section-header";
import Form from "@/components/templates/contact/Form";
import Map from "@/components/templates/contact/Map";
import React from "react";

const FADE_UP_DATA_ANIMATE = "#contact_items";

const ContactDetails = () => {
  const { containerRef } = useFadeUpAnimation({
    fadeUpDataAnimate: FADE_UP_DATA_ANIMATE,
  });

  return (
    <section
      className="container m-auto space-y-5 md:space-y-10"
      ref={containerRef}
    >
      <SectionHeader
        title="Contact Us"
        text="Feel Free To Contact"
        linesDataAnimate={FADE_UP_DATA_ANIMATE}
      />

      <Contacts />

      <div
        className="flex flex-wrap-reverse md:flex-nowrap gap-4 justify-center md:justify-between items-center px-4 md:px-0"
        data-animate={FADE_UP_DATA_ANIMATE}
      >
        <Map />

        <Form />
      </div>
    </section>
  );
};

export default ContactDetails;
