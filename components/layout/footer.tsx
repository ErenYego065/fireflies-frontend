"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="font-[family-name:var(--font-nunito)]">
      <div className="px-5 py-10 2xl:px-[187px] 2xl:py-24">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold text-[#007277] 2xl:text-[40px] 2xl:leading-[55px]">
              Join the Fireflies Travel Revolution
            </span>
            <span className="text-lg font-bold leading-6 text-[#00ADB5] 2xl:text-2xl">
              Receive insider insights, tips, and early updates!
            </span>
          </div>
          <div className="flex flex-col gap-4 2xl:flex-row">
            <Input
              className="w-full rounded-xl px-[10px] py-[6px] placeholder:font-[family-name:var(--font-nunito)] placeholder:text-[16px] placeholder:font-semibold placeholder:leading-5 placeholder:text-[#5A616C] 2xl:px-[10px] 2xl:py-4 2xl:placeholder:text-lg 2xl:placeholder:leading-6"
              placeholder="Enter your email address here"
            />
            <div>
              <Button className="bg-gradient-to-r-from-blue-to-teal px-3 py-[6px] text-xl font-bold shadow-teal-drop 2xl:px-[58px] 2xl:py-4">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] py-7 pl-[46px] pr-[78px] 2xl:px-[187px] 2xl:py-7">
        <div className="flex flex-col justify-evenly gap-4 2xl:flex-row 2xl:justify-between 2xl:py-4">
          <div className="flex flex-col gap-5 2xl:w-[340px]">
            <Image
              src="/images/layout/logo.svg"
              alt="logo"
              width={109}
              height={47}
              className="2xl:w-[276px]"
            />
            <div className="mr-3 text-[10px] leading-[14px] text-[#5A616C] 2xl:text-[14px] 2xl:leading-[19px]">
              Copyright © 2024 Fireflies.com™. All rights reserved. The
              Fireflies.com is owned and operated by SWISS HALLEY AG,
              Churerstrasse 47, 8808 Pfäffikon, Switzerland.
            </div>
          </div>
          <div className="flex flex-col gap-[10px] 2xl:w-[250px]">
            <div className="text-lg font-bold leading-6 text-[#5A616C] 2xl:text-2xl">
              Useful Link
            </div>
            <div className="flex flex-col gap-[6px] text-xs 2xl:text-[14px] 2xl:leading-[19px]">
              <Link href="#">DApp</Link>
              <Link href="/content/documents">Docs</Link>
              <Link href="/content/help-center">FAQ & Help Center</Link>
              <Link href="/content/glossary">Glossary</Link>
              <Link href="#">Contact/Support</Link>
              <Link href="#">Terms and Condition</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="text-lg font-bold leading-6 text-[#5A616C] 2xl:text-2xl">
              Join Us on Social Media!
            </div>
            <div className="flex flex-row gap-[29px]">
              <Link href="#">
                <Image
                  src="/images/home/x.svg"
                  alt="x"
                  width={26}
                  height={26}
                  className="2xl:w-12"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/home/facebook.svg"
                  alt="x"
                  width={26}
                  height={26}
                  className="2xl:w-12"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/home/tg.svg"
                  alt="x"
                  width={26}
                  height={26}
                  className="2xl:w-12"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/home/insta.svg"
                  alt="x"
                  width={26}
                  height={26}
                  className="2xl:w-12"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
