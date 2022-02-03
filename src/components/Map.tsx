import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map: React.FC = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longtitude: -122.4376,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ebonian/ckyx5wt8z000i14nzgggsphev"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPS_TOKEN}
      {...viewport}
      onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
    />
  );
};

export default Map;
