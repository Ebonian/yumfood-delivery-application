import { createContext, useState } from "react";
import orders from "../data/orders.json";

export const JobState = createContext({
  job:
    {} || {
      id: 0,
      type: "",
      title: "",
      customer: "",
      dropoff: "",
      time: {
        pickup: 0,
        dropoff: 0,
      },
      earn: 0,
      location: {
        pickup: "",
        dropoff: "",
      },
      distance: {
        pickup: 0,
        dropoff: 0,
      },
      orders: [""],
    } ||
    null,
  setJob: (job: any) => {},
  isJob: false,
  setIsJob: (isJob: boolean) => {},
  isErr: false,
  setIsErr: (isErr: boolean) => {},
  isProblem: false,
  setIsProblem: (isProblem: boolean) => {},
  jobIsActive: false,
  setJobIsActive: (jobIsActive: boolean) => {},
  addJob: () => {},
  originJob: () => {},
  pickup: false,
  setPickup: (pickup: boolean) => {},
  dropoff: false,
  setDropoff: (dropoff: boolean) => {},
});

const JobContext: React.FC = ({ children }) => {
  const jobList = orders;

  const [job, setJob] = useState(jobList[0]);
  const [isJob, setIsJob] = useState(false);

  const [isErr, setIsErr] = useState(false);
  const [isProblem, setIsProblem] = useState(false);

  const [jobIsActive, setJobIsActive] = useState(false);

  const [jobIdx, setJobIdx] = useState(0);

  const [pickup, setPickup] = useState(false);
  const [dropoff, setDropoff] = useState(false);

  const addJob = () => {
    setJobIdx(jobIdx + 1);
    setJob(jobList[jobIdx]);
  };

  const originJob = () => {
    setJobIdx(0);
    setJob(jobList[0]);
  };

  return (
    <JobState.Provider
      value={{
        job,
        setJob,
        isJob,
        setIsJob,
        isErr,
        setIsErr,
        isProblem,
        setIsProblem,
        jobIsActive,
        setJobIsActive,
        addJob,
        originJob,
        pickup,
        setPickup,
        dropoff,
        setDropoff,
      }}
    >
      {children}
    </JobState.Provider>
  );
};

export default JobContext;
