import { NextPage } from "next";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import Header from "../components/Header";

const Summary: NextPage = () => {
  const list = ["Java Chip Venti Size", "Spinach Quiche"];
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
            </div>
            {/* location */}
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col flex-grow bg-gray-100 px-6 pt-12">
          <div className="rounded-xl bg-white w-full pt-5 pb-7 px-6">
            <h1 className="font-semibold text-primary text-lg">
              Order #888454
            </h1>
            <h3 className="text-gray-400 text-sm font-medium">3 items</h3>
            <div className="flex justify-between mt-5">
              <div>
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Customer Name
                </h3>
                <h2 className="font-bold text-lg">Tanadon Santisan</h2>
              </div>
              <div>
                <h3 className="text-gray-400 text-xs font-semibold uppercase">
                  Subtotal
                </h3>
                <h2 className="font-bold text-lg">THB 312</h2>
              </div>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4 mb-2.5 italic">
              {`"I'll wait at the guardhouse, Thanks!"`}
            </p>
            <hr />
            <ol className="list-decimal text-primary font-semibold ml-6 mt-4 mr-3 space-y-4 text-sm">
              {list.map((l, i) => (
                <li key={i}>
                  <div className="flex justify-between">
                    <p>{l}</p>
                    <FiCheckCircle className="text-xl" />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="p-6 bg-gray-100">
          <Link href="/complete">
            <a className="grid place-content-center uppercase text-white font-medium rounded-full bg-primary py-[14px] px-12">
              Complete Delivery
            </a>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Summary;
