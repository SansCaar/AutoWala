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
import Icon from "@expo/vector-icons/Feather";
import Stat from "../components/Stat";
const balance = 2000;
const point = 20;
const passenger = [
  {
    code: 728568,
    location: "From Golpark to Devinagar",
    time: "12min",
  },
  
];

export default function HomeScreen() {
  return (
    <View style={styles.conainer}>
      <Header iconL="menu" iconR="user" />
      <Stat balance={balance} point={point} location="Home" />
      <View style={styles.map}>
        <Text style={styles.map_text}>Your Location</Text>
        <View style={{ marginTop: 16 }}>
          <Image
            source={require("../../assets/map.png")}
            style={styles.map_img}
          />
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
              <View style={styles.right}>
                <Icon size={40} name="arrow-right" color={Colors.white} />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
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
    width: "100%",
    borderRadius: 8,
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
