import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { getSuggestions } from "./geocoding";
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
      axios.get("http://192.168.156.235:3001/v1/api/user/62e53aedf1a19219593c078b").then(res =>{
        setUsr(res.data);
        console.log(usr)
      })
      
    } catch (error) {
      
    }
  }
  const getRides = async () =>{
    try {
      axios.get("http://192.168.156.235:3001/v1/api/reqride/getRidesbyUserId/1243").then(res =>{
        setReqride(res.data);
      }).catch(err =>{
        console.log(err);
      })
    } catch (error) { 
      console.log(error);
    }
   
   
  }
  useEffect(() =>{
    getRides();
    getUser();

  },[])

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
