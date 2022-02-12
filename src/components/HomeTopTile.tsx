import { useContext, useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { JobState } from "../contexts/JobContext";
import { OrderState } from "../contexts/OrderContext";
import DropoffActiveJob from "./DropoffActiveJob";
import Jobs from "./Jobs";
import PickupActiveJob from "./PickupActiveJob";

const HomeTopTile: React.FC = () => {
  const { isOnline } = useContext(OrderState);
  const {
    isJob,
    setIsJob,
    isErr,
    isProblem,
    setIsProblem,
    jobIsActive,
    pickup,
    dropoff,
  } = useContext(JobState);

  useEffect(() => {
    setIsJob(false);
    setTimeout(() => {
      setIsJob(true);
    }, 3000);

    if (isErr) {
      setTimeout(() => {
        setIsProblem(true);
      }, 6000);
    }
  }, [isOnline]);

  return (
    <>
      {jobIsActive && dropoff ? (
        <DropoffActiveJob />
      ) : jobIsActive && pickup ? (
        <PickupActiveJob />
      ) : isProblem && isErr ? (
        <div className="grid place-content-center bg-gray-50 h-48 w-full shadow-xl rounded-lg p-4 z-40 overflow-clip relative">
          <div className="text-gray-400 flex justify-center px-4 space-x-3">
            <FiAlertCircle className="text-3xl w-10" />
            <span>
              {"There's an error, please contact support@yumfood.com"}
            </span>
          </div>
        </div>
      ) : isJob && isOnline && !isErr ? (
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
