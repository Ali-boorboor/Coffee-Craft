import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type useFadeUpAnimationProps = { fadeUpDataAnimate: string };

const useFadeUpAnimation = ({ fadeUpDataAnimate }: useFadeUpAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const gsapTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power4.inOut", duration: 1 },
      });

      gsapTimeline.fromTo(
        `[data-animate='${fadeUpDataAnimate}']`,
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

      if (imageRef.current) {
        gsapTimeline.fromTo(
          imageRef.current,
          {
            clipPath: "circle(0% at 50% 50%)",
            y: 40,
          },
          {
            clipPath: "circle(100% at 50% 50%)",
            y: 0,
          },
          "-=1"
        );
      }
    },
    { scope: containerRef, dependencies: [] }
  );

  return { containerRef, imageRef };
};

export default useFadeUpAnimation;
