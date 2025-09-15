import ContactDetails from "@/components/templates/contact/ContactDetails";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Coffee Craft | Contact";
  }, []);

  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="contact" href="/contact" />

      <ContactDetails />
    </main>
  );
};

export default Contact;
