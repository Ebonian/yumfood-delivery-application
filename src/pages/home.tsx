import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { MapState } from "../contexts/MapContext";
import Header from "../components/Header";
import OnlineButton from "../components/OnlineButton";
import { initializeMap } from "../../map/initializeMap";
import Jobs from "../components/Jobs";
import HomeTopTile from "../components/HomeTopTile";
import Sidebar from "../components/Sidebar";

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

const Home: NextPage = () => {
  // const { Map } = useContext(MapState);

  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();

  mapboxgl.accessToken =
    "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA";

  useEffect(() => {
    setPageIsMounted(true);

    let map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [100.523186, 13.736717],
      zoom: 18,
      // pitch: 75,
      // maxBounds: [
      //   [-77.875588, 38.50705], // Southwest coordinates
      //   [-76.15381, 39.548764], // Northeast coordinates
      // ],
    });

    initializeMap(mapboxgl, map);
    setMap(map);
  }, []);

  mapboxgl.accessToken =
    "pk.eyJ1IjoiZWJvbmlhbiIsImEiOiJja3l4NXA0eGUwZmxmMnZwZmpwYjZ3bXY3In0.AjTuTP62fDzsdPIdScnimg";
  return (
    <>
      <Sidebar />
      <Header page="home" />
      <main className="select-none font-poppins">
        <div className="fixed top-0 right-0 left-0 h-[115vh] z-0 -mt-20">
          <div id="my-map" className="w-full h-full" />
          {/* <Map /> */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center z-30 p-3 bg-gradient-to-b from-[#ffffff00] to-[#40404080]">
          {/* <Jobs /> */}
          <OnlineButton />
          <HomeTopTile />
        </div>
        {/* bottom tile */}
        {/* <div className="h-screen" /> */}
        {/* <div className="h-[50vh] relative bg-[#40404080]">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex z-40 p-3">
          <div className="bg-white h-full w-full shadow-xl rounded-lg p-4">
            bottom section
          </div>
        </div>
      </div> */}
      </main>
    </>
  );
};

export default Home;
