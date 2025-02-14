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
        "flex gap-4 w-full flex-col items-center justify-center ",
        className
      )}
    >
      <div className="w-full flex relative items-center snap-x snap-mandatory gap-4 ">
        <div className="slider__gradient--prev absolute left-0 z-50 items-center hidden h-full w-10 md:flex">
          <button
            disabled={atStart}
            className="slider__arrow slider__arrow--prev left-0 absolute z-40 py-[14px] hidden md:flex items-center h-full w-full bg-black"
            onClick={() => slide("left")}
          >
            <div className="h-[120px] bg-red-500 rounded-lg md:flex items-center ">
              {" "}
              <Image
                src={"./rightArrow.svg"}
                width={24}
                height={24}
                alt="left arrow"
                className="rotate-180"
              />
            </div>
          </button>
        </div>

        <div
          ref={containerRef}
          className="flex snap-x snap-mandatory overflow-y-hidden overflow-x-auto no-scrollbar z-20 snap-start flex-1 scroll-smooth"
        >
          {children}
        </div>

        <div className="slider__gradient--next items-center absolute right-0 z-50 hidden h-full w-10 md:flex">
          <button
            disabled={atEnd}
            className="slider__arrow slider__arrow--next absolute right-0 z-40 hidden md:flex items-center justify-end  h-full w-full bg-black "
            onClick={() => slide("right")}
          >
            <div className="h-[120px] bg-red-500 rounded-lg md:flex items-center ">
              <Image
                src={"./rightArrow.svg"}
                width={24}
                height={24}
                alt="right arrow"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberedSlider;
