import React from "react";
import ProgressCell from "./ProgressCell";

interface ProgressBarProps {
    value: number
}
export default function RewardProgressBar({ value }: ProgressBarProps) {
    const cells: React.ReactNode[] = [];
    for (let i = 0; i <= 50000; i += 1000) {
        cells.push(
            <ProgressCell value={i} />
        )
    }

    return (
        <div className="hidden 2xl:block w-full">
            <div className="flex justify-between  w-full mt-7 ">
                <div className="mt-2 ml-5 text-[32px] font-bold text-[#6A727F] align-middle">0</div>
                {...cells}
                <div className="mt-2 mr-5 text-[32px] font-bold text-[#6A727F] align-middle">50000</div>
            </div>
        </div>
    )
}