import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Linking ,Pressable } from "react-native";
import CodePopup from "../components/CodePopup";
import Header from "../components/Header";
import { cancelRide, getRideData} from "../context/geocoding";

const rideDetails = {
  title: "Your Ride",
  name: "Ram Prasad",
  from: "Golpark",
  to: "Devinagar",
  time: "12min",
  code: 12345,
  phoneNumber: "+9779847000000",
};
const RideScreen = ({ navigation, route }) => {
  const { id } = route.params;
  useEffect(()=>{
    let data = getRideData(id);
    setRideData(data)
    console.log(data);
  })
  const [rideData, setRideData] = useState({});
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../../assets/map2.png")} style={styles.map} />
      <View
        style={{
          position: "absolute",
          flex: 1,
          paddingHorizontal: 24,
          ...StyleSheet.absoluteFill,
        }}
      >
        <Header iconL="arrow-left" onPressL={navigation.goBack} />
        <CodePopup {...rideDetails} />
        {!rideData.ride_validated && <Pressable
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
          </Pressable>}
      </View>
    </View>
  );
};

export default RideScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    // position: "absolute",
    height: "100%",
    width: "100%",
    bottom: 0,
  },
});
