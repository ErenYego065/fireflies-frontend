import React from "react";
import ProgressCellResponsive from "./ProgressCellResponsive";

interface ProgressBarProps {
    value: number
}
export default function RewardProgressBarResponsive({ value }: ProgressBarProps) {
    const cells: React.ReactNode[] = [];
    for (let i = 0; i <= 50000; i += 2500) {
        cells.push(
            <ProgressCellResponsive value={i} />
        )
    }

    return (
        <div className="2xl:hidden w-full">
            <div className="flex justify-between w-full mt-7 ">
                {...cells}
            </div>
        </div>
    )
}