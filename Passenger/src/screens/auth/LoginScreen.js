import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { styles } from "../../styles/login_design.js";
import { Colors } from "../../styles/Global.js";
import AppContext from "../../context/AppContext.js";
import * as Google from "expo-auth-session/providers/google";

import * as WebBrowser from "expo-web-browser";
import axios from "axios";

try {
  WebBrowser.maybeCompleteAuthSession();
} catch (e) {
  console.log(e);
}

const expoClientId =
  "845597949104-avopt2ga5gc2ed43geenb0571880c6ad.apps.googleusercontent.com";

const LoginScreen = ({ navigation }) => {
  const { usr } = useContext(AppContext);
  const [user, setUser] = usr;

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: expoClientId,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log(authentication);
    }
  }, [response]);
  const googleSignIn = async () => {
    const domain = `http://localhost:3001`;
    const emailFromGoogle = "sarojregmi.official@gmail.com";
    console.log("The button was pressed");
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:3001/v1/api/user/login",
        data: {
          email: emailFromGoogle,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setUser(result.data);
      console.log("result.data");
    } catch (e) {
      console.log("res.data");
      console.log(e.request);
    }
    // implementing the google login

    // signInWithGoogleAsync();
    // after everything is done redirecting to the previous location
    // navigation.navigate("Home");
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
            <Pressable style={styles.btn} onPress={googleSignIn}>
              <Image
                source={require("../../../assets/g1.png")}
                style={styles.img}
              />
              <Text style={styles.text}>Sign in with Google</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Image
                source={require("../../../assets/fb.png")}
                style={styles.img}
              />
              <Text style={styles.text}>Sign in with Facebook</Text>
            </Pressable>
            <View style={styles.header_text_con}>
              <Text style={styles.text_1}>Don't have a account? </Text>
              <Pressable
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text style={styles.text_2}>SignUp</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.bottom_con}>
            <Text style={styles.text1}>By Logging in you agree to our</Text>
            <Text style={styles.text2}>Terms and Conditions</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
