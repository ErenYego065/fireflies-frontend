import React, { Fragment } from "react";
import Tabs from "@/components/common/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const raffleData = [
  {
    date: "2024-09-10 14:00",
    closedDate: "2024-09-10 14:00",
    raffleName: "Global Explorer",
    ticketPrice: 75,
    numberOfTickets: 24,
    purchasedTicket: 1800,
    status: "Active",
    winner: "Alice Johnson",
    rewardReceived: "Trip to Malaysia",
  },
  {
    date: "2024-08-25 09:00",
    closedDate: "2024-08-25 09:00",
    raffleName: "Dream Vacation",
    ticketPrice: 12,
    numberOfTickets: 8,
    purchasedTicket: 96,
    status: "Active",
    winner: "Bob Smith",
    rewardReceived: "Trip to Bali",
  },
  {
    date: "2024-07-15 20:00",
    closedDate: "2024-07-15 20:00",
    raffleName: "Luxury Car Rental Experience",
    ticketPrice: 50,
    numberOfTickets: 10,
    purchasedTicket: 500,
    status: "Active",
    winner: "Carol Williams",
    rewardReceived: "Free mercedes maybach rent",
  },
];

const RafflesTable = () => {
  return (
    <div className="flex flex-col gap-10 pb-72 md:gap-16">
      <div className="flex flex-col gap-2.5 md:gap-6">
        <h2 className="text-xl font-bold text-secondary-500 md:text-[40px]">
          Raffle History
        </h2>
        <div>
          <div className="mb-2.5 md:mb-4">
            <Tabs
              labelsClassName="!self-start"
              labels={["Ended", "Warnings"]}
              panels={[<EndedRaffles />, <WinningsRaffles />]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 md:gap-6">
        <h2 className="text-xl font-bold text-secondary-500 md:text-[40px]">
          My Raffles
        </h2>
        <div>
          <div className="mb-2.5 md:mb-4">
            <Tabs
              labelsClassName="!self-start"
              labels={["Active", "Past Participation", "Winnings"]}
              panels={[
                <ActiveRaffles />,
                <PassedParticipationRaffles />,
                <WinningsRaffles />,
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const EndedRaffles = () => (
  <Fragment>
    <div className="flex justify-between gap-2.5 max-md:flex-col">
      <div className="flex gap-2">
        <Button
          size={"sm"}
          className="border border-neutral-200 bg-white text-black"
        >
          <Image
            src="/icons/filter.svg"
            alt="filter"
            height={16}
            width={16}
            className="mr-1.5"
          />
          Filter
        </Button>
        <Button
          size={"sm"}
          className="border border-neutral-200 bg-white text-black"
        >
          Action
        </Button>
      </div>
      <div className="flex gap-1.5">
        <Input className="md:w-80" placeholder="Search by raffle name" />
        <Button>Search</Button>
      </div>
    </div>
    <Table>
      <TableHeader className="border-b-2 border-primary-500 [&>td]:text-nowrap [&>td]:text-sm [&>td]:font-semibold [&>td]:text-primary-900">
        <TableCell>
          <div className="flex items-center gap-1.5">
            <Image
              src="/icons/compare-arrows.svg"
              alt="compare arrow"
              height={20}
              width={20}
            />
            Closed Date
          </div>
        </TableCell>
        <TableCell>Raffle Name</TableCell>
        <TableCell className="text-center">Ticket Price</TableCell>
        <TableCell className="text-center">Number of Tickets</TableCell>
        <TableCell className="text-center">Purchased Ticket</TableCell>
        <TableCell className="text-center">Status</TableCell>
      </TableHeader>
      <TableBody>
        {raffleData?.map((data, index) => (
          <TableRow
            key={index}
            className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:text-black"
          >
            <TableCell className="font-semibold">{data?.closedDate}</TableCell>
            <TableCell className="font-semibold">{data?.raffleName}</TableCell>
            <TableCell className="text-center">{data?.ticketPrice}</TableCell>
            <TableCell className="text-center">
              {data?.numberOfTickets}
            </TableCell>
            <TableCell className="text-center">
              {data?.purchasedTicket?.toLocaleString()} FFT
            </TableCell>
            <TableCell className="text-center">{data?.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Fragment>
);

const ActiveRaffles = () => (
  <Fragment>
    <div className="flex justify-between gap-2.5 max-md:flex-col">
      <div className="flex gap-2">
        <Button
          size={"sm"}
          className="border border-neutral-200 bg-white text-black"
        >
          <Image
            src="/icons/filter.svg"
            alt="filter"
            height={16}
            width={16}
            className="mr-1.5"
          />
          Filter
        </Button>
        <Button
          size={"sm"}
          className="border border-neutral-200 bg-white text-black"
        >
          Action
        </Button>
      </div>
      <div className="flex gap-1.5">
        <Input className="md:w-80" placeholder="Search by raffle name" />
        <Button>Search</Button>
      </div>
    </div>
    <Table>
      <TableHeader className="border-b-2 border-primary-500 [&>td]:text-nowrap [&>td]:text-sm [&>td]:font-semibold [&>td]:text-primary-900">
        <TableCell>
          <div className="flex items-center gap-1.5">
            <Image
              src="/icons/compare-arrows.svg"
              alt="compare arrow"
              height={20}
              width={20}
            />
            Date
          </div>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-1.5">
            <Image
              src="/icons/compare-arrows.svg"
              alt="compare arrow"
              height={20}
              width={20}
            />
            Closed Date
          </div>
        </TableCell>
        <TableCell>Raffle Name</TableCell>
        <TableCell className="text-center">Ticket Price</TableCell>
        <TableCell className="text-center">Number of Tickets</TableCell>
        <TableCell className="text-center">Purchased Ticket</TableCell>
        <TableCell className="text-center">Status</TableCell>
      </TableHeader>
      <TableBody>
        {raffleData?.map((data, index) => (
          <TableRow
            key={index}
            className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:text-black"
          >
            <TableCell className="font-semibold">{data?.date}</TableCell>
            <TableCell className="font-semibold">{data?.closedDate}</TableCell>
            <TableCell className="font-semibold">{data?.raffleName}</TableCell>
            <TableCell className="text-center">{data?.ticketPrice}</TableCell>
            <TableCell className="text-center">
              {data?.numberOfTickets}
            </TableCell>
            <TableCell className="text-center">
              {data?.purchasedTicket?.toLocaleString()} FFT
            </TableCell>
            <TableCell className="text-center">{data?.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Fragment>
);

const PassedParticipationRaffles = () => (
  <Fragment>
    <div className="flex justify-between gap-2.5 max-md:flex-col">
      <div className="flex gap-2">
        <Button
          size={"sm"}
          className="border border-neutral-200 bg-white text-black"
        >
          <Image
            src="/icons/filter.svg"
            alt="filter"
            height={16}
            width={16}
            className="mr-1.5"
          />
          Filter
        </Button>
        <Button
          size={"sm"}
          className="border border-neutral-200 bg-white text-black"
        >
          Action
        </Button>
      </div>
      <div className="flex gap-1.5">
        <Input className="md:w-80" placeholder="Search by raffle name" />
        <Button>Search</Button>
      </div>
    </div>
    <Table>
      <TableHeader className="border-b-2 border-primary-500 [&>td]:text-nowrap [&>td]:text-sm [&>td]:font-semibold [&>td]:text-primary-900">
        <TableCell>
          <div className="flex items-center gap-1.5">
            <Image
              src="/icons/compare-arrows.svg"
              alt="compare arrow"
              height={20}
              width={20}
            />
            Date
          </div>
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-1.5">
            <Image
              src="/icons/compare-arrows.svg"
              alt="compare arrow"
              height={20}
              width={20}
            />
            Closed Date
          </div>
        </TableCell>
        <TableCell>Raffle Name</TableCell>
        <TableCell className="text-center">Ticket Price</TableCell>
        <TableCell className="text-center">Number of Tickets</TableCell>
        <TableCell className="text-center">Purchased Ticket</TableCell>
        <TableCell className="text-center">Status</TableCell>
      </TableHeader>
      <TableBody>
        {raffleData?.map((data, index) => (
          <TableRow
            key={index}
            className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:text-black"
          >
            <TableCell className="font-semibold">{data?.date}</TableCell>
            <TableCell className="font-semibold">{data?.closedDate}</TableCell>
            <TableCell className="font-semibold">{data?.raffleName}</TableCell>
            <TableCell className="text-center">{data?.ticketPrice}</TableCell>
            <TableCell className="text-center">
              {data?.numberOfTickets}
            </TableCell>
            <TableCell className="text-center">
              {data?.purchasedTicket?.toLocaleString()} FFT
            </TableCell>
            <TableCell className="text-center">{data?.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Fragment>
);
const WinningsRaffles = () => (
  <Fragment>
    <div className="flex justify-between gap-2.5 max-md:flex-col">
      <div className="flex gap-2">
        <Button
          size={"sm"}
          className="border border-neutral-200 bg-white text-black"
        >
          <Image
            src="/icons/filter.svg"
            alt="filter"
            height={16}
            width={16}
            className="mr-1.5"
          />
          Filter
        </Button>
      </div>
      <div className="flex gap-1.5">
        <Input className="md:w-80" placeholder="Search by raffle name" />
        <Button>Search</Button>
      </div>
    </div>
    <Table>
      <TableHeader className="border-b-2 border-primary-500 [&>td]:text-nowrap [&>td]:text-sm [&>td]:font-semibold [&>td]:text-primary-900">
        <TableCell>
          <div className="flex items-center gap-1.5">
            <Image
              src="/icons/compare-arrows.svg"
              alt="compare arrow"
              height={20}
              width={20}
            />
            Closed Date
          </div>
        </TableCell>
        <TableCell>Winner</TableCell>
        <TableCell>Raffle Name</TableCell>
        <TableCell>Reward Received</TableCell>
        <TableCell className="text-center">Purchased Ticket</TableCell>
      </TableHeader>
      <TableBody>
        {raffleData?.map((data, index) => (
          <TableRow
            key={index}
            className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:text-black"
          >
            <TableCell className="font-semibold">{data?.closedDate}</TableCell>
            <TableCell className="font-semibold">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/blogs/avatar.jpg"
                  alt="avatar"
                  height={35}
                  width={35}
                  className="h-9 w-9 rounded-full object-cover"
                />
                {data?.winner}
              </div>
            </TableCell>
            <TableCell className="font-semibold">{data?.raffleName}</TableCell>
            <TableCell>{data?.rewardReceived}</TableCell>
            <TableCell className="text-center">
              {data?.purchasedTicket?.toLocaleString()} FFT
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Fragment>
);

export default RafflesTable;
