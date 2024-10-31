import React, { Fragment } from "react";
import Tabs from "@/components/common/Tabs";
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
import FilterModal from "./filter-modal";
import HistoryFilterModal from "./history-filter-modal";

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
    rewardReceived: "Trip to Malaysia",
  },
];

const RafflesTable = () => {
  return (
    <div className="flex flex-col gap-10 pb-72 md:gap-[70px]">
      <div className="flex flex-col gap-2.5 md:gap-6">
        <h2 className="text-xl font-bold text-secondary-500 md:text-[40px]">
          Raffle History
        </h2>
        <div>
          <Tabs
            className="!gap-2.5 md:!gap-4"
            labelsClassName="!self-start"
            labels={["Ended", "Winnings"]}
            panels={[
              <EndedRaffles filter={<HistoryFilterModal />} />,
              <WinningsRaffles filter={<HistoryFilterModal />} />,
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 md:gap-6">
        <h2 className="text-xl font-bold text-secondary-500 md:text-[40px]">
          My Raffles
        </h2>
        <div>
          <Tabs
            className="!gap-2.5 md:!gap-4"
            labelsClassName="!self-start"
            labels={["Active", "Past Participation", "Winnings"]}
            panels={[
              <ActiveRaffles filter={<FilterModal />} />,
              <PassedParticipationRaffles filter={<FilterModal />} />,
              <WinningsRaffles filter={<FilterModal />} />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const EndedRaffles = ({ filter }: { filter: React.ReactNode }) => (
  <div className="flex flex-col gap-6">
    <div className="flex justify-between gap-2.5 max-md:flex-col">
      <div className="flex gap-2">{filter}</div>
      <div className="flex gap-1.5">
        <Input
          className="border border-neutral-200 bg-white md:w-80"
          placeholder="Search by raffle name"
        />
        <Button>Search</Button>
      </div>
    </div>
    <Table>
      <TableHeader className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:font-semibold">
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/icons/compare-arrows.svg"
                alt="compare arrow"
                height={20}
                width={20}
              />
              Closed Date
            </div>
          </TableCell>
          <TableCell>Raffle Name</TableCell>
          <TableCell className="text-center">
            <div className="flex items-center justify-center gap-1.5">
              <Image
                src="/images/icons/compare-arrows.svg"
                alt="compare arrow"
                height={20}
                width={20}
              />
              Ticket Price
            </div>
          </TableCell>
          {/* <TableCell className="text-center">Number of Tickets</TableCell> */}
          <TableCell className="text-center">Ticket sold</TableCell>
          <TableCell className="w-40 text-center"></TableCell>
        </TableRow>
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
            {/* <TableCell className="text-center">
              {data?.numberOfTickets}
            </TableCell> */}
            <TableCell className="text-center">
              {data?.purchasedTicket?.toLocaleString()} Pcs
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

const ActiveRaffles = ({ filter }: { filter: React.ReactNode }) => (
  <Fragment>
    <div className="flex justify-between gap-2.5 max-md:flex-col">
      <div className="flex gap-2">{filter}</div>
      <div className="flex gap-1.5">
        <Input
          className="border border-neutral-200 bg-white md:w-80"
          placeholder="Search by raffle name"
        />
        <Button>Search</Button>
      </div>
    </div>
    <Table>
      <TableHeader className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:font-semibold">
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/icons/compare-arrows.svg"
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
                src="/images/icons/compare-arrows.svg"
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
          <TableCell className="text-center">
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/icons/compare-arrows.svg"
                alt="compare arrow"
                height={20}
                width={20}
              />
              Status
            </div>
          </TableCell>
        </TableRow>
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

const PassedParticipationRaffles = ({
  filter,
}: {
  filter: React.ReactNode;
}) => (
  <Fragment>
    <div className="flex justify-between gap-2.5 max-md:flex-col">
      <div className="flex gap-2">{filter}</div>
      <div className="flex gap-1.5">
        <Input
          className="border border-neutral-200 bg-white md:w-80"
          placeholder="Search by raffle name"
        />
        <Button>Search</Button>
      </div>
    </div>
    <Table>
      <TableHeader className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:font-semibold">
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/icons/compare-arrows.svg"
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
                src="/images/icons/compare-arrows.svg"
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
        </TableRow>
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
            <TableCell className="text-center">
              {data?.ticketPrice} FFT
            </TableCell>
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
const WinningsRaffles = ({ filter }: { filter: React.ReactNode }) => (
  <Fragment>
    <div className="flex justify-between gap-2.5 max-md:flex-col">
      <div className="flex gap-2">{filter}</div>
      <div className="flex gap-1.5">
        <Input
          className="border border-neutral-200 bg-white md:w-80"
          placeholder="Search by raffle name"
        />
        <Button>Search</Button>
      </div>
    </div>
    <Table>
      <TableHeader className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:font-semibold">
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/icons/compare-arrows.svg"
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
          <TableCell className="text-center">Ticket</TableCell>
        </TableRow>
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
              {data?.numberOfTickets}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Fragment>
);

export default RafflesTable;
