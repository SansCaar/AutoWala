import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Box from "./Box";
import { Colors } from "../styles/Global";
import Icon from "@expo/vector-icons/Ionicons";


const CodePopup = ({data}) => {
  const {title,name,from, to,time,code} = data;
  return (
    <>
      <Box style={css.container}>
        <View style={css.left}>
          <Text style={css.title}>{title}</Text>
          <Text style={css.name}>{name}</Text>
          <Text style={css.location}>From {from} to {to}</Text>
          <Text style={css.distance}>{time}</Text>
          <Text style={css.code}>#{code}</Text>
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
    flex:1/2,
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
