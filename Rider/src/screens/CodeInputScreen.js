import React,{useState} from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import CodePopup from "../components/CodePopup";
import Header from "../components/Header";
import { getData } from "../context/api";
// const rideDetails = {
//   title: "Your Ride",
//   name: "Ram Prasad",
//   from: "Golpark",
//   to: "Devinagar",
//   time: "12min",
//   code: 12345,
//   phoneNumber: "+9779847000000",
// };
const CodeInputScreen = ({ navigation, route }) => {
    const [rideDetails,setRideDetails]=useState({});
//   const { rideID } = route.params;
//   console.log(rideID);
 const data =async ()=>{
  const rideData = await  getData('62bbc361a6fd7f99ca291e4c')
  setRideDetails(rideData)
 }
data();
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

      
        <CodePopup data={rideDetails} />
      </View>
    </View>
  );
};

export default CodeInputScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    // position: "absolute",
    height: "100%",
    width: "100%",
    bottom: 0,
  },
});
