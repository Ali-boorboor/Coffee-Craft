import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useFadeUpAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const gsapTimeline = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        defaults: { ease: "power4.inOut", duration: 1.4 },
      });

      gsapTimeline.fromTo(
        containerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1 }
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return { containerRef };
};
export default useFadeUpAnimation;
