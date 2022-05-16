import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import Header from "../components/Header";
import { Colors } from "../styles/Global";
import DefaultLocationList from "../components/DefaultLocationList";

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
  return (
    <View style={styles.container}>
      <Header iconL="arrow-left" v style={{ paddingHorizontal: 24 }} />
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
              <View style={styles.sendButton}>
                <Image
                  style={styles.sendButtonImg}
                  source={require("../../assets/Send.png")}
                />
              </View>
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
    marginRight: 24,
    resizeMode: "contain",
  },
  inputsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 40,
  },
  inputStyle: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
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
    height: 54,
    width: 54,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  sendButtonImg: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});
