import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { styles } from "../../styles/getDetail_design";
import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import Icon from "@expo/vector-icons/Ionicons";
import { Colors } from "../../styles/Global";
import AppContext from "../../context/AppContext";

import axios from "axios";

const GetDetailScreen = ({ navigation }) => {
  // global states for setting the user
  const { usr } = useContext(AppContext);
  console.log("hello there");
  const [user, setUser] = usr;

  const [data, setData] = useState({
    user_address: "",
    user_contact: "",
    user_referral: "",
  });
  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });

    // setUser({ ...user, [formData]: { ...data } });
  };
  const sendData = () => {
    navigation.navigate("OtpScreen");
  };
  console.log({ user });
  // const sendData = async () => {
  //   console.log("check");
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const res = await axios.post(
  //       "http://192.168.1.68:3001/v1/api/user",
  //       data,
  //       config
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // try {
  //   //     const res = await axios.get("http://192.168.1.68:3001/v1/api/user");
  //   //     console.log(res.data);

  //   // } catch (error) {
  //   //     console.log(error.message);

  //   // }
  // };
  return (
    <ScrollView style={styles.container}>
      <Header iconL="arrow-left" onPressL={navigation.goBack} />
      <View style={styles.conWrapper}>
        <View style={styles.logo}></View>
        <Text style={styles.conText}>Let's get started!!</Text>
        <View style={styles.inputCon}>
          <View style={styles.inputWrapper}>
            <Icon name="location-sharp" size={22} color={Colors.grey} />
            <TextInput
              value={data.user_address}
              selectionColor={Colors.grey}
              style={styles.input}
              placeholder="Address (City-Ward, District)"
              onChangeText={(text) => {
                handleChange("user_address", text);
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Icon name="call" size={22} color={Colors.grey} />
            <TextInput
              value={data.user_contact}
              selectionColor={Colors.grey}
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="number-pad"
              onChangeText={(text) => {
                handleChange("user_contact", text);
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Icon name="gift" size={22} color={Colors.grey} />
            <TextInput
              value={data.user_referral}
              selectionColor={Colors.grey}
              style={styles.input}
              placeholder="Referral Code"
              onChangeText={(text) => {
                handleChange("user_referral", text);
              }}
            />
          </View>
          <View style={styles.btmButtonCon}>
            <Pressable
              onPress={() => sendData()}
              style={[styles.button, styles.firstButton]}
            >
              <Text style={styles.btnText}>Verify Code</Text>
            </Pressable>
            <Pressable
              onPress={() => goBack()}
              style={[styles.button, styles.secondButton]}
            >
              <Text style={[styles.btnText, styles.secondBtnText]}>
                go back
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default GetDetailScreen;
