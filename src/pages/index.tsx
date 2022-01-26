import { NextPage } from "next";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Launch from "../components/launch";
import Link from "next/link";

const Home: NextPage = () => {
  let load = useRef(null);

  useEffect(() => {
    gsap.to(load, 0.5, {
      opacity: 0,
      display: "none",
      delay: 3,
    });
  }, []);

  return (
    <>
      <div
        ref={(el: any) => {
          load = el;
        }}
      >
        <Launch />
      </div>
      <div className="grid place-content-center w-full h-16 bg-primary text-white text-xl font-semibold">
        <h1>Yumfood</h1>
      </div>
      <div>
        <h1>Hello World!</h1>
        <Link href="/receiving">
          <a>Receiving</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
