import React from "react";
import Head from "next/head";
import ReservationDetails from "@/components/templates/reservation/ReservationDetails";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";

const Reservation = () => {
  return (
    <>
      <Head>
        <title>Coffee Craft | Reservation</title>
      </Head>

      <main className="space-y-20 md:space-y-40">
        <PageBreadcrumb title="reservation" href="/reservation" />

        <ReservationDetails />
      </main>
    </>
  );
};

export default Reservation;
