import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import React from "react";
import Header from "../components/Header";
import Box from "../components/Box";
import { Colors } from "../styles/Global";
import Icon from "@expo/vector-icons/Feather";
import PassengerRequest from "../components/PassengerRequest";
const passenger = [
  {
    name: "Utsav Bhattarai",
    from: "Devinagr",
    to: "Butwal-8,Golpark",
    noPassenger: 5,
    distance: "2km",
    passengerAway: "120m",
  },
];
const RidemapScreen = ({ navigation }) => {
  return (
    <View style={styles.con}>
      <Header
        onPressL={navigation.goBack}
        iconL="arrow-left"
        iconR="user"
        onPressR={() => navigation.navigate("Profile")}
      />
      <View style={styles.bottomWrapper}>
        <View style={styles.bottom_con}>
          <Text style={styles.b_text}>Ride Request</Text>
          {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
           > */}
          {passenger.map((data, i) => {
            return <PassengerRequest data={data} key={i} />;
          })}
          {/* </ScrollView> */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  con: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.background,
  },
  bottomWrapper: {
    flex: 1,
  },
  bottom_con: {
    width: "100%",
    height: 230,
    position: "absolute",
    bottom: 16,
  },
  b_text: {
    marginLeft: 4,
    fontFamily: "SemiBold",
    fontSize: 16,
  },
});
export default RidemapScreen;
