"use client";

import Image from "next/image";
import { ChevronLeft } from "@mui/icons-material";
import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import Slider from "@/components/common/slick-slider";
import { Button } from "@/components/ui/button";
import Tabs from "@/components/common/Tabs";
import Live from "@/components/content/rewards/raffles/live";
import Banner from "@/components/content/rewards/raffles/banner";
import RafflesTables from "@/components/content/rewards/raffles/raffles-tables";
import Upcoming from "@/components/content/rewards/raffles/upcoming";
import WinnersSlider from "@/components/content/rewards/raffles/winners-slider";
import BackButton from "@/components/common/backbutton2";
import ThumbnailCard from "@/components/content/rewards/raffles/thumbnail-card";

export interface TicketDetails {
  title: string;
  imgUrl: string;
  description: string;
  max: number;
  totalTickets: number;
  totalSold: number;
  endTime: moment.Moment;
  price: number;
  discountPercentage: number;
  minTicketForDiscount: number;
}

const Rewards = () => {
  const [ticketDetails] = useState<TicketDetails[]>([
    {
      imgUrl: "/images/rewards/raffles/card-1.svg",
      title: "Global Explorer",
      description:
        "Embark on a world tour with accommodations in top destinations.",
      max: 100,
      totalTickets: 250,
      totalSold: 175,
      endTime: moment().add(5, "days"),
      price: 70,
      discountPercentage: 10,
      minTicketForDiscount: 50,
    },
    {
      imgUrl: "/images/rewards/raffles/card-2.svg",
      title: "Dream Vacation",
      description: "Enjoy an all-inclusive stay at luxurious resorts.",
      max: 100,
      totalTickets: 200,
      totalSold: 75,
      endTime: moment().add(5, "days"),
      price: 70,
      discountPercentage: 10,
      minTicketForDiscount: 50,
    },
    {
      imgUrl: "/images/rewards/raffles/card-3.svg",
      title: "Luxury Car Rental Experience",
      description: "Drive a high-end car for a specified period.",
      max: 100,
      totalTickets: 320,
      totalSold: 175,
      endTime: moment().add(5, "days"),
      price: 38,
      discountPercentage: 10,
      minTicketForDiscount: 50,
    },
  ]);

  return (
    <React.Fragment>
      <div className="bg-reward-bg">
        <div className="flex flex-col items-center gap-14 pb-20 max-md:pb-8">
          <div className="container px-5 pt-3 md:pt-8">
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-fit cursor-pointer items-center text-secondary-900">
                <BackButton />
              </div>
              <h1 className="text-center font-[family-name:var(--font-sofia)] text-3xl font-bold text-secondary-700 md:text-6xl">
                Adventure Raffles!
              </h1>
            </div>
          </div>
          {/* <div className="mx-36 max-md:mx-8"> */}
          <Slider>
            {[1, 2, 3].map((d) => (
              <ThumbnailCard key={d} />
            ))}
          </Slider>
          {/* </div> */}
          <div className="container px-5">
            <Tabs
              panels={[<Live data={ticketDetails} />, <Upcoming />]}
              labels={["Live (3)", "Upcoming (0)"]}
            />
          </div>
        </div>
        <Banner />
      </div>
      <div className=" mx-auto px-5 bg-streak-dashboard">
        <WinnersSlider />
        <RafflesTables />
      </div>
    </React.Fragment>
  );
};

export default Rewards;