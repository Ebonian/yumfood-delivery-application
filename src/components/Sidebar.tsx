import { useContext } from "react";
import { FiPower, FiX } from "react-icons/fi";
import { SidebarState } from "../contexts/SidebarContext";
import { JobState } from "../contexts/JobContext";

const Sidebar = () => {
  const { isSidebar, setIsSidebar } = useContext(SidebarState);
  const { isErr, setIsErr, addJob, originJob } = useContext(JobState);

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
            <FiX className="text-xl" onClick={() => setIsSidebar(false)} />
          </div>
        </div>
        <div className="space-y-10">
          <p onClick={addJob}>newJob</p>
          <p onClick={originJob}>originJob</p>
          <p onClick={() => setIsErr(!isErr)}>{isErr ? "yes" : "no"}Err</p>
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
