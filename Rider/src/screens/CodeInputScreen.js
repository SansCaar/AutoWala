import React,{useState} from "react";
import { StyleSheet, Text, View, Image, Linking, Pressable } from "react-native";
import CodePopup from "../components/CodePopup";
import Header from "../components/Header";

import { getRideData,cancelRide,completeRide } from "../context/api";
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
    const [checkvalidation,setCheckValidation]=useState(false);

  const { id } = route.params;
 const data = async ()=>{
  const rideData = await  getRideData(id)
  setRideDetails(rideData)
  const {ride_validated}=rideData;
setCheckValidation(ride_validated)
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
{checkvalidation?

        <Pressable style={{
          position:"absolute",
          justifyContent:"center",
          backgroundColor:"green",
          width:120,
          height:40,
          borderRadius:20,
          alignSelf:"center",
          bottom:20,
        }}><Text style={{
          textAlign:"center",
          color:"white"
        }} onPress={async ()=>
        
        {
          
          var data = await completeRide(id)
          const {ride_status}= data;
          if(ride_status=='DRIVER_COMPLETED')
          {
            alert("Completed");
            navigation.navigate("Home")
          }
        }
          }>Completed</Text>
        </Pressable>

           :  <Pressable style={{
          position:"absolute",
          justifyContent:"center",
          backgroundColor:"red",
          width:120,
          height:40,
          borderRadius:20,
          alignSelf:"center",
          bottom:20,
        }}><Text style={{
          textAlign:"center",
          color:"white"
        }} onPress={()=>cancelRide(id)}>Cancel Ride</Text></Pressable> }
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
