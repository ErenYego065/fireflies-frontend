import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative my-20 flex w-full flex-col items-center justify-center gap-2 bg-gradient-to-r-from-teal-to-blue p-6">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          alt="top left flag"
          src="/images/rewards/raffles/flag.svg"
          width={195}
          height={120}
        />
        <Image
          alt="top left flag"
          src="/images/rewards/raffles/spring.svg"
          width={60}
          height={80}
          className="absolute left-[130px] top-[124px]"
        />
        <Image
          alt="top left flag"
          src="/images/rewards/raffles/blur-coin.svg"
          width={200}
          height={200}
          className="absolute bottom-[20px] left-[345px] rotate-[21.18deg]"
        />
        <Image
          alt="top left flag"
          src="/images/rewards/raffles/coin.svg"
          width={200}
          height={200}
          className="absolute right-[341px] top-[20px] rotate-[-80deg]"
        />
      </div>
      <h2 className="relative text-center text-[40px] font-bold text-white md:text-5xl">
        Congratulations on Top!
      </h2>
      <div className="relative flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-1">
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
            src="/icons/twitter.svg"
            alt="twitter"
            height={24}
            width={24}
          />
          <Image
            src="/icons/facebook.svg"
            alt="facebook"
            height={24}
            width={24}
          />
          <Image
            src="/icons/instagram.svg"
            alt="instagram"
            height={24}
            width={24}
          />
          <Image
            src="/icons/telegram.svg"
            alt="telegram"
            height={24}
            width={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
