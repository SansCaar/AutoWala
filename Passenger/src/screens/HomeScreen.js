import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Header from "../components/Header";
import { Colors } from "../styles/Global";
import { styles } from "../styles/home_design";

import * as Location from "expo-location";
import Box from "../components/Box";
import DefaultLocationList from "../components/DefaultLocationList";

import MapView from "react-native-maps";

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
  const [location, setLocation] = useState({});

  React.useEffect( () => {
    async function GetLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("hello");
      } else {
        let { coords } = await Location.getCurrentPositionAsync({});
        if (coords) {
          setLocation( coords);
          console.log( coords);
        }
      }
    }
  GetLocation();
  }, []);

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
      <Pressable>
        <Text style={styles.mapHeading}>Your location</Text>
        <View style={{ borderRadius: 24 }}>
          <MapView
            style={styles.map}
            mapType="standard"
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.00522,
              longitudeDelta: 0.00021,
            }}
          />
        </View>
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
