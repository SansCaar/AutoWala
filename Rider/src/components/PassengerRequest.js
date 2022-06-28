import { View, Text, StyleSheet,Image,Pressable, Dimensions } from "react-native";
import React from "react";
import { Colors } from "../styles/Global";
import Icon from "@expo/vector-icons/Feather";
import Box from "../components/Box";
import {setAccepted} from "../context/api"

const PassengerRequest = ({data}) => {
  
    const {_id,ride_status,ride_noofseats,user_fromlatitude,user_tolatitude} = data;
    console.log(data)
  return (
    <Box style={styles.box} >
      <View style={styles.left}>
        <Text style={styles.l_text}>{ride_status}</Text>
        <View style={styles.mid}>
          <Image
            source={require("../../assets/locationArt.png")}
            style={styles.l_img}
          />
          <View style={styles.l_location}>
            <Text style={{ fontFamily: "Regular" }}>{user_fromlatitude}</Text>
            <Text style={{ fontFamily: "Regular" }}>
              {user_tolatitude}{"  "}{" "}
              <Text style={{ color: Colors.light_grey }}></Text>
            </Text>
          </View>
        </View>
        <Text style={styles.text}>No. of Passenger: {ride_noofseats}</Text>
        <Text style={styles.text}>
          Total Price: 25*{ride_noofseats} ={" "}
          <Text style={{ color: "#78E975", ...styles.text }}>{25*ride_noofseats}</Text>
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.r_text}>{ride_status} away</Text>
        <Pressable onPress={ async()=>{
          
         var data =await setAccepted(_id)
      
         }} style={{ backgroundColor: "#78E975", ...styles.btn }}>
          <Icon name="check" size={32} color={Colors.white} />
        </Pressable>
        <Pressable style={{ backgroundColor: "#FF3838", ...styles.btn }}>
          <Icon name="x" size={32} color={Colors.white} />
        </Pressable>
      </View>
    </Box>
  );
};
const styles = StyleSheet.create({
  box: {
    width:"100%",
    height: "auto",
    flex:1,
    marginVertical: 8,
    elevation: 5,
    alignItems: "center",
    flexDirection: "row",
    marginRight:8,
  },
  l_text: {
    fontFamily: "Bold",
    fontSize: 24,
    color: Colors.black,
  },
  mid: {
    marginVertical: 8,
    height: "auto",
    alignItems: "center",
    flex: 1.5,
    flexDirection: "row",
  },
  left: {
    height: "auto",
    flex: 1 / 1.6,
  },
  right: {
    alignSelf: "flex-end",
    flex: 1 / 4,
    marginLeft:50,
    flexDirection: "column",
  },
  r_text: {
    fontFamily: "SemiBold",
    color: Colors.light_grey,
    fontSize: 14,
  },
  btn: {
    marginTop: 12,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "SemiBold",
    fontSize: 14,
  },
  l_img: {
    height: "100%",
    width: 19,
    marginRight: 24,
  },
  l_location: {
    justifyContent:"space-between",
    flex: 1,
    height:"100%"
  },
});

export default PassengerRequest;
