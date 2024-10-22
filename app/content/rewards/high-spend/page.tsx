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
import { Icon } from "lucide-react"

const claimedHistory = [
  {
    dateClaimed: "2024-09-10 14:00",
    rewardId: "RW1001",
    rewardName: "12-Month Travel Pass",
    category: "Travel Streak",
    value: "$250.00"
  },
  {
    dateClaimed: "2024-08-25 09:00",
    rewardId: "RW1002",
    rewardName: "5-Star Hotel Stay",
    category: "Hotel Stays",
    value: "$150.00"
  },
  {
    dateClaimed: "2024-07-15 12:00",
    rewardId: "RW1003",
    rewardName: "Exclusive Art Tour",
    category: "Cultural Explorer",
    value: "$350.00"
  },
  {
    dateClaimed: "2024-06-20 18:00",
    rewardId: "RW1004",
    rewardName: "Gourmet Dining Experience",
    category: "Hotel Stays",
    value: "$450.00"
  },
  {
    dateClaimed: "2024-05-30 8:00",
    rewardId: "RW1005",
    rewardName: "Private Vineyard Tour",
    category: "Travel Streak",
    value: "$550.00"
  },
  {
    dateClaimed: "2024-04-22 17:00",
    rewardId: "RW1006",
    rewardName: "Annual Museum Membership",
    category: "Cultural Explorer",
    value: "$200.00"
  },
  {
    dateClaimed: "2024-03-18 14:00",
    rewardId: "RW1007",
    rewardName: "Luxury Spa Weekend",
    category: "Hotel Stays",
    value: "$300.00"
  },
]

const RewardHighSpend = () => {
  const { data: session } = useSession()
  return (
    <div className="bg-streak-bg pt-[42px] 2xl:pt-[77px]">
      <h1 className="mb-7 font-[family-name:var(--font-sofia)] font-bold text-[32px] text-center leading-8 text-[#5A616C] 2xl:text-6xl 2xl:mb-11">
        12 month streak Reward
      </h1>
      <p className="mb-7 font-[family-name:var(--font-nutino)] font-bold text-[24px] text-center leading-8 text-[#5A616C] 2xl:text-6xl 2xl:mb-11">
        Track your spending and unlock exclusive rewards by using your $FFT tokens! Our High-Spend Traveler
        Rewards section helps you monitor your progress, discover your current rewards, and see what’s next on
        your journey.
      </p>
      <div className="mx-[42px] flex flex-col gap-[10px] md:flex-row md:mx-10 2xl:mx-[135px]">
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
      </div>
      <div className="high-spend-progress">
        <div className="high-spend-progress-icon">
        </div>
        <div className="high-spend-progress-bar">

        </div>
        <div className="high-spend-progress-marker">

        </div>
      </div>
      {session && <div className="mt-[22px] px-[135px] font-[family-name:var(--font-nunito)] bg-streak-dashboard">
        <h1 className="my-6 font-bold text-[60px] leading-[55px] text-[#6A727F]">
          Your spending Tracker
        </h1>
        <p className="mb-7 font-[family-name:var(--font-nutino)] font-bold text-[28px] leading-8 text-[#5A616C] 2xl:text-6xl 2xl:mb-11">
          Spend more to get more, track your spending to get all the rewards.
        </p>
        <div className="flex flex-col gap-5">
          <div className="p-5 rounded-lg border border-streak shadow-streak-shadow flex flex-col gap-5">
            <div className="flex flex-row gap-[10px] items-center">
              <Image
                src="/images/rewards/streak/travel-streak.svg"
                alt="travel-streak"
                width={46}
                height={46}
              />
              <span className="font-bold text-3xl text-[#393E46]">Travel Streak</span>
            </div>
            <div className="flex flex-row justify-between font-semibold text-lg leading-6 text-[#393E46]">
              <span>Reward Progress</span>
              <span>
                <span className="text-[#00ADB5]">4</span> out of <span className="text-[#00ADB5]">12</span> month completed
              </span>
            </div>
            <div className="w-full flex flex-row justify-between gap-3">
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
              <div className="h-8 bg-[#6A727F] rounded"></div>
              <div className="h-8 bg-[#6A727F] rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
            </div>
          </div>
          <div className="p-5 rounded-lg border border-streak shadow-streak-shadow flex flex-col gap-5">
            <div className="flex flex-row gap-[10px] items-center">
              <Image
                src="/images/rewards/streak/hotel-streak.svg"
                alt="travel-streak"
                width={46}
                height={46}
              />
              <span className="font-bold text-3xl text-[#393E46]">Hotel Stays Streak</span>
            </div>
            <div className="flex flex-row justify-between font-semibold text-lg leading-6 text-[#393E46]">
              <span>Reward Progress</span>
              <span>
                You failed last month, progress will reset when you do a new booking
              </span>
            </div>
            <div className="w-full flex flex-row justify-between gap-3">
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-[#FC3C3C] grow rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
              <div className="h-8 bg-[#6A727F] grow rounded"></div>
            </div>
          </div>
          <div className="p-5 rounded-lg border border-streak shadow-streak-shadow flex flex-col gap-5">
            <div className="flex flex-row gap-[10px] items-center">
              <Image
                src="/images/rewards/streak/cultural-streak.svg"
                alt="travel-streak"
                width={46}
                height={46}
              />
              <span className="font-bold text-3xl text-[#393E46]">Cultural Explorer Streak</span>
            </div>
            <div className="flex flex-row justify-between font-semibold text-lg leading-6 text-[#393E46]">
              <span>Reward Progress</span>
              <div className="flex flex-row gap-[10px]">
                <span>
                  Congratulations! Claim your reward here.
                </span>
                <Button className="rounded-lg h-8 w-28 bg-[#00ADB5] font-semibold text-sm">Claim Reward</Button>
              </div>
            </div>
            <div className="w-full flex flex-row justify-between gap-3">
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
              <div className="h-8 bg-gradient-to-r-from-teal-to-blue grow rounded"></div>
            </div>
          </div>
        </div>
        <div className="pt-[50px] pb-[75px] flex flex-col gap-7 font-[family-name:var(--font-nunito)]">
          <span className="font-bold text-[32px] leading-[44px] text-[#6A727F]">History</span>
          <div className="flex flex-row justify-between">
            <div className="h-[34px] px-[14px] py-[9px] rounded-xl border border-[#CCCBCB] bg-[#FAFAFA] flex flex-row gap-[6px] items-center">
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
                className="w-[306px] h-[34px] rounded-xl"
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
                <TableHead className="text-[#007277]">Category</TableHead>
                <TableHead className="flex flex-row gap-[6px] items-center justify-end text-[#007277]">
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
            <TableBody className="font-semibold text-sm text-[#0A0A0B]">
              {claimedHistory.map((history, index) => (
                <TableRow key={index}>
                  <TableCell>{history.dateClaimed}</TableCell>
                  <TableCell>{history.rewardId}</TableCell>
                  <TableCell>{history.rewardName}</TableCell>
                  <TableCell>{history.category}</TableCell>
                  <TableCell className="text-right">{history.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className="bg-gradient-to-r-from-blue-to-teal">
              <TableRow>
                <TableCell colSpan={5} className="text-[#FAFAFA]">Total Claimed</TableCell>
                <TableCell className="text-right text-[#FAFAFA]">$2250.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>}
    </div>
  )
}

export default RewardHighSpend