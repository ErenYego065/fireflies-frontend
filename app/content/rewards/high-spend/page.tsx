"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useSession } from "next-auth/react"
import RewardCard from "@/components/content/rewards/high-spend/RewardCard"
import RewardProgressBar from "@/components/content/rewards/high-spend/reward-progressbar/RewardProgressBar"
import ProgressBar from "@/components/content/rewards/high-spend/ProgressStatus"
import RewardProgressBarResponsive from "@/components/content/rewards/high-spend/reward-progressbar/RewardProgressBarResponsive"
import React from "react"
import BackButton from "@/components/common/BackButton"

interface RewardData {
  title: string;
  total: number;
  amount: number;
  description: Array<{ icon: React.ReactNode, text: string }>;
  notificationtext: string,
  buttonText: string;
  buttonAction: () => void;
}

const claimedHistory = [
  {
    dateClaimed: "2024-09-10 14:00",
    rewardId: "RW1001",
    rewardName: "12-Month Travel Pass",
    milestone: "$5000",
    value: "$250.00"
  },
  {
    dateClaimed: "2024-08-25 09:00",
    rewardId: "RW1002",
    rewardName: "5-Star Hotel Stay",
    milestone: "$20000",
    value: "$150.00"
  },
  {
    dateClaimed: "2024-07-15 12:00",
    rewardId: "RW1003",
    rewardName: "Exclusive Art Tour",
    milestone: "$50000",
    value: "$350.00"
  },
  {
    dateClaimed: "2024-06-20 18:00",
    rewardId: "RW1004",
    rewardName: "Gourmet Dining Experience",
    milestone: "$5000",
    value: "$450.00"
  },
  {
    dateClaimed: "2024-05-30 8:00",
    rewardId: "RW1005",
    rewardName: "Private Vineyard Tour",
    milestone: "$20000",
    value: "$550.00"
  },
  {
    dateClaimed: "2024-04-22 17:00",
    rewardId: "RW1006",
    rewardName: "Annual Museum Membership",
    milestone: "$50000",
    value: "$200.00"
  },
  {
    dateClaimed: "2024-03-18 14:00",
    rewardId: "RW1007",
    rewardName: "Luxury Spa Weekend",
    milestone: "$5000",
    value: "$300.00"
  },
]
const rewardData: RewardData[] = [
  {
    title: "$5,000 Milestone",
    total: 5000,
    amount: 5000,
    description: [
      {
        icon: <Image
          src="/images/rewards/high-spend/res-icon.svg"
          alt="restranaut"
          width={16}
          height={16}
        />,
        text: "1 Eat for a Stay Voucher"
      },
      {
        icon: <Image
          src="/images/rewards/high-spend/villa-icon.svg"
          alt="restranaut"
          width={16}
          height={16}
        />,
        text: "Unlock 1-year access to thousands of exclusive villas and apartments "
      }
    ],
    notificationtext: "Congratulations! Claim your reward here.",
    buttonText: "Claim Reward",
    buttonAction: () => console.log("Claim $5,000 reward")
  },
  {
    title: "$20,000 Milestone",
    total: 20000,
    amount: 5000,
    description: [{
      icon: <Image
        src="/images/rewards/high-spend/beach-icon.svg"
        alt="restranaut"
        width={16}
        height={16}
      />,
      text: "1 Week All Inclusive Beach Holiday in a 4–5-star hotel for 2 people (Flight Tickets included)"
    }],
    notificationtext: "Your progress is going well. Let’s spend more to get more",
    buttonText: "Go to Fireflies.com",
    buttonAction: () => window.location.href = "https://fireflies.com"
  },
  {
    title: "$50,000 Milestone",
    total: 50000,
    amount: 5000,
    description: [{
      icon: <Image
        src="/images/rewards/high-spend/star-icon.svg"
        alt="restranaut"
        width={16}
        height={16}
      />,
      text: "Ready for a game-changer? Our largest reward of $50K is almost here. Stay connected for more details!"
    }],
    notificationtext: "Your progress is going well. Let’s spend more to get more",
    buttonText: "Go to Fireflies.com",
    buttonAction: () => window.location.href = "https://fireflies.com"
  }
];

