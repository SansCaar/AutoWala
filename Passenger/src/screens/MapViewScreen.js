import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import MapView, { Marker, Polyline } from "react-native-maps";

import Header from "../components/Header";
import { Colors } from "../styles/Global";

import BottomModal from "../components/BottomModal";
import ConfirmModal from "../components/ConfirmModal";

import AppContext from "../context/AppContext";
import {
  getAddress,
  getRoutes,
  complete,
  requestRide,
  checkAcceptedRide,
} from "../context/geocoding";
import Autocomplete from "../components/AutoCompleteInput";
import BaseModal from "../components/BaseModal";

export default function MapViewScreen({ navigation }) {
  const { geo:[location] } = useContext(AppContext);
  const [data, setData] = useState([]);

  const [searching, setSearching] = useState(null);
  const [confirmDialogue, setConfirmDialogue] = useState(true);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [rideAccepted, setRideAccepted] = useState(false);

  const [routes, setRoutes] = useState(null);

  const inputRef = useRef(null);
  const map = useRef(null);

  let popupRef = createRef();
  let popupRef2 = createRef();

  useEffect(() => {
    async function apiCalls() {
      if (from?.latitude && to?.latitude) {
        const route = await getRoutes(from, to);
        setRoutes(route);
        console.log("hi");
      }
    }
    map?.current?.fitToCoordinates(
      [
        { latitude: from?.latitude, longitude: from?.longitude },
        { latitude: to?.latitude, longitude: to?.longitude },
      ],
      {
        animated: true,
        edgePadding: {
          top: 150,
          right: 50,
          bottom: 50,
          left: 50,
        },
      }
    );
    apiCalls();
  }, [from, to]);

  const onMapReadyHandler = () => {
    map.current.fitToSuppliedMarkers(["FROM", "TO"], {
      animated: true,
      edgePadding: {
        top: 150,
        right: 50,
        bottom: 50,
        left: 50,
      },
    });
  };

  const setMarker = async (data, textInput) => {
    try {
      const address = await getAddress(data.latitude, data.longitude);
      data["name"] = address;
      if (textInput == "t1") {
        setFrom(data);
      }
      if (textInput == "t2") {
        setTo(data);
      }
      console.log(e);
    } catch (e) {}
  };

  function renderMarker(latitude, longitude, identifier) {
    return (
      <Marker
        identifier={identifier}
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
      />
    );
  }
  function renderPolyLine(routes) {
    return (
      <Polyline
        coordinates={[
          { latitude: from?.latitude, longitude: from?.longitude },
          ...routes,
          { latitude: to?.latitude, longitude: to?.longitude },
        ]}
        strokeColor={Colors.primary} // fallback for when `strokeColors` is not supported by the map-provider
        strokeWidth={5}
      />
    );
  }
  function searchRides(rideId) {
    setSearching(true);
    console.log(rideId);
    const checkForRidesInterval = setInterval(async () => {
      let isRideAccepted = await checkAcceptedRide(rideId);
      setRideAccepted(isRideAccepted);
      console.log(rideAccepted);
      if (isRideAccepted) {
        setSearching(false);
        clearInterval(checkForRidesInterval);
        console.log("hello: " + rideId);
        navigation.navigate("Ride", { id: rideId });
      }
    }, 5000);
    setTimeout(() => {
      setSearching(false);
      if (rideAccepted) {
        clearInterval(checkForRidesInterval);
        navigation.navigate("Ride", { rideId: `${rideId}` });
      }
    }, 5 * 60 * 60 * 1000);
  }
  return (
    <KeyboardAvoidingView
      style={{ ...styles.container, marginTop: Constants.statusBarHeight }}
    >
      {location?.latitude && location?.longitude && (
        <MapView
          ref={map}
          style={styles.map}
          mapType="standard"
          showsUserLocation={true}
          initialRegion={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.00522,
            longitudeDelta: 0.00021,
          }}
          onMapReady={onMapReadyHandler}
          onMapLoaded={onMapReadyHandler}
        >
          {routes && renderPolyLine(routes)}
          {from &&
            from?.latitude &&
            renderMarker(from?.latitude, from?.longitude, "FROM")}
          {to &&
            to?.latitude &&
            renderMarker(to?.latitude, to?.longitude, "TRUE")}
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
          <View style={styles.inputsContainer}>
            <Image
              style={styles.dotsImage}
              source={require("../../assets/locationArt.png")}
            />
            <View style={{ flex: 1 }}>
              <Autocomplete
                placeholderTextColor={Colors.grey}
                placeholder="From"
                returnKeyType="next"
                autoFocus={true}
                label="Model"
                style={styles.inputStyle}
                data={data}
                menuStyle={{ backgroundColor: "white" }}
                value={from}
                setValue={setFrom}
                onChange={async (value) => {
                  if (value.length > 1) {
                    const completedata = await complete(from?.name);
                    console.log(completedata);
                    setData(completedata);
                  }
                }}
                onSuggestionPress={(item) => {
                  console.log(item.lat + "," + item.lon);
                  setMarker(
                    {
                      latitude: parseFloat(item.lat),
                      longitude: parseFloat(item.lon),
                    },
                    "t1"
                  );
                }}
                onSubmitEditing={() => {
                  inputRef.current.focus();
                }}
              />
              <View style={styles.inputContainer}>
                <Autocomplete
                  placeholderTextColor={Colors.grey}
                  placeholder="To"
                  containerStyle={{ flex: 1 }}
                  style={styles.inputStyle}
                  data={data}
                  menuStyle={{ backgroundColor: "white" }}
                  value={to}
                  ref={inputRef}
                  setValue={setTo}
                  onChange={async (value) => {
                    if (value.length > 2) {
                      const completedata = await complete(to?.name);
                      console.log(completedata);
                      setData(completedata);
                    }
                  }}
                  onSuggestionPress={(item) => {
                    console.log(item.lat + "," + item.lon);
                    setMarker(
                      {
                        latitude: parseFloat(item.lat),
                        longitude: parseFloat(item.lon),
                      },
                      "t2"
                    );
                  }}
                />
                <Pressable
                  onPress={() => {
                    if (from?.latitude && to?.latitude) {
                      popupRef.show();
                    }
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
        </View>
        <View
          style={{
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            flex: 1,
            overflow: "hidden",
          }}
        >
          <ConfirmModal
            ref={(target) => (popupRef2 = target)}
            title={confirmDialogue ? "Confirm" : null}
            onPressOk={async () => {
              let rideId = await requestRide({
                user_id: 1243,
                user_name: "Sanskar",
                from,
                to,
                ride_code: parseInt(Math.random() * 10000),
                ride_noofseats: 4,
                ride_status: "AVAILABLE",
                ride_toc: new Date().toISOString(),
              });
              setConfirmDialogue(false);
              console.log(rideId)
              if (rideId) searchRides(rideId);
            }}
            buttons={confirmDialogue}
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
            {confirmDialogue && (
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
          <BaseModal />
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
