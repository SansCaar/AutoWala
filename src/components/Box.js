import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../styles/Global";
export default function Box(){
    return(
        <View style={cstyles.box}>

        </View>
    )
}
const cstyles = StyleSheet.create({
    backgroundColor:Colors.white,
    height:"auto",
    paddingVertical:24,
    borderRadius:24,
    paddingHorizontal:24,
    flex:1
})