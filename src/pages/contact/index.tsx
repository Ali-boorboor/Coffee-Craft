import ContactDetails from "@/components/templates/contact/ContactDetails";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import React from "react";

const Contact = () => {
  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="contact" href="/contact" />

      <ContactDetails />
    </main>
  );
};

export default Contact;
