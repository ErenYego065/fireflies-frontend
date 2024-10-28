"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "@mui/icons-material";
import React, { useState } from "react";
import moment from "moment";
import PurchaseModal from "@/components/content/rewards/globalExplorer/purchase-modal";
import ImagesSlider from "@/components/content/rewards/globalExplorer/images-slider";
import ProgressBar from "@/components/ui/progress-bar";
import CountDown from "@/components/content/rewards/globalExplorer/count-down";


export interface TicketDetails {
  imgUrls: string[];
  description: string;
  max: number;
  totalTickets: number;
  totalSold: number;
  endTime: moment.Moment; // Using moment's type for the endTime
  price: number;
  discountPercentage: number;
  minTicketForDiscount: number;
}

const Rewards = () => {
  const [ticketDetails] = useState<TicketDetails>({
    imgUrls: [
      "/images/rewards/global-explorer/hero-thumbnail.svg",
      "/images/blogs/blog-bg.jpg",
      "/images/rewards/streak/card-desktop1.svg",
      "/images/rewards/streak/card-desktop2.svg",
      "/images/rewards/streak/card-desktop3.svg"
    ],
    description: "Embark on a world tour with accommodations in top destinations",
    max: 100,
    totalTickets: 250,
    totalSold: 175,
    endTime: moment().add(5, 'days'),
    price: 70,
    discountPercentage: 10,
    minTicketForDiscount: 50,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)


  const ticketSoldPercentage = Math.round((ticketDetails?.totalSold / ticketDetails?.totalTickets) * 100)

  return (
    <React.Fragment>
      <div className="flex flex-col gap-14 bg-global-explorer items-center">
        <div className="container px-5">
          <div className="flex items-center gap-2.5 mt-8 md:mt-[76px] w-full mx-auto">
            <ChevronLeft sx={{ height: "64px", width: "64px", color: "#5A616C", cursor: "pointer" }} />
            <h1 className="font-[family-name:var(--font-sofia)] font-bold text-3xl md:text-6xl text-secondary-700">
              Global Explorer
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            <ImagesSlider ticketDetails={ticketDetails} />
            <div className="h-fit p-5 border border-[#CCCBCB] bg-[#FAFAFA] rounded-lg relative max-md:mt-10">
              <button className="bg-[linear-gradient(98.32deg,_#505D65_20.43%,#000000_100%)] text-[#FAFAFA] h-10 px-2.5 rounded-lg absolute -top-16 max-md:left-0 md:right-0 md:text-sm text-xs font-semibold">Buy {ticketDetails?.minTicketForDiscount}+ tickets - {ticketDetails?.discountPercentage}% discount</button>
              <h2 className="text-base md:text-lg font-semibold text-[#0A0A0B]">Description</h2>
              <p className="md:text-sm text-xs text-[#5A5555]">{ticketDetails?.description}</p>
              <div className="flex flex-col gap-3.5 py-3.5">
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/rewards/global-explorer/baseline-person.svg"
                    alt="person icon"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <p className="md:text-sm text-xs text-[#5A5555]">Max {ticketDetails?.max} per person</p>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/rewards/global-explorer/ticket-fill.svg"
                    alt="ticket icon"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <p className="md:text-sm text-xs text-[#5A5555]">{ticketDetails?.totalTickets} entries</p>
                </div>
              </div>
              <h2 className="text-base md:text-lg font-semibold text-[#0A0A0B]">Ends In</h2>
              <CountDown time={ticketDetails?.endTime} />
              <p className="md:text-sm text-xs text-[#5A5555] mt-1">Closes on <span className="font-bold">{moment(ticketDetails?.endTime).format('MMM Do hA')}</span></p>
              <div className="py-3.5"><h2 className="text-lg font-semibold text-[#0A0A0B]">Tickets</h2>
                <ProgressBar progress={ticketSoldPercentage} />
                <div className="flex justify-between">
                  <p className="text-base md:text-lg text-secondary-700">{ticketSoldPercentage}% Sold</p>
                  <p className="text-base md:text-lg font-bold text-secondary-900">{ticketDetails?.totalSold}/{ticketDetails?.totalTickets}</p>
                </div>
              </div>
              <p className="text-[#5A5555]">Raffle will close early if all entries are sold prior to end date.</p>
              <div className="flex flex-row items-center gap-3.5 py-3.5">
                <p className="font-bold text-primary-500 md:text-3xl text-lg">{ticketDetails?.price?.toLocaleString()} FFT</p>
                <p className="md:text-2xl text-lg text-secondary-700">/ Ticket</p>
              </div>
              <PurchaseModal ticketDetails={ticketDetails} />
            </div>
          </div>
        </div>
      </div >
    </React.Fragment>
  )
}

export default Rewards