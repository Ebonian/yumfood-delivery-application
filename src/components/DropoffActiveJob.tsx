import Link from "next/link";
import React, { useContext } from "react";
import { JobState } from "../contexts/JobContext";

const DropoffActiveJob: React.FC = () => {
  const { job } = useContext(JobState);
  return (
    <div className="bg-gray-50 h-48 w-full shadow-xl rounded-lg p-4 z-40 overflow-clip relative">
      <h3 className="uppercase text-primary font-semibold text-sm">
        Drop-Off at
      </h3>
      <h1 className="font-bold text-xl text-gray-800">{job?.dropoff}</h1>
      <p className="text-gray-400 text-sm">{job?.location?.dropoff}</p>
      <div className="flex justify-end mt-3">
        <Link href="/summary">
          <a className="px-6 py-2 grid place-content-center rounded-full bg-primary text-white uppercase font-medium">
            Arrived at drop-off
          </a>
        </Link>
      </div>
    </div>
  );
};

export default DropoffActiveJob;
