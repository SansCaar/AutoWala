import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";
// import { launchImageLibraryAsync } from "expo-image-picker";
import { Colors } from "../../styles/Global";
import AppContext from "../../context/AppContext";

// for date and time
import moment from "moment";

// Import Document Picker
import * as DocumentPicker from "expo-document-picker";

const AdditionalInfo = ({ navigation }) => {
  // global states for setting the user
  const { usr } = useContext(AppContext);
  const [user, setUser] = usr;

  // local context for storing the file
  const [file, setFile] = useState(null);

  const [data, setData] = useState({
    username: "",
    email: "",
    contact: "",
    address: "",
    toc: "",
    gfid: "",
    image: "",
  });
  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });

    // setUser({ ...user, [formData]: { ...data } });
  };

  const generateOtp = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const sendData = () => {
    const toc = {
      date: moment().format("MMM Do YYYY"),
      time: moment().format("HH:MM:SS"),
    };

    setData((data) => {
      return (data.toc = toc);
    });

    // setting the global states
    const fourDigOtp = generateOtp(1000, 9999);

    console.log({ fourDigOtp });

    setUser((user) => {
      return { ...user, formData: { ...data }, otp: fourDigOtp };
    });

    navigation.navigate("OtpScreen");
  };

  const goBack = () => {
    sendData({
      username: "",
      email: "",
      contact: "",
      address: "",
      toc: "",
      gfid: "",
    });
    navigation.navigate("SignUp");
  };

  // opening and selecting the file from the users mobile phone

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      let result = await DocumentPicker.getDocumentAsync({
        multiple: false,
        type: "image/*",
      });
      const selectedFile = {
        name: result.name,
        size: result.size,
        uri: result.uri,
      };
      setFile(selectedFile);
      setData({ ...data, image: selectedFile.uri });
    } catch (e) {
      console.log(e);
    }

    // console.log({ result });
    // let result = await launchImageLibraryAsync({ mediaTypes: "photo" });
    // console.log(result);
    // if (!result.cancelled) {
    //   setImage(result.uri);
    // }
  };

  // return (
  //   <View style={styles.main_container}>
  //     <Text style={styles.main_title}>Let us know you a bit better</Text>
  //     <Text style={styles.sub_title}>
  //       This following information will be used to create your profile.
  //     </Text>
  //     <View style={styles.feild_container}>
  //       <Text style={styles.feild_title}> Display Name </Text>
  //       <TextInput placeholder="Eg :- Saroj Regmi" />
  //     </View>
  //     <View style={styles.feild_container}>
  //       <Text style={styles.feild_title}> Phone Number</Text>
  //       <TextInput placeholder="Eg :- 98********" />
  //     </View>
  //     <View style={styles.feild_container}>
  //       <Text style={styles.feild_title}> Referral code</Text>
  //       <TextInput placeholder="Eg :- BXC3Y0" />
  //     </View>
  //     <Pressable onPress={() => submitForm()}>
  //       <Text>Continue</Text>
  //     </Pressable>
  //   </View>
  // );
  return (
    <View style={styles.main_container}>
      <ScrollView>
        <View style={styles.conWrapper}>
          <Text style={styles.main_title}>Let us know you a bit better</Text>

          <Text style={styles.second_title}>
            This following information will be used to create your profile.
          </Text>

          <View style={styles.fileMainCon}>
            <View style={styles.fileInpContainer}>
              <Pressable onPress={() => selectFile()}>
                <Image
                  source={
                    file
                      ? {
                          uri: file?.uri,
                        }
                      : require("../../../assets/Files.webp")
                  }
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                  }}
                />
              </Pressable>
              {/* file input */}
            </View>

            <View style={styles.btnContainer}>
              <Pressable
                onPress={() => selectFile()}
                style={[styles.button, styles.firstButton]}
              >
                <Text style={styles.btnText}>
                  {data.profileImage ? "Change Image" : "change Image"}
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.inputCon}>
            <Text style={styles.inputTitle}>User Name</Text>

            <View style={styles.inputWrapper}>
              <Icon
                name="person"
                size={22}
                color={Colors.grey}
                style={styles.icon}
              />
              <TextInput
                value={data.username}
                selectionColor={Colors.grey}
                style={styles.input}
                placeholder="Eg: Ramesh Nepali"
                onChangeText={(text) => {
                  handleChange("username", text);
                }}
              />
            </View>
          </View>
          <View style={styles.inputCon}>
            <Text style={styles.inputTitle}>Address (City-Ward, District)</Text>
            <View style={styles.inputWrapper}>
              <Icon
                name="location-sharp"
                size={22}
                color={Colors.grey}
                style={styles.icon}
              />
              <TextInput
                value={data.address}
                selectionColor={Colors.grey}
                style={styles.input}
                placeholder="Eg: Butwal 13, Rupandehi"
                onChangeText={(text) => {
                  handleChange("address", text);
                }}
              />
            </View>
          </View>
          <View style={styles.inputCon}>
            <Text style={styles.inputTitle}>Phone Number</Text>
            <View style={styles.inputWrapper}>
              <Icon
                name="call"
                size={22}
                color={Colors.grey}
                style={styles.icon}
              />
              <TextInput
                value={data.contact}
                selectionColor={Colors.grey}
                style={styles.input}
                placeholder="Eg: 98********"
                keyboardType="number-pad"
                onChangeText={(text) => {
                  handleChange("contact", text);
                }}
              />
            </View>
          </View>
          <View style={styles.inputCon}>
            <Text style={styles.inputTitle}>Referral Code ( Optional )</Text>
            <View style={styles.inputWrapper}>
              <Icon
                name="gift"
                size={22}
                color={Colors.grey}
                style={styles.icon}
              />
              <TextInput
                value={data.referral}
                selectionColor={Colors.grey}
                style={styles.input}
                placeholder="Eg: BXYZA0"
                onChangeText={(text) => {
                  handleChange("referral", text);
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.btmButtonCon}>
          <Pressable
            onPress={() => sendData()}
            style={[styles.button, styles.firstButton]}
          >
            <Text style={styles.btnText}>Continue</Text>
          </Pressable>
          <Pressable
            onPress={() => goBack()}
            style={[styles.button, styles.secondButton]}
          >
            <Text style={[styles.btnText, styles.secondBtnText]}>go back</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdditionalInfo;

const styles = StyleSheet.create({
  main_container: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    paddingTop: 30,
    // paddingBottom: 100,
    height: "100%",
  },
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
    marginVertical: 50,
  },
  secondBtnText: {
    color: "#333",
  },
  secondButton: {
    backgroundColor: "#e8e8e8",
  },
  inputWrapper: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#e8e8e8",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
    marginTop: 7,
  },
  inputCon: {
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 50,
    // borderWidth: 0,
    // borderColor: "#6d6d6d",
    // borderLeftWidth: 1,
    paddingHorizontal: 12,
  },
  icon: {
    width: 50,
    height: 50,
    lineHeight: 50,
    textAlign: "center",
    backgroundColor: "#d1d1d1",
  },
  inputTitle: {
    color: "#333",
  },
  fileMainCon: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  fileInpContainer: {
    backgroundColor: "#e8e8e8",
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
});
