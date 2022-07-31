import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Pressable,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";
import CodePopup from "../components/CodePopup";
import Header from "../components/Header";

import { getRideData, cancelRide, completeRide } from "../context/api";
import AppContext from "../context/AppContext";

const CodeInputScreen = ({ navigation, route }) => {
  const [rideDetails, setRideDetails] = useState({});
  const [checkvalidation, setCheckValidation] = useState(false);
  const [routes, setRoutes] = useState(null);
  const {
    geo: [location],
  } = useContext(AppContext);

  const { id } = route.params;
  useEffect(() => {
    const data = async () => {
      const rideData = await getRideData(id);
      setRideDetails(rideData);
      setCheckValidation(rideData.ride_validated);
      console.log(rideDetails);
    };
    data();
  });
  return (
    <View style={{ flex: 1 }}>
      {location?.latitude && (
        <MapView
          style={styles.map_img}
          mapType="standard"
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.00522,
            longitudeDelta: 0.00021,
          }}
        />
      )}
      <View
        style={{
          position: "absolute",
          flex: 1,
          paddingHorizontal: 24,
          ...StyleSheet.absoluteFill,
        }}
      >
        <Header iconL="arrow-left" onPressL={navigation.goBack} />

        <CodePopup data={rideDetails} />
        {checkvalidation ? (
          <Pressable
            style={{
              position: "absolute",
              justifyContent: "center",
              backgroundColor: "green",
              width: 120,
              height: 40,
              borderRadius: 20,
              alignSelf: "center",
              bottom: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
              onPress={async () => {
                var data = await completeRide(id);
                const { ride_status } = data;
                console.log(ride_status)
                if (ride_status == "DRIVER_COMPLETED") {
                  alert("Completed");
                  navigation.navigate("Home");
                }
              }}
            >
              Completed
            </Text>
          </Pressable>
        ) : (
          <Pressable
            style={{
              position: "absolute",
              justifyContent: "center",
              backgroundColor: "red",
              width: 120,
              height: 40,
              borderRadius: 20,
              alignSelf: "center",
              bottom: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
              onPress={async() => await cancelRide(id)}
            >
              Cancel Ride
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default CodeInputScreen;

const styles = StyleSheet.create({
  map_img: {
    flex: 1,
    height: Dimensions.get("window").height,
    ...StyleSheet.absoluteFill,
  },
});
