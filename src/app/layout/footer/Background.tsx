"use client";

import { useEffect } from "react";
import Shape1 from "./shapes/Shape-1";
import Shape2 from "./shapes/Shape-2";
import Shape3 from "./shapes/Shape-3";
import Shape4 from "./shapes/Shape-4";
import Sunset from "./shapes/Sunset";

const Background = () => {
  const parallax = (containers: NodeListOf<HTMLElement>) => {
    containers.forEach((container) => {
      const items = container.querySelectorAll("[data-item]");

      const elementPosition = container.offsetTop - window.innerHeight;
      const distanceFromTop = -elementPosition + window.scrollY;
      const containerHeight = container.offsetHeight;

      items.forEach((item) => {
        const prlxItem = item as HTMLElement;
        const SPEED: number = Number(prlxItem.dataset.speed);

        let Y = Math.round(((-distanceFromTop + containerHeight) / 10) * SPEED);

        if (distanceFromTop >= 0) {
          prlxItem.style.transform = `translateY(${Y}px)`;
        }
        console.log(container.offsetTop);
      });
    });
  };

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".prlx-container"
    ) as NodeListOf<HTMLElement>;

    window.addEventListener("scroll", () => parallax(elements));
  }, [parallax]);

  return (
    <div className="relative h-[100vw] overflow-hidden md:h-[90vw] xl:h-[80vw] 2xl:h-[60rem]">
      <div
        data-item
        data-speed="3"
        className="w-full transition duration-[10ms] ease-linear absolute z-10 bottom-[67vw] md:bottom-[42vw] xl:bottom-[36vw] 2xl:bottom-[24rem]"
      >
        <Sunset className="w-full h-auto" />
      </div>
      <div
        data-item
        data-speed="2.6"
        className="w-full transition duration-[10ms] ease-linear absolute z-20 bottom-[32vw] md:bottom-[10vw] xl:bottom-[6vw] 2xl:bottom-[-7rem]"
      >
        <Shape4 className="w-full h-auto" />
      </div>
      <div
        data-item
        data-speed="1.8"
        className="w-full transition duration-[10ms] ease-linear absolute z-30 bottom-[44vw] md:bottom-[20vw] xl:bottom-[13vw] 2xl:bottom-[6rem]"
      >
        <Shape3 className="w-full h-auto" />
      </div>
      <div
        data-item
        data-speed="1.2"
        className="w-full transition duration-[10ms] ease-linear absolute z-40 bottom-[19vw] md:bottom-[-2vw] xl:bottom-[-8vw] 2xl:bottom-[-16rem]"
      >
        <Shape2 className="w-full h-auto" />
      </div>
      <Shape1 className="w-[170%] h-auto absolute z-50 bottom-0 -left-[2rem] md:-rotate-6 md:w-[140%] md:-bottom-[8rem] xl:-bottom-[20vw] 2xl:-bottom-[24rem]" />
    </div>
  );
};

export default Background;
