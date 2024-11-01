import React from 'react';
interface DonutChartProps {
  value: number,
  spentAmount: number
}
const DonutChart = ({ value, spentAmount }: DonutChartProps) => {
  // Define the data and calculations
  const total = 100;
  const spent = value;
  const remaining = total - spent;

  // Calculate the circumference of the circle
  const radius = 50; // Radius of the circle
  const innerRadius = 30;
  const circumference = 2 * Math.PI * radius; // Full circumference
  const spentLength = (spent / total) * circumference; // Length of spent segment
  const remainingLength = circumference - spentLength; // Length of remaining segment

  return (
    <div className="flex items-center justify-center">
      <svg
        width="250"
        height="250"
        viewBox="0 0 150 150"
        className="relative"
      >
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#11507F"
          strokeWidth="20"
          strokeDasharray={`${remainingLength} ${circumference}`}
          strokeDashoffset="0"
          transform={`rotate(${value / 100 * 360 - 90} 75 75)`}
        />

        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#00ADB5"
          strokeWidth="30"
          strokeDasharray={`${spentLength} ${circumference}`}
          strokeDashoffset="0"
          transform="rotate(-90 75 75)"

        />
        <circle
          cx="75"
          cy="75"
          r={innerRadius}
          fill="white"
          stroke="white"
          strokeWidth="20"
        />
        <text
          x="75"
          y="65"
          textAnchor="middle"
          fontSize="20"
          fontWeight="bold"
          fill="#000"
        >
          {spent}%
        </text>
        <text
          x="75"
          y="85"
          textAnchor="middle"
          fontSize="12"
          fill="#666"
        >
          {spentAmount} $FFT
        </text>
      </svg>
    </div>
  );
};

export default DonutChart;
