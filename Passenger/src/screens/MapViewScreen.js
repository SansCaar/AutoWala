import React, {createRef, useState} from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import Header from "../components/Header";
import { Colors } from "../styles/Global";
import DefaultLocationList from "../components/DefaultLocationList";
import BottomModal from "../components/BottomModal";

const defaultAddress = [
  { 
    icon: "home",
    name: "Home",
    location: "Golpark",
  },
  {
    icon: "briefcase",
    name: "Work",
    location: "Janakinagar",
  },
  {
    icon: "home",
    name: "Home",
    location: "Golpark",
  },
];

export default function MapViewScreen() {
    let popupRef = createRef();

  return (
    <View style={styles.container}>
      <Header iconL="arrow-left"  style={{ paddingHorizontal: 24 }} />
      <View style={{ paddingHorizontal: 24 }}>
        <Text style={styles.h1}>Where are you going?</Text>
        <View style={styles.inputsContainer}>
          <Image
            style={styles.dotsImage}
            source={require("../../assets/locationArt.png")}
          />
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={Colors.grey}
              placeholder="From"
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={{ ...styles.inputStyle, flex: 1 }}
                placeholder="To"
              />
              <Pressable onPress={()=>popupRef.show()} style={styles.sendButton}>
                <Image
                  style={styles.sendButtonImg}
                  source={require("../../assets/Send.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Image
        source={require("../../assets/map2.png")}
        style={styles.map}
        borderTopRightRadius={40}
        borderTopLeftRadius={40}
      />
      <BottomModal animationType="slide" ref={(target)=> popupRef= target}/>
      <DefaultLocationList
        defaultAddress={defaultAddress}
        style={{ position: "absolute", bottom: 0 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 24,
    backgroundColor: Colors.background,
  },
  h1: {
    fontFamily: "Bold",
    fontSize: 24,
    color: Colors.black,
  },
  map: {
    flex: 1,
    // position: "absolute",
    height: "100%",
    width: "100%",
    bottom: 0,
  },
  dotsImage: {
    alignSelf: "center",
    height: "100%",
    marginRight: 16,
    resizeMode: "contain",
  },
  inputsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 40,
  },
  inputStyle: {
    backgroundColor: Colors.white,
    height:46,
    // paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    fontSize: 18,
    color: Colors.black,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  sendButtonImg: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
});
