
interface ProgressBarProps {
  amount: number
}
const ProgressBar = ({ amount }: ProgressBarProps) => {
  // Calculate the width percentage of the progress
  const progressPercentage = (amount / 50000) * 100;

  return (
    <div className="space-y-2 w-full mt-9  2xl:px-6 ">
      {/* Progress Bar Container */}
      <div className="w-full bg-[#E4F8FF] rounded-sm overflow-hidden">
        {/* Progress Indicator */}
        <div
          className="h-6 2xl:h-9 bg-gradient-to-l from-[#00ADB5] to-[#10507F]"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Label Section */}
      <div className=" w-full text-gray-600 mt-2">
        <div>Total Amount Spent</div>
        <div className="font-bold text-lg">{amount.toLocaleString()} $FFT</div>
      </div>
    </div>
  );
};

export default ProgressBar;