const RewardHighSpend: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-reward-bg pt-8 ">
      <section className="flex flex-col justify-center self-center w-full  m-auto max-md:max-w-full px-3 md:px-10 2xl:px-[135px]">
        <BackButton />
        <h1 className="self-center mt-6 text-6xl font-bold tracking-normal text-center text-gray-600 max-md:max-w-full max-md:text-4xl">
          High Spend Traveler
        </h1>
        <p className="self-center mt-12 mb-4 font-[family-name:var(--font-nunito)] text-2xl text-[#6A727F] max-md:max-w-full">
          Track your spending and unlock exclusive rewards by using your $FFT tokens!
          Our High-Spend Traveler Rewards section helps you monitor your progress, discover your current rewards, and see what's next on your journey.
        </p>
      </section>
      <section className="flex flex-col gap-3  md:flex-row px-8 md:px-10 2xl:px-[135px]">
        <Image
          src="/images/rewards/high-spend/card1.svg"
          alt="card1"
          width={100}
          height={0}
          className="w-full md:hidden"
        />
        <Image
          src="/images/rewards/high-spend/card2.svg"
          alt="card2"
          width={100}
          height={0}
          className="w-full md:hidden"
        />
        <Image
          src="/images/rewards/high-spend/card3.svg"
          alt="card3"
          width={100}
          height={0}
          className="w-full md:hidden"
        />
        <Image
          src="/images/rewards/high-spend/card-desktop1.svg"
          alt="card3"
          width={100}
          height={0}
          className="hidden md:block grow"
        />
        <Image
          src="/images/rewards/high-spend/card-desktop2.svg"
          alt="card3"
          width={100}
          height={0}
          className="hidden md:block grow"
        />
        <Image
          src="/images/rewards/high-spend/card-desktop3.svg"
          alt="card3"
          width={100}
          height={0}
          className="hidden md:block grow"
        />
      </section>
      {/* {session && */}
      <section className="bg-streak-dashboard">
        <section className="high-spend-progress px-3 md:px-10 2xl:px-[135px]">
          <div className="high-spend-progress-bar">
            <section className="flex flex-wrap gap-3.5 justify-center items-start mt-12 text-lg text-center">
              <RewardProgressBar value={30000} />
              <RewardProgressBarResponsive value={3000} />
            </section>
            <div className="flex flex-col gap-3 self-start mt-12 text-base text-gray-500 max-md:max-w-full ">
              <div className="max-md:max-w-full ">*Available only for bookings and services payed with $FFT tokens</div>
              <div>*The process restarts every year</div>
            </div>
          </div>
        </section>
        <section className="mt-32 font-[family-name:var(--font-nunito)]  px-3 md:px-10 2xl:px-[135px]">
          <h1 className="my-6 font-bold text-[60px] leading-[55px] text-[#6A727F]">
            Your spending Tracker
          </h1>
          <p className="mb-7 font-[family-name:var(--font-nutino)] font-bold text-[28px] leading-8 text-[#5A616C] 2xl:mb-11">
            Spend more to get more, track your spending to get all the rewards.
          </p>
          <section className="  flex flex-col gap-[10px] md:flex-row ">
            {rewardData.map((reward, index) => (
              <RewardCard key={index} {...reward} />
            ))}
          </section>
          <ProgressBar amount={5000} />
        </section>
        <section className="pt-[50px] pb-[75px] flex flex-col gap-7 font-[family-name:var(--font-nunito)] px-3 md:px-10 2xl:px-[135px]">
          <span className="font-bold text-[32px] leading-[44px] text-[#6A727F]">History</span>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-[84px] h-[34px] px-[14px] py-[9px] rounded-xl border border-[#CCCBCB] bg-[#FAFAFA] flex flex-row gap-[6px] items-center">
              <Image
                src="/images/rewards/streak/filter.svg"
                alt="filter"
                width={16}
                height={16}
              />
              <span className="font-semibold text-sm">Filter</span>
            </div>
            <div className="flex flex-row gap-[6px]">
              <Input
                className="w-[306px] h-[34px] rounded-xl bg-white"
                placeholder="Search by booking ID or service name"
              />
              <Button className="w-[72px] h-[34px] rounded-xl bg-[#00ADB5]">Search</Button>
            </div>
          </div>
          <Table className="font-[family-name:var(--font-nunito)]">
            <TableCaption>A list of your claimed history</TableCaption>
            <TableHeader className="font-semibold text-sm border-b-2 border-b-[#00ADB5]">
              <TableRow>
                <TableHead className="flex flex-row gap-[6px] items-center text-[#007277]">
                  <Image
                    src="/images/rewards/streak/up-down-icon.svg"
                    alt="icon"
                    width={19}
                    height={19}
                  />
                  Date Claimed
                </TableHead>
                <TableHead className="text-[#007277]">Reward ID</TableHead>
                <TableHead className="text-[#007277]">Reward Name</TableHead>
                <TableHead className="text-[#007277]">Milestone</TableHead>
                <TableHead className="text-[#007277]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-semibold text-sm text-[#0A0A0B]">
              {claimedHistory.map((history, index) => (
                <TableRow key={index}>
                  <TableCell>{history.dateClaimed}</TableCell>
                  <TableCell>{history.rewardId}</TableCell>
                  <TableCell>{history.rewardName}</TableCell>
                  <TableCell>{history.milestone}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </section>
      </section>
      {/* } */}
    </div>
  )
}

export default RewardHighSpend