import { NextPage } from "next";
import Link from "next/link";

const Pickup: NextPage = () => {
  return (
    <main className="flex flex-col justify-between h-screen font-poppins select-none">
      {/* map */}
      <div className="flex flex-grow bg-gray-800"></div>
      {/* action */}
      <div className="bg-gray-800">
        <div className="w-full px-6 py-8 rounded-t-xl bg-white">
          <div className="flex justify-between items-center">
            <div className="">
              <p className="text-sm text-white font-medium p-1.5 bg-primary bg-opacity-[35%] rounded-lg w-32">
                Order #888454
              </p>
              <h2 className="font-bold text-xl mt-2 text-gray-800">
                Starbucks Megeria
              </h2>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">Distance</p>
              <h3 className="font-bold">1.5 km</h3>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between items-end">
            <div>
              <p className="text-gray-400 text-sm font-medium">
                Order ready to be picked in
              </p>
              <h1 className="text-red-500 font-bold text-2xl">6 min</h1>
            </div>
            <Link href="/home">
              <a className="rounded-full bg-primary text-white font-medium py-2 px-3">
                Start pick-up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pickup;
