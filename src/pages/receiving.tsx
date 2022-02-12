import { NextPage } from "next";
import Link from "next/link";
import Header from "../components/Header";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";

const Receiving: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between h-screen font-poppins select-none">
        {/* job info */}
        <div className="flex items-start mt-16 px-6 space-x-6 py-8">
          {/* type */}
          <div className="text-3xl text-primary rounded-full p-3 bg-black bg-opacity-[7%]">
            <IoFastFoodOutline />
          </div>
          <div className="space-y-1.5 w-full">
            <h3 className="uppercase text-primary font-semibold text-sm">
              New food delivery
            </h3>
            <div className="w-full flex justify-between items-center">
              {/* title */}
              <h1 className="font-bold text-xl">Starbucks Megeria</h1>
              {/* time */}
              <h3 className="uppercase text-primary font-semibold text-sm">
                10 min
              </h3>
            </div>
            {/* location */}
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* map */}
        <div className="flex flex-grow bg-gray-800"></div>
        {/* action */}
        <div className="bg-gray-800">
          <div className="w-full px-6 py-8 rounded-t-xl bg-white">
            <div className="flex justify-between items-center mb-10 px-2 relative">
              <div className="absolute left-0 right-0 grid place-content-center">
                <div className="grid place-content-center text-2xl w-12 h-12 bg-gray-100 text-gray-500 shadow rounded-full">
                  <AiOutlineShop />
                </div>
              </div>
              <div className="w-3 h-3 rounded-full bg-primary grid place-content-center">
                <span className="mt-10 text-sm text-primary font-semibold">
                  You
                </span>
              </div>
              <div className="flex flex-grow h-[1.75px] bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300 grid place-content-center relative">
                <span className="w-20 mt-10 mr-5 text-sm text-gray-300 font-semibold">
                  Drop-off
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <Link href="/home">
                <a className="grid place-content-center py-3 px-12 uppercase rounded-full font-medium bg-gray-300 text-white">
                  Decline
                </a>
              </Link>
              <Link href="/pickup">
                <a className="grid place-content-center py-3 px-12 uppercase rounded-full font-medium bg-primary text-white">
                  Accept
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Receiving;
