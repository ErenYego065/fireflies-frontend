import ProgressBar from "@/components/ui/progress.bar";
import moment from "moment";
import Image from "next/image";
import React from "react";

const Card = ({ data }: any) => {
  const ticketSoldPercentage = Math.round(
    (data?.totalSold / data?.totalTickets) * 100,
  );

  return (
    <div className="relative h-fit rounded-lg border border-[#CCCBCB] bg-[#FAFAFA] p-5 max-md:mt-10">
      <button className="absolute -top-16 h-10 rounded-lg bg-[linear-gradient(98.32deg,_#505D65_20.43%,#000000_100%)] px-2.5 text-xs font-semibold text-[#FAFAFA] max-md:left-0 md:right-0 md:text-sm">
        Buy {data?.minTicketForDiscount}+ tickets - {data?.discountPercentage}%
        discount
      </button>
      <h2 className="text-base font-semibold text-[#0A0A0B] md:text-lg">
        Description
      </h2>
      <p className="text-xs text-[#5A5555] md:text-sm">{data?.description}</p>
      <div className="flex flex-col gap-3.5 py-3.5">
        <div className="flex items-center gap-1">
          <Image
            src="/images/rewards/global-explorer/baseline-person.svg"
            alt="person icon"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p className="text-xs text-[#5A5555] md:text-sm">
            Max {data?.max} per person
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/images/rewards/global-explorer/ticket-fill.svg"
            alt="ticket icon"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <p className="text-xs text-[#5A5555] md:text-sm">
            {data?.totalTickets} entries
          </p>
        </div>
      </div>
      <h2 className="text-base font-semibold text-[#0A0A0B] md:text-lg">
        Ends In
      </h2>
      {/* <CountDown time={data?.endTime} /> */}
      <p className="mt-1 text-xs text-[#5A5555] md:text-sm">
        Closes on{" "}
        <span className="font-bold">
          {moment(data?.endTime).format("MMM Do hA")}
        </span>
      </p>
      <div className="py-3.5">
        <h2 className="text-lg font-semibold text-[#0A0A0B]">Tickets</h2>
        <ProgressBar progress={ticketSoldPercentage} />
        <div className="flex justify-between">
          <p className="text-base text-secondary-700 md:text-lg">
            {ticketSoldPercentage}% Sold
          </p>
          <p className="text-base font-bold text-secondary-900 md:text-lg">
            {data?.totalSold}/{data?.totalTickets}
          </p>
        </div>
      </div>
      <p className="text-[#5A5555]">
        Raffle will close early if all entries are sold prior to end date.
      </p>
      <div className="flex flex-row items-center gap-3.5 py-3.5">
        <p className="text-lg font-bold text-primary-500 md:text-3xl">
          {data?.price?.toLocaleString()} FFT
        </p>
        <p className="text-lg text-secondary-700 md:text-2xl">/ Ticket</p>
      </div>
    </div>
  );
};

export default Card;
