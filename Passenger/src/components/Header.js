import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import Icon from "@expo/vector-icons/Feather";
import Constants from "expo-constants";

import { Colors } from "../styles/Global";

export default function Header({ iconL, iconR, title, onPressR, onPressL, style }) {
  return (
    <View style={[styles.headerContainer, {...style}]}>
      {iconL && (
        <Icon color={Colors.black} size={24} name={iconL} onPress={onPressL} />
      )}
      {title && <Text style={styles.headerText}>{title}</Text>}
      {iconR && (
        <Icon
          color={Colors.black}
          size={40}
          name={iconR}
          style={styles.rightIcon}
          onPress={onPressR}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    marginTop: Constants.statusBarHeight + 40,
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontFamily: "SemiBold",
    color: Colors.black,
    fontSize: 24,
    marginLeft: 24,
  },
  rightIcon: {
    marginLeft: "auto",
  },
});
