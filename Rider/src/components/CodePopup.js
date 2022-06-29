import { View, Text, StyleSheet, Pressable, TextInput,Image } from "react-native";
import React from "react";
import Box from "./Box";
import { Colors } from "../styles/Global";
import Icon from "@expo/vector-icons/Ionicons";
import {getRideData} from "../context/api" 
import Icons from "@expo/vector-icons/Feather";

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

          <View style ={{flex:1,flexDirection:"row",marginBottom:40,marginTop:10}}>
        <TextInput  style={{flex:1,height:40,width:150,borderRadius:20,borderBottomColor:"black",borderWidth:2,paddingLeft:20,}}
        placeholder="4  digit Pin"
        />
        <Pressable
                  onPress={() => {
                    if (from?.latitude && to?.latitude) {
                      popupRef.show();
                    }
                  }}
                  style={{  height: 40,
                    width: 40,
                    flex:0.4,
                    backgroundColor: Colors.primary,
                    borderRadius: 25,
                    alignItems: "center",
                    
                    justifyContent: "center",
                    marginLeft: 20
                  }}
                >
                  <Image
                    style={{ height: 24,
                      width: 24,
                      resizeMode: "contain",}}
                    source={require("../../assets/Send.png")}
                  />
                </Pressable>
                </View>
             
          {/* <Text style={css.code}>#{ride_code}</Text> */}
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
    justifyContent:"flex-start",
    flex:1/5.5,
  },
  btn:{
      borderRadius:8,
      height:40,
          marginTop:10,

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
