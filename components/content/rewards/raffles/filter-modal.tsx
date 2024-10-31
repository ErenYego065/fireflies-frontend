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
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FilterType } from "./raffles-tables";

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  filter: FilterType;
}

const FilterModal = ({ filter, setFilter }: Props) => {
  const [tempFilter, setTempFilter] = useState<FilterType>({
    date: {
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    },
    type: "date",
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
      <DialogContent className="bg-[#FAFAFA] sm:max-w-[425px]">
        <div className="flex w-full flex-col gap-7">
          <h2 className="text-base font-semibold text-[#0A0A0B] md:text-lg">
            Filter by date range
          </h2>
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
                defaultMonth={tempFilter?.date?.from}
                selected={tempFilter?.date}
                onSelect={(d) =>
                  setTempFilter({
                    ...tempFilter,
                    date: d as DateRange,
                    type: "date",
                  })
                }
                numberOfMonths={1}
              />
            </PopoverContent>
          </Popover>
          <DialogClose asChild>
            <div className="flex justify-end gap-2">
              <Button
                onClick={() => {
                  setFilter({
                    date: {
                      from: new Date(2022, 0, 20),
                      to: addDays(new Date(2022, 0, 20), 20),
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

export default FilterModal;
