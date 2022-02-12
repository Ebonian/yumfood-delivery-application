import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { LaunchState } from "../contexts/LaunchContext";
import YumFoodIcon from "../components/Icons";

const Home: NextPage = () => {
  const { setIsLaunched } = useContext(LaunchState);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
      setIsLaunched(true);
    }, 4000);
  }, []);

  return (
    <div className="fixed grid place-content-center w-full h-screen bg-primary text-white text-3xl font-semibold font-poppins">
      <YumFoodIcon />
    </div>
  );
};

export default Home;
