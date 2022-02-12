import Image from "next/image";
import { useContext } from "react";
import { FiPower, FiX } from "react-icons/fi";
import { SidebarState } from "../contexts/SidebarContext";
import YumFoodIcon from "../../public/images/icon2.svg";
import { JobState } from "../contexts/JobContext";

const Sidebar = () => {
  const { isSidebar, setIsSidebar } = useContext(SidebarState);
  const { isErr, setIsErr } = useContext(JobState);

  return (
    <div
      className={`flex z-50 absolute top-0 left-0 h-screen w-full duration-300 font-poppins ${
        isSidebar ? "left-0" : "-left-full"
      }`}
    >
      {/* content */}
      <div className="flex flex-col justify-between h-screen w-[45%] bg-white p-4">
        <div>
          <div className="flex justify-end w-full h-20">
            {/* <Image src={YumFoodIcon} width={50} height={50} /> */}
            <FiX className="text-xl" />
          </div>
        </div>
        <div>
          <p onClick={() => setIsErr(!isErr)}>{isErr ? "yes " : "no "}err</p>
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
