import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

type useSliderAnimationProps = {
  linesDataAnimate: string;
  slidesDataAnimate: string;
  start?: string;
};

const useSliderAnimation = ({
  linesDataAnimate,
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
        `[data-animate='${linesDataAnimate}']`,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );

      gsapTimeline.fromTo(
        `[data-animate='${slidesDataAnimate}']`,
        { clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)" },
        { clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)" },
        "-=1"
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return { containerRef };
};

export default useSliderAnimation;
