import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

type usePanelAnimationProps = {
  itemsDataAnimate: string;
  isPanelAvailable: boolean;
  fromClipPath?: string;
  toClipPath?: string;
};

const usePanelAnimation = ({
  itemsDataAnimate,
  isPanelAvailable,
  fromClipPath = "polygon(0% 0%,0% 0%,0% 100%,0% 100%)",
  toClipPath = "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
}: usePanelAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gsapTimelineRef = useRef<gsap.core.Timeline>(
    gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } })
  );

  useGSAP(() => {
    gsapTimelineRef.current
      .fromTo(
        containerRef.current,
        {
          clipPath: fromClipPath,
          pointerEvents: "none",
        },
        {
          clipPath: toClipPath,
          pointerEvents: "auto",
        }
      )
      .fromTo(
        `[data-animate='${itemsDataAnimate}']`,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        },
        "-=1"
      );
  }, []);

  useEffect(() => {
    if (isPanelAvailable) {
      gsapTimelineRef.current.play();
    } else {
      gsapTimelineRef.current.reverse();
    }
  }, [isPanelAvailable]);

  return { containerRef };
};

export default usePanelAnimation;
