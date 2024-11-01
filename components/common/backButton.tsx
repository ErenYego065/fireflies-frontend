import { useRouter } from 'next/navigation';
import { FiChevronLeft } from 'react-icons/fi';
const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };





  return (
    <button
      onClick={handleBack}
      className="flex items-center text-gray-600 text-lg"
    >
      <FiChevronLeft className="mr-1" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
