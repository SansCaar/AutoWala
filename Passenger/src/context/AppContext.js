import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { BASE_OUR_API_URL, getSuggestions } from "./geocoding";
import {api} from "../config/axios.js"
import axios from "axios";

const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [reqride,setReqride] = useState(null);
  const [user, setUser] = useState({
    formData: {
    },
  });

  // For profile jasle aatahucha tyo gayo
  const [usr,setUsr] = useState({})

  const getUser = () =>{
    try {
      axios.get(BASE_OUR_API_URL+"/user/62e53aedf1a19219593c078b").then(res =>{
        setUsr(res.data);
        console.log(usr)
      })
      
    } catch (error) {
      
    }
  }
  const getRides = async () =>{
    try {
      axios.get(BASE_OUR_API_URL+"/reqride/getRidesbyUserId/1243").then(res =>{
        setReqride(res.data);
      }).catch(err =>{
        console.log(err);
      })
    } catch (error) { 
      console.log(error);
    }
   
   
  }
  async function GetLocation() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Error");
      } else {
        let { coords } = await Location.getCurrentPositionAsync({});
        if (coords) {
          setLocation(coords);
          console.log(coords)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    getRides();
    getUser();
    GetLocation();

  },[])

  return (
    <AppContext.Provider
      value={{
        geo: [location, setLocation],
        usr: [user, setUser],
        usrr: [usr, setUsr],
        reride: [reqride,setReqride]
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
