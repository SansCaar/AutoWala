import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import Header from "../components/Header";
import { Colors } from "../styles/Global";
import { styles } from "../styles/home_design";

import Box from "../components/Box";
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

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Header
        iconL="menu"
        iconR="user"
        onPressR={() => navigation.navigate("Profile")}
      />
      <View>
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
      <Pressable onPress={() => navigation.navigate("MapView")}>
        <Text style={styles.mapHeading}>Your location</Text>
        <Image source={require("../../assets/map.png")} style={styles.map} />
      </Pressable>
      <Box style={styles.pointsContainer}>
        <View
          style={{ flex: 1, height: "auto", justifyContent: "space-between" }}
        >
          <Text style={styles.pointsTitle}>Your Points</Text>
          <Text style={styles.pointsValue}>
            2000<Text style={{ fontSize: 18 }}>points</Text>
          </Text>
        </View>
        <Pressable style={styles.pointsButton}>
          <Text style={styles.pointsButtonText}>Add</Text>
        </Pressable>
      </Box>
      <DefaultLocationList
        defaultAddress={defaultAddress}
        style={{ marginLeft: -16 }}
      />
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={Colors.background}
      />
    </ScrollView>
  );
}
