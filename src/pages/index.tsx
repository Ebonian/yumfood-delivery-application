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
