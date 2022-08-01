import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { getSuggestions } from "./geocoding";

// async storage
import AsyncStorage from "@react-native-async-storage/async-storage";


import axios from "axios"; 
const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [storedUser, setStoredUser] = useState();
  const [location, setLocation] = useState(null);
  const [user, setUser] = useState({
    formData: {},
  });

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

  // for getting the user when ever the locallly stored user value changes

  useEffect(() => {
    if (storedUser !== null) {
      axios
        .get(`http://10.0.2.2:3001/v1/api/user/${storedUser}`)
        .then((res) => {
          if (res.status === 200) {
            setUser({
              id: res.data?.user?._id,
              email: res.data?.user?.user_email,
              contact: res.data?.user?.user_contact,
              image: res.data?.user?.user_image,
              name: res.data?.user?.user_name,
              toc: res.data?.user?.user_toc,
              userId: res.data?.user_id,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    console.log({
      storedUser,
    });
  }, [storedUser]);


  useEffect(()=>{
    setStoredUser(()=>{
      let value = await AsyncStorage.getItem("user_id");
      if(value!== null)
        return value;
    })
  } , [])
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
