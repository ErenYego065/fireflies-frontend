"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Home = () => {
  const router = useRouter();
  const goToRegister = () => {
    router.push("/register");
  };

  const { data: session } = useSession();

  return (
    <div>
      <div className="mb-[84px] bg-gradient-radial px-[10px] pt-7 2xl:px-0 2xl:pt-0">
        {session && (
          <div className="sticky top-[600px] flex flex-row justify-center font-[family-name:var(--font-nunito)]">
            <div className="flex w-64 flex-col items-center gap-[6px] rounded-lg border border-[#D6FDFF] bg-custom-gradient-light p-[14px]">
              <div className="test-sm font-semibold text-black">
                Fast Access
              </div>
              <div className="flex flex-row justify-between">
                <Button className="h-6 rounded-full bg-[#00ADB5] px-2 text-sm font-semibold text-[#FAFAFA]">
                  <Link href="#tokenomics">Tokenomics</Link>
                </Button>
                <Button className="mx-2 h-6 rounded-full bg-[#00ADB5] px-2 text-sm font-semibold text-[#FAFAFA]">
                  Roadmap
                </Button>
                <Button className="h-6 rounded-full bg-[#00ADB5] px-2 text-sm font-semibold text-[#FAFAFA]">
                  <Link href="/content/help-center">FAQ</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-10 2xl:mb-[150px] 2xl:ml-[138px] 2xl:flex-row 2xl:justify-between 2xl:pt-16">
          <div className="flex flex-col gap-[14px] 2xl:h-[505px] 2xl:w-[635px] 2xl:justify-center">
            <h1 className="font-[family-name:var(--font-sofia)] text-[32px] font-bold leading-8 text-[#5A616C] 2xl:text-6xl">
              Empower Your Financial Future with Fireflies Token.
            </h1>
            <div className="border-l-2 border-l-[#5A616C] py-3 pl-3 font-[family-name:var(--font-nunito)] text-lg leading-6 2xl:text-[28px] 2xl:leading-[38px]">
              Stake, Trade, and Earn with the next-generation decentralized
              application.
            </div>
            <div className="hidden 2xl:flex">
              {!session && (
                <Button
                  className="rounded-full bg-gradient-to-r-from-blue-to-teal py-2 pl-6 font-[family-name:var(--font-nunito)] text-[20px] leading-7 shadow-teal-drop"
                  onClick={goToRegister}
                >
                  Get Started Now
                  <Image
                    src="/images/home/button-arrow.svg"
                    className="mx-[14px]"
                    alt="arrow"
                    width={14}
                    height={14}
                  />
                </Button>
              )}
            </div>
          </div>
          <div className="hidden 2xl:block">
            <Image
              src="/images/home/hero.svg"
              alt="hero"
              width={350}
              height={135}
              className="h-full w-full"
            />
          </div>
          <div className="2xl:hidden">
            <Image
              src="/images/home/mobile-hero.svg"
              alt="hero"
              width={350}
              height={135}
              className="2xl:h-full 2xl:w-full"
            />
          </div>
          <div className="2xl:hidden">
            <Button className="rounded-full bg-gradient-to-r-from-blue-to-teal py-[6px] pl-4 font-[family-name:var(--font-nunito)] text-sm shadow-teal-drop">
              Get Started Now
              <Image
                src="/images/home/button-arrow.svg"
                className="mx-[14px]"
                alt="arrow"
                width={14}
                height={14}
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="mb-9 px-[77px] 2xl:mb-20">
        <div className="flex flex-col items-center gap-9 2xl:flex-row 2xl:justify-center">
          <div className="relative">
            <Card className="h-[205px] w-[220px] rounded-2xl border border-solid border-[#D6FDFF] bg-gradient-fade 2xl:h-[342px] 2xl:w-[368px]">
              <CardHeader className="flex flex-row justify-center">
                <Image
                  src="/images/home/card-icon1.svg"
                  alt="icon1"
                  width={50}
                  height={50}
                  className="2xl:w-[100px]"
                />
              </CardHeader>
              <CardContent className="mx-1 text-center font-[family-name:var(--font-nunito)] text-lg font-bold leading-6 2xl:text-3xl">
                Stake your Fireflies Tokens and earn rewards effortlessly
              </CardContent>
            </Card>
            <Image
              src="/images/home/card-leave-1-1.svg"
              alt="leave"
              width={65}
              height={0}
              className="absolute -bottom-1 -left-[18px] 2xl:-bottom-4 2xl:w-40"
            />
            <Image
              src="/images/home/card-leave-1-2.svg"
              alt="leave"
              width={65}
              height={0}
              className="absolute -bottom-0 -left-[14px] -z-10 2xl:-bottom-2 2xl:w-40"
            />
          </div>
          <div className="relative">
            <Card className="h-[205px] w-[220px] rounded-2xl border border-solid border-[#D6FDFF] bg-gradient-fade 2xl:h-[342px] 2xl:w-[368px]">
              <CardHeader className="flex flex-row justify-center">
                <Image
                  src="/images/home/card-icon2.svg"
                  alt="icon1"
                  width={50}
                  height={50}
                  className="2xl:w-[100px]"
                />
              </CardHeader>
              <CardContent className="mx-1 text-center font-[family-name:var(--font-nunito)] text-lg font-bold leading-6 2xl:text-3xl">
                Seamless trading experience with advanced security
              </CardContent>
            </Card>
            <Image
              src="/images/home/card-leave-2-1.svg"
              alt="leave"
              width={65}
              height={0}
              className="absolute -top-[6px] right-[10px] 2xl:-top-5 2xl:right-0 2xl:w-40"
            />
            <Image
              src="/images/home/card-leave-2-2.svg"
              alt="leave"
              width={65}
              height={0}
              className="absolute -top-0 right-[14px] -z-10 2xl:-top-2 2xl:right-1 2xl:w-40"
            />
          </div>
          <div className="relative">
            <Card className="h-[205px] w-[220px] rounded-2xl border border-solid border-[#D6FDFF] bg-gradient-fade 2xl:h-[342px] 2xl:w-[368px]">
              <CardHeader className="flex flex-row justify-center">
                <Image
                  src="/images/home/card-icon3.svg"
                  alt="icon1"
                  width={50}
                  height={50}
                  className="2xl:w-[100px]"
                />
              </CardHeader>
              <CardContent className="mx-1 text-center font-[family-name:var(--font-nunito)] text-lg font-bold leading-6 2xl:text-3xl">
                Participate to unlock exclusive rewards!
              </CardContent>
            </Card>
            <Image
              src="/images/home/card-leave-3-1.svg"
              alt="leave"
              width={32}
              height={0}
              className="absolute -right-5 top-0 2xl:-right-8 2xl:-top-5 2xl:w-[55px]"
            />
            <Image
              src="/images/home/card-leave-3-2.svg"
              alt="leave"
              width={27}
              height={0}
              className="absolute -top-[2px] right-0 -z-10 2xl:-top-5 2xl:w-[46px]"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mb-[70px] w-56 font-[family-name:var(--font-nunito)] 2xl:mb-24 2xl:w-[1167px] 2xl:pt-[100px]">
        <div className="mb-12 hidden text-center font-[family-name:var(--font-sofia)] text-5xl font-bold text-[#5A616C] 2xl:block">
          Gain Exclusive <span className="text-gradient">Rewards!</span>
        </div>
        <div className="flex flex-col gap-5 2xl:gap-14">
          <div className="flex flex-col gap-3 2xl:flex-row 2xl:gap-8">
            <div className="flex w-full flex-row items-center gap-5 2xl:hidden">
              <Image
                src="/images/home/high-speed-traveler.svg"
                alt="icon"
                height={36}
                width={36}
              />
              <h3 className="text-lg font-bold leading-6">
                High Spend Traveler
              </h3>
            </div>
            <div className="2xl:w-1/2">
              <Image
                src="/images/home/card1.svg"
                alt="card"
                width={225}
                height={137}
                className="2xl:w-full"
              />
            </div>
            <div className="text-lg leading-6 2xl:hidden">
              Unlock Exclusive Travel Rewards with Every Token Spent! Elevate
              your travel experience by spending FFT tokens. From luxurious
              stays to all-inclusive vacations, the more you spend, the more you
              earn. Start your journey to incredible rewards today!
            </div>
            <div className="hidden w-1/2 flex-col gap-5 p-7 2xl:flex">
              <div className="flex w-full flex-row items-center gap-5">
                <Image
                  src="/images/home/high-speed-traveler.svg"
                  alt="icon"
                  height={72}
                  width={72}
                />
                <h3 className="text-3xl font-bold text-[#393E46]">
                  High Spend Traveler
                </h3>
              </div>
              <div className="text-2xl text-[#393E46]">
                Unlock Exclusive Travel Rewards with Every Token Spent! Elevate
                your travel experience by spending FFT tokens. From luxurious
                stays to all-inclusive vacations, the more you spend, the more
                you earn. Start your journey to incredible rewards today!
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 2xl:flex-row 2xl:gap-8">
            <div className="flex w-full flex-row items-center gap-5 2xl:hidden">
              <Image
                src="/images/home/staking-options.svg"
                alt="icon"
                height={36}
                width={36}
              />
              <h3 className="text-lg font-bold leading-6">
                Tier-Based Staking Options
              </h3>
            </div>
            <div className="hidden w-1/2 flex-col gap-5 p-7 2xl:flex">
              <div className="flex w-full flex-row items-center gap-5">
                <Image
                  src="/images/home/staking-options.svg"
                  alt="icon"
                  height={72}
                  width={72}
                />
                <h3 className="text-3xl font-bold text-[#393E46]">
                  Tier-Based Staking Options
                </h3>
              </div>
              <div className="text-2xl text-[#393E46]">
                Stake your way to exclusive benefits! Whether you’re starting
                small or going all in, our tier-based staking options unlock a
                world of premium perks—from VIP access and discounts to
                extraordinary travel experiences. Choose your tier and start
                enjoying the rewards today.
              </div>
            </div>
            <div className="2xl:w-1/2">
              <Image
                src="/images/home/card2.svg"
                alt="card"
                width={225}
                height={137}
                className="2xl:w-full"
              />
            </div>
            <div className="text-lg leading-6 2xl:hidden">
              Stake your way to exclusive benefits! Whether you’re starting
              small or going all in, our tier-based staking options unlock a
              world of premium perks—from VIP access and discounts to
              extraordinary travel experiences. Choose your tier and start
              enjoying the rewards today.
            </div>
          </div>
          <div className="flex flex-col gap-3 2xl:flex-row 2xl:gap-8">
            <div className="flex w-full flex-row items-center gap-5 2xl:hidden">
              <Image
                src="/images/home/adventure-raffles.svg"
                alt="icon"
                height={36}
                width={36}
              />
              <h3 className="text-lg font-bold leading-6">
                Adventure Raffles!
              </h3>
            </div>
            <div className="2xl:w-1/2">
              <Image
                src="/images/home/card3.svg"
                alt="card"
                width={225}
                height={137}
                className="2xl:w-full"
              />
            </div>
            <div className="text-lg leading-6 2xl:hidden">
              Ready for the trip of a lifetime? Enter our Adventure Raffles for
              a chance to win unforgettable experiences like island escapes,
              luxury cruises, and more. Every entry brings you closer to your
              dream journey. Start playing, and who knows? Your next adventure
              could be just a raffle away.
            </div>
            <div className="hidden w-1/2 flex-col gap-5 p-7 2xl:flex">
              <div className="flex w-full flex-row items-center gap-5">
                <Image
                  src="/images/home/adventure-raffles.svg"
                  alt="icon"
                  height={72}
                  width={72}
                />
                <h3 className="text-3xl font-bold text-[#393E46]">
                  Adventure Raffles!
                </h3>
              </div>
              <div className="text-2xl text-[#393E46]">
                Ready for the trip of a lifetime? Enter our Adventure Raffles
                for a chance to win unforgettable experiences like island
                escapes, luxury cruises, and more. Every entry brings you closer
                to your dream journey. Start playing, and who knows? Your next
                adventure could be just a raffle away.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 2xl:flex-row 2xl:gap-8">
            <div className="flex w-full flex-row items-center gap-5 2xl:hidden">
              <Image
                src="/images/home/NFT-reward.svg"
                alt="icon"
                height={36}
                width={36}
              />
              <h3 className="text-lg font-bold leading-6">
                12 Month Streak NFT Reward
              </h3>
            </div>
            <div className="hidden w-1/2 flex-col gap-5 p-7 2xl:flex">
              <div className="flex w-full flex-row items-center gap-5">
                <Image
                  src="/images/home/NFT-reward.svg"
                  alt="icon"
                  height={72}
                  width={72}
                />
                <h3 className="text-3xl font-bold text-[#393E46]">
                  12 Month Streak NFT Reward
                </h3>
              </div>
              <div className="text-2xl text-[#393E46]">
                Earn luxury rewards and exclusive digital collectibles by
                booking trips or hotel stays every month for 12 months with the
                Fireflies 12-Month Streak NFT Reward Program. Keep your streak
                alive and unlock premium perks!
              </div>
            </div>
            <div className="2xl:w-1/2">
              <Image
                src="/images/home/card4.svg"
                alt="card"
                width={225}
                height={137}
                className="2xl:w-full"
              />
            </div>
            <div className="text-lg leading-6 2xl:hidden">
              Earn luxury rewards and exclusive digital collectibles by booking
              trips or hotel stays every month for 12 months with the Fireflies
              12-Month Streak NFT Reward Program. Keep your streak alive and
              unlock premium perks!
            </div>
          </div>
          <div className="flex flex-col gap-3 2xl:flex-row 2xl:gap-8">
            <div className="flex w-full flex-row items-center gap-5 2xl:hidden">
              <Image
                src="/images/home/social-responsibility.svg"
                alt="icon"
                height={36}
                width={36}
              />
              <h3 className="text-lg font-bold leading-6">
                Environmental and Social Responsibility NFT
              </h3>
            </div>
            <div className="2xl:w-1/2">
              <Image
                src="/images/home/card5.svg"
                alt="card"
                width={225}
                height={137}
                className="2xl:w-full"
              />
            </div>
            <div className="hidden w-1/2 flex-col gap-5 p-7 2xl:flex">
              <div className="flex w-full flex-row items-center gap-5">
                <Image
                  src="/images/home/social-responsibility.svg"
                  alt="icon"
                  height={72}
                  width={72}
                />
                <h3 className="text-3xl font-bold text-[#393E36]">
                  Environmental and Social Responsibility NFT
                </h3>
              </div>
              <div className="text-2xl text-[393E46]">
                Make a positive impact by participating in environmental and
                social projects. Earn unique NFTs as a token of appreciation and
                enjoy exclusive discounts on eco-friendly travel packages.
              </div>
            </div>
            <div className="text-lg leading-6 2xl:hidden">
              Make a positive impact by participating in environmental and
              social projects. Earn unique NFTs as a token of appreciation and
              enjoy exclusive discounts on eco-friendly travel packages.
            </div>
          </div>
          <div className="flex flex-col gap-3 2xl:flex-row 2xl:gap-8">
            <div className="flex w-full flex-row items-center gap-5 2xl:hidden">
              <Image
                src="/images/home/content-reward.svg"
                alt="icon"
                height={36}
                width={36}
              />
              <h3 className="text-lg font-bold leading-6">
                User-Generated Content Rewards Program
              </h3>
            </div>
            <div className="hidden w-1/2 flex-col gap-5 p-7 2xl:flex">
              <div className="flex w-full flex-row items-center gap-5">
                <Image
                  src="/images/home/content-reward.svg"
                  alt="icon"
                  height={72}
                  width={72}
                />
                <h3 className="text-3xl font-bold text-[#393E46]">
                  User-Generated Content Rewards Program
                </h3>
              </div>
              <div className="text-2xl text-[#393E46]">
                Share your travel stories, earn exclusive digital collectibles,
                and enrich your future adventures with Fireflies. Capture and
                share your unique experiences to unlock rewards like culinary
                events, cultural tours, and eco-friendly perks.
              </div>
            </div>
            <div className="2xl:w-1/2">
              <Image
                src="/images/home/card6.svg"
                alt="card"
                width={225}
                height={137}
                className="2xl:w-full"
              />
            </div>
            <div className="text-lg leading-6 2xl:hidden">
              Share your travel stories, earn exclusive digital collectibles,
              and enrich your future adventures with Fireflies. Capture and
              share your unique experiences to unlock rewards like culinary
              events, cultural tours, and eco-friendly perks.
            </div>
          </div>
        </div>
        <div className="hidden flex-row justify-center 2xl:flex">
          <Link
            href="/content/rewards"
            className="flex flex-row gap-3 py-3 pl-6 pr-4 text-2xl font-bold text-[#007277]"
          >
            Learn More
            <Image
              src="/images/home/link-arrow.svg"
              alt="arrow"
              height={28}
              width={28}
            />
          </Link>
        </div>
      </div>
      <div
        className="mx-auto hidden w-[1154px] py-[77px] 2xl:block"
        id="tokenomics"
      >
        <h3 className="mb-7 text-center font-[family-name:var(--font-sofia)] text-5xl font-bold text-[#00ADB5]">
          Tokenomics
        </h3>
        <div className="flex flex-row gap-14">
          <div className="relative h-[480px] w-[360px]">
            <Image
              src="/images/home/tokenomics.svg"
              alt="token"
              width={270}
              height={200}
              className="absolute bottom-0 w-full"
            />
          </div>
          <div className="grid w-[737px] grid-cols-2 gap-4 font-[family-name:var(--font-nunito)]">
            <div className="relative rounded-2xl border border-[#E9EBED] bg-gradient-fade p-6">
              <div className="flex flex-col gap-[10px]">
                <span className="text-lg font-bold leading-6 text-[#5A616C]">
                  Total Supply
                </span>
                <span className="text-3xl font-bold text-[#0A0A0B]">
                  120.000.000
                </span>
              </div>
              <Image
                src="/images/home/total-supply.svg"
                alt="total-supply"
                height={123}
                width={123}
                className="absolute -bottom-0 right-0"
              />
            </div>
            <div className="relative rounded-2xl border border-[#E9EBED] bg-gradient-fade p-6">
              <div className="flex flex-col gap-[10px]">
                <span className="text-lg font-bold leading-6 text-[#5A616C]">
                  Total Burn
                </span>
                <span className="text-3xl font-bold text-[#0A0A0B]">
                  120.000.000 $FFT
                </span>
              </div>
              <Image
                src="/images/home/total-burn.svg"
                alt="total-supply"
                height={123}
                width={123}
                className="absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-[#E9EBED] bg-gradient-fade">
              <div className="flex flex-col gap-[10px] p-6">
                <span className="text-lg font-bold leading-6 text-[#5A616C]">
                  Current Market Price
                </span>
                <div className="flex flex-row items-center gap-[6px]">
                  <span className="text-3xl font-bold text-[#0A0A0B]">
                    $120.000.000.12
                  </span>
                  <Badge className="bg-[#008C92] px-[14px] py-1">+3.45%</Badge>
                </div>
              </div>
              <Image
                src="/images/home/market-price.svg"
                alt="total-supply"
                height={702}
                width={123}
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-[#E9EBED] bg-gradient-fade">
              <div className="flex flex-col gap-[10px] p-6">
                <span className="text-lg font-bold leading-6 text-[#5A616C]">
                  Market Cap
                </span>
                <div className="flex flex-row items-center gap-[6px]">
                  <span className="text-3xl font-bold text-[#0A0A0B]">
                    $1,245,056.67.67
                  </span>
                  <Badge className="bg-[#008C92] px-[14px] py-1">+2.45%</Badge>
                </div>
              </div>
              <Image
                src="/images/home/market-cap.svg"
                alt="total-supply"
                height={702}
                width={123}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[375px] 2xl:hidden">
        <Image
          src="/images/home/advertise-mobile.svg"
          alt="advertise"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
      <div className="hidden w-full 2xl:block">
        <Image
          src="/images/home/advertise.svg"
          alt="advertise"
          width={1024}
          height={1024}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Home;
