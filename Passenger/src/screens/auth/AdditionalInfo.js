import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {API_URL} from "@env"
import Icon from "@expo/vector-icons/Ionicons";
// import { launchImageLibraryAsync } from "expo-image-picker";
import { Colors } from "../../styles/Global";

import AppContext from "../../context/AppContext";

// for date and time
import moment from "moment";

// Import Document Picker
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";

// setting up the server domain
// this domain should be changed to the actual server location in the production
const serverDomain = API_URL;

const AdditionalInfo = ({ navigation }) => {
  // global states for setting the user
  const { usr } = useContext(AppContext);
  const [user, setUser] = usr;

  console.log(user);

  // local context for storing the file
  const [file, setFile] = useState(null);

  const [data, setData] = useState({
    username: "",
    contact: "",
    address: "",
    toc: "",
    image: "",
  });

  const [error, setError] = useState({
    target: "",
    message: "",
  });

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });

    // setUser({ ...user, [formData]: { ...data } });
  };

  const generateOtp = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const uploadImage = async (file) => {
    try {
      // checks if the file is empty
      if (file === null) {
        setError({
          target: "image",
          message: "Sorry ,There is some error with the profile picture!!",
        });
        return null;
      }
      setError(false);
      // if not empty creating a form data to send to upload the image to the server
      const imageToUpload = file;
      const data = new FormData();

      data.append(
        "profile",
        {
          uri: imageToUpload?.uri,
          name: imageToUpload?.name,
          type: imageToUpload?.mimeType,
        },
        "myfile"
      );
      const serverUrl = `http://192.168.156.235:3001/v1/api/user/uploadImage`;
      console.log(serverUrl)
      const response = await axios(serverUrl, {
        method: "post",
        data: data,

        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response?.data?.fileName;
    } catch (e) {
      setError({
        target: "image",
        message: "Sry, we are having trouble uploading the Profile ",
      });
      return;
    }
  };

  const sendData = () => {
    // checking the input data
    // checking if anyone is empty or not

    if (data.username === "") {
      setError({
        target: "username",
        message: "The email feild cannot be empty.",
      });
      return;
    } else if (data.address === "") {
      setError({
        target: "address",
        message: "The address feild cannot be left empty.",
      });
      return;
    } else if (data.contact.length !== 10) {
      setError({
        target: "contact",
        message: "Please enter a valid phone number.",
      });
      return;
    } else if (data.image === "") {
      alert("Looks like you forgot to choose a profile");
      return;
    }

    const toc = {
      date: moment().format("MMM Do YYYY"),
      time: moment().format("HH:MM:SS"),
    };

    // setData((data) => {
    //   return { ...data, toc: toc };
    // });

    // setting the global states
    const fourDigOtp = generateOtp(1000, 9999);

    console.log(fourDigOtp );

    setUser((user) => {
      return { ...user, formData: { ...data }, otp: fourDigOtp, toc: toc };
    });

    navigation.navigate("OtpScreen");
  };

  // checking what is changing

  useEffect(() => {
    console.log(
      "data is changing....................................................."
    );
    console.log({ data, user });
  }, [data]);

  useEffect(() => {
    if (error.target === "image") {
      alert(error.message);
    }
  }, [error]);
  const goBack = () => {
    setData({
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
      setFile(result);

      uploadImage(result).then((res) => {
        console.log({ res });
        setData({ ...data, image: "http://192.168.156.235:3001" +"/"+ res });
      });
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
                    data.image !== ""
                      ? {
                          uri: data.image,
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
                color={Colors.white}
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
            {error?.target === "username" ? (
              <Text style={styles.error}> {error.message} </Text>
            ) : null}
          </View>
          <View style={styles.inputCon}>
            <Text style={styles.inputTitle}>Address (City-Ward, District)</Text>
            <View style={styles.inputWrapper}>
              <Icon
                name="location-sharp"
                size={22}
                color={Colors.white}
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
            {error?.target === "address" ? (
              <Text style={styles.error}> {error.message} </Text>
            ) : null}
          </View>
          <View style={styles.inputCon}>
            <Text style={styles.inputTitle}>Phone Number</Text>
            <View style={styles.inputWrapper}>
              <Icon
                name="call"
                size={22}
                color={Colors.white}
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
            {error?.target === "contact" ? (
              <Text style={styles.error}> {error.message} </Text>
            ) : null}
          </View>
          <View style={styles.inputCon}>
            <Text style={styles.inputTitle}>Referral Code ( Optional )</Text>
            <View style={styles.inputWrapper}>
              <Icon
                name="gift"
                size={22}
                color={Colors.white}
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
    backgroundColor: Colors.primary,
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
    backgroundColor: Colors.light_primary,
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
