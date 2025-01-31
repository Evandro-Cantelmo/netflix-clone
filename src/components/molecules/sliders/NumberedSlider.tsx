"use client";

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
      <div className="w-full min-[1440px]:w-[1440px] flex relative items-center snap-x snap-mandatory gap-4 max-w-[1200px]">
        <button
          disabled={atStart}
          className="slider__arrow slider__arrow--prev absolute z-40 -translate-x-9 px- py-[14px] hidden md:flex"
          onClick={() => slide("left")}
        >
          left
        </button>

        <div className="slider__gradient--prev pointer-events-none absolute left-0 z-30 hidden h-full w-6 md:block" />

        <div
          ref={containerRef}
          className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar snap-start flex-1 scroll-smooth"
        >
          {children}
        </div>

        <button
          disabled={atEnd}
          className="slider__arrow slider__arrow--next absolute translate-x-9 right-0 z-40 hidden md:flex py-[14px] px-5"
          onClick={() => slide("right")}
        >
          right
        </button>
        <div className="slider__gradient--next pointer-events-none absolute right-0 z-30 hidden h-full w-6 md:block" />
      </div>
    </div>
  );
};

export default NumberedSlider;
