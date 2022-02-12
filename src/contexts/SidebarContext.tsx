import { createContext, useState } from "react";

export const SidebarState = createContext({
  isSidebar: false || true,
  setIsSidebar: (isSidebar: boolean) => {},
});

const SidebarContext: React.FC = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <SidebarState.Provider value={{ isSidebar, setIsSidebar }}>
      {children}
    </SidebarState.Provider>
  );
};

export default SidebarContext;
