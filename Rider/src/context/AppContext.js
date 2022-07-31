import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";

const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [user, setUser] = useState({
    formData: {},
  });

  useEffect(() => {
    async function GetLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("hello");
      } else {
        let { coords } = await Location.getCurrentPositionAsync({});
        if (coords) {
          console.log(coords)
          setLocation(coords);
        }
      }
    }
    GetLocation();
    console.log(location)
  }, []);
  return (
    <AppContext.Provider
      value={{
        geo: [location, setLocation],
        usr: [user, setUser],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
