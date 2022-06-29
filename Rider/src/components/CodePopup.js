import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Box from "./Box";
import { Colors } from "../styles/Global";
import Icon from "@expo/vector-icons/Ionicons";
import {getRideData} from "../context/api" 

const CodePopup = ({data}) => {
  const {user_name,time,ride_status,ride_from,ride_to,ride_code,ride_toc } = data;
  return (
    <>
      <Box style={css.container}>
        <View style={css.left}>
          <Text style={css.title}>{ride_status}</Text>
          <Text style={css.name}>{user_name}</Text>
          <Text style={css.location}>From {ride_from} to {ride_to}</Text>
          <Text style={css.distance}>{ride_toc}</Text>
          <Text style={css.code}>#{ride_code}</Text>
        </View>
        <View style={css.right}>
          <Pressable style={{backgroundColor:"#FFD600",...css.btn}}>
              <Icon name="mail" size={28} color={Colors.white}/>
          </Pressable>
          <Pressable style={{backgroundColor:"#78E975",...css.btn}}>
          <Icon name="call" size={28} color={Colors.white}/>
          </Pressable>
        </View>
      </Box>
    </>
  );
};
const css = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontFamily: "SemiBold",
    color: Colors.light_grey,
    fontSize: 18,
    marginBottom: 3,
  },
  name: {
    fontFamily: "Bold",
    color: Colors.black,
    fontSize: 16,
    marginBottom: 1,
  },
  location: {
    fontFamily: "SemiBold",
    color: Colors.light_grey,
    fontSize: 13,
  },
  distance: {
    fontFamily: "SemiBold",
    color: Colors.light_grey,
    fontSize: 13,
  },
  left: {
    flex:1/1.5,
  },
  right: {
    justifyContent:"space-evenly",
    flex:1/5.5
  },
  btn:{
      borderRadius:8,
      height:40,
      justifyContent:"center",
      alignItems:"center",
  },
  code:{
      fontFamily:"Bold",
      fontSize:24,
      marginTop:8,
      color:Colors.primary
  }
});

export default CodePopup;
