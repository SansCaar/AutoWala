import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

import React, { useState, useContext, useEffect, useRef } from "react";
import Header from "../components/Header";
import { Colors } from "../styles/Global";
import PassengerRequest from "../components/PassengerRequest";
import { getrides, getRoutes } from "../context/api";
import MapView, { Marker } from "react-native-maps";
import AppContext from "../context/AppContext";

const RidemapScreen = ({ navigation }) => {
  const [passengers, setPassengers] = useState([]);

  const {
    geo: [location],
  } = useContext(AppContext);

  const fitAllMarkers = () => {
    if (passengers.length > 0) {
      let latLongs = passengers?.map((passenger) => ({
        latitude: passenger?.user_fromlatitude,
        longitude: passenger?.user_fromlongitude,
      }));
      console.log(latLongs);
      _map?.current.fitToCoordinates(latLongs, {
        edgePadding: {
          top: 100,
          right: 0,
          bottom: 200,
          left: 0,
        },
        animated: false,
      });
    }
  };
  useEffect(() => {
    async function ride() {
      const allrides = await getrides();
      setPassengers(await allrides);
      console.log(passengers);
    }
    ride();
  }, []);
  const _map = useRef();

  return (
    <View style={styles.con}>
      <MapView
        style={{
          flex: 1,
          height: Dimensions.get("window").height,
          ...StyleSheet.absoluteFill,
        }}
        initialRegion={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.00522,
          longitudeDelta: 0.00021,
        }}
        onLayout={passengers ? fitAllMarkers() : null}
        ref={_map}
        mapType="standard"
        showsUserLocation={true}
      >
        {passengers?.map((passenger, index) => {
          console.log(passenger);
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: passenger?.user_fromlatitude,
                longitude: passenger?.user_fromlongitude,
              }}
            />
          );
        })}
      </MapView>
      <Header
        onPressL={navigation.goBack}
        iconL="arrow-left"
        iconR="user"
        onPressR={() => navigation.navigate("Profile")}
      />
      <View style={styles.bottomWrapper}>
        {passengers.length > 0 && (
          <View style={styles.bottom_con}>
            <Text style={styles.b_text}>Ride Request</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {passengers?.map((data, i) => {
                return (
                  <PassengerRequest
                    data={data}
                    navigation={navigation}
                    key={i}
                  />
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  con: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.background,
  },
  bottomWrapper: {
    flex: 1,
  },
  bottom_con: {
    width: "100%",
    height: 230,
    position: "absolute",
    bottom: 16,
  },
  b_text: {
    marginLeft: 4,
    fontFamily: "SemiBold",
    fontSize: 16,
  },
});
export default RidemapScreen;
