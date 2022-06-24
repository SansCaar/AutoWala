import React, { createRef, useContext, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import { Colors } from "../styles/Global";

import BottomModal from "../components/BottomModal";
import ConfirmModal from "../components/ConfirmModal";
import MapView, { Marker } from "react-native-maps";
import AppContext from "../context/AppContext";
import Constants from "expo-constants";
import { getAddress, getRoutes } from "../context/geocoding";

export default function MapViewScreen({ navigation, route }) {
  const { location } = useContext(AppContext);
  const inputRef = useRef();

  const [searching, setSearching] = useState(null);
  const [from, setFrom] = useState(null);
  const [focus, setFocus] = useState(null);
  const [to, setTo] = useState(null);
  const [routes, setRoutes] = useState(null);

  let popupRef = createRef();
  let popupRef2 = createRef();

  const setMarker = async (data) => {
    try {
      const address = await getAddress(data.latitude, data.longitude);
      data["name"] = address;
      if (focus) {
        if (focus == "t1") {
          setFrom(data);
        }
        if (focus == "t2") {
          setTo(data);
        }
      }
      let route = from && to ? await getRoutes(from, to) : null;
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ ...styles.container, marginTop: Constants.statusBarHeight }}
    >
      {location.latitude && location.longitude && (
        <MapView
          style={styles.map}
          mapType="standard"
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.00522,
            longitudeDelta: 0.00021,
          }}
          onPress={(e) => {
            let { latitude, longitude } = e.nativeEvent.coordinate;
            setMarker({ latitude, longitude });
          }}
        >
          {from && (
            <Marker
              coordinate={{
                latitude: from?.latitude,
                longitude: from?.longitude,
              }}
            />
          )}
          {to && (
            <Marker
              coordinate={{
                latitude: to?.latitude,
                longitude: to?.longitude,
              }}
            />
          )}
        </MapView>
      )}
      <View
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        <Header
          iconL="arrow-left"
          onPressL={navigation.goBack}
          style={{
            paddingHorizontal: 24,
            marginTop: Constants.statusBarHeight,
          }}
        />
        <View style={{ paddingHorizontal: 24 }}>
          {/* <Text style={styles.h1}>Where are you going?</Text> */}
          <View style={styles.inputsContainer}>
            <Image
              style={styles.dotsImage}
              source={require("../../assets/locationArt.png")}
            />
            <View style={{ flex: 1 }}>
              <TextInput
                autoFocus={true}
                style={styles.inputStyle}
                onChangeText={(value) => setFrom(value)}
                placeholderTextColor={Colors.grey}
                placeholder="From"
                returnKeyType="next"
                onFocus={() => setFocus("t1")}
                onBlur={() => setFocus(null)}
                value={from?.name}
                onSubmitEditing={() => {
                  inputRef.current.focus();
                }}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  style={{ ...styles.inputStyle, flex: 1 }}
                  onChangeText={(value) =>
                    setTo((prev) => {
                      return { ...prev, name: value };
                    })
                  }
                  placeholder="To"
                  onFocus={() => setFocus("t2")}
                  onBlur={() => setFocus(null)}
                  value={to?.name}
                  ref={inputRef}
                />
                <Pressable
                  onPress={async () => {
                    // const fromcord = await getCoordinates(from);
                    // setFromlat(fromcord.latitude);
                    // console.log(fromlat);
                    // //  const cord= getCoordinates(to)
                    // setFromlong(fromcord.longitude);
                    // console.log(fromlong);

                    popupRef.show();
                  }}
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
          <FlatList />
        </View>
        <View
          style={{
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            flex: 1,
            overflow: "hidden",
          }}
        >
          {/* yesma latitude longitude aaxa teslai yesma integrate garna paryo */}

          <ConfirmModal
            ref={(target) => (popupRef2 = target)}
            title={searching ? null : "Confirm"}
            onPressOk={() => {
              setSearching(true);
              setTimeout(() => {
                navigation.navigate("Ride");
                setSearching(false);
              }, 5000);
            }}
            buttons={searching ? false : true}
          >
            {searching && (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../../assets/LoadingGif.png")} />
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: "Regular",
                    color: Colors.black,
                    marginTop: 24,
                  }}
                >
                  Searching...
                </Text>
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
                  The charges will only deduct after the driver accepts your
                  ride.
                </Text>
              </>
            )}
          </ConfirmModal>
          <BottomModal
            animationType="slide"
            ref={(target) => (popupRef = target)}
            onPressBook={() => popupRef2.show()}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
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
    height: Dimensions.get("window").height,
    ...StyleSheet.absoluteFill, // position: "absolute",
  },
  dotsImage: {
    alignSelf: "center",
    height: "100%",
    marginRight: 16,
    resizeMode: "contain",
  },
  inputsContainer: {
    flexDirection: "row",
    marginBottom: 16,
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
