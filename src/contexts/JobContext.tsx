import { createContext, useState } from "react";

export const JobState = createContext({
  job:
    {} || {
      id: 0,
      type: "",
      title: "",
      location: {
        pickup: "",
        dropoff: "",
      },
      time: 0,
      distance: {
        pickup: 0,
        dropoff: 0,
      },
    } ||
    null,
  setJob: (job: any) => {},
  isJob: false,
  setIsJob: (isJob: boolean) => {},
  isErr: false,
  setIsErr: (isErr: boolean) => {},
  isProblem: false,
  setIsProblem: (isProblem: boolean) => {},
});

const JobContext: React.FC = ({ children }) => {
  const jobList = [
    {
      id: 0,
      type: "",
      title: "",
      location: {
        pickup: "",
        dropoff: "",
      },
      time: 0,
      distance: {
        pickup: 0,
        dropoff: 0,
      },
    },
    {},
  ];

  const [job, setJob] = useState(null);
  const [isJob, setIsJob] = useState(false);

  const [isErr, setIsErr] = useState(false);
  const [isProblem, setIsProblem] = useState(false);

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
      }}
    >
      {children}
    </JobState.Provider>
  );
};

export default JobContext;
