import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { MenuFilterTypes } from "@/features/menu-filter";

type useMenuAnimationsProps = {
  itemsDataAnimate: string;
  menuFilterType: MenuFilterTypes;
};

const useMenuAnimations = ({
  itemsDataAnimate,
  menuFilterType,
}: useMenuAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const gsapTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
      },
      defaults: { ease: "power4.inOut", duration: 1 },
    });

    gsapTimeline.fromTo(
      `[data-animate='${itemsDataAnimate}']`,
      {
        clipPath: "circle(0% at 50% 50%)",
      },
      {
        clipPath: "circle(100% at 50% 50%)",
        stagger: {
          each: 0.1,
          from: "random",
        },
      }
    );
  }, [menuFilterType]);

  return { containerRef };
};

export default useMenuAnimations;
