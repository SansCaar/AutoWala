import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from "@expo/vector-icons/Feather";

const DefaultLocationCard = ({ name, location, iconName }) => {
  return (
    <Pressable style={styles.locationContainer}>
      <View style={styles.iconContainer}>
        <Icon color={Colors.white} size={30} name={iconName} />
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
          <Icon name="plus" size={70} color={Colors.black} />
          <Text style={styles.addPlaceText}>Add Place</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    marginTop: "auto",
  },
  addPlaceContaier: {
    width: 180,
    height: 180,
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
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 32,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 180,
    height: 180,
    marginLeft: 16,
  },
  iconContainer: {
    height: 48,
    width: 48,
    padding: 8,
    backgroundColor: "#ffffff66",
    borderRadius: 8,
  },
  nickname: {
    fontFamily: "SemiBold",
    fontSize: 24,
    lineHeight: 28,
    color: Colors.white,
    marginTop: 16,
  },
  location: {
    flex: 1,
    fontFamily: "Regular",
    color: Colors.white,
    fontSize: 16,
  },
});
