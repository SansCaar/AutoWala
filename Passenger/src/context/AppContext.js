import React, { createContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import { BASE_OUR_API_URL, getSuggestions } from "./geocoding";
import { api } from "../config/axios.js";
import axios from "axios";

// async storage
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";
const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [storedUser, setStoredUser] = useState();
  const [location, setLocation] = useState(null);
  const [reqride, setReqride] = useState(null);
  const [user, setUser] = useState({
    formData: {},
  });

  // For profile jasle aatahucha tyo gayo
  const [usr, setUsr] = useState({});

  const getUser = () => {
    try {
      axios
        .get(BASE_OUR_API_URL + "/user/62e53aedf1a19219593c078b")
        .then((res) => {
          setUsr(res.data);
          console.log(usr);
        });
    } catch (error) {}
  };
  const getRides = async () => {
    try {
      axios
        .get(BASE_OUR_API_URL + "/reqride/getRidesbyUserId/1243")
        .then((res) => {
          setReqride(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  async function GetLocation() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Error");
      } else {
        let { coords } = await Location.getCurrentPositionAsync({});
        if (coords) {
          setLocation(coords);
          console.log(coords);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRides();
    getUser();
    GetLocation();
  }, []);

  // for getting the user when ever the locallly stored user value changes
  const getUserDb = () => {
    if (storedUser !== null) {
      axios
        .get(`http://10.0.2.2:3001/v1/api/user/${storedUser}`)
        .then((res) => {
          if (res.status === 200) {
            setUser({
              id: res.data?._id,
              email: res.data?.user_email,
              contact: res.data?.user_contact,
              image: res.data?.user_image,
              name: res.data?.user_name,
              toc: res.data?.user_toc,
              userId: res.data?.user_id,
            });
          }
        })
        .catch((error) => {
          console.log("Fetching the user failed with \n" + error + "\n\n");
        });
    }
  };
  useEffect(() => {
    getUserDb();
    console.log("The stored user is ", storedUser);
  }, [storedUser]);

  // for testing purposes
  useEffect(() => {
    console.log(user);
  }, [user]);

  const getAsyncStore = async () => {
    try {
      let value = await AsyncStorage.getItem("user_id");

      if (value !== null) {
        return value;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAsyncStore()
      .then((res) => setStoredUser(res))
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <AppContext.Provider
      value={{
        geo: [location, setLocation],
        usr: [user, setUser],
        usrr: [usr, setUsr],
        reride: [reqride, setReqride],
        localStorage: {
          user: [storedUser, setStoredUser],
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
