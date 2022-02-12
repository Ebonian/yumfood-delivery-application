import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { JobState } from "../contexts/JobContext";

const Pickup: NextPage = () => {
  const { job } = useContext(JobState);
  return (
    <main className="flex flex-col justify-between h-screen font-poppins select-none">
      {/* map */}
      <div className="relative overflow-clip flex flex-grow">
        <iframe
          width="120%"
          height="120%"
          src="https://api.mapbox.com/styles/v1/ebonian/ckyx5wt8z000i14nzgggsphev.html?title=false&access_token=pk.eyJ1IjoiZWJvbmlhbiIsImEiOiJja3l4NXA0eGUwZmxmMnZwZmpwYjZ3bXY3In0.AjTuTP62fDzsdPIdScnimg&zoomwheel=true#12/13.7563/100.5018"
          title="Navigation"
          className="absolute -right-10 -bottom-7"
        ></iframe>
      </div>
      {/* action */}
      <div className="bg-gray-200">
        <div className="w-full px-6 py-8 rounded-t-xl bg-white">
          <div className="flex justify-between items-center">
            <div className="">
              <p className="text-sm text-white font-medium p-1.5 bg-primary bg-opacity-[35%] rounded-lg w-[7.5rem]">
                Order #{job?.id}
              </p>
              <h2 className="font-bold text-xl mt-2 text-gray-800">
                {job?.title}
              </h2>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">Distance</p>
              <h3 className="font-bold">{job?.distance?.pickup} km</h3>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-end">
            <div>
              <p className="text-gray-400 text-sm font-medium">
                Order ready to be picked in
              </p>
              <h1 className="text-red-500 font-bold text-2xl">
                {job?.time?.pickup} min
              </h1>
            </div>
            <Link href="/home">
              <a className="rounded-full bg-primary text-white font-medium py-2 px-3">
                Start pick-up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pickup;
