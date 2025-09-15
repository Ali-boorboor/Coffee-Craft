import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useProductInfosAniamtion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coffeeBeanImageRef = useRef<HTMLImageElement>(null);
  const productImageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: { ease: "power4.inOut", duration: 1 },
      });

      timeline.fromTo(
        productImageRef.current,
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        {
          clipPath: "circle(100% at 50% 50%)",
        }
      );

      timeline.fromTo(
        coffeeBeanImageRef.current,
        {
          clipPath: "circle(0% at 100% 0%)",
          y: -20,
        },
        {
          clipPath: "circle(100% at 50% 50%)",
          y: 0,
        },
        "-=1"
      );
    },
    { scope: containerRef, dependencies: [] }
  );

  return { containerRef, coffeeBeanImageRef, productImageRef };
};

export default useProductInfosAniamtion;
