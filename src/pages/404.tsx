import React from "react";
import Head from "next/head";
import Image from "next/image";
import PageBreadcrumb from "@/components/ui/page-breadcrumb";
import useFadeUpAnimation from "@/animations/useFadeUpAnimation";
import SectionHeader from "@/components/ui/section-header/SectionHeader";

const NotFoundPage = () => {
  const { containerRef } = useFadeUpAnimation();

  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>

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

          <Image
            className="w-60 h-60 md:w-96 md:h-96 object-cover object-center m-auto"
            src="/image/not-found.png"
            alt="not found image"
            width={1000}
            height={400}
          />
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
