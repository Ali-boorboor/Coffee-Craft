import SectionHeader from "@/components/ui/section-header";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import React, { useEffect } from "react";

const FADE_UP_DATA_ANIMATE = "#not-found_lines";

const NotFoundPage = () => {
  const { containerRef } = useFadeUpAnimation();

  useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <main
      className="space-y-20 md:space-y-40 transform-gpu will-change-transform"
      ref={containerRef}
    >
      <PageBreadcrumb title="page not found" />

      <section className="px-4">
        <SectionHeader
          title="the page you are looking for"
          text="does not exist"
        />

        <img
          className="w-60 h-60 md:w-96 md:h-96 object-cover object-center m-auto"
          src="/image/not-found.png"
          alt="not-found-image"
        />
      </section>
    </main>
  );
};

export default NotFoundPage;
