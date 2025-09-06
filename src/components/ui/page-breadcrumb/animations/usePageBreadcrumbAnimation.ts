import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const usePageBreadcrumbAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        clipPath: "polygon(0% 0%,0% 0%,0% 100%,0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        ease: "power4.inOut",
        duration: 1,
      }
    );
  }, []);

  return { containerRef };
};

export default usePageBreadcrumbAnimation;
