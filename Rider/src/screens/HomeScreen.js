import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { Colors } from "../styles/Global";
import Header from "../components/Header";
import Icon from "@expo/vector-icons/Feather";
import Stat from "../components/Stat";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import AppContext from "../context/AppContext";

const balance = 2000;
const point = 20;
const passenger = [
  {
    code: 728568,
    location: "From Golpark to Devinagar",
    time: "12min",
  },
];

export default function HomeScreen({ navigation }) {
  const {
    geo: [location],
  } = useContext(AppContext);

  return (
    
    <ScrollView style={styles.conainer}>
      <Header
        iconL="menu"
        iconR="user"
        onPressR={() => navigation.navigate("Profile")}
      />
      <Stat balance={balance} point={point} location="Home" />
      <View style={styles.map}>
        <Text style={styles.map_text}>Your Location</Text>
        <View style={{ marginTop: 16, borderRadius: 16, overflow: "hidden" }}>
          {location?.latitude && (
            <MapView
              style={styles.map_img}
              mapType="standard"
              showsUserLocation={true}
              followsUserLocation={true}
              initialRegion={{
                latitude: location?.latitude,
                longitude: location?.longitude,
                latitudeDelta: 0.00522,
                longitudeDelta: 0.00021,
              }}
            />
          )}
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {passenger.map((data, i) => {
          return (
            <View style={styles.box} key={i}>
              <View style={styles.left}>
                <Text style={styles.title}>Peple In your Area</Text>
                <Text style={styles.code}>Code #{data.code}</Text>
                <Text style={styles.address}>{data.location}</Text>
                <Text style={styles.time}>{data.time}</Text>
              </View>
              <Pressable
                style={styles.right}
                onPress={() => navigation.navigate("Ride")}
              >
                <Icon size={40} name="arrow-right" color={Colors.white} />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.background,
  },
  map: {
    marginVertical: 32,
  },
  map_text: {
    fontFamily: "SemiBold",
    fontSize: 16,
    marginLeft: 8,
    color: Colors.black,
  },
  map_img: {
    height: 200,
    width: "auto",
    borderRadius: 24,
  },
  box: {
    backgroundColor: Colors.white,
    height: "auto",
    padding: 24,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 8,
  },
  left: {},
  title: {
    color: Colors.light_grey,
    fontSize: 18,
    fontFamily: "Bold",
  },
  code: {
    fontFamily: "Bold",
    color: Colors.black,
    fontSize: 16,
    marginTop: 4,
  },
  address: {
    fontFamily: "SemiBold",
    fontSize: 12,
    color: Colors.light_grey,
    fontWeight: "500",
  },
  time: {
    fontFamily: "SemiBold",
    fontSize: 12,
    color: Colors.light_grey,
    fontWeight: "500",
  },
  right: {
    width: 75,
    height: 75,
    backgroundColor: Colors.primary,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
