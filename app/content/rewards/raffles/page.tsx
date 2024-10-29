"use client";

import Image from "next/image";
import { ChevronLeft } from "@mui/icons-material";
import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import Slider from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export interface TicketDetails {
  imgUrls: string[];
  description: string;
  max: number;
  totalTickets: number;
  totalSold: number;
  endTime: moment.Moment; // Using moment's type for the endTime
  price: number;
  discountPercentage: number;
  minTicketForDiscount: number;
}

const Rewards = () => {
  const [ticketDetails] = useState<TicketDetails>({
    imgUrls: [
      "/images/rewards/global-explorer/hero-thumbnail.svg",
      "/images/blogs/blog-bg.jpg",
      "/images/rewards/streak/card-desktop1.svg",
      "/images/rewards/streak/card-desktop2.svg",
      "/images/rewards/streak/card-desktop3.svg",
    ],
    description:
      "Embark on a world tour with accommodations in top destinations",
    max: 100,
    totalTickets: 250,
    totalSold: 175,
    endTime: moment().add(5, "days"),
    price: 70,
    discountPercentage: 10,
    minTicketForDiscount: 50,
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  const ticketSoldPercentage = useMemo(() => {
    return Math.round(
      (ticketDetails?.totalSold / ticketDetails?.totalTickets) * 100,
    );
  }, [ticketDetails]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const endTime = useMemo(() => {
    const fullDate = moment(ticketDetails?.endTime);
    return [
      { label: "Days", value: fullDate.diff(currentTime, "days") },
      { label: "Hours", value: fullDate.diff(currentTime, "hours") % 24 },
      { label: "Minutes", value: fullDate.diff(currentTime, "minutes") % 60 },
      { label: "Seconds", value: fullDate.diff(currentTime, "seconds") % 60 },
    ];
  }, [ticketDetails, currentTime]);

  return (
    <React.Fragment>
      <div className="flex flex-col items-center gap-14 bg-global-explorer">
        <div className="container px-5 pt-3 md:pt-8">
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-fit cursor-pointer items-center text-secondary-900">
              <ChevronLeft className="h-3.5 w-3.5 md:h-5 md:w-5" />
              <p className="text-xs font-semibold md:text-sm md:font-bold">
                Back
              </p>
            </div>
            <h1 className="text-center font-[family-name:var(--font-sofia)] text-3xl font-bold text-secondary-700 md:text-6xl">
              Adventure Raffles!
            </h1>
          </div>
        </div>
        <Slider>
          {[1, 2, 3, 4, 5].map((d) => (
            <div
              key={d}
              className="w-full bg-gradient-to-r-from-blue-to-teal pl-8 md:pl-24"
            >
              <div className="grid w-full grid-cols-[42%_58%] items-center justify-between md:grid-cols-2">
                <div className="flex max-w-96 flex-col gap-1 py-2.5 md:gap-4">
                  <h2 className="text-xl font-bold text-white md:text-6xl">
                    Win Big with Fireflies
                  </h2>
                  <p className="text-sm text-white md:text-3xl">
                    Enter the Raffle Now!
                  </p>
                  <Button className="w-fit">How It Work</Button>
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
          ))}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Rewards;
