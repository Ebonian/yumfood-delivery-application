import { createContext } from "react";

export const MapState = createContext({
  Map: () => (
    <iframe
      width="100%"
      height="100%"
      src="https://api.mapbox.com/styles/v1/ebonian/ckyx5wt8z000i14nzgggsphev.html?title=false&access_token=pk.eyJ1IjoiZWJvbmlhbiIsImEiOiJja3l4NXA0eGUwZmxmMnZwZmpwYjZ3bXY3In0.AjTuTP62fDzsdPIdScnimg&zoomwheel=false#12/13.7563/100.5018"
      title="Navigation"
    ></iframe>
  ),
});

const MapContext: React.FC = ({ children }) => {
  const Map = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://api.mapbox.com/styles/v1/ebonian/ckyx5wt8z000i14nzgggsphev.html?title=false&access_token=pk.eyJ1IjoiZWJvbmlhbiIsImEiOiJja3l4NXA0eGUwZmxmMnZwZmpwYjZ3bXY3In0.AjTuTP62fDzsdPIdScnimg&zoomwheel=false#12/13.7563/100.5018"
        title="Navigation"
      ></iframe>
    );
  };
  return (
    <MapState.Provider
      value={{
        Map,
      }}
    >
      {children}
    </MapState.Provider>
  );
};

export default MapContext;
