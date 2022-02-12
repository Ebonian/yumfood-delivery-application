import React, { useContext, useEffect } from "react";
import { FiPower, FiSearch } from "react-icons/fi";
import { JobState } from "../contexts/JobContext";
import { OrderState } from "../contexts/OrderContext";

const OnlineButton: React.FC = () => {
  const { isOnline, setIsOnline } = useContext(OrderState);
  const { isJob, setIsJob, setIsProblem, jobIsActive } = useContext(JobState);

  useEffect(() => {
    if (jobIsActive) {
      setIsOnline(false);
    }
  }, []);

  return (
    <div
      className={`${
        isOnline ? "bg-gray-400 w-56" : "bg-primary w-44"
      } text-white rounded-full flex justify-center items-center py-3 font-medium text-lg mb-6 shadow-xl duration-[400ms] overflow-hidden relative z-40`}
      onClick={() => {
        setIsOnline(!isOnline);
        if (isJob) {
          setIsJob(false);
          setIsProblem(false);
        }
      }}
    >
      <div
        className={`flex absolute items-center space-x-2 duration-[400ms] animate-pulse ${
          !isOnline && "-translate-y-12 opacity-0"
        }`}
      >
        <FiSearch />
        <span>Searching orders...</span>
      </div>
      <div
        className={`flex items-center space-x-2 duration-[400ms] ${
          isOnline && "translate-y-12 opacity-0"
        }`}
      >
        <FiPower />
        <span>Go Online</span>
      </div>
    </div>
  );
};

export default OnlineButton;
