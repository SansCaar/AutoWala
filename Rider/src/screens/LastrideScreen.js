import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../styles/Global";
import Icon from "@expo/vector-icons/Feather";
import Header from "../components/Header.js";
import ListBox from "../components/ListBox";

const listData = [
  {
    type: "charge",
    date: "20 Mar 2020",
    balance: 1001,
    payment_method: "esewa",
    add_balance: "30",
  },
  {
    type: "charge",
    date: "20 Mar 2020",
    balance: 1001,
    payment_method: "esewa",
    add_balance: "20",
  },
];
const LastrideScreen = () => {

  return (
    // <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <Header iconL="arrow-left" title={"Last Ride"} />
      <View style={{ marginTop: 16,height:300}}>
        <ListBox
          title="2072/10/12"
          data={listData}
        />
      </View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    flex:1
  },
});

export default LastrideScreen;
