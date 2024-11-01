"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import clsx from "clsx";
import { FilterType } from "./raffles-tables";

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  filter: FilterType;
}

const HistoryFilterModal = ({ filter, setFilter }: Props) => {
  const [tempFilter, setTempFilter] = useState<FilterType>({
    raffle: "Global Explorer",
    date: {
      from: new Date(2024, 0, 20),
      to: addDays(new Date(2024, 0, 20), 20),
    },
    type: "raffle",
  });

  useEffect(() => {
    setTempFilter(filter);
  }, [filter]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"sm"}
          className="border border-neutral-200 bg-white text-black"
        >
          <Image
            src="/images/icons/filter.svg"
            alt="filter"
            height={16}
            width={16}
            className="mr-1.5"
          />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#FAFAFA] p-5 sm:max-w-[494px]">
        <div className="flex w-full flex-col gap-7">
          <h2 className="text-base font-semibold text-[#0A0A0B] md:text-lg">
            Filter
          </h2>
          <RadioGroup
            className="gap-5"
            defaultValue={filter?.type}
            onValueChange={(e) => setTempFilter({ ...tempFilter, type: e })}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="raffle" id="r1" />
              <Label htmlFor="r1">By Raffle</Label>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {["Global Explorer", "Dream Vacation", "Lux-Car Rental"].map(
                (item) => (
                  <div
                    className={clsx(
                      "flex h-7 cursor-pointer items-center justify-center rounded-[10px] px-5 text-sm font-semibold",
                      item === tempFilter?.raffle
                        ? "bg-primary-500 text-white"
                        : "bg-gradient-fade text-primary-500",
                    )}
                    onClick={() =>
                      setTempFilter({ ...tempFilter, raffle: item })
                    }
                    key={item}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="date" id="r2" />
              <Label htmlFor="r2">By Date Range</Label>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-fit justify-start text-left font-bold",
                    !tempFilter?.date && "text-muted-foreground",
                  )}
                >
                  Date: (
                  {tempFilter?.date?.from ? (
                    tempFilter?.date.to ? (
                      <>
                        {format(tempFilter?.date.from, "LL dd, y")} -{" "}
                        {format(tempFilter?.date.to, "LL dd, y")}
                      </>
                    ) : (
                      format(tempFilter?.date.from, "LL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                  )
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  defaultMonth={tempFilter.date?.from}
                  selected={tempFilter.date}
                  onSelect={(d) =>
                    setTempFilter({ ...tempFilter, date: d as DateRange })
                  }
                  numberOfMonths={1}
                />
              </PopoverContent>
            </Popover>
          </RadioGroup>

          <DialogClose asChild>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  setFilter({
                    raffle: "Global Explorer",
                    date: {
                      from: new Date(2024, 0, 20),
                      to: addDays(new Date(2024, 0, 20), 20),
                    },
                    type: "",
                  });
                }}
                variant={"outline"}
              >
                Cancel
              </Button>
              <Button onClick={() => setFilter(tempFilter)}>Apply</Button>
            </div>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryFilterModal;