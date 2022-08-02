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

// for facebook login
import * as Facebook from "expo-facebook";
WebBrowser.maybeCompleteAuthSession();

const expoClientId =
  "845597949104-2r2rup8te994mhbp3uc7lq2gf6q8rr4b.apps.googleusercontent.com";

// not need for now
const androidClientId =
  "845597949104-avopt2ga5gc2ed43geenb0571880c6ad.apps.googleusercontent.com";

// for facebook app signup
const fbClientId = "582916613232390";

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
      axios
        .get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
        )
        .then((res) => {
          const id = res.data?.sub;
          const userData = {
            email: res.data.email,
            gfid: access_token,
            userId: res.data?.sub,
          };
          checkExistance(id, userData);
        });
    }
  }, [response]);

  const googleSignup = async () => {
    // getting the email from the google and setting it in the state
    promptAsync({ showInRecents: true });
  };
  const facebookSignup = async () => {
    try {
      await Facebook.initializeAsync({
        appId: fbClientId,
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        const { id } = await response.json();
        const userData = {
          userId: id,
          gfid: token,
        };
        checkExistance(id, userData);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  // this will check if the user already exists or not and if it exists then will give a error saying cannot register if not lets you move to the another screen.
  const checkExistance = async (userId, userData) => {
    try {
      const res = await axios.post(
        "http://10.0.2.2:3001/v1/api/user/register/existance",
        {
          id: userId,
        }
      );
      console.log({ response: res });
      if (res.status === 200) {
        setError("Your account is registered already!!!");
        navigation.navigate("Login");
        return true;
      }
    } catch (error) {
      if (error.response.status === 404) {
        // setting the user object first

        setUser({ ...userData });

        // navigating to the additional details screen
        navigation.navigate("GetDetailScreen");
      }
    }
  };

  useEffect(() => {
    if (Error) {
      alert(Error);
      setError(false);
    }
  }, [Error]);

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
            <View style={styles.logo}>
              <Image
                source={require("../../../assets/logo.jpg")}
                style={styles.logoImg}
              />
            </View>
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
            <Pressable style={styles.btn} onPress={facebookSignup}>
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
