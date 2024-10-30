import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full">
      <Image
        alt="top flag"
        src="/images/rewards/raffles/banner-right-top-back.svg"
        width={142}
        height={130}
        className="absolute -top-[75px] right-[15px] max-md:hidden"
      />
      <Image
        alt="top left flag"
        src="/images/rewards/raffles/banner-left-bottom-back.svg"
        width={141}
        height={103}
        className="absolute -bottom-[64px] left-[23px] max-md:hidden"
      />
      <div className="relative my-10 flex w-full flex-col items-center justify-center gap-2 bg-gradient-to-r-from-teal-to-blue p-6 max-md:pb-[102px] max-md:pt-[74px] md:my-20">
        <div className="absolute left-0 top-0 h-full w-full">
          <Image
            alt="top left flag"
            src="/images/rewards/raffles/flag.svg"
            width={195}
            height={120}
            className="absolute left-0 top-0 max-md:-left-[49px]"
          />
          <Image
            alt="top left flag"
            src="/images/rewards/raffles/spring.svg"
            width={60}
            height={80}
            className="absolute left-[130px] top-[124px] max-md:hidden"
          />
          <Image
            alt="top left flag"
            src="/images/rewards/raffles/banner-right.svg"
            width={185}
            height={174}
            className="absolute right-[51px] top-[56px] max-md:hidden"
          />
          <Image
            alt="top left flag"
            src="/images/rewards/raffles/banner-left-bottom.svg"
            width={109}
            height={129}
            className="absolute -bottom-[55px] left-[22px] max-md:hidden"
          />

          <Image
            alt="top flag"
            src="/images/rewards/raffles/banner-right-top.svg"
            width={108}
            height={128}
            className="absolute -top-[66px] right-[15px] max-md:hidden"
          />

          <Image
            alt="red ribbon"
            src="/images/rewards/raffles/banner-red-ribbon.svg"
            width={82}
            height={100}
            className="absolute bottom-[42px] right-[195px] max-md:bottom-8 max-md:right-[1px]"
          />
          <Image
            alt="coin blur"
            src="/images/rewards/raffles/blur-coin.svg"
            width={180}
            height={180}
            className="absolute -left-[60px] top-[36%] max-w-none md:hidden"
          />
          <Image
            alt="coin"
            src="/images/rewards/raffles/coin.svg"
            width={184}
            height={184}
            className="absolute right-[-64px] top-[104px] md:hidden"
          />
        </div>
        <h2 className="relative text-center text-[40px] font-bold text-white md:text-5xl">
          Congratulations!
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center gap-4">
          <div className="relative flex flex-col items-center justify-center gap-1">
            <Image
              alt="coin blur"
              src="/images/rewards/raffles/blur-coin.svg"
              width={180}
              height={180}
              className="absolute -left-[316px] top-[26px] max-w-none max-md:hidden"
            />
            <Image
              alt="coin"
              src="/images/rewards/raffles/coin.svg"
              width={220}
              height={220}
              className="absolute right-[-280px] top-[20px] max-md:hidden"
            />
            <Image
              className="absolute -left-[42px] -top-3 w-[178px] max-w-none"
              src={"/images/rewards/raffles/celebration.svg"}
              alt={"celebration"}
              height={82}
              width={178}
            />
            <Image
              src="/images/rewards/raffles/avatar.png"
              alt="avatar"
              height={78}
              width={78}
              className="rounded-full"
            />
            <p className="text-center font-semibold text-white">
              James Korsgaard
            </p>
          </div>
          <p className="text-center text-base font-bold text-white md:text-lg">
            Living the dream with a luxury trip to <br />
            <span className="text-lg md:text-2xl">Maldives</span>
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/images/icons/twitter.svg"
              alt="twitter"
              height={24}
              width={24}
            />
            <Image
              src="/images/icons/facebook.svg"
              alt="facebook"
              height={24}
              width={24}
            />
            <Image
              src="/images/icons/instagram.svg"
              alt="instagram"
              height={24}
              width={24}
            />
            <Image
              src="/images/icons/telegram.svg"
              alt="telegram"
              height={24}
              width={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
