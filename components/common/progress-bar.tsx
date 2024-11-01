import clsx from 'clsx';
import React, { HTMLAttributes } from 'react'

interface ProgressBarProps {
  progress: number;
  className?: HTMLAttributes<HTMLDivElement>["className"]
}

const ProgressBar = ({ progress, className }: ProgressBarProps) => {
  return (
    <div className="w-full h-4 bg-[#CCCBCB] my-1 rounded-full">
      <div style={{ width: progress + "%" }} className={clsx("h-full rounded-full bg-primary-500", className && className)} />
    </div>
  )
}

export default ProgressBar