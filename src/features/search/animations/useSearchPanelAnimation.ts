import gsap from "gsap";
import { useSearchStore } from "@/features/search/stores/searchStores";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

type useSearchPanelAnimationProps = {
  itemsDataAnimate: string;
};

const useSearchPanelAnimation = ({
  itemsDataAnimate,
}: useSearchPanelAnimationProps) => {
  const { isSearchInputAvailable } = useSearchStore();

  const containerRef = useRef<HTMLDivElement>(null);
  const gsapTimelineRef = useRef<gsap.core.Timeline>(
    gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } })
  );

  useGSAP(() => {
    gsapTimelineRef.current
      .fromTo(
        containerRef.current,
        {
          clipPath: "polygon(0% 0%,0% 0%,0% 100%,0% 100%)",
          pointerEvents: "none",
        },
        {
          clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
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
    if (isSearchInputAvailable) {
      gsapTimelineRef.current.play();
    } else {
      gsapTimelineRef.current.reverse();
    }
  }, [isSearchInputAvailable]);

  return { containerRef };
};

export default useSearchPanelAnimation;
