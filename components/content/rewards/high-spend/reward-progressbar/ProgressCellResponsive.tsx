import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tootip"
interface ProgressCellProps {
    value: number;
}

export default function ProgressCellResponsive({
    value
}: ProgressCellProps) {
    return (
        <div className={`w-3 h-10 rounded-[10px] relative ${value === 5000 ? 'bg-[#2B91DC]' : value === 20000 ? 'bg-[#1F76B6]' : value === 50000 ? 'bg-[#10507F]' : 'bg-[#A9AEB7]'}`}>
            {(value === 0 || value === 5000 || value == 20000) && <div className="absolute -bottom-[36px] text-[32px] font-bold  text-[#6A727F] ">
                {value}
            </div>}
            {(value === 50000) && <div className="absolute -bottom-[36px] text-[32px] font-bold -right-[0px]   text-[#6A727F]">
                {value}
            </div>}
            {(value === 5000) &&
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><div className="absolute -top-10 -right-0">
                            <Image
                                src="/images/rewards/high-spend/res-icon.svg"
                                alt="restranaut"
                                width={16}
                                height={16}
                            />
                        </div></TooltipTrigger>
                        <TooltipContent>
                            <p>Eat for stay voucher</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger><div className="absolute -top-5 -right-0 ">
                            <Image
                                src="/images/rewards/high-spend/villa-icon.svg"
                                alt="villa"
                                width={16}
                                height={16}
                            />
                        </div></TooltipTrigger>
                        <TooltipContent>
                            <p>Access to exclusive properties</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            }
            {(value === 20000) &&
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><div className="absolute -top-5 -right-0">
                            <Image
                                src="/images/rewards/high-spend/beach-icon.svg"
                                alt="beach"
                                width={16}
                                height={16}
                            />
                        </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>1 week Beach Holiday for 2 people</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            }
            {(value === 50000) &&
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger><div className="absolute -top-5 -right-0">
                            <Image
                                src="/images/rewards/high-spend/star-icon.svg"
                                alt="star"
                                width={16}
                                height={16}
                            />
                        </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Great rewards are on the way, stay tuned!</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            }
        </div>
    )
}