import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/ui/progress.bar";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Card = ({ data }: any) => {
  const ticketSoldPercentage = Math.round(
    (data?.totalSold / data?.totalTickets) * 100,
  );

  const [currentTime, setCurrentTime] = useState(new Date());

  const getCountdown = () => {
    const fullDate = moment(data?.endTime);
    return [
      { label: "Days", value: fullDate.diff(currentTime, "days") },
      { label: "Hours", value: fullDate.diff(currentTime, "hours") % 24 },
      { label: "Minutes", value: fullDate.diff(currentTime, "minutes") % 60 },
      { label: "Seconds", value: fullDate.diff(currentTime, "seconds") % 60 },
    ];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        backdropFilter: "blur(16px)",
        borderImageSource:
          "linear-gradient(130.82deg, #E9EBED 0%, #A9AEB7 100%)",
        border: "2px solid #CCCBCB",
      }}
      className="relative flex flex-col rounded-[20px] bg-[linear-gradient(0deg,rgba(0,173,181,0.175)_-29.68%,rgba(255,255,255,0.35)_100%)] p-6"
    >
      <div className="w-full">
        <Image
          src={data?.imgUrl}
          alt={data?.title}
          width={320}
          height={250}
          className="aspect-auto w-full"
        />
        <div className="mt-5 pb-2.5">
          <h4 className="text-2xl font-bold text-secondary-700">
            {data?.title}
          </h4>
          <p className="mt-2.5 text-base text-secondary-700 md:text-lg">
            {data?.description}
          </p>
        </div>
      </div>
      <div className="border-secondary-400 mt-auto w-full border-t pt-5">
        <div className="flex w-full items-center justify-between">
          <div>
            <h2 className="text-lg text-secondary-700">Tickets</h2>
            <h2 className="text-lg font-bold text-secondary-900">
              {data?.totalTickets}
            </h2>
          </div>
          <div>
            <h2 className="text-right text-lg text-secondary-700">Available</h2>
            <h2 className="text-right text-lg font-bold text-secondary-900">
              {data?.totalTickets - data?.totalSold}
            </h2>
          </div>
        </div>
        <Button className="my-2.5 w-full">Buy Ticket</Button>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p className="text-lg text-secondary-700">Ends In</p>
            <p className="text-lg font-bold text-secondary-900">
              {getCountdown()?.[1]?.value}H : {getCountdown()?.[2]?.value}M :{" "}
              {getCountdown()?.[3]?.value}S
            </p>
          </div>
          <ProgressBar progress={ticketSoldPercentage} />
          <div className="flex justify-between">
            <p className="text-lg text-secondary-700">
              {ticketSoldPercentage}% Sold
            </p>
            <p className="text-lg font-bold text-secondary-900">
              {data?.totalSold}/{data?.totalTickets}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
