import Slider from "@/components/common/slider";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const winnerList = [
  {
    title: "Global Explorer Winner",
    name: "Aria Grande",
    date: "August 2024",
    img: "/images/rewards/raffles/aria-grande.png",
  },
  {
    title: "Dream Vacation Winner",
    name: "Abraham Ovic",
    date: "August 2024",
    img: "/images/rewards/raffles/abrahim-ovic.png",
  },
  {
    title: "Luxury Car Rental Winner",
    name: "Karen Sinclair",
    date: "August 2024",
    img: "/images/rewards/raffles/karen.png",
  },
];

const WinnersSlider = () => {
  return (
    <div className="mb-10">
      <Slider
        dots={false}
        centerMode={false}
        slidesToShow={3}
        arrowLeftClassName="!-left-10"
        arrowRightClassName="!-right-10"
        responsive={[
          {
            breakpoint: 786,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {winnerList.map((data, index) => (
          <div
            key={index}
            className={clsx(
              "h-full rounded-[20px] p-5",
              index % 3 === 0
                ? "bg-card-1"
                : index % 3 === 1
                  ? "bg-card-2"
                  : "bg-card-3",
            )}
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-7">
              <h2 className="text-center text-2xl font-bold text-white">
                {data?.title}
              </h2>
              <div className="relative flex flex-col items-center justify-center gap-1">
                <Image
                  className="absolute -left-[54px] -top-4 w-[178px] max-w-none"
                  src={"/images/rewards/raffles/celebration.svg"}
                  alt={"celebration"}
                  height={82}
                  width={178}
                />
                <Image
                  src={data?.img}
                  alt={data?.name}
                  height={78}
                  width={78}
                />
                <p className="text-center text-base font-semibold text-white">
                  {data?.name}
                </p>
              </div>
              <p className="text-center text-lg font-bold text-white">
                {data?.date}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WinnersSlider;
