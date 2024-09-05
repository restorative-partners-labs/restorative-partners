import React, { createContext, useState } from "react";

export const MapContext = createContext(null);
const MapDirectionProvider = ({ children }) => {
  const [mapDirection, setMapDirection] = useState([35.270378, -120.680656]);
  return (
    <MapContext.Provider value={{ mapDirection, setMapDirection }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapDirectionProvider;
