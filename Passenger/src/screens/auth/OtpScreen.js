import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import AppContext from "../../context/AppContext";
const OtpScreen = ({ navigation }) => {
  const { usr } = useContext(AppContext);

  const [user] = usr;

  const [otp, setOpt] = useState("");
  console.log({ user });

  const [otpMatch, setOtpMatch] = useState("NOTCOMPARED");

  useEffect(() => {
    if (otp.length < 4) return;

    setOtpMatch(parseInt(otp) === parseInt(user.otp));
  }, [otp]);
  const submitForm = () => {
    // the logic for validating the requested otp is not generated yet

    console.log({ otpMatch: otpMatch });
    if (!otpMatch) {
      return;
    } else if (otpMatch === "NOTCOMPARED") {
      setOtpMatch(false);
      return;
    }
    navigation.navigate("Home");
  };
  const goBack = () => {
    navigation.navigate("GetDetailScreen");
  };

  // styling

  let styles = StyleSheet.create({
    main_container: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
      paddingTop: 50,
      height: "100%",
    },
    boxContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      height: 100,
      width: "100%",
      marginTop: 20,
    },
    textBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 80,
      // width: "100",
      backgroundColor: "#e8e8e8",
      // flex: ,
      width: (Dimensions.get("screen").width * 0.9) / 4 - 6,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      zIndex: 1,
      borderBottomColor: "#dddd",
      borderBottomWidth: 7,
      color: "#333",
    },
    textBoxActive: {
      borderBottomColor: "#198754",
    },

    mainInput: {
      // backgroundColor: "transparent",
      // border: "none",
      opacity: 0,
      position: "absolute",
      height: 80,
      width: "100%",
      zIndex: 2,
    },
    textBox0: otp.length > 0 ? { borderBottomColor: "#198754" } : {},
    textBox1: otp.length > 1 ? { borderBottomColor: "#198754" } : {},
    textBox2: otp.length > 2 ? { borderBottomColor: "#198754" } : {},
    textBox3: otp.length > 3 ? { borderBottomColor: "#198754" } : {},

    main_title: {
      fontSize: 30,
      fontWeight: "800",
      color: "#333",
    },
    second_title: {
      marginTop: -3,
      color: "#5f5f5f",
    },
    button: {
      backgroundColor: "#333",
      width: 150,
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 4,
      marginTop: 20,
    },
    btnText: {
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "300",
    },
    btmButtonCon: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 50,
    },
    secondBtnText: {
      color: "#333",
    },
    secondButton: {
      backgroundColor: "#e8e8e8",
    },
  });

  return (
    <View style={styles.main_container}>
      <Text style={styles.main_title}>Verification</Text>

      <Text style={styles.second_title}>
        Enter the verification code sent to ********
        {user.formData.contact ? user.formData.contact.slice(8) : ""}
      </Text>

      <View>
        <TextInput
          keyboardType="numeric"
          caretHidden
          style={styles.mainInput}
          value={otp}
          onKeyPress={(key) => {
            if (key.nativeEvent.key === "Backspace") {
              if (otp.length >= 4) {
                setOpt(otp.slice(0, 3));
              }
            }
          }}
          textContentType="oneTimeCode"
          onChangeText={(change) => {
            // console.log(typeof change);
            if (otp.length < 4) {
              setOtpMatch("NOTCOMPARED");
              setOpt(change);
            }
          }}
        />
        <View style={styles.boxContainer}>
          <View
            style={[
              styles.textBox,
              styles.textBox0,
              !otpMatch ? { borderBottomColor: "#c74646" } : "",
            ]}
          >
            <Text>{otp[0]}</Text>
          </View>
          <View
            style={[
              styles.textBox,
              styles.textBox1,
              !otpMatch ? { borderBottomColor: "#c74646" } : "",
            ]}
          >
            <Text>{otp[1]}</Text>
          </View>
          <View
            style={[
              styles.textBox,
              styles.textBox2,
              !otpMatch ? { borderBottomColor: "#c74646" } : "",
            ]}
          >
            <Text>{otp[2]}</Text>
          </View>
          <View
            style={[
              styles.textBox,
              styles.textBox3,
              !otpMatch ? { borderBottomColor: "#c74646" } : "",
            ]}
          >
            <Text>{otp[3]}</Text>
          </View>
        </View>
      </View>

      <View style={styles.btmButtonCon}>
        <Pressable
          onPress={() => {
            submitForm();
          }}
          style={[styles.button, styles.firstButton]}
        >
          <Text style={styles.btnText}>Verify Code</Text>
        </Pressable>
        <Pressable
          onPress={() => goBack()}
          style={[styles.button, styles.secondButton]}
        >
          <Text style={[styles.btnText, styles.secondBtnText]}>go back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OtpScreen;
