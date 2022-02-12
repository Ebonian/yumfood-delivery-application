import { useContext } from "react";
import { FiMenu, FiUser } from "react-icons/fi";
import { SidebarState } from "../contexts/SidebarContext";

interface Props {
  page?: string;
}

const Header: React.FC<Props> = ({ page }) => {
  const { setIsSidebar } = useContext(SidebarState);
  return (
    <div className="grid fixed top-0 left-0 right-0 place-content-center w-full h-16 bg-primary text-xl font-poppins font-semibold z-40">
      <h1 className="text-white">Yumfood</h1>
      {page === "home" && (
        <div
          className="absolute flex items-center justify-between top-3 left-3 bg-white w-20 h-10 rounded-full pl-3 pr-2 py-1"
          onClick={() => setIsSidebar(true)}
        >
          <FiMenu />
          <div className="grid place-content-center h-full w-[30px] rounded-full bg-gray-200 text-gray-400">
            <FiUser />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
