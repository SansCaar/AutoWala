import React from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import CodePopup from "../components/CodePopup";
import Header from "../components/Header";

const rideDetails = { title: 'Your Ride', name:"Ram Prasad", from:"Golpark", to:"Devinagar", time:"12min", code:12345, phoneNumber:'+9779847000000' };
const RideScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../../assets/map2.png")} style={styles.map} />
      <View style={{ position: "absolute", flex:1, paddingHorizontal: 24, ...StyleSheet.absoluteFill }}>
        <Header iconL="arrow-left" onPressL={navigation.goBack} />
        <CodePopup {...rideDetails}/>
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
