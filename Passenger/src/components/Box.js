import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../styles/Global";
export default function Box({ children, style }) {
  return <View style={[styles.box, { ...style }]}>{children}</View>;
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.white,
    paddingVertical: 24,
    borderRadius: 24,
    paddingHorizontal: 24,
  },
});
