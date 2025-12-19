import { MenuFilterTypes } from "@/features/menu-filter";
import { useEffect, useRef } from "react";

type useMenuAnimationsProps = {
  itemsDataAnimate: string;
  menuFilterType: MenuFilterTypes;
};

const useMenuAnimations = ({
  itemsDataAnimate,
  menuFilterType,
}: useMenuAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
        defaults: { ease: "power4.inOut", duration: 1 },
      });

      timeline.fromTo(
        `[data-animate='${itemsDataAnimate}']`,
        { clipPath: "circle(0% at 50% 50%)" },
        {
          clipPath: "circle(100% at 50% 50%)",
          stagger: { each: 0.1, from: "random" },
        }
      );
    };

    init();
  }, [itemsDataAnimate, menuFilterType]);

  return { containerRef };
};

export default useMenuAnimations;
