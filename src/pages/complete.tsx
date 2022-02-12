import { NextPage } from "next";
import Header from "../components/Header";
import YumFoodIcon from "../../public/images/icon2.svg";
import Image from "next/image";
import { FiFrown, FiSmile } from "react-icons/fi";
import Driver from "../../public/images/driver.svg";
import Link from "next/link";

const Complete: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between h-screen font-poppins select-none w-full">
        <div className="grid place-content-center mt-16 pt-16">
          <Image src={YumFoodIcon} width={80} height={80} />
          <h1 className="text-xl text-center text-gray-500 font-medium mt-3">
            Delivery complete!
          </h1>
          <div className="pt-6 text-center">
            <Image src={Driver} width={100} height={100} />
          </div>
          <div className="flex flex-col bg-primary rounded-lg bg-opacity-5">
            <div className="flex items-center justify-center p-6 space-x-6 border-b">
              <h3 className="uppercase font-bold text-gray-700 text-sm">
                Trip Earnings
              </h3>
              <h1 className="font-bold text-xl text-primary">THB 312</h1>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col flex-grow border-r pl-6 pr-2 py-4">
                <h3 className="uppercase font-bold text-sm text-gray-700">
                  Total Trip Time
                </h3>
                <h3 className="font-bold text-lg text-primary">12 min</h3>
              </div>
              <div className="flex flex-col flex-grow px-6 py-4">
                <h3 className="uppercase font-bold text-sm text-gray-700">
                  Distance
                </h3>
                <h3 className="font-bold text-lg text-primary">5 km</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <div className="flex flex-col items-center pt-3 pb-8">
            <div className="grid place-content-center">
              <h1 className="text-lg text-gray-500 font-semibold">
                Rate the customer?
              </h1>
              <div className="flex items-center justify-between w-full my-2">
                <FiSmile className="text-gray-300 text-5xl" />
                <FiFrown className="text-gray-300 text-5xl" />
              </div>
            </div>
            <Link href="/home">
              <a className="grid place-content-center py-3 px-12 uppercase rounded-full font-medium bg-primary text-white w-44 my-3">
                SUBMIT
              </a>
            </Link>
            <Link href="/home">
              <a className="font-semibold text-gray-500 uppercase">
                Skip Rating
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Complete;
