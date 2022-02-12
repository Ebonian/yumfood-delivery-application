import Link from "next/link";
import { useContext } from "react";
import { JobState } from "../contexts/JobContext";

const PickupActiveJob: React.FC = () => {
  const { job } = useContext(JobState);
  return (
    <div className="bg-gray-50 h-48 w-full shadow-xl rounded-lg p-4 z-40 overflow-clip relative">
      <h3 className="uppercase text-primary font-semibold text-sm">
        Pick-Up at
      </h3>
      <h1 className="font-bold text-xl text-gray-800">{job?.title}</h1>
      <p className="text-gray-400 text-sm">{job?.location?.pickup}</p>
      <div className="flex justify-end mt-3">
        <Link href="/summary">
          <a className="px-6 py-2 grid place-content-center rounded-full bg-primary text-white uppercase font-medium">
            Arrived at pick-up
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PickupActiveJob;
