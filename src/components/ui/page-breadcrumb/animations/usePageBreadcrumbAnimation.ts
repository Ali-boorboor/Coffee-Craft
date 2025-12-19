import { useRef, useEffect } from "react";

const usePageBreadcrumbAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsap;
    let ScrollTrigger;

    const initAnimation = async () => {
      gsap = (await import("gsap")).default;
      ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        containerRef.current,
        { clipPath: "polygon(0% 0%,0% 0%,0% 100%,0% 100%)" },
        {
          clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
          ease: "power4.inOut",
          duration: 1,
        }
      );
    };

    initAnimation();
  }, []);

  return { containerRef };
};

export default usePageBreadcrumbAnimation;
