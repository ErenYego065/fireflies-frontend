import * as React from 'react';
import Image from 'next/image'
import DonutChart from './RewardChart';
interface RewardCardProps {
  title: string;
  total: number;
  amount: number;
  description: Array<{ icon: React.ReactNode, text: string }>;
  notificationtext: string,
  buttonText: string;
  buttonAction: () => void;
}

const RewardCard: React.FC<RewardCardProps> = ({ title, total, amount, description, notificationtext, buttonText, buttonAction }) => {
  const percentage = ((amount / total) * 100) >= 100 ? 100 : (amount / total) * 100;

  return (
    <div className="flex overflow-hidden flex-col justify-between rounded-3xl border border-gray-200 border-solid shadow-lg bg-neutral-50 md:w-11/12 ">
      <div className="flex flex-col w-full mb-8">
        <div className="flex overflow-hidden flex-col  p-6 w-full bg-neutral-50 max-md:px-5">
          <div className="flex gap-2.5 items-center w-full text-2xl font-bold text-neutral-950">
            <Image src='/images/rewards/high-spend/villa-icon.svg' alt='1' width={1} height={1} />
            <div className="self-stretch my-auto">{title}</div>
          </div>
          <div className="flex overflow-hidden gap-3 items-center mt-2.5 w-full text-base font-medium tracking-wide leading-loose text-black whitespace-nowrap min-h-[23px]">
            <div className="flex gap-2.5 items-center self-stretch my-auto">
              <div className="flex shrink-0 self-stretch my-auto bg-sky-800 rounded-3xl h-[13px] w-[27px]" />
              <div className="self-stretch my-auto">Goal</div>
            </div>
            <div className="flex gap-2.5 items-center self-stretch my-auto">
              <div className="flex shrink-0 self-stretch my-auto bg-teal-500 rounded-3xl h-[13px] w-[27px]" />
              <div className="self-stretch my-auto">Spending</div>
            </div>
          </div>
        </div>
        <DonutChart value={percentage} spentAmount={amount} />
      </div>
      <div className="flex overflow-hidden flex-col p-2 2xl:w-10/12 m-auto border-t-2 max-md:mx-2">
        <div className="w-full px-2 text-lg text-gray-600 min-h-[120px]">
          {description.map((item) => (
            <div className='flex justify-start gap-3 '>
              <div className='w-4 h-4'>{item.icon}</div>
              <div className='text-[#5A616C] '>{item.text}</div>
            </div>
          ))}
          {/* <img loading="lazy" src={image} alt={`${title} illustration`} className="object-contain w-full aspect-[333.33]" /> */}
          {/* <p className="mt-2.5">{description}</p> */}
        </div>
        <p className='align-center text-center text-gray-600 text-lg font-bold'>{notificationtext}</p>
        <div className="flex flex-col justify-center mt-3.5 mb-4 w-full text-center">
          <button onClick={buttonAction} className="self-center px-4 py-3 mt-2.5 text-sm font-bold rounded-xl bg-[linear-gradient(270deg,#10507F_0%,#00ADB5_100%)] text-neutral-50">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;