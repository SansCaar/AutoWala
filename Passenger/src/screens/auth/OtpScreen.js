import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { ContextProvider } from "../../context/AppContext";
const OtpScreen = ({ navigation }) => {
  const { usr } = useContext(ContextProvider);

  const [user] = usr;

  const [otp, setOpt] = useState();

  const submitOtp = () => {
    // the logic for validating the requested otp is not generated yet
    navigation.navigate("Home");
  };

  return (
    <View style={styles.main_container}>
      <View>
        <TextInput keyboardType="number" />
        <Text style={[styles.textBox, styles.textBox0]}>{textboxData[0]}</Text>
        <Text style={[styles.textBox, styles.textBox1]}>{textboxData[1]}</Text>
        <Text style={[styles.textBox, styles.textBox2]}>{textboxData[2]}</Text>
        <Text style={[styles.textBox, styles.textBox3]}>{textboxData[3]}</Text>
      </View>

      <Text style={styles.main_title}>
        Enter the verification code sent to ********{user.phoneNumber.slice(8)}
      </Text>

      <Pressable onPress={() => submitOtp()}>
        <Text>Verify Code</Text>
      </Pressable>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({});
