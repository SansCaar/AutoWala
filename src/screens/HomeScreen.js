import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Colors } from "../styles/Global";
import Header from "../components/Header";
import DefaultLocationCard from "../components/DefaultLocationCard";

import Icon from "@expo/vector-icons/Feather";

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

export default function HomeScreen() {
  return (
    <View style={styles.conainer}>
      <Header iconL="menu" iconR="user"/>
      <Text style={styles.h1}>Where are you going?</Text>
      <View style={{ flexDirection: "row", marginTop: 16 }}>
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
                style={{ height: 30, width: 30, resizeMode: "contain" }}
                source={require("../../assets/Send.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop:'auto', marginBottom:60}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {defaultAddress.map((address, i) => {
            return (
              <DefaultLocationCard
                key={i}
                iconName={address.icon}
                name={address.name}
                location={address.location}
              />
            );
          })}
          <Pressable style={styles.addPlaceContaier}>
            <Icon name="plus" size={70} color={Colors.black} />
            <Text style={styles.addPlaceText}>Add Place</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.background,
  },
  h1: {
    fontFamily: "Bold",
    fontSize: 24,
    color: Colors.black,
  },
  dotsImage: {
    alignSelf: "center",
    height: "100%",
    marginRight: 24,
    resizeMode: "contain",
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
  addPlaceContaier: {
    width: 180,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderWidth: 3,
    borderRadius: 32,
    marginRight: 8,
  },
  addPlaceText: {
    fontFamily: "SemiBold",
    fontSize: 20,
    color: Colors.black,
  },
});
