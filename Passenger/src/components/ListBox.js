import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Colors } from "../styles/Global";

const ListBox = ({ data }) => {
  const field = data.ride_toc.split("T");
  const date = field[0];
  var time = field[1];
  return (
    <>
    <Text style={styles.title}>{date}</Text>
      <View style={styles.box}>
        <View style={styles.img_wrapper}>
          <Image
            source={require("../../assets/auto.png")}
            style={styles.left_1}
          />
        </View>
        <View style={styles.mid}>
          <Text style={styles.msg}>Ride Charge</Text>
          <Text style={styles.date}>{time}</Text>
          <Text style={styles.location}>
            From {data.ride_from} to {data.ride_to}
          </Text>
          <Text style={styles.balance}>Ride Code: #{data.ride_code}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Bold",
    fontSize: 16,
    marginLeft: 8,
  },
  box: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24,
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left_1: {
    width: 45,
    height: 30,
  },
  left_2: {
    width: 35,
    height: 35,
  },
  mid: {
    flex: 3,
    flexDirection: "column",
  },
  msg: {
    fontFamily: "Bold",
    fontSize: 16,
    color: "rgba(43, 43, 43, 1)",
  },
  date: {
    fontFamily: "Regular",
    fontSize: 12,
    color: Colors.grey,
  },
  balance: {
    fontFamily: "Regular",
    fontSize: 12,
    color: Colors.grey,
  },
  location: {
    fontFamily: "Regular",
    fontSize: 12,
    color: Colors.grey,
  },
  right_1: {
    textAlign: "right",
    flex: 0.8,
    fontSize: 16,
    fontFamily: "SemiBold",
    color: "rgba(120, 233, 117, 1)",
  },
  right_2: {
    textAlign: "right",
    flex: 0.8,
    fontSize: 16,
    fontFamily: "SemiBold",
    color: "rgba(255, 56, 56, 1)",
  },
  img_wrapper: {
    flex: 1,
  },
});

export default ListBox;
