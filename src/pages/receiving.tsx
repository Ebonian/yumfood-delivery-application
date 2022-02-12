import { NextPage } from "next";
import Link from "next/link";
import Header from "../components/Header";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { useContext } from "react";
import { JobState } from "../contexts/JobContext";

const Receiving: NextPage = () => {
  const { job, setJobIsActive } = useContext(JobState);
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between h-screen font-poppins select-none">
        {/* job info */}
        <div className="flex items-start mt-16 px-6 space-x-6 py-8">
          {/* type */}
          <div className="text-3xl text-primary rounded-full p-3 bg-black bg-opacity-[7%]">
            <IoFastFoodOutline />
          </div>
          <div className="space-y-1.5 w-full">
            <h3 className="uppercase text-primary font-semibold text-sm">
              {job?.type === "food" && "New food delivery"}
            </h3>
            <div className="w-full flex justify-between items-center">
              {/* title */}
              <h1 className="font-bold text-xl">{job?.title}</h1>
              {/* time */}
              <h3 className="uppercase text-primary font-semibold text-sm">
                {job?.time?.pickup} min
              </h3>
            </div>
            {/* location */}
            <p className="text-gray-400 text-sm">{job?.location?.pickup}</p>
          </div>
        </div>
        {/* map */}
        {/* <div className="flex flex-grow bg-gray-800"></div> */}
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
            <div className="flex justify-between items-center mb-10 px-2 relative">
              {/* time */}
              <div className="absolute left-[3.5rem] -top-4 text-xs font-semibold text-gray-400">
                {job?.time?.pickup} min
              </div>
              <div className="absolute right-[5.5rem] -top-4 text-xs font-semibold text-gray-400">
                {job?.time?.dropoff} min
              </div>
              {/* pickup */}
              <div className="absolute left-0 right-16 grid place-content-center">
                <div className="grid place-content-center text-2xl w-12 h-12 bg-gray-100 text-gray-500 shadow rounded-full">
                  <AiOutlineShop />
                </div>
              </div>
              {/* you */}
              <div className="w-3 h-3 rounded-full bg-primary grid place-content-center">
                <span className="mt-10 text-sm text-primary font-semibold">
                  You
                </span>
              </div>
              {/* dropoff */}
              <div className="flex flex-grow h-[1.75px] bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300 grid place-content-center relative">
                <span className="w-20 mt-10 mr-5 text-sm text-gray-300 font-semibold">
                  Drop-off
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <Link href="/home">
                <a className="grid place-content-center py-3 px-12 uppercase rounded-full font-medium bg-gray-300 text-white">
                  Decline
                </a>
              </Link>
              <Link href="/pickup">
                <a
                  className="grid place-content-center py-3 px-12 uppercase rounded-full font-medium bg-primary text-white"
                  onClick={() => setJobIsActive(true)}
                >
                  Accept
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Receiving;
