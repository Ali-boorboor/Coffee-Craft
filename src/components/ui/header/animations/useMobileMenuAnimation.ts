import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

type useMobileMenuAnimationProps = {
  isMenuAvailable: boolean;
  itemsDataAnimate: string;
};

const useMobileMenuAnimation = ({
  isMenuAvailable,
  itemsDataAnimate,
}: useMobileMenuAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gsapTimelineRef = useRef<gsap.core.Timeline>(
    gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1.2 } })
  );

  useGSAP(() => {
    gsapTimelineRef.current
      .to(containerRef.current, {
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        pointerEvents: "auto",
      })
      .to(
        `[data-animate='${itemsDataAnimate}']`,
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        },
        "-=1"
      );
  }, []);

  useEffect(() => {
    if (isMenuAvailable) {
      gsapTimelineRef.current.play();
    } else {
      gsapTimelineRef.current.reverse();
    }
  }, [isMenuAvailable]);

  return { containerRef };
};

export default useMobileMenuAnimation;
