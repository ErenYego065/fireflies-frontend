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
import BackButton from "@/components/common/back-button";

const claimedHistory = [
  {
    dateClaimed: "2024-09-10 14:00",
    rewardId: "RW1001",
    rewardName: "12-Month Travel Pass",
    category: "Travel Streak",
    value: "$250.00",
  },
  {
    dateClaimed: "2024-08-25 09:00",
    rewardId: "RW1002",
    rewardName: "5-Star Hotel Stay",
    category: "Hotel Stays",
    value: "$150.00",
  },
  {
    dateClaimed: "2024-07-15 12:00",
    rewardId: "RW1003",
    rewardName: "Exclusive Art Tour",
    category: "Cultural Explorer",
    value: "$350.00",
  },
  {
    dateClaimed: "2024-06-20 18:00",
    rewardId: "RW1004",
    rewardName: "Gourmet Dining Experience",
    category: "Hotel Stays",
    value: "$450.00",
  },
  {
    dateClaimed: "2024-05-30 8:00",
    rewardId: "RW1005",
    rewardName: "Private Vineyard Tour",
    category: "Travel Streak",
    value: "$550.00",
  },
  {
    dateClaimed: "2024-04-22 17:00",
    rewardId: "RW1006",
    rewardName: "Annual Museum Membership",
    category: "Cultural Explorer",
    value: "$200.00",
  },
  {
    dateClaimed: "2024-03-18 14:00",
    rewardId: "RW1007",
    rewardName: "Luxury Spa Weekend",
    category: "Hotel Stays",
    value: "$300.00",
  },
];
const streakReward = [
  {
    img: "/images/rewards/streak/travel-streak.svg",
    title: "TRAVEL Streak Reward",
    criteria: "Criteria: Book a trip every month for 12 months. ",
    features: [
      {
        img: "/images/icons/fork-and-knife.svg",
        content: "1 Eat for a Stay Voucher",
      },
      {
        img: "/images/icons/villa.svg",
        content: "Yearly Access to Exclusive Villas & Apartments",
      },
      {
        img: "/images/icons/target.svg",
        content: "Total trip bookings must reach €3000",
      },
    ],
  },
  {
    img: "/images/rewards/streak/hotel-streak.svg",
    title: "HOTEL STAYS Streak Reward",
    criteria: "Criteria: Stay a total of 50 nights in hotels within 12 months",
    features: [
      {
        img: "/images/icons/bed.svg",
        content: "Complimentary 5-night stay for two adults",
      },
      {
        img: "/images/icons/fork-and-knife.svg",
        content:
          "Includes breakfast at a 4–5-star hotel in a major city (e.g., Paris, Rome, Barcelona)",
      },
      {
        img: "/images/icons/spa.svg",
        content:
          "Spa treatment or fine dining experience at the hotel's top restaurant",
      },
    ],
  },
  {
    img: "/images/rewards/streak/cultural-streak.svg",
    title: "CULTURAL EXPLORER Streak Reward",
    criteria:
      "Criteria: Book a trip every month for 12 months, visiting six different countries. ",
    features: [
      {
        img: "/images/icons/fork-and-knife.svg",
        content: "Complimentary 5-night stay for two adults",
      },
      {
        img: "/images/icons/art.svg",
        content: "Complimentary 5-night stay for two adults",
      },
    ],
  },
];

