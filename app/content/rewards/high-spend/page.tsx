"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";
import RewardCard from "@/components/content/rewards/high-spend/reward-card";
import RewardProgressBar from "@/components/content/rewards/high-spend/reward-progressbar/RewardProgressBar";
import ProgressBar from "@/components/content/rewards/high-spend/progress-status";
import RewardProgressBarResponsive from "@/components/content/rewards/high-spend/reward-progressbar/RewardProgressBarResponsive";
import React from "react";
import BackButton from "@/components/common/back-button";

interface RewardData {
  title: string;
  total: number;
  amount: number;
  description: Array<{ icon: React.ReactNode; text: string }>;
  notificationtext: string;
  buttonText: string;
  buttonAction: () => void;
}
const claimedHistory = [
  {
    dateClaimed: "2024-09-10 14:00",
    rewardId: "RW1001",
    rewardName: "12-Month Travel Pass",
    milestone: "$5000",
    value: "$250.00",
  },
  {
    dateClaimed: "2024-08-25 09:00",
    rewardId: "RW1002",
    rewardName: "5-Star Hotel Stay",
    milestone: "$20000",
    value: "$150.00",
  },
  {
    dateClaimed: "2024-07-15 12:00",
    rewardId: "RW1003",
    rewardName: "Exclusive Art Tour",
    milestone: "$50000",
    value: "$350.00",
  },
  {
    dateClaimed: "2024-06-20 18:00",
    rewardId: "RW1004",
    rewardName: "Gourmet Dining Experience",
    milestone: "$5000",
    value: "$450.00",
  },
  {
    dateClaimed: "2024-05-30 8:00",
    rewardId: "RW1005",
    rewardName: "Private Vineyard Tour",
    milestone: "$20000",
    value: "$550.00",
  },
  {
    dateClaimed: "2024-04-22 17:00",
    rewardId: "RW1006",
    rewardName: "Annual Museum Membership",
    milestone: "$50000",
    value: "$200.00",
  },
  {
    dateClaimed: "2024-03-18 14:00",
    rewardId: "RW1007",
    rewardName: "Luxury Spa Weekend",
    milestone: "$5000",
    value: "$300.00",
  },
];
const rewardData: RewardData[] = [
  {
    title: "$5,000 Milestone",
    total: 5000,
    amount: 5000,
    description: [
      {
        icon: (
          <Image
            src="/images/rewards/high-spend/res-icon.svg"
            alt="restranaut"
            width={16}
            height={16}
          />
        ),
        text: "1 Eat for a Stay Voucher",
      },
      {
        icon: (
          <Image
            src="/images/rewards/high-spend/villa-icon.svg"
            alt="restranaut"
            width={16}
            height={16}
          />
        ),
        text: "Unlock 1-year access to thousands of exclusive villas and apartments ",
      },
    ],
    notificationtext: "Congratulations! Claim your reward here.",
    buttonText: "Claim Reward",
    buttonAction: () => console.log("Claim $5,000 reward"),
  },
  {
    title: "$20,000 Milestone",
    total: 20000,
    amount: 5000,
    description: [
      {
        icon: (
          <Image
            src="/images/rewards/high-spend/beach-icon.svg"
            alt="restranaut"
            width={16}
            height={16}
          />
        ),
        text: "1 Week All Inclusive Beach Holiday in a 4–5-star hotel for 2 people (Flight Tickets included)",
      },
    ],
    notificationtext:
      "Your progress is going well. Let’s spend more to get more",
    buttonText: "Go to Fireflies.com",
    buttonAction: () => (window.location.href = "https://fireflies.com"),
  },
  {
    title: "$50,000 Milestone",
    total: 50000,
    amount: 5000,
    description: [
      {
        icon: (
          <Image
            src="/images/rewards/high-spend/star-icon.svg"
            alt="restranaut"
            width={16}
            height={16}
          />
        ),
        text: "Ready for a game-changer? Our largest reward of $50K is almost here. Stay connected for more details!",
      },
    ],
    notificationtext:
      "Your progress is going well. Let’s spend more to get more",
    buttonText: "Go to Fireflies.com",
    buttonAction: () => (window.location.href = "https://fireflies.com"),
  },
];

const highSpendData = [
  {
    img: "/images/rewards/high-spend/total-fft-spent.svg",
    title: "Total FFT Spent",
    criteria:
      "Stay updated on your spending activity! Your total FFT spent are displayed at the top, ensuring you know exactly where you stand in the rewards program",
  },
  {
    img: "/images/rewards/high-spend/current-reward-tier.svg",
    title: "Current Reward Tier",
    criteria:
      "Find out your current reward tier at a glance. Are you already reaping benefits? Check your current tier and see what privileges you have unlocked so far.",
  },
  {
    img: "/images/rewards/high-spend/next-milestone.svg",
    title: "Next Milestone",
    criteria:
      "Keep moving forward! The dashboard highlights the next spending milestone to help you plan your journey toward even greater rewards. ",
  },
];

