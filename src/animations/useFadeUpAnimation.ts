import { useRef, useEffect } from "react";

const useFadeUpAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      if (!containerRef.current) return;

      const timeline = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        defaults: { ease: "power4.inOut", duration: 1.4 },
      });

      timeline.fromTo(
        containerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 }
      );
    };

    animate();
  }, []);

  return { containerRef };
};

export default useFadeUpAnimation;
