import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Colors } from "../styles/Global";
import Header from "../components/Header";
import Icon from "@expo/vector-icons/Feather";

export default function HomeScreen() {
  return (
    <View style={styles.conainer}>
      <Header iconL="menu" iconR="user"/>
      <Text style={styles.h1}>Where are you going?</Text>
      <View>
        <Image />
        <View>
          <TextInput
            style={styles.inputStyle}
            placeholderTextColor={Colors.grey}
            placeholder="From"
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={{ ...styles.inputStyle, flex: 1, marginTop: 0 }}
              placeholder="To"
            />
            <View
              style={{
                height: 54,
                width: 54,
                backgroundColor: Colors.primary,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 20,
              }}
            >
              <Image
                style={{ height: 30, width: 30, resizeMode: "contain" }}
                source={require("../../assets/Send.png")}
              />
            </View>
          </View>
        </View>
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
  inputStyle: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    fontSize: 18,
    color: Colors.black,
    marginTop: 16,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