const RewardHighSpend: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-reward-bg px-2.5">
      <div className="container mx-auto max-md:px-8">
        <div className="flex w-full flex-col gap-4 pb-7 pt-3 md:pb-11 md:pt-8">
          <div className="flex w-fit cursor-pointer items-center text-secondary-900">
            <BackButton />{" "}
          </div>
          <h1 className="text-center font-[family-name:var(--font-sofia)] text-3xl font-bold text-secondary-700 md:text-6xl">
            High Spend Traveler
          </h1>
          <p className="mt-4 text-center text-2xl text-secondary-700">
            Track your spending and unlock exclusive rewards by using your FFT
            Our High-Spend Traveler Rewards section helps you monitor your
            progress, discover your current rewards, and see what’s next on your
            journey.
          </p>
        </div>
        <div className="grid gap-3.5 md:grid-cols-3">
          {highSpendData.map((item, index) => (
            <div
              className="flex h-full w-full flex-col justify-between gap-10 rounded-[20px] border-2 border-streak bg-gradient-fade px-7 py-5"
              key={index}
            >
              <div className="flex flex-col gap-5">
                <div className="flex min-h-[214px] flex-col items-center gap-5">
                  <Image
                    src={item?.img}
                    alt={item.title}
                    height={125}
                    width={180}
                    className="h-[125px] w-auto"
                  />
                  <div className="w-full rounded-[20px] bg-custom-gradient-dark px-7 py-5 backdrop-blur-16">
                    <p className="text-center text-lg font-bold text-secondary-200">
                      {item?.title}
                    </p>
                  </div>
                </div>
                <div className="border-t border-secondary-900 py-2.5">
                  <p className="text-center text-lg text-secondary-700">
                    {item?.criteria}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {session && */}
      <section className="bg-streak-dashboard">
        <div className="container mx-auto max-md:px-8">
          <section className="high-spend-progress">
            <div className="high-spend-progress-bar">
              <section className="mt-12 flex flex-wrap items-start justify-center gap-3.5 text-center text-lg">
                <RewardProgressBar value={30000} />
                <RewardProgressBarResponsive value={3000} />
              </section>
              <div className="mt-12 flex flex-col gap-3 self-start text-base text-gray-500 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  *Available only for bookings and services payed with $FFT
                  tokens
                </div>
                <div>*The process restarts every year</div>
              </div>
            </div>
          </section>
          <section className="mt-32 font-[family-name:var(--font-nunito)]">
            <h1 className="my-6 text-[60px] font-bold leading-[55px] text-[#6A727F]">
              Your spending Tracker
            </h1>
            <p className="mb-7 font-[family-name:var(--font-nutino)] text-[28px] font-bold leading-8 text-[#5A616C] 2xl:mb-11">
              Spend more to get more, track your spending to get all the
              rewards.
            </p>
            <section className="flex flex-col gap-[10px] md:flex-row">
              {rewardData.map((reward, index) => (
                <RewardCard key={index} {...reward} />
              ))}
            </section>
            <ProgressBar amount={5000} />
          </section>
          <section className="flex flex-col gap-7 pb-[75px] pt-[50px] font-[family-name:var(--font-nunito)]">
            <span className="text-[32px] font-bold leading-[44px] text-[#6A727F]">
              History
            </span>
            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div className="flex h-[34px] w-[84px] flex-row items-center gap-[6px] rounded-xl border border-[#CCCBCB] bg-[#FAFAFA] px-[14px] py-[9px]">
                <Image
                  src="/images/rewards/streak/filter.svg"
                  alt="filter"
                  width={16}
                  height={16}
                />
                <span className="text-sm font-semibold">Filter</span>
              </div>
              <div className="flex flex-row gap-[6px]">
                <Input
                  className="h-[34px] w-[306px] rounded-xl bg-white"
                  placeholder="Search by booking ID or service name"
                />
                <Button className="h-[34px] w-[72px] rounded-xl bg-[#00ADB5]">
                  Search
                </Button>
              </div>
            </div>
            <Table className="font-[family-name:var(--font-nunito)]">
              <TableCaption>A list of your claimed history</TableCaption>
              <TableHeader className="border-b-2 border-b-[#00ADB5] text-sm font-semibold">
                <TableRow>
                  <TableHead className="flex flex-row items-center gap-[6px] text-[#007277]">
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
              <TableBody className="text-sm font-semibold text-[#0A0A0B]">
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
        </div>
      </section>
      {/* } */}
    </div>
  );
};

export default RewardHighSpend;
