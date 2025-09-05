import gsap from "gsap";
import Button from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import MenuCard from "@/components/ui/menu-card/MenuCard";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

const DATA_ANIMATE = "test";

const menuItems = [
  {
    id: 1,
    type: "hot",
    title: "black coffee",
    image: "/image/black-coffee.png",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: 2,
    type: "hot",
    title: "cappuccino",
    image: "/image/cappuccino.png",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: 3,
    type: "cold",
    title: "banana milk",
    image: "/image/cappuccino.png",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: 4,
    type: "cold",
    title: "milk",
    image: "/image/cappuccino.png",
    description:
      "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
];

type MenuFilterType = "all" | "hot" | "cold";

const Menu = () => {
  const [menuFilterType, setMenuFilterType] = useState<MenuFilterType>("all");

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const gsapTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: 99999,
      },
      defaults: { ease: "power4.inOut", duration: 1 },
    });

    gsapTimeline.fromTo(
      `[data-animate='${DATA_ANIMATE}']`,
      {
        scale: 0,
        clipPath: "circle(0% at 50% 50%)",
      },
      {
        scale: 1,
        clipPath: "circle(100% at 50% 50%)",
        stagger: {
          each: 0.1,
          from: "random",
        },
      }
    );
  }, [menuFilterType]);

  return (
    <section
      className="py-10 md:py-20 px-4 md:px-0 text-white relative paper-torn-piece-bottom paper-torn-piece-top coffee-background"
      ref={containerRef}
    >
      <div className="container m-auto flex flex-col gap-4">
        <SectionHeader title="Menu & Pricing" text="Competitive Pricing" />

        <div className="mt-16 flex justify-center items-center gap-4">
          <Button onClick={() => setMenuFilterType("all")}>all</Button>
          <Button onClick={() => setMenuFilterType("hot")}>hot drinks</Button>
          <Button onClick={() => setMenuFilterType("cold")}>cold drinks</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {menuFilterType === "all" &&
            menuItems
              .slice(0, 10)
              .map((item) => (
                <MenuCard dataAnimate={DATA_ANIMATE} key={item.id} {...item} />
              ))}
          {menuFilterType !== "all" &&
            menuItems
              .filter((item) => item.type === menuFilterType)
              .slice(0, 10)
              .map((item) => (
                <MenuCard dataAnimate={DATA_ANIMATE} key={item.id} {...item} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
