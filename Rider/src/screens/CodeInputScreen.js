import React, { useState, useContext, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Pressable,
  Dimensions,
  Alert,
  Button,
} from "react-native";
import MapView, { Polyline } from "react-native-maps";
import CodePopup from "../components/CodePopup";
import Header from "../components/Header";

import {
  getRideData,
  cancelRide,
  completeRide,
  getRoutes,
} from "../context/api";
import AppContext from "../context/AppContext";
import { Colors } from "../styles/Global";

const CodeInputScreen = ({ navigation, route }) => {
  const {
    geo: [location],
  } = useContext(AppContext);

  const { id } = route.params;
  const [rideDetails, setRideDetails] = useState({});
  const [checkvalidation, setCheckValidation] = useState(false);

  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const [routes, setRoutes] = useState(null);

  function renderPolyLine(routes) {
    return (
      <Polyline
        coordinates={routes ? [...routes] : []}
        strokeColor={Colors.primary} // fallback for when `strokeColors` is not supported by the map-provider
        strokeWidth={5}
      />
    );
  }
  useEffect(() => {
    const data = async () => {
      const rideData = await getRideData(id);
      setRideDetails(rideData);
      setCheckValidation(rideData.ride_validated);
      console.log(rideDetails);

      if (checkvalidation) {
      }
    };
    if (rideDetails?.user_fromlatitude && rideDetails.user_tolongitude) {
      console.log(
        rideDetails.user_fromlatitude + " " + rideDetails.user_fromlongitude
      );
      const res = getRoutes(
        {
          latitude: rideDetails.user_tolatitude,
          longitude: rideDetails.user_tolongitude,
        },
        {
          latitude: rideDetails.user_fromlatitude,
          longitude: rideDetails.user_fromlongitude,
        }
      );
      setRoutes(res);
      console.log(routes);
    }
    data();
  }, [rideDetails]);

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
        >
          {routes && renderPolyLine(routes)}
        </MapView>
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
            onPress={() => {
              Alert.alert(
                "Ride Completed",
                "Your ride has been completed. ",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "Ok",
                    onPress: async () => {
                      await completeRide(id);
                      await navigation.navigate("Home");
                    },
                  },
                ],
                { cancelable: true }
              );
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
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
            onPress={() => {
              console.log("hello ");
              Alert.alert(
                "Ride Cnaceled",
                "Your ride has been cancelled. You are requested not to cancel any rides if ",
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "Ok",
                    onPress: async () => {
                      Promise.all([
                        await cancelRide(id),
                        await navigation.navigate("Home"),
                      ]);
                    },
                  },
                ],
                { cancelable: true }
              );
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
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
