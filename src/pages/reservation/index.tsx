import ReservationDetails from "@/components/templates/reservation/ReservationDetails";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import React, { useEffect } from "react";

const Reservation = () => {
  useEffect(() => {
    document.title = "Coffee Craft | Reservation";
  }, []);

  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="reservation" href="/reservation" />

      <ReservationDetails />
    </main>
  );
};

export default Reservation;
