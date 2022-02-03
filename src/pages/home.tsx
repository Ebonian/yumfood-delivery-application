import { NextPage } from "next";
import Link from "next/link";
import { useContext } from "react";
import { MapState } from "../contexts/MapContext";
import { FiPower } from "react-icons/fi";

const Home: NextPage = () => {
  const { Map } = useContext(MapState);
  return (
    <main className="select-none">
      <div className="grid fixed top-0 left-0 right-0 place-content-center w-full h-16 bg-primary text-white text-xl font-semibold z-50">
        <h1>Yumfood</h1>
      </div>
      <div className="fixed top-0 right-0 left-0 h-[115vh] z-0 -mt-20">
        <Map />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center z-50 p-3 bg-gradient-to-b from-[#ffffff00] to-[#40404080]">
        <div className="bg-primary text-white rounded-full flex items-center py-3 px-8 space-x-2 font-medium text-lg mb-6 shadow-xl">
          <FiPower />
          <span>Go Online</span>
        </div>
        <div className="bg-white h-40 w-full shadow-xl rounded-3xl p-4">
          top section
        </div>
      </div>
      <div className="h-screen" />
      <div className="h-[50vh] relative bg-[#40404080]">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex z-50 p-3">
          <div className="bg-white h-full w-full shadow-xl rounded-3xl p-4">
            bottom section
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
