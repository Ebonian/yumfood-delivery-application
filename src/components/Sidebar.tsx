import Image from "next/image";
import { useContext } from "react";
import { FiX } from "react-icons/fi";
import { SidebarState } from "../contexts/SidebarContext";
import YumFoodIcon from "../../public/images/icon2.svg";

const Sidebar = () => {
  const { isSidebar, setIsSidebar } = useContext(SidebarState);

  return (
    <div
      className={`flex z-50 absolute top-0 left-0 h-screen w-full duration-300 ${
        isSidebar ? "left-0" : "-left-full"
      }`}
    >
      {/* content */}
      <div className="flex flex-col justify-between h-screen w-[45%] bg-white">
        <div>
          <div className="flex justify-end w-full h-20 p-4">
            {/* <Image src={YumFoodIcon} width={50} height={50} /> */}
            <FiX className="text-xl" />
          </div>
        </div>
      </div>

      {/* background */}
      <div
        className={`flex flex-grow bg-black ${
          isSidebar ? "bg-opacity-20 delay-200 duration-300" : "bg-opacity-0"
        }`}
        onClick={() => setIsSidebar(false)}
      ></div>
    </div>
  );
};

export default Sidebar;
