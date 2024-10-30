"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FilterModal = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
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
                  !date && "text-muted-foreground",
                )}
              >
                Date: (
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LL dd, y")} -{" "}
                      {format(date.to, "LL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
                )
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <DialogClose asChild>
            <div className="flex justify-end gap-2">
              <Button variant={"outline"}>Cancel</Button>
              <Button>Apply</Button>
            </div>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
