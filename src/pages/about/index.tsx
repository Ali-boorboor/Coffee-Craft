import AboutDetails from "@/components/templates/about/AboutDetails";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import React from "react";

const About = () => {
  return (
    <main className="space-y-20 md:space-y-40">
      <PageBreadcrumb title="about us" href="/about" />

      <AboutDetails />
    </main>
  );
};

export default About;
