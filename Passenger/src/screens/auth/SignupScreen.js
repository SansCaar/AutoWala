import { View, Text, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import { styles } from "../../styles/login_design.js";
import { Colors } from "../../styles/Global.js";
import AppContext from "../../context/AppContext";

// import signInWithGoogleAsync from "./googlesignin.js";
const SignupScreen = ({ navigation }) => {
  // global states for setting the user
  const { usr } = useContext(AppContext);

  const [user, setUser] = usr;

  const googleSignup = async () => {
    console.log("The singup btn is pressed ");
    // getting the email from the google and setting it in the state

    const emailFromGoogle = "cashforapp39@gmail.com";

    // setUser((usr) => {
    //   return (user.email = emailFromGoogle);
    // });

    navigation.navigate("GetDetailScreen");
  };

  return (
    <>
      <View
        style={{
          backgroundColor: Colors.background,
          flex: 1,
        }}
      >
        <View style={styles.con}>
          <View>
            <View style={styles.logo}></View>
            <Pressable
              style={styles.btn}
              // onPress={async () => {
              //   await signInWithGoogleAsync()
              // }}
              onPress={googleSignup}
            >
              <Image
                source={require("../../../assets/g1.png")}
                style={styles.img}
              />
              <Text style={styles.text}>Sign up with Google</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Image
                source={require("../../../assets/fb.png")}
                style={styles.img}
              />
              <Text style={styles.text}>Sign up with Facebook</Text>
            </Pressable>
            <View style={styles.header_text_con}>
              <Text style={styles.text_1}>Already have an account? </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={styles.text_2}>Login</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.bottom_con}>
            <Text style={styles.text1}>By Signing in you agree to our</Text>
            <Text style={styles.text2}>Terms and Conditions</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignupScreen;
