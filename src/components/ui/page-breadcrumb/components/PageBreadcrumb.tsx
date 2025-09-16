import usePageBreadcrumbAnimation from "@/components/ui/page-breadcrumb/animations/usePageBreadcrumbAnimation";
import Link from "next/link";
import React from "react";

type PageBreadcrumbProps = { title: string; href?: string };

const PageBreadcrumb = ({ title, href }: PageBreadcrumbProps) => {
  const { containerRef } = usePageBreadcrumbAnimation();

  return (
    <section
      className="coffee-background py-10 md:py-20 text-white relative paper-torn-piece-bottom"
      ref={containerRef}
    >
      <div className="container m-auto flex flex-col justify-center items-center gap-2 md:gap-4 text-base md:text-lg font-normal capitalize">
        <h3 className="text-3xl md:text-5xl font-bold uppercase">{title}</h3>

        <div className="space-x-2">
          <Link
            className="relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:-bottom-0.5 after:left-0 after:right-0 after:m-auto after:transition-all after:duration-300 after:ease-linear hover:after:w-full"
            href="/"
          >
            home
          </Link>

          {href && (
            <>
              <span>/</span>

              <Link
                className="relative after:absolute after:w-0 after:h-0.5 after:bg-primary after:-bottom-0.5 after:left-0 after:right-0 after:m-auto after:transition-all after:duration-300 after:ease-linear hover:after:w-full"
                href={href}
              >
                {title}
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBreadcrumb;
