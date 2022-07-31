import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from "../../styles/login_design.js";
import { Colors } from "../../styles/Global.js";
import AppContext from "../../context/AppContext.js";
import * as Google from "expo-auth-session/providers/google";

// for facebook login
// import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-facebook";

import * as WebBrowser from "expo-web-browser";
import axios from "axios";

WebBrowser.maybeCompleteAuthSession();

// it might be necessary in the production
// const redirectURI = AuthSession.makeRedirectUri({
//   // scheme: "exp://127.0.0.1:19000/",
//   useProxy: true,
//   // path: "https://auth.expo.io",
// });
// console.log({ redirectURI });
const expoClientId =
  "845597949104-2r2rup8te994mhbp3uc7lq2gf6q8rr4b.apps.googleusercontent.com";

// not need for now
const androidClientId =
  "845597949104-avopt2ga5gc2ed43geenb0571880c6ad.apps.googleusercontent.com";

  // for facebook app login
const fbClientId = "582916613232390";
const LoginScreen = ({ navigation }) => {
  const { usr } = useContext(AppContext);
  const [user, setUser] = usr;

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: expoClientId,
    // androidClientId: androidClientId,
    // redirectUri: redirectURI,
  });
  // for allerting the user about the error that occured
  const [Error, setError] = useState(false);

  const googleSignIn = async () => {
    // getting the email from the google
    await promptAsync({ showInRecents: true });
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;

      const access_token = authentication.accessToken;

      axios
        .get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
        )
        .then((res) => {
          LOGIN(res.data?.sub);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [response]);

  // for facebook login
  const facebookLogin = async () => {
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
        LOGIN(id);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  // function to send the login request to the backend
  const LOGIN = (userId) => {
    axios
      .post("http://10.0.2.2:3001/v1/api/user/login", {
        id: userId,
      })
      .then((res) => {
        if (res.status === 200) {
          setUser({
            id: res.data?.user?._id,
            email: res.data?.user?.user_email,
            contact: res.data?.user?.user_contact,
            image: res.data?.user?.user_image,
            name: res.data?.user?.user_name,
            toc: res.data?.user?.user_toc,
          });
          setError(false);
          navigation.navigate("Home");
        }
      })
      .catch((e) => {
        setError(e.response.data.error);
      });
  };

  // error handeling
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
            <View style={styles.logo}></View>
            <Pressable
              style={styles.btn}
              // this will disable the btn until the request is loaded
              disabled={!request}
              onPress={googleSignIn}
            >
              <Image
                source={require("../../../assets/g1.png")}
                style={styles.img}
              />
              <Text style={styles.text}>Sign in with Google</Text>
            </Pressable>
            <Pressable style={styles.btn} onPress={facebookLogin}>
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
