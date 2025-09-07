import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import SectionHeader from "@/components/ui/section-header";
import Form from "@/components/templates/reservation/Form";
import Off from "@/components/templates/reservation/Off";
import React from "react";

const FADE_UP_DATA_ANIMATE = "#reservation_items";

const ReservationDetails = () => {
  const { containerRef } = useFadeUpAnimation({
    fadeUpDataAnimate: FADE_UP_DATA_ANIMATE,
  });

  return (
    <section
      className="container m-auto space-y-5 md:space-y-10"
      ref={containerRef}
    >
      <SectionHeader
        title="Reservation"
        text="Book Your Table"
        linesDataAnimate={FADE_UP_DATA_ANIMATE}
      />

      <div
        className="flex flex-wrap-reverse md:flex-nowrap justify-center items-stretch gap-4 px-4 md:px-0"
        data-animate={FADE_UP_DATA_ANIMATE}
      >
        <Off />

        <Form />
      </div>
    </section>
  );
};

export default ReservationDetails;
