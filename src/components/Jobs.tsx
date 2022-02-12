import Link from "next/link";
import { FiClock, FiCompass, FiX } from "react-icons/fi";

const Jobs: React.FC = () => {
  return (
    <div className="w-[93%] h-full bg-white shadow-xl rounded-lg p-4 relative flex flex-col justify-between mr-4">
      <FiX className="absolute top-3 right-3 text-xl text-gray-500" />
      <div>
        <h3 className="uppercase text-primary font-semibold text-sm">
          New food delivery
        </h3>
        <h1 className="font-bold text-xl text-gray-800">Starbucks Megeria</h1>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex text-sm space-x-5 text-gray-600">
          <div className="flex items-center space-x-2">
            <FiClock />
            <p>10 m</p>
          </div>
          <div className="flex items-center space-x-2">
            <FiCompass />
            <p>12 km</p>
          </div>
        </div>
        <Link href="/">
          <a className="absolute bottom-3 right-3 text-sm grid place-content-center rounded-full bg-primary text-white px-4 py-1.5">
            View Job
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
