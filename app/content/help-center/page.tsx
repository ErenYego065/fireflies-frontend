"use client";

import { nunito, sofiaPro } from "@/app/fonts";
import {
  BackButton,
  BuyingIcon,
  CaretDown,
  CreatingIcon,
  DeveloperIcon,
  GettingStartedIcon,
  PartnerIcon,
  SellingIcon,
} from "@/components/icons/Icons";
import { Input } from "@/components/ui/input";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function HelpCenter() {
  const { register, handleSubmit } = useForm();
  const [faqs, setFaqs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/faqs?limit=100`)
      .then((res) => res.json())
      .then((data) => setFaqs(data.docs));
  }, []);

  const onSearch = (data: any) => {
    router.push(`/content/help-center/search?search=${data.search}`);
  };

  return (
    <div className={`flex flex-col gap-6`}>
      <div className="flex flex-row items-center gap-4">
        <BackButton />
        <h1
          className={`p-4 text-5xl font-semibold text-black/70 lg:text-6xl ${sofiaPro.className}`}
        >
          Help Center
        </h1>
      </div>
      <form className={`flex flex-row gap-4`} onSubmit={handleSubmit(onSearch)}>
        <Input
          {...register("search")}
          placeholder="Search"
          className="w-full bg-white"
          onKeyUp={(e: any) => {
            if (e.key === "Enter") {
              onSearch({ search: e.currentTarget.value });
            }
          }}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button
          type="submit"
          className="flex items-center justify-center rounded-lg bg-primary p-2 text-white"
        >
          Search
        </button>
      </form>

      <h3 className="text-center text-4xl font-bold text-black/70">
        Main Topic
      </h3>

      <div className="m-auto grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <TopicCard
          icon={<GettingStartedIcon />}
          title="Getting Started"
          description="Learn how to set up your account and start using Fireflies."
          url="/getting-started"
        />
        <TopicCard
          icon={<CreatingIcon />}
          title="Travel & Pay"
          description="Book trips and pay easily with $FFT or other cryptocurrencies."
          url="/travel-and-pay"
        />
        <TopicCard
          icon={<BuyingIcon />}
          title="Earn Rewards"
          description="Unlock rewards by staking and participating in exclusive offers."
          url="/earn-rewards"
        />
        <TopicCard
          icon={<SellingIcon />}
          title="Managing Your Crypto"
          description="Manage your wallet, buy/sell tokens, and swap $FFT easily."
          url="/managing-your-crypto"
        />
        <TopicCard
          icon={<PartnerIcon />}
          title="Stay Secure"
          description="Keep your account and wallet safe with security tips and tools."
          url="/stay-secure"
        />
        <TopicCard
          icon={<DeveloperIcon />}
          title="Get Support"
          description="Access technical support, troubleshooting tips, and help for platform issues."
          url="/get-support"
        />
      </div>

      <div>
        <div className="flex flex-col gap-8">
          <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h3 className="text-start text-3xl font-bold text-black/70">
              Frequently Asked Questions
            </h3>
            <a
              href="#submission"
              className="flex items-center justify-center rounded-lg bg-primary p-2 px-4 text-white hover:cursor-pointer"
            >
              Didn't find an answer?
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FaqAccordion
                key={index}
                title={faq.question}
                description={faq.answer}
                expanded={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  url: string;
}

function TopicCard({ icon, title, description, url }: TopicCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-gradient-to-b from-white to-[#00ADB52D]/40 p-8 shadow-xl lg:w-[24rem]">
      {icon}
      <h4 className="text-center text-2xl font-semibold text-black/70">
        {title}
      </h4>
      <p className="text-black/40">{description}</p>
      <a
        href={`help-center/${url}`}
        className="rounded-lg bg-primary p-2 px-8 text-white"
      >
        Continue
      </a>
    </div>
  );
}

interface FaqAccordionProps {
  title: string;
  description: string;
  expanded: boolean;
}

function FaqAccordion({ title, description, expanded }: FaqAccordionProps) {
  return (
    <div
      className="group flex flex-col border-b-2 p-2 hover:cursor-pointer"
      aria-expanded={expanded}
      onClick={(e) => {
        e.currentTarget.setAttribute(
          "aria-expanded",
          e.currentTarget.getAttribute("aria-expanded") === "true"
            ? "false"
            : "true",
        );
      }}
    >
      <div className="flex flex-row items-center justify-between">
        <p className="text-lg font-semibold text-black/70">{title}</p>
        <CaretDown className={`rotate-180 group-aria-expanded:rotate-0`} />
      </div>
      <p className="hidden text-black/40 group-aria-expanded:block">
        {description}
      </p>
    </div>
  );
}
