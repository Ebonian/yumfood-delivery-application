import { createContext, useState } from "react";

export const LaunchState = createContext({
  isLaunched: false,
  setIsLaunched: (isLaunched: boolean) => {},
});

const LaunchContext: React.FC = ({ children }) => {
  const [isLaunched, setIsLaunched] = useState(false);
  return (
    <LaunchState.Provider
      value={{
        isLaunched,
        setIsLaunched,
      }}
    >
      {children}
    </LaunchState.Provider>
  );
};

export default LaunchContext;
