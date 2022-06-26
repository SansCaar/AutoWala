import React, { createRef, useContext, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Card,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";

import Header from "../components/Header";
import { Colors } from "../styles/Global";

import BottomModal from "../components/BottomModal";
import ConfirmModal from "../components/ConfirmModal";
import MapView, { Marker, Polyline } from "react-native-maps";
import AppContext from "../context/AppContext";
import Constants from "expo-constants";
import { getAddress, getRoutes ,complete} from "../context/geocoding";

export default function MapViewScreen({ navigation }) {
  const random = [
    {
      latitude: 83.46657,
      longitude: 27.718867,
    },
    {
      latitude: 83.466549,
      longitude: 27.718844,
    },
    {
      latitude: 83.46633,
      longitude: 27.718691,
    },
    {
      latitude: 83.466158,
      longitude: 27.718568,
    },
    {
      latitude: 83.466053,
      longitude: 27.718429,
    },
    {
      latitude: 83.466022,
      longitude: 27.718296,
    },
    {
      latitude: 83.466022,
      longitude: 27.717776,
    },
    {
      latitude: 83.465981,
      longitude: 27.717203,
    },
    {
      latitude: 83.466017,
      longitude: 27.716966,
    },
    {
      latitude: 83.466036,
      longitude: 27.716817,
    },
    {
      latitude: 83.46607,
      longitude: 27.716658,
    },
    {
      latitude: 83.466141,
      longitude: 27.716456,
    },
    {
      latitude: 83.466305,
      longitude: 27.716059,
    },
    {
      latitude: 83.466359,
      longitude: 27.715861,
    },
    {
      latitude: 83.466388,
      longitude: 27.71565,
    },
    {
      latitude: 83.466456,
      longitude: 27.71524,
    },
    {
      latitude: 83.466607,
      longitude: 27.714378,
    },
    {
      latitude: 83.466645,
      longitude: 27.714088,
    },
    {
      latitude: 83.466676,
      longitude: 27.713901,
    },
    {
      latitude: 83.466698,
      longitude: 27.713787,
    },
    {
      latitude: 83.466701,
      longitude: 27.71377,
    },
    {
      latitude: 83.466764,
      longitude: 27.713385,
    },
    {
      latitude: 83.46678,
      longitude: 27.71328,
    },
    {
      latitude: 83.466828,
      longitude: 27.713078,
    },
    {
      latitude: 83.466857,
      longitude: 27.712972,
    },
    {
      latitude: 83.466947,
      longitude: 27.712688,
    },
    {
      latitude: 83.466967,
      longitude: 27.712655,
    },
    {
      latitude: 83.466977,
      longitude: 27.712612,
    },
    {
      latitude: 83.466984,
      longitude: 27.71255,
    },
    {
      latitude: 83.467009,
      longitude: 27.712462,
    },
    {
      latitude: 83.467035,
      longitude: 27.712353,
    },
    {
      latitude: 83.467042,
      longitude: 27.712261,
    },
    {
      latitude: 83.467169,
      longitude: 27.711856,
    },
    {
      latitude: 83.467159,
      longitude: 27.711822,
    },
    {
      latitude: 83.467328,
      longitude: 27.711325,
    },
    {
      latitude: 83.467662,
      longitude: 27.710149,
    },
    {
      latitude: 83.467768,
      longitude: 27.709588,
    },
    {
      latitude: 83.467784,
      longitude: 27.709142,
    },
    {
      latitude: 83.467763,
      longitude: 27.708827,
    },
    {
      latitude: 83.467727,
      longitude: 27.708281,
    },
    {
      latitude: 83.467375,
      longitude: 27.706732,
    },
    {
      latitude: 83.467345,
      longitude: 27.706612,
    },
    {
      latitude: 83.46718,
      longitude: 27.70588,
    },
    {
      latitude: 83.467111,
      longitude: 27.705576,
    },
    {
      latitude: 83.467006,
      longitude: 27.705138,
    },
    {
      latitude: 83.466936,
      longitude: 27.704801,
    },
    {
      latitude: 83.466894,
      longitude: 27.704612,
    },
    {
      latitude: 83.466746,
      longitude: 27.703968,
    },
    {
      latitude: 83.466415,
      longitude: 27.702556,
    },
    {
      latitude: 83.466289,
      longitude: 27.701971,
    },
    {
      latitude: 83.466112,
      longitude: 27.70115,
    },
    {
      latitude: 83.466015,
      longitude: 27.700764,
    },
    {
      latitude: 83.465793,
      longitude: 27.69987,
    },
    {
      latitude: 83.465616,
      longitude: 27.698975,
    },
    {
      latitude: 83.465626,
      longitude: 27.6989,
    },
  ];
  const { location } = useContext(AppContext);
  const inputRef = useRef();
  const [data, setData] = useState([]);

  const [searching, setSearching] = useState(null);
  const [from, setFrom] = useState(null);
  const [focus, setFocus] = useState(null);
  const [to, setTo] = useState(null);
  const [routes, setRoutes] = useState(null);
  const [showfromcom, setShowfromcom] = useState(false);

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
      setRoutes(route);
      console.log(routes);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <KeyboardAvoidingView
      style={{ ...styles.container, marginTop: Constants.statusBarHeight }}
    >
      {location?.latitude && location?.longitude && (
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
          {routes && (
            <Polyline
              coordinates={[
                { latitude: from?.latitude, longitude: from?.longitude },
                ...routes,
                { latitude: to?.latitude, longitude: to?.longitude },
              ]}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={[
                "#7F0000",
                "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
                "#B24112",
                "#E5845C",
                "#238C23",
                "#7F0000",
              ]}
              strokeWidth={4}
            />
          )}
          {from?.latitude && from?.longitude && (
            <Marker
              coordinate={{
                latitude: from?.latitude,
                longitude: from?.longitude,
              }}
            />
          )}
          {to?.latitude && to?.longitude && (
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
                
                onChangeText={async (value) => 
                  {
                  setFrom(value)
const completedata =await complete(from);
setData(completedata)
console.log(completedata)
if(value.length==0||value.length==1)
{
setShowfromcom(false)
 }
 else{
  setShowfromcom(true)

 }

  }
                }
                
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
 {showfromcom?
<View style={{ marginTop: 30,position:"absolute",zIndex:4 ,  
                  width:"100%",
}}>
            <FlatList
              data={Object.values(data)}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => {
                return(
                <View 
                  style={{
                    
                    padding: 10,
                    borderBottomColor:"black",
                    borderBottomWidth:2,
                    
                    height:60,
                    backgroundColor: 'white',     
                  }}>
                  <View style={{ }} >
                  
                    <Text
                                onPress={()=>{
                                  data["name"] = item.display_place;
                                setFrom(data)
                                console.log(item.lat)
                                setShowfromcom(false)
                             
                                }
                                }

                      style={{
                        position: 'absolute',
                        color: 'black',  
                        left: 10,
                        fontSize: 14,
                        fontFamily: '500',
                      }}>
                      {item.display_place}{' '} 
                    </Text> 
                    <Text
                      style={{
                        position: 'absolute',
                        fontFamily: '300',
                        color: '#ADAEC0',
                        fontSize: 10,
                        top: 25,
                        left: 10,
                      }}>
                        { item.display_address}

                    </Text>

                   
                  </View>
                  
                </View>
                  )  }}
            /> 

          </View>  :null }
          
     

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
