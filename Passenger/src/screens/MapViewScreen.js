import React, { createRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import Header from "../components/Header";
import { Colors } from "../styles/Global";
import DefaultLocationList from "../components/DefaultLocationList";
import BottomModal from "../components/BottomModal";
import ConfirmModal from "../components/ConfirmModal";

const defaultAddress = [
  {
    icon: "home",
    name: "Home",
    location: "Golpark",
  },
  {
    icon: "briefcase",
    name: "Work",
    location: "Janakinagar",
  },
  {
    icon: "home",
    name: "Home",
    location: "Golpark",
  },
];

export default function MapViewScreen({navigation}) {
  const [searching, setSearching] = useState(null);
  let popupRef = createRef();
  let popupRef2 = createRef();
  return (
    <View style={styles.container}>
      <Header iconL="arrow-left" onPressL={navigation.goBack} style={{ paddingHorizontal: 24 }} />
      <View style={{ paddingHorizontal: 24 }}>
        <Text style={styles.h1}>Where are you going?</Text>
        <View style={styles.inputsContainer}>
          <Image
            style={styles.dotsImage}
            source={require("../../assets/locationArt.png")}
          />
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.inputStyle}
              placeholderTextColor={Colors.grey}
              placeholder="From"
            />
            <View style={styles.inputContainer}>
              <TextInput
                style={{ ...styles.inputStyle, flex: 1 }}
                placeholder="To"
              />
              <Pressable
                onPress={() => popupRef.show()}
                style={styles.sendButton}
              >
                <Image
                  style={styles.sendButtonImg}
                  source={require("../../assets/Send.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <Image
        source={require("../../assets/map2.png")}
        style={styles.map}
        borderTopRightRadius={40}
        borderTopLeftRadius={40}
      />
      <ConfirmModal
        ref={(target) => (popupRef2 = target)}
        title={searching ? null : "Confirm"}
        onPressOk={() => {
          setSearching(true);
          setTimeout(() => {navigation.navigate("Ride");setSearching(false)}, 5000)
          
        }}
        buttons={searching ? false : true}
      >
        {searching && (
          <View style={{justifyContent:"center", alignItems:"center", }}>
            <Image source={require("../../assets/LoadingGif.png")} />
            <Text style={{fontSize:24, fontFamily:"Regular", color:Colors.black,marginTop:24,}}>Searching...</Text>
          </View>
        )}
        {!searching && (
          <>
            <View>
              <View style={styles.row}>
                <Text style={styles.normalText}>Advance Charge</Text>
                <Text style={[styles.normalText, { color: "red" }]}>
                  10 coins
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.normalText}>Due Charge</Text>
                <Text style={styles.normalText}>20 coins</Text>
              </View>
              <View style={styles.seperator} />
              <View style={styles.row}>
                <Text style={styles.normalText}>Total Charge</Text>
                <Text style={styles.normalText}>30 coins</Text>
              </View>
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                color: Colors.light_grey,
                fontFamily: "Regular",
                marginTop: 8,
              }}
            >
              The charges will only deduct after the driver accepts your ride.
            </Text>
          </>
        )}
      </ConfirmModal>
      <BottomModal
        animationType="slide"
        ref={(target) => (popupRef = target)}
        onPressBook={() => popupRef2.show()}
      />
      <DefaultLocationList
        defaultAddress={defaultAddress}
        style={{ position: "absolute", bottom: 0 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 24,
    backgroundColor: Colors.background,
  },
  h1: {
    fontFamily: "Bold",
    fontSize: 24,
    color: Colors.black,
  },
  map: {
    flex: 1,
    // position: "absolute",
    height: "100%",
    width: "100%",
    bottom: 0,
  },
  dotsImage: {
    alignSelf: "center",
    height: "100%",
    marginRight: 16,
    resizeMode: "contain",
  },
  inputsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 40,
  },
  inputStyle: {
    backgroundColor: Colors.white,
    height: 46,
    // paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    fontSize: 18,
    color: Colors.black,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  sendButtonImg: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  normalText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "SemiBold",
  },
  seperator: {
    backgroundColor: Colors.light_grey,
    height: 1,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    width: 100,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 24,
  },
});
