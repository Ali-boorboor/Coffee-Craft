import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

type useSliderAnimationProps = {
  slidesDataAnimate: string;
  start?: string;
};

const useSliderAnimation = ({
  slidesDataAnimate,
  start = "top center",
}: useSliderAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const gsapTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
        },
        defaults: { ease: "power4.inOut", duration: 1 },
      });

      gsapTimeline.fromTo(
        `[data-animate='${slidesDataAnimate}']`,
        { clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)" },
        { clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)" }
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return { containerRef };
};

export default useSliderAnimation;
