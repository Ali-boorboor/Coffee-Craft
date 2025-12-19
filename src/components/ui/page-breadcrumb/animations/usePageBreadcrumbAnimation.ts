import { useRef, useEffect } from "react";

const usePageBreadcrumbAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

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

    animate();
  }, []);

  return { containerRef };
};

export default usePageBreadcrumbAnimation;
