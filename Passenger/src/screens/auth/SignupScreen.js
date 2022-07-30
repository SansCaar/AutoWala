import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from "../../styles/login_design.js";
import { Colors } from "../../styles/Global.js";
import AppContext from "../../context/AppContext";
import { EXPO_CLIENT_ID, ANDROID_CLIENT_ID } from "@env";

// packages for google auth
import * as Google from "expo-auth-session/providers/google";
// this might be necessary in the production so imported
import * as AuthSession from "expo-auth-session";

import * as WebBrowser from "expo-web-browser";
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

const expoClientId = EXPO_CLIENT_ID;

// not need for now
const androidClientId = ANDROID_CLIENT_ID;

const SignupScreen = ({ navigation }) => {
  // global states for setting the user
  const { usr } = useContext(AppContext);

  const [user, setUser] = usr;

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: expoClientId,
    // androidClientId: androidClientId,
    // redirectUri: redirectURI,
  });
  // for allerting the user about the error that occured
  const [Error, setError] = useState(false);

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;

      const access_token = authentication.accessToken;

      console.log({ access_token });
      let userData = axios
        .get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
        )
        .then((res) => {
          console.log(res.data.email);
          setUser({
            email: res.data.email,
            gfid: access_token,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [response]);

  const googleSignup = async () => {
    // getting the email from the google and setting it in the state
    await promptAsync({ showInRecents: true });

    // navigating to the additional details screen
    navigation.navigate("SignUpForm");
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
