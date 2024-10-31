"use client";

import clsx from "clsx";
import React, { HTMLAttributes, useState } from "react";

interface TabsProps {
  labels: string[];
  panels: React.ReactNode[];
  labelsClassName?: HTMLAttributes<HTMLDivElement>["className"];
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const Tabs = (props: TabsProps) => {
  const { labels, panels, labelsClassName, className } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={clsx(
        "flex flex-col gap-2.5 md:flex-col md:gap-6",
        className && className,
      )}
    >
      <div
        className={clsx(
          "flex w-fit self-center rounded-[6px] border-2 border-neutral-200 bg-neutral-200",
          labelsClassName && labelsClassName,
        )}
      >
        {labels?.map((label, index) => (
          <div
            key={label + index}
            onClick={() => setActiveIndex(index)}
            className={clsx(
              "min-w-24 cursor-pointer rounded-[4px] px-2.5 py-1 shadow-sm",
              activeIndex === index
                ? "bg-white text-black"
                : "transparent text-neutral-700",
            )}
          >
            <p className="whitespace-nowrap text-center text-sm font-bold">
              {label}
            </p>
          </div>
        ))}
      </div>
      {panels?.[activeIndex]}
    </div>
  );
};

export default Tabs;
