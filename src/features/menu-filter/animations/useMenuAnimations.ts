import { useRef, useEffect } from "react";
import { MenuFilterTypes } from "@/features/menu-filter";

type UseMenuAnimationsProps = {
  itemsDataAnimate: string;
  menuFilterType: MenuFilterTypes;
};

const useMenuAnimations = ({
  itemsDataAnimate,
  menuFilterType,
}: UseMenuAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      if (!containerRef.current) return;

      const gsapModule = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsapModule.registerPlugin(ScrollTrigger);

      const timeline = gsapModule.timeline({
        scrollTrigger: { trigger: containerRef.current, start: "top center" },
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

    animate();
  }, [itemsDataAnimate, menuFilterType]);

  return { containerRef };
};

export default useMenuAnimations;
