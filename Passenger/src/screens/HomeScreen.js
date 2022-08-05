import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import MapView, { Marker } from "react-native-maps";

import Header from "../components/Header";
import { Colors } from "../styles/Global";
import Box from "../components/Box";
import DefaultLocationList from "../components/DefaultLocationList";

import { styles } from "../styles/home_design";

import AppContext from "../context/AppContext";
import { getAddress } from "../context/geocoding";

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
  const { geo:[location] } = useContext(AppContext);

  return (
    <ScrollView style={styles.container}>
      <Header
        iconL="menu"
        iconR="user"
        // onPressR={() => navigation.navigate("Profile")}
        // this change was made for testing during the building of the login and register section soon after it is done it will be removed.
        onPressR={() => navigation.navigate("Profile")}
      />
      <View>
        <Text style={styles.h1}>Where are you going?</Text>
        <View style={styles.inputsContainer}>
          <Image
            style={styles.dotsImage}
            source={require("../../assets/locationArt.png")}
          />
          <Pressable
            style={{ flex: 1 }}
            onPress={async () => {
              navigation.navigate("MapView");
            }}
          >
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={Colors.grey}
              placeholder="From"
              editable={false}
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={{ ...styles.inputStyle, flex: 1 }}
                placeholder="To"
                editable={false}
              />
              <View style={styles.sendButton}>
                <Image
                  style={styles.sendButtonImg}
                  source={require("../../assets/Send.png")}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      <Pressable>
        <Text style={styles.mapHeading}>Your location</Text>
        <View style={{ borderRadius: 16, overflow: "hidden", marginTop: 16 }}>
          {location && (
            <MapView
              style={styles.map}
              mapType="standard"
              showsUserLocation={true}
              followsUserLocation={true}
              initialRegion={{
                latitude: location?.latitude,
                longitude: location?.longitude,
                latitudeDelta: 0.00522,
                longitudeDelta: 0.00021,
              }}
              onPress={async (e) => {
                let { latitude, longitude } = e.nativeEvent.coordinate;
                let res = await getAddress(latitude, longitude);
                console.log(res);
              }}
            ></MapView>
          )}
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
