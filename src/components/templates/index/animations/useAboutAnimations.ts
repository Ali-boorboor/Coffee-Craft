import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

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
          toggleActions: "play reverse play reverse",
        },
        defaults: { ease: "power4.inOut", duration: 1 },
      });

      const splitText = new SplitText(`[data-animate='${linesDataAnimate}']`, {
        type: "lines",
      });

      gsapTimeline.fromTo(
        splitText.lines,
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
