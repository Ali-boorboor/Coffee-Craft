import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

type useAboutAnimationsProps = { linesDataAnimate: string };

const useAboutAnimations = ({ linesDataAnimate }: useAboutAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const gsapTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: 99999,
          toggleActions: "play reverse play reverse",
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
        imageRef.current,
        {
          clipPath: "circle(0% at 50% 50%)",
          y: 40,
        },
        {
          clipPath: "circle(60% at 50% 50%)",
          y: 0,
        },
        "-=1"
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return { containerRef, imageRef };
};

export default useAboutAnimations;
