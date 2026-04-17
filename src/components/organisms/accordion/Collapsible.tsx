"use client";
import React, { useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface CollapsibleItem {
  question: string;
  answer: React.ReactNode;
}

interface CollapsibleProps {
  items: CollapsibleItem[];
}

function Collapsible({ items }: CollapsibleProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleItem = (index: number): void => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const contentEl = contentRefs.current[index];

        return (
          <div className="w-full group" key={index}>
            <div
              className={twMerge(
                "title text-2xl text-white flex justify-between gap-2 bg-[#2d2d2d] md:hover:bg-[#414141] transition-all duration-500 ease-in-out cursor-pointer p-6"
              )}
              onClick={() => toggleItem(index)}
            >
              <p>{item.question}</p>
              <AiOutlinePlus
                className={twMerge(
                  "text-3xl  size-full max-w-6 max-h-6 transition-transform duration-300 text-white",
                  isActive ? "rotate-45" : "rotate-180"
                )}
              />
            </div>

            <div
              style={{
                maxHeight:
                  isActive && contentEl ? `${contentEl.scrollHeight}px` : "0px",
              }}
              className="content bg-[#2d2d2d] transition-all duration-500 ease-in-out overflow-hidden"
            >
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="relative !text-2xl text-neutral-100 py-6 mx-6 before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-primary-green-800 before:to-[rgba(37,37,37,0)]"
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Collapsible;
