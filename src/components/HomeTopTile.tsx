import { useContext, useEffect, useState } from "react";
import { JobState } from "../contexts/JobContext";
import { OrderState } from "../contexts/OrderContext";
import Jobs from "./Jobs";

const HomeTopTile: React.FC = () => {
  const { isOnline } = useContext(OrderState);
  const { isJob, setIsJob } = useContext(JobState);

  useEffect(() => {
    setTimeout(() => {
      setIsJob(true);
    }, 3000);
  }, [isOnline]);

  return (
    <>
      {isJob && isOnline ? (
        <div className="flex bg-gray-50 h-48 w-full shadow-xl rounded-lg p-4 z-40 overflow-clip relative">
          <Jobs />
          {/* <div className="absolute w-[90%] h-[83.5%] bg-white shadow-xl rounded-lg"></div> */}
          <div className="bg-white shadow-xl rounded-l-lg flex flex-grow -mr-4"></div>
        </div>
      ) : (
        <div className="bg-white h-48 w-full shadow-xl rounded-lg p-4 z-40 overflow-clip">
          <div
            className={`grid place-content-center h-full font-semibold text-gray-300 text-xl duration-300 translate-y-44 ease-out ${
              isOnline && "translate-y-0 animate-pulse"
            }`}
          >
            Searching orders...
          </div>
          <div
            className={`-mt-40 duration-300 ease-out ${
              isOnline && "translate-y-64"
            }`}
          >
            <h1 className="text-gray-800 text-2xl font-bold mb-4">Yesterday</h1>
            <div className="grid grid-cols-2 mb-2">
              <div>
                <h3 className="font-semibold uppercase text-gray-400 text-sm">
                  Money Earned
                </h3>
                <h2 className="font-bold text-xl text-gray-800">THB 280</h2>
              </div>
              <div>
                <h3 className="font-semibold uppercase text-gray-400 text-sm">
                  Hours Online
                </h3>
                <h2 className="font-bold text-xl text-gray-800">8.5 hrs</h2>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <h3 className="font-semibold uppercase text-gray-400 text-sm">
                  Total Distance
                </h3>
                <h2 className="font-bold text-xl text-gray-800">24 km</h2>
              </div>
              <div>
                <h3 className="font-semibold uppercase text-gray-400 text-sm">
                  Total Jobs
                </h3>
                <h2 className="font-bold text-xl text-gray-800">20</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeTopTile;
