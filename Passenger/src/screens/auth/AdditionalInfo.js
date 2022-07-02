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

// Import Document Picker
import * as DocumentPicker from "expo-document-picker";

const AdditionalInfo = ({ navigation }) => {
  // global states for setting the user
  const { usr } = useContext(AppContext);
  const [user, setUser] = usr;

  // local context for storing the file
  const [image, setImage] = useState(null);

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

  // opening and selecting the file from the users mobile phone

  const selectFile = async () => {
    // Opening Document Picker to select one file

    let result = DocumentPicker.getDocumentAsync({
      multiple: false,
      type: "image/*",
    });

    console.log({ result });
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
    <ScrollView style={styles.main_container}>
      <View style={styles.conWrapper}>
        <Text style={styles.main_title}>Let us know you a bit better</Text>

        <Text style={styles.second_title}>
          This following information will be used to create your profile.
        </Text>

        <View style={styles.inputCon}>
          <View style={styles.fileInpContainer}>
            <Image source={"xyz"} style={styles.inpImage} />
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
              value={data.userName}
              selectionColor={Colors.grey}
              style={styles.input}
              placeholder="Eg: Ramesh Nepali"
              onChangeText={(text) => {
                handleChange("userName", text);
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
              value={data.user_address}
              selectionColor={Colors.grey}
              style={styles.input}
              placeholder="Eg: Butwal 13, Rupandehi"
              onChangeText={(text) => {
                handleChange("user_address", text);
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
              value={data.user_contact}
              selectionColor={Colors.grey}
              style={styles.input}
              placeholder="Eg: 98********"
              keyboardType="number-pad"
              onChangeText={(text) => {
                handleChange("user_contact", text);
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
              value={data.user_referral}
              selectionColor={Colors.grey}
              style={styles.input}
              placeholder="Eg: BXYZA0"
              onChangeText={(text) => {
                handleChange("user_referral", text);
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
  );
};

export default AdditionalInfo;

const styles = StyleSheet.create({
  main_container: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    paddingTop: 30,
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
    marginTop: 50,
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
});
