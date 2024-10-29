import React, { HTMLAttributes, ReactNode } from "react";
import SlickSlider, { Settings } from "react-slick";
import Image from "next/image";
import clsx from "clsx";

interface ImagesSliderProps extends Partial<Settings> {
  children: ReactNode;
  arrowLeftClassName?: HTMLAttributes<HTMLDivElement>["className"];
  arrowRightClassName?: HTMLAttributes<HTMLDivElement>["className"];
}

interface ArrowProps extends HTMLAttributes<HTMLDivElement> {
  arrowClassName?: HTMLAttributes<HTMLDivElement>["className"];
}

const Slider = ({
  children,
  arrowRightClassName,
  arrowLeftClassName,
  ...rest
}: ImagesSliderProps) => {
  return (
    <div className="w-full">
      <div className="slider-container">
        <SlickSlider
          arrows
          centerMode
          infinite
          dots
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          centerPadding="140px"
          responsive={[
            {
              breakpoint: 786,
              settings: {
                centerPadding: "16px",
              },
            },
          ]}
          nextArrow={<SampleNextArrow arrowClassName={arrowRightClassName} />}
          prevArrow={<SamplePrevArrow arrowClassName={arrowLeftClassName} />}
          {...rest}
        >
          {children}
        </SlickSlider>
      </div>
    </div>
  );
};

function SampleNextArrow(props: ArrowProps) {
  const { onClick, arrowClassName } = props;
  return (
    <div
      className={clsx(
        "absolute right-2 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-primary-500 bg-white text-secondary-900 md:right-[132px]",
        arrowClassName && arrowClassName,
      )}
      onClick={onClick}
    >
      <Image
        width={16}
        height={16}
        alt="arrow right"
        src="/icons/arrow-right.svg"
        className="h-4 w-4"
      />
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { onClick, arrowClassName } = props;
  return (
    <div
      className={clsx(
        "absolute left-2.5 top-1/2 z-10 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-primary-500 bg-white text-secondary-900 md:left-[140px]",
        arrowClassName && arrowClassName,
      )}
      onClick={onClick}
    >
      <Image
        width={16}
        height={16}
        alt="arrow left"
        src="/icons/arrow-left.svg"
        className="h-4 w-4"
      />
    </div>
  );
}

export default Slider;
