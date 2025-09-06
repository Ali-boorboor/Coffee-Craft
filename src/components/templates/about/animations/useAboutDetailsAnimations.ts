import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type useAboutDetailsAnimationsProps = { linesDataAnimate: string };

const useAboutDetailsAnimations = ({
  linesDataAnimate,
}: useAboutDetailsAnimationsProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const splitText = new SplitText(`[data-animate='${linesDataAnimate}']`, {
      type: "lines",
    });

    const timeLine = gsap.timeline({
      defaults: { direction: 1, ease: "power4.inOut" },
    });

    timeLine.fromTo(
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

    timeLine.fromTo(
      imageRef.current,
      {
        rotate: 180,
        xPercent: 100,
        opacity: 0,
      },
      {
        rotate: 0,
        xPercent: 0,
        opacity: 1,
        duration: 1.2,
      },
      "-=1"
    );
  }, []);

  return { imageRef };
};

export default useAboutDetailsAnimations;
