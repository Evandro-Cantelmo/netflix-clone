"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

type CardSliderProps = {
  className?: string;
  children: React.ReactNode;
};

const NumberedSlider: React.FC<CardSliderProps> = ({ className, children }) => {
  const scrollAmount = 180;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollState = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setAtStart(container.scrollLeft === 0);
      setAtEnd(container.scrollLeft >= maxScrollLeft - 1);
      console.log(maxScrollLeft);
    };

    container.scrollLeft = 0;
    container.addEventListener("scroll", updateScrollState);
    console.log(updateScrollState());
    updateScrollState();

    return () => {
      container.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const slide = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const multiplier = window.innerWidth < 1300 ? 3 : 4;
    const adjustedScrollAmount = scrollAmount * multiplier;

    if (direction === "left") {
      containerRef.current.scrollLeft -= adjustedScrollAmount;
    } else if (direction === "right") {
      containerRef.current.scrollLeft += adjustedScrollAmount;
    }
  };

  return (
    <div
      className={twMerge(
        "flex gap-4 w-full flex-col items-center justify-center",
        className
      )}
    >
      <div className="w-full flex relative items-center snap-x snap-mandatory gap-4 max-w-[1200px]">
        <div className="slider__gradient--prev absolute left-0 z-30 items-center hidden h-full w-6 md:flex">

          <button
            disabled={atStart}
            className="slider__arrow slider__arrow--prev absolute  -translate-x-9 rounded-lg py-[14px] hidden md:flex items-center h-[120px] bg-red-500"
            onClick={() => slide("left")}
          >
            <Image
              src={"./rightArrow.svg"}
              width={24}
              height={24}
              alt="left arrow"
              className="rotate-180"
            />
          </button>
        </div>

        <div
          ref={containerRef}
          className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar z-20 snap-start flex-1 scroll-smooth"
        >
          {children}
        </div>

        <div className="slider__gradient--next items-center right-0 z-50 hidden h-full w-6 md:flex">
          <button
            disabled={atEnd}
            className="slider__arrow slider__arrow--next absolute right-0 z-40 hidden md:flex items-center rounded-lg h-[120px] bg-red-500"
            onClick={() => slide("right")}
          >
            <Image
              src={"./rightArrow.svg"}
              width={24}
              height={24}
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberedSlider;
