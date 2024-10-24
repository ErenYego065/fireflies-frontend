"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Rewards = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col gap-14 bg-gradient-radial items-center">
      <div className="mt-10">
        <Image
          src="/images/rewards/hero.svg"
          alt="hero"
          width={100}
          height={0}
          className="w-full"
        />
      </div>
      <div className="text-center">
        <h1 className="font-[family-name:var(--font-sofia)] font-bold text-6xl text-[#5A616C]">
          Explore and Manage Your Rewards
        </h1>
        <div className="mt-5 font-[family-name:var(--font-nunito)] text-2xl text-[#6A727F]">
          Click on each reward to view more details and manage your rewards.
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="rounded-xl border border-[#D6FDFF] bg-gradient-fade w-[368px] h-[396px] px-[50px] py-10 flex flex-col justify-between items-center font-[family-name:var(--font-nunito)]">
          <div>
            <Image
              src="/images/rewards/card1-icon.svg"
              alt="icon"
              width={72}
              height={72}
            />
          </div>
          <h3 className="font-bold text-3xl text-[#393E46] text-center">
            High Spend Traveler
          </h3>
          <div className="text-2xl text-[#5A616C] text-center">
            Unlock exclusive travel perks by spending more tokens.
          </div>
          <Button className="rounded-xl h-8 w-24 font-semibold text-sm bg-[#00ADB5]">
            View Details
          </Button>
        </div>
        <div className="rounded-xl border border-[#D6FDFF] bg-gradient-fade w-[368px] h-[396px] px-[50px] py-10 flex flex-col justify-between items-center font-[family-name:var(--font-nunito)]">
          <div>
            <Image
              src="/images/rewards/card2-icon.svg"
              alt="icon"
              width={72}
              height={72}
            />
          </div>
          <h3 className="font-bold text-3xl text-[#393E46] text-center">
            Tier-Based Staking Optinos
          </h3>
          <div className="text-2xl text-[#5A616C] text-center">
            Access special rewards by staking your tokens.
          </div>
          <Button className="rounded-xl h-8 w-24 font-semibold text-sm bg-[#00ADB5]">
            View Details
          </Button>
        </div>
        <div className="rounded-xl border border-[#D6FDFF] bg-gradient-fade w-[368px] h-[396px] px-[50px] py-10 flex flex-col justify-between items-center font-[family-name:var(--font-nunito)]">
          <div>
            <Image
              src="/images/rewards/card3-icon.svg"
              alt="icon"
              width={72}
              height={72}
            />
          </div>
          <h3 className="font-bold text-3xl text-[#393E46] text-center">
            12 Month Streak NFT Reward
          </h3>
          <div className="text-2xl text-[#5A616C] text-center">
            Receive monthly rewards for consistent usage.
          </div>
          <Button 
            className="rounded-xl h-8 w-24 font-semibold text-sm bg-[#00ADB5]"
            onClick={() => router.push("/content/rewards/streak")}
          >
            View Details
          </Button>
        </div>
        <div className="rounded-xl border border-[#D6FDFF] bg-gradient-fade w-[368px] h-[396px] px-[50px] py-10 flex flex-col justify-between items-center font-[family-name:var(--font-nunito)]">
          <div>
            <Image
              src="/images/rewards/card4-icon.svg"
              alt="icon"
              width={72}
              height={72}
            />
          </div>
          <h3 className="font-bold text-3xl text-[#393E46] text-center">
            Adventure Raffles
          </h3>
          <div className="text-2xl text-[#5A616C] text-center">
            Enter raffles for once-in-a-lifetime experiences.
          </div>
          <Button className="rounded-xl h-8 w-24 font-semibold text-sm bg-[#00ADB5]">
            View Details
          </Button>
        </div>
        <div className="rounded-xl border border-[#D6FDFF] bg-gradient-fade w-[368px] h-[396px] px-[50px] py-10 flex flex-col justify-between items-center font-[family-name:var(--font-nunito)]">
          <div>
            <Image
              src="/images/rewards/card5-icon.svg"
              alt="icon"
              width={72}
              height={72}
            />
          </div>
          <h3 className="font-bold text-3xl text-[#393E46] text-center">
            Environmental and Social Responsibility NFT
          </h3>
          <div className="text-2xl text-[#5A616C] text-center">
            Contribute to eco-friendly travel efforts and earn NFTs.
          </div>
          <Button className="rounded-xl h-8 w-24 font-semibold text-sm bg-[#00ADB5]">
            View Details
          </Button>
        </div>
        <div className="rounded-xl border border-[#D6FDFF] bg-gradient-fade w-[368px] h-[396px] px-[50px] py-10 flex flex-col justify-between items-center font-[family-name:var(--font-nunito)]">
          <div>
            <Image
              src="/images/rewards/card6-icon.svg"
              alt="icon"
              width={72}
              height={72}
            />
          </div>
          <h3 className="font-bold text-3xl text-[#393E46] text-center">
            User-Generated Content Rewards Program
          </h3>
          <div className="text-2xl text-[#5A616C] text-center">
            Share content to earn tokens and rewards.
          </div>
          <Button className="rounded-xl h-8 w-24 font-semibold text-sm bg-[#00ADB5]">
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Rewards