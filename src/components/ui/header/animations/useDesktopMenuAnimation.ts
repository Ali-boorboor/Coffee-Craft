import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type useDesktopMenuAnimationProps = { itemsDataAnimate: string };

const useDesktopMenuAnimation = ({
  itemsDataAnimate,
}: useDesktopMenuAnimationProps) => {
  useGSAP(() => {
    gsap.to(`[data-animate='${itemsDataAnimate}']`, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: "bounce.out",
    });
  }, []);
};

export default useDesktopMenuAnimation;
