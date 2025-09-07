import ReservationDetails from "@/components/templates/reservation/ReservationDetails";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import React from "react";

const Reservation = () => {
  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="reservation" href="/reservation" />

      <ReservationDetails />
    </main>
  );
};

export default Reservation;
