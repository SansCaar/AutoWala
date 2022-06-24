import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

export const ContextProvider = ({children}) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    async function GetLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Error");
      } else {
        let { coords } = await Location.getCurrentPositionAsync({});
        if (coords) {
          setLocation(coords);
        }
      }
    }
    GetLocation();
  }, []);
  return (
    <AppContext.Provider value={{location, setLocation}}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
