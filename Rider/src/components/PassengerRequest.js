import { View, Text, StyleSheet,Image,Pressable } from "react-native";
import React from "react";
import { Colors } from "../styles/Global";
import Icon from "@expo/vector-icons/Feather";
import Box from "../components/Box";


const PassengerRequest = ({data}) => {
  console.log(data)
    const {_id,ride_available} = data;
  return (
    <Box style={styles.box} key={key}>
      <View style={styles.left}>
        <Text style={styles.l_text}>{name}</Text>
        <View style={styles.mid}>
          <Image
            source={require("../../assets/locationArt.png")}
            style={styles.l_img}
          />
          <View style={styles.l_location}>
            <Text style={{ fontFamily: "Regular" }}>{to}</Text>
            <Text style={{ fontFamily: "Regular" }}>
              {from}{"  "}{" "}
              <Text style={{ color: Colors.light_grey }}>({distance})</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.text}>No. of Passenger: {noPassenger}</Text>
        <Text style={styles.text}>
          Total Price: 25*5 ={" "}
          <Text style={{ color: "#78E975", ...styles.text }}>125</Text>
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.r_text}>{ride_available} away</Text>
        <Pressable style={{ backgroundColor: "#78E975", ...styles.btn }}>
          <Icon name="check" size={32} color={Colors.white} />
        </Pressable>
        <Pressable style={{ backgroundColor: "#FF3838", ...styles.btn }}>
          <Icon name="x" size={32} color={Colors.white} />
        </Pressable>
      </View>
    </Box>
  );
};
const styles = StyleSheet.create({
  box: {
    height: "auto",
    marginVertical: 8,
    elevation: 2,
    flex:1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginRight:8,
  },
  l_text: {
    fontFamily: "Bold",
    fontSize: 24,
    color: Colors.black,
  },
  mid: {
    marginVertical: 8,
    height: "auto",
    alignItems: "center",
    flex: 1.5,
    flexDirection: "row",
  },
  left: {
    height: "auto",
    flex: 1 / 1.6,
  },
  right: {
    alignSelf: "flex-end",
    flex: 1 / 4,
    flexDirection: "column",
  },
  r_text: {
    fontFamily: "SemiBold",
    color: Colors.light_grey,
    fontSize: 14,
  },
  btn: {
    marginTop: 12,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "SemiBold",
    fontSize: 14,
  },
  l_img: {
    height: "100%",
    width: 19,
    marginRight: 24,
  },
  l_location: {
    justifyContent:"space-between",
    flex: 1,
    height:"100%"
  },
});

export default PassengerRequest;
