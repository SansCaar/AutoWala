import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import { Colors } from "../styles/Global";
import PassengerRequest from "../components/PassengerRequest";
import { getrides } from "../context/api";
import MapView from "react-native-maps";
import AppContext from "../context/AppContext";

const RidemapScreen = ({ navigation }) => {
  const [passenger, setPassenger] = useState([]);
  useEffect(() => {
    async function ride() {
      const allrides = await getrides();
      setPassenger(await allrides);
      console.log(allrides);
    }
    ride();
  }, [passenger]);
  const {
    geo: [location],
  } = useContext(AppContext);

  return (
    <View style={styles.con}>
      <MapView
        style={{
          flex: 1,
          height: Dimensions.get("window").height,
          ...StyleSheet.absoluteFill,
        }}
        initialRegion={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.00522,
          longitudeDelta: 0.00021,
        }}
        mapType="standard"
        showsUserLocation={true}
      ></MapView>
      <Header
        onPressL={navigation.goBack}
        iconL="arrow-left"
        iconR="user"
        onPressR={() => navigation.navigate("Profile")}
      />
      <View style={styles.bottomWrapper}>
        {passenger.length > 0 && (
          <View style={styles.bottom_con}>
            <Text style={styles.b_text}>Ride Request</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {passenger?.map((data, i) => {
                return (
                  <PassengerRequest
                    data={data}
                    navigation={navigation}
                    key={i}
                  />
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  con: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.background,
  },
  bottomWrapper: {
    flex: 1,
  },
  bottom_con: {
    width: "100%",
    height: 230,
    position: "absolute",
    bottom: 16,
  },
  b_text: {
    marginLeft: 4,
    fontFamily: "SemiBold",
    fontSize: 16,
  },
});
export default RidemapScreen;
