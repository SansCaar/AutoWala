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

import React,{useState} from "react";
import Header from "../components/Header";
import Box from "../components/Box";
import { Colors } from "../styles/Global";
import Icon from "@expo/vector-icons/Feather";
import PassengerRequest from "../components/PassengerRequest";
import { getrides  } from "../context/api";

const RidemapScreen =  ({ navigation }) => {
  const [passenger,setPassenger] =useState([]);
  const ride =async ()=>{
    const allrides = await getrides();
    setPassenger(allrides)
  }

  ride();
  console.log(passenger)
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            { 
            passenger.length!=0&&passenger.map( (data, i)=> {
              console.log(data)
            return <PassengerRequest data={data}   navigation={navigation} key={i} />
          })}
          </ScrollView>
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
