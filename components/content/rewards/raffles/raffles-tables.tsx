import React, { Fragment, useState } from "react";
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
import HistoryFilterModal from "./history-filter-modal";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

const raffleData = [
  {
    openingDate: "2024-09-10 14:00",
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
    openingDate: "2024-08-25 09:00",
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
    openingDate: "2024-07-15 20:00",
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

export interface FilterType {
  raffle?: string;
  date?: DateRange;
  type?: string;
}

const defaultFilterValue: FilterType = {
  raffle: "Global Explorer",
  date: {
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  },
  type: "",
};
const RafflesTable = () => {
  const [endedFilter, setEndedFilter] = useState(defaultFilterValue);
  const [winningFilter, setWinningFilter] = useState(defaultFilterValue);
  const [myPastFilter, setMyPastFilter] = useState(defaultFilterValue);
  const [myActiveFilter, setMyActiveFilter] = useState(defaultFilterValue);
  const [myWinningFilter, setMyWinningFilter] = useState(defaultFilterValue);
  return (
    <div className="mx-36 flex flex-col gap-10 pb-40 max-md:mx-8 md:gap-[70px]">
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
              <EndedRaffles
                filterComponent={
                  <HistoryFilterModal
                    filter={endedFilter}
                    setFilter={setEndedFilter}
                  />
                }
                filter={endedFilter}
              />,
              <WinningsRaffles
                filter={winningFilter}
                filterComponent={
                  <HistoryFilterModal
                    filter={winningFilter}
                    setFilter={setWinningFilter}
                  />
                }
              />,
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
            labels={["Active", "Closed", "Winnings"]}
            panels={[
              <ActiveRaffles
                filter={myActiveFilter}
                filterComponent={
                  <HistoryFilterModal
                    filter={myActiveFilter}
                    setFilter={setMyActiveFilter}
                  />
                }
              />,
              <ClosedRaffles
                filter={myPastFilter}
                filterComponent={
                  <HistoryFilterModal
                    filter={myPastFilter}
                    setFilter={setMyPastFilter}
                  />
                }
              />,
              <MyWinningRaffles
                filter={myWinningFilter}
                filterComponent={
                  <HistoryFilterModal
                    filter={myWinningFilter}
                    setFilter={setMyWinningFilter}
                  />
                }
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};
interface PanelProps {
  filterComponent: React.ReactNode;
  filter: FilterType;
}
const EndedRaffles = ({ filterComponent, filter }: PanelProps) => {
  const [search, setSearch] = useState("");

  function filterRaffleData() {
    const { type, date, raffle } = filter;

    if (!type) return raffleData;

    return raffleData.filter((entry) => {
      if (type === "date" && date) {
        const fromDate = new Date(date?.from as Date);
        const toDate = new Date(date?.to as Date);
        const raffleDate = new Date(entry.closedDate);

        return raffleDate >= fromDate && raffleDate <= toDate;
      } else if (type === "raffle" && raffle) {
        return entry.raffleName === raffle;
      }
      return false;
    });
  }

  const data = filterRaffleData()?.filter((e) =>
    e.raffleName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between gap-2.5 max-md:flex-col">
        <div className="flex gap-2">{filterComponent}</div>
        <div className="flex gap-1.5">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
              <div className="flex items-center gap-1.5">Closed Date</div>
            </TableCell>
            <TableCell>Raffle Name</TableCell>
            <TableCell className="text-center">
              <div className="flex items-center justify-center gap-1.5">
                Ticket Price
              </div>
            </TableCell>
            <TableCell className="text-center">Ticket sold</TableCell>
            <TableCell className="w-40 text-center"></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((data, index) => (
            <TableRow
              key={index}
              className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:text-black"
            >
              <TableCell className="font-semibold">
                {data?.closedDate}
              </TableCell>
              <TableCell className="font-semibold">
                {data?.raffleName}
              </TableCell>
              <TableCell className="text-center">{data?.ticketPrice}</TableCell>
              <TableCell className="text-center">
                {data?.purchasedTicket?.toLocaleString()} Pcs
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const ActiveRaffles = ({ filter, filterComponent }: PanelProps) => {
  const [search, setSearch] = useState("");

  function filterRaffleData() {
    const { type, date, raffle } = filter;

    if (!type) return raffleData;

    return raffleData.filter((entry) => {
      if (type === "date" && date) {
        const fromDate = new Date(date?.from as Date);
        const toDate = new Date(date?.to as Date);
        const raffleDate = new Date(entry.openingDate);

        return raffleDate >= fromDate && raffleDate <= toDate;
      } else if (type === "raffle" && raffle) {
        return entry.raffleName === raffle;
      }
      return false;
    });
  }

  const data = filterRaffleData()?.filter((e) =>
    e.raffleName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Fragment>
      <div className="flex justify-between gap-2.5 max-md:flex-col">
        <div className="flex gap-2">{filterComponent}</div>
        <div className="flex gap-1.5">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
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
              <div className="flex items-center gap-1.5">Opening Date</div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-1.5">Closing Date</div>
            </TableCell>
            <TableCell>Raffle Name</TableCell>
            <TableCell className="text-center">Ticket Price</TableCell>
            <TableCell className="text-center">No. of Tickets</TableCell>
            <TableCell className="text-center">Value</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow
              key={index}
              className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:text-black"
            >
              <TableCell className="font-semibold">
                {item?.openingDate}
              </TableCell>
              <TableCell className="font-semibold">
                {item?.closedDate}
              </TableCell>
              <TableCell className="font-semibold">
                {item?.raffleName}
              </TableCell>
              <TableCell className="text-center">{item?.ticketPrice}</TableCell>
              <TableCell className="text-center">
                {item?.numberOfTickets}
              </TableCell>
              <TableCell className="text-center">
                {item?.purchasedTicket?.toLocaleString()} FFT
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

const ClosedRaffles = ({ filterComponent, filter }: PanelProps) => {
  const [search, setSearch] = useState("");

  function filterRaffleData() {
    const { type, date, raffle } = filter;

    if (!type) return raffleData;

    return raffleData.filter((entry) => {
      if (type === "date" && date) {
        const fromDate = new Date(date?.from as Date);
        const toDate = new Date(date?.to as Date);
        const raffleDate = new Date(entry.openingDate);

        return raffleDate >= fromDate && raffleDate <= toDate;
      } else if (type === "raffle" && raffle) {
        return entry.raffleName === raffle;
      }
      return false;
    });
  }

  const data = filterRaffleData()?.filter((e) =>
    e.raffleName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Fragment>
      <div className="flex justify-between gap-2.5 max-md:flex-col">
        <div className="flex gap-2">{filterComponent}</div>
        <div className="flex gap-1.5">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
              <div className="flex items-center gap-1.5">Closed Date</div>
            </TableCell>
            <TableCell>Raffle Name</TableCell>
            <TableCell className="text-center">Ticket Price</TableCell>
            <TableCell className="text-center">No. of Tickets</TableCell>
            <TableCell className="text-center">Value</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow
              key={index}
              className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:text-black"
            >
              <TableCell className="font-semibold">
                {item?.openingDate}
              </TableCell>
              <TableCell className="font-semibold">
                {item?.closedDate}
              </TableCell>
              <TableCell className="font-semibold">
                {item?.raffleName}
              </TableCell>
              <TableCell className="text-center">
                {item?.ticketPrice} FFT
              </TableCell>
              <TableCell className="text-center">
                {item?.numberOfTickets}
              </TableCell>
              <TableCell className="text-center">
                {item?.purchasedTicket?.toLocaleString()} FFT
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};
const MyWinningRaffles = ({ filterComponent, filter }: PanelProps) => {
  const [search, setSearch] = useState("");

  function filterRaffleData() {
    const { type, date, raffle } = filter;

    if (!type) return raffleData;

    return raffleData.filter((entry) => {
      if (type === "date" && date) {
        const fromDate = new Date(date?.from as Date);
        const toDate = new Date(date?.to as Date);
        const raffleDate = new Date(entry.openingDate);

        return raffleDate >= fromDate && raffleDate <= toDate;
      } else if (type === "raffle" && raffle) {
        return entry.raffleName === raffle;
      }
      return false;
    });
  }

  const data = filterRaffleData()?.filter((e) =>
    e.raffleName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Fragment>
      <div className="flex justify-between gap-2.5 max-md:flex-col">
        <div className="flex gap-2">{filterComponent}</div>
        <div className="flex gap-1.5">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
              <div className="flex items-center gap-1.5">Closed Date</div>
            </TableCell>
            <TableCell>Raffle Name</TableCell>
            <TableCell className="text-center">Ticket Price</TableCell>
            <TableCell className="text-center">No. of Tickets</TableCell>
            <TableCell className="text-center">Value</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow
              key={index}
              className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:text-black"
            >
              <TableCell className="font-semibold">
                {item?.openingDate}
              </TableCell>
              <TableCell className="font-semibold">
                {item?.closedDate}
              </TableCell>
              <TableCell className="font-semibold">
                {item?.raffleName}
              </TableCell>
              <TableCell className="text-center">
                {item?.ticketPrice} FFT
              </TableCell>
              <TableCell className="text-center">
                {item?.numberOfTickets}
              </TableCell>
              <TableCell className="text-center">
                {item?.purchasedTicket?.toLocaleString()} FFT
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

const WinningsRaffles = ({ filterComponent, filter }: PanelProps) => {
  const [search, setSearch] = useState("");

  function filterRaffleData() {
    const { type, date, raffle } = filter;

    if (!type) return raffleData;

    return raffleData.filter((entry) => {
      if (type === "date" && date) {
        const fromDate = new Date(date?.from as Date);
        const toDate = new Date(date?.to as Date);
        const raffleDate = new Date(entry.closedDate);

        return raffleDate >= fromDate && raffleDate <= toDate;
      } else if (type === "raffle" && raffle) {
        return entry.raffleName === raffle;
      }
      return false;
    });
  }

  const data = filterRaffleData()?.filter((e) =>
    e.raffleName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Fragment>
      <div className="flex justify-between gap-2.5 max-md:flex-col">
        <div className="flex gap-2">{filterComponent}</div>
        <div className="flex gap-1.5">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
              <div className="flex items-center gap-1.5">Closed Date</div>
            </TableCell>
            <TableCell>Winner</TableCell>
            <TableCell>Raffle Name</TableCell>
            <TableCell>Reward Received</TableCell>
            <TableCell className="text-center">Ticket</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow
              key={index}
              className="[&>td]:text-nowrap [&>td]:text-sm [&>td]:text-black"
            >
              <TableCell className="font-semibold">
                {item?.closedDate}
              </TableCell>
              <TableCell className="font-semibold">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/blogs/avatar.jpg"
                    alt="avatar"
                    height={35}
                    width={35}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  {item?.winner}
                </div>
              </TableCell>
              <TableCell className="font-semibold">
                {item?.raffleName}
              </TableCell>
              <TableCell>{item?.rewardReceived}</TableCell>
              <TableCell className="text-center">
                {item?.numberOfTickets}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default RafflesTable;
