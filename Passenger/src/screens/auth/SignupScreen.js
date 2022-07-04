import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from "../../styles/login_design.js";
import { Colors } from "../../styles/Global.js";
import AppContext from "../../context/AppContext";

// packages for google auth
import * as Google from "expo-auth-session/providers/google";
// this might be necessary in the production so imported
import * as AuthSession from "expo-auth-session";

import * as WebBrowser from "expo-web-browser";
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

const expoClientId =
  "845597949104-2r2rup8te994mhbp3uc7lq2gf6q8rr4b.apps.googleusercontent.com";

// not need for now
const androidClientId =
  "845597949104-avopt2ga5gc2ed43geenb0571880c6ad.apps.googleusercontent.com";

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
