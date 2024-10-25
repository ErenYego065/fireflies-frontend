"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "@mui/icons-material";
import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import Slider from "react-slick";
import PurchaseModal from "./PurchaseModal";


const Rewards = () => {
  const [ticketDetails] = useState({
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
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)


  const ticketSoldPercentage = useMemo(() => {
    return Math.round((ticketDetails?.totalSold / ticketDetails?.totalTickets) * 100)
  }, [ticketDetails])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const endTime = useMemo(() => {
    const fullDate = moment(ticketDetails?.endTime);
    return [
      { label: "Days", value: fullDate.diff(currentTime, 'days') },
      { label: "Hours", value: fullDate.diff(currentTime, 'hours') % 24 },
      { label: "Minutes", value: fullDate.diff(currentTime, 'minutes') % 60 },
      { label: "Seconds", value: fullDate.diff(currentTime, 'seconds') % 60 }
    ];
  }, [ticketDetails, currentTime]);

  return (
    <React.Fragment>
      <div className="flex flex-col gap-14 bg-global-explorer items-center">
        <div className="container px-5">
          <div className="flex items-center gap-2.5 mt-[76px] w-full mx-auto">
            <ChevronLeft sx={{ height: "64px", width: "64px", color: "#5A616C", cursor: "pointer" }} />
            <h1 className="font-[family-name:var(--font-sofia)] font-bold text-6xl text-secondary-700">
              Global Explorer
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="w-full">
              <Image
                src={ticketDetails?.imgUrls[selectedImageIndex]}
                alt="hero"
                className="w-full aspect-[4/3] object-cover rounded-xl"
                height={500}
                width={700}
              />
              {ticketDetails?.imgUrls?.length > 1 && <div className="px-6 py-4">
                <Slider arrows infinite={false} draggable={false} slidesToScroll={1} speed={500} slidesToShow={4}
                  afterChange={(currentSlide) => setSelectedImageIndex(currentSlide)}>
                  {ticketDetails?.imgUrls?.map((url, index) =>
                    <div>
                      <Image
                        style={{ border: selectedImageIndex === index ? "1px solid" : "" }}
                        onClick={() => setSelectedImageIndex(index)}
                        src={url}
                        key={"thumbnail " + index}
                        alt={"thumbnail " + index}
                        className="w-full aspect-video object-cover rounded-md pointer border-secondary-700"
                        height={90}
                        width={120}
                      />
                    </div>
                  )}
                </Slider>
              </div>}
            </div>
            <div className="h-fit p-5 border border-[#CCCBCB] bg-[#FAFAFA] rounded-lg relative max-md:mt-10">
              <button className="bg-[linear-gradient(98.32deg,_#505D65_20.43%,#000000_100%)] text-[#FAFAFA] h-10 px-2.5 rounded-lg absolute -top-16 max-md:left-0 md:right-0 text-sm font-semibold">Buy {ticketDetails?.minTicketForDiscount}+ tickets - {ticketDetails?.discountPercentage}% discount</button>
              <h2 className="text-lg font-semibold text-[#0A0A0B]">Description</h2>
              <p className="text-sm text-[#5A5555]">{ticketDetails?.description}</p>
              <div className="flex flex-col gap-3.5 py-3.5">
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/rewards/global-explorer/baseline-person.svg"
                    alt="person icon"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <p className="text-sm text-[#5A5555]">Max {ticketDetails?.max} per person</p>
                </div>
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/rewards/global-explorer/ticket-fill.svg"
                    alt="ticket icon"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <p className="text-sm text-[#5A5555]">{ticketDetails?.totalTickets} entries</p>
                </div>
              </div>
              <h2 className="text-lg font-semibold text-[#0A0A0B]">Ends In</h2>
              <div className="flex gap-2.5 mt-1">
                {endTime?.map((d, i) => <div key={i} className="flex flex-col items-center gap-0.5 justify-center h-20 w-20 rounded-lg bg-[linear-gradient(25.71deg,_rgba(217,217,217,0)_20.07%,#13AFB6_116.86%)]">
                  <p className="font-bold text-3xl text-[#5A5555]">{d?.value}</p>
                  <p className="text-sm text-[#5A5555]">{d?.label}</p>
                </div>)}
              </div>
              <p className="text-sm text-[#5A5555] mt-1">Closes on <span className="font-bold">{moment(ticketDetails?.endTime).format('MMM Do hA')}</span></p>
              <div className="py-3.5"><h2 className="text-lg font-semibold text-[#0A0A0B]">Tickets</h2>
                <div className="w-full h-4 bg-[#CCCBCB] my-1 rounded-full">
                  <div style={{ width: ticketSoldPercentage + "%" }} className="h-full rounded-full bg-primary-500" />
                </div>
                <div className="flex justify-between">
                  <p className="text-lg text-secondary-700">{ticketSoldPercentage}% Sold</p>
                  <p className="text-lg font-bold text-secondary-900">{ticketDetails?.totalSold}/{ticketDetails?.totalTickets}</p>
                </div>
              </div>
              <p className="text-[#5A5555]">Raffle will close early if all entries are sold prior to end date.</p>
              <div className="flex flex-row items-center gap-3.5 py-3.5">
                <p className="font-bold text-primary-500 text-3xl">{ticketDetails?.price?.toLocaleString()} FFT</p>
                <p className="text-2xl text-secondary-700">/ Ticket</p>
              </div>
              <Button size="lg" className="w-full bg-gradient-to-r-from-teal-to-blue" onClick={() => setIsModalOpen(true)} >Buy Now</Button>
            </div>
          </div>
        </div>
      </div >
      <PurchaseModal ticketDetails={ticketDetails} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </React.Fragment>
  )
}

export default Rewards