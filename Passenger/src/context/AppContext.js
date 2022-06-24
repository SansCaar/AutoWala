import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { getSuggestions } from "./geocoding";

const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    async function GetLocation() {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Error");
        } else {
          let { coords } = await Location.getCurrentPositionAsync({});
          if (coords) {
            setLocation(coords);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    GetLocation();
  }, []);
  return (
    <AppContext.Provider value={{ location, setLocation }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
