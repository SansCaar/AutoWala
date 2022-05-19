import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { Colors } from "../styles/Global";

const DefaultLocationCard = ({ name, location, iconName }) => {
  return (
    <Pressable style={styles.locationContainer}>
      <View style={styles.iconContainer}>
        <Icon color={Colors.white} size={24} name={iconName} />
      </View>
      <Text style={styles.nickname}>{name}</Text>
      <Text numberOfLines={1} style={styles.location}>
        {location}
      </Text>
    </Pressable>
  );
};

export default function DefaultLocationList({ defaultAddress, style }) {
  return (
    <View style={[styles.container, { ...style }]}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {defaultAddress.map((address, i) => {
          return (
            <DefaultLocationCard
              key={i}
              iconName={address.icon}
              name={address.name}
              location={address.location}
            />
          );
        })}
        <Pressable style={styles.addPlaceContaier}>
          <Icon name="plus" size={40} color={Colors.black} />
          <Text style={styles.addPlaceText}>Add Place</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    marginBottom: 16,
    marginTop: "auto",
  },
  addPlaceContaier: {
    width: 140,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderWidth: 3,
    borderRadius: 32,
    marginHorizontal: 16,
  },
  addPlaceText: {
    fontFamily: "SemiBold",
    fontSize: 20,
    color: Colors.black,
  },
  locationContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 32,
    alignItems: "flex-start",
    justifyContent: "center",
    width:140,
    height:140,
    marginLeft: 16,
  },
  iconContainer: {
    height: 48,
    width: 48,
    padding: 8,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#ffffff66",
    borderRadius: 8,
  },
  nickname: {
    fontFamily: "SemiBold",
    fontSize: 20,
    lineHeight: 28,
    color: Colors.white,
    marginTop:4
  },
  location: {
    fontFamily: "Regular",
    color: Colors.white,
    fontSize: 16,
  },
});
