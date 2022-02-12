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

  return (
    <JobState.Provider value={{ job, setJob, isJob, setIsJob }}>
      {children}
    </JobState.Provider>
  );
};

export default JobContext;
