"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import clsx from "clsx";
import { SliderNextArrow, SliderPrevArrow }
  from "@/components/common/slick-slider"

const ThumbnailCard = () => {
  return (
    <div className="w-full rounded-[10px] bg-gradient-to-r-from-blue-to-teal pl-8 shadow-sm md:pl-24">
      <div className="grid w-full grid-cols-[42%_58%] items-center justify-between md:grid-cols-2">
        <div className="flex max-w-96 flex-col gap-1 py-2.5 md:gap-4">
          <h2 className="text-xl font-bold text-white md:text-6xl">
            Win Big with Fireflies
          </h2>
          <p className="text-sm text-white md:text-3xl">
            Enter the Raffle Now!
          </p>
          <HowItWorksFlow />
        </div>
        <Image
          src="/images/rewards/raffles/Online Payment.svg"
          alt="thumbnail"
          height={440}
          width={640}
          className="max-h-full object-contain"
        />
      </div>
    </div>
  );
};

const HowItWorksFlow = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const raffleFlowData = [
    {
      title: "Select Your Raffle",
      description:
        "Choose from a variety of raffles such as the Global Explorer, Dream Vacation, or Luxury Car Rental Experience.",
      img: "/images/rewards/raffles/how-it-works-1.svg",
    },
    {
      title: "Purchase Entry Tickets with $FFT Tokens",
      description:
        "Use your $FFT tokens to purchase raffle entries. The more you enter, the greater your chances to win.",
      img: "/images/rewards/raffles/how-it-works-2.svg",
    },
    {
      title: "Await The Draw",
      description:
        "Once the raffle closes, a draw will be conducted to randomly select the winners.",
      img: "/images/rewards/raffles/how-it-works-3.svg",
    },
    {
      title: "Win Amazing Prizes",
      description:
        "If your entry is drawn, you'll win incredible prizes like all-inclusive vacations, 5-star hotel stays, or luxury car experiences.",
      img: "/images/rewards/raffles/how-it-works-4.svg",
    },
    {
      title: "Celebrate and Share",
      description:
        "Winners will be announced on our platform. Share your excitement and prepare for your next adventure!",
      img: "/images/rewards/raffles/how-it-works-5.svg",
    },
  ];

  const isLast = selectedIndex + 1 === raffleFlowData?.length;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit">How It Works</Button>
      </DialogTrigger>
      <DialogContent className="bg-[#FAFAFA] sm:max-w-[425px]">
        <div className="flex min-h-[428px] w-full flex-col gap-7">
          <h2 className="text-center text-base font-semibold text-[#0A0A0B] md:text-lg">
            How It Works
          </h2>
          <div className="relative">
            <div className="flex flex-col justify-center gap-7">
              <Image
                alt="thumbnail"
                height={180}
                width={160}
                src={raffleFlowData[selectedIndex]?.img}
                className="h-[180px] w-auto"
              />
              <div>
                <h3 className="text-center text-lg text-primary-500">
                  {raffleFlowData[selectedIndex]?.title}
                </h3>
                <p className="mt-1.5 text-center text-sm text-neutral-700">
                  {raffleFlowData[selectedIndex]?.description}
                </p>
              </div>
            </div>
            {!isLast && (
              <SliderNextArrow
                onClick={() => setSelectedIndex(selectedIndex + 1)}
                arrowClassName="!right-0 !top-20"
              />
            )}
            {selectedIndex !== 0 && (
              <SliderPrevArrow
                onClick={() => setSelectedIndex(selectedIndex - 1)}
                arrowClassName="!left-0 !top-20"
              />
            )}
          </div>
          {isLast ? (
            <DialogClose asChild>
              <Button className="mt-auto" variant={"outline"}>
                I Understand
              </Button>
            </DialogClose>
          ) : (
            <Button
              className="mt-auto"
              onClick={() => setSelectedIndex(selectedIndex + 1)}
              variant={"outline"}
            >
              Next
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThumbnailCard;