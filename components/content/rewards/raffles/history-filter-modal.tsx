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

const HistoryFilterModal = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [raffle, setRaffle] = useState("Global Explorer");

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
          <RadioGroup className="gap-5" defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">By Raffle</Label>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {["Global Explorer", "Dream Vacation", "Lux-Car Rental"].map(
                (item) => (
                  <div
                    className={clsx(
                      "flex h-7 cursor-pointer items-center justify-center rounded-[10px] px-5 text-sm font-semibold",
                      item === raffle
                        ? "bg-primary-500 text-white"
                        : "bg-gradient-fade text-primary-500",
                    )}
                    onClick={() => setRaffle(item)}
                    key={item}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">By Date Range</Label>
            </div>

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
          </RadioGroup>

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

export default HistoryFilterModal;