const RewardStreak = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-reward-bg">
      <div className="container mx-auto max-md:px-8">
        <div className="flex w-full flex-col gap-4 pb-7 pt-3 md:pb-11 md:pt-8">
          <div className="flex w-fit cursor-pointer items-center text-secondary-900">
            <BackButton />
          </div>
          <h1 className="text-center font-[family-name:var(--font-sofia)] text-3xl font-bold text-secondary-700 md:text-6xl">
            12 Month Streak Reward
          </h1>
        </div>
        <div className="grid gap-3.5 md:grid-cols-3">
          {streakReward.map((item, index) => (
            <div
              className="flex h-full w-full flex-col justify-between gap-10 rounded-[20px] border-2 border-streak bg-gradient-fade px-7 py-5"
              key={index}
            >
              <div className="flex flex-col gap-5">
                <div className="flex min-h-[214px] flex-col items-center gap-5">
                  <Image
                    src={item?.img}
                    alt={item.title}
                    height={110}
                    width={110}
                  />
                  <h2 className="text-center text-[28px] font-bold text-secondary-1000">
                    {item?.title}
                  </h2>
                </div>
                <div className="border-t border-secondary-900 py-2.5">
                  <div className="flex flex-col gap-2.5 px-5">
                    {item?.features?.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2.5"
                      >
                        <Image
                          height={25}
                          width={25}
                          src={feature.img}
                          alt={feature.content}
                        />
                        <p className="text-lg text-secondary-700">
                          {feature.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full rounded-[20px] bg-custom-gradient-dark px-7 py-8 backdrop-blur-16">
                <p className="text-center text-lg text-secondary-200">
                  {item?.criteria}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {session && (
        <div className="mt-11 bg-streak-dashboard">
          <div className="container mx-auto font-[family-name:var(--font-nunito)] max-md:px-4">
            <h2 className="my-6 text-[40px] font-bold leading-[55px] text-[#6A727F]">
              Dashboard
            </h2>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 rounded-lg border border-streak p-5 shadow-streak-shadow">
                <div className="flex flex-row items-center gap-[10px]">
                  <Image
                    src="/images/rewards/streak/travel-streak.svg"
                    alt="travel-streak"
                    width={46}
                    height={46}
                  />
                  <span className="text-3xl font-bold text-[#393E46]">
                    Travel Streak
                  </span>
                </div>
                <div className="flex flex-row justify-between text-lg font-semibold leading-6 text-[#393E46]">
                  <span>Reward Progress</span>
                  <span>
                    <span className="text-[#00ADB5]">4</span> out of{" "}
                    <span className="text-[#00ADB5]">12</span> month completed
                  </span>
                </div>
                <div className="flex w-full flex-row justify-between gap-3">
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-5 rounded-lg border border-streak p-5 shadow-streak-shadow">
                <div className="flex flex-row items-center gap-[10px]">
                  <Image
                    src="/images/rewards/streak/hotel-streak.svg"
                    alt="travel-streak"
                    width={46}
                    height={46}
                  />
                  <span className="text-3xl font-bold text-[#393E46]">
                    Hotel Stays Streak
                  </span>
                </div>
                <div className="flex flex-row justify-between text-lg font-semibold leading-6 text-[#393E46]">
                  <span>Reward Progress</span>
                  <span>
                    You failed last month, progress will reset when you do a new
                    booking
                  </span>
                </div>
                <div className="flex w-full flex-row justify-between gap-3">
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-[#FC3C3C]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                  <div className="h-8 grow rounded bg-[#6A727F]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-5 rounded-lg border border-streak p-5 shadow-streak-shadow">
                <div className="flex flex-row items-center gap-[10px]">
                  <Image
                    src="/images/rewards/streak/cultural-streak.svg"
                    alt="travel-streak"
                    width={46}
                    height={46}
                  />
                  <span className="text-3xl font-bold text-[#393E46]">
                    Cultural Explorer Streak
                  </span>
                </div>
                <div className="flex justify-between text-lg font-semibold leading-6 text-[#393E46] max-md:flex-col">
                  <div>Reward Progress</div>
                  <div className="flex justify-end gap-[10px] max-md:flex-col">
                    <div>Congratulations! Claim your reward here.</div>
                    <Button className="h-8 w-28 rounded-lg bg-[#00ADB5] text-sm font-semibold">
                      Claim Reward
                    </Button>
                  </div>
                </div>
                <div className="flex w-full flex-row justify-between gap-3">
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                  <div className="h-8 grow rounded bg-gradient-to-r-from-teal-to-blue"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-7 pb-[75px] pt-[50px] font-[family-name:var(--font-nunito)]">
              <span className="text-[32px] font-bold leading-[44px] text-[#6A727F]">
                History
              </span>
              <div className="flex flex-col justify-between gap-2.5 md:flex-row">
                <div className="flex h-[34px] flex-row items-center gap-[6px] rounded-xl border border-[#CCCBCB] bg-[#FAFAFA] px-[14px] py-[9px]">
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
                    className="h-[34px] w-[306px] rounded-xl"
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
                    <TableHead className="text-[#007277]">
                      Reward Name
                    </TableHead>
                    <TableHead className="text-[#007277]">Category</TableHead>
                    <TableHead className="flex flex-row items-center justify-end gap-[6px] text-[#007277]">
                      <Image
                        src="/images/rewards/streak/up-down-icon.svg"
                        alt="icon"
                        width={19}
                        height={19}
                      />
                      Value
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-sm font-semibold text-[#0A0A0B]">
                  {claimedHistory.map((history, index) => (
                    <TableRow key={index}>
                      <TableCell>{history.dateClaimed}</TableCell>
                      <TableCell>{history.rewardId}</TableCell>
                      <TableCell>{history.rewardName}</TableCell>
                      <TableCell>{history.category}</TableCell>
                      <TableCell className="text-right">
                        {history.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter className="bg-gradient-to-r-from-blue-to-teal">
                  <TableRow>
                    <TableCell colSpan={5} className="text-[#FAFAFA]">
                      Total Claimed
                    </TableCell>
                    <TableCell className="text-right text-[#FAFAFA]">
                      $2250.00
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RewardStreak;
