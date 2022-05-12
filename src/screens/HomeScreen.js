import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../styles/Global";

export default function HomeScreen() {
  return (
    <View style={styles.conainer}>
      <Text>HomeScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  conainer:{
    flex: 1,
    backgroundColor: Colors.white,
  },
});
