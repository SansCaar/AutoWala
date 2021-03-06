import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { styles } from "../../styles/login_design.js";
import { Colors } from "../../styles/Global.js";
import AppContext from "../../context/AppContext.js";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import { EXPO_CLIENT_ID, ANDROID_CLIENT_ID,API_URL } from "@env";


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
const expoClientId = EXPO_CLIENT_ID;

// not need for now
const androidClientId = ANDROID_CLIENT_ID;

//for api domain
const serverDomain = API_URL;

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

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;

      const access_token = authentication.accessToken;

      axios
        .get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
        )
        .then((res) => {
          setUser(res.data.email);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [response]);
  const googleSignIn = async () => {
    // getting the email from the google
    await promptAsync({ showInRecents: true });

    // implementing the google login

    // signInWithGoogleAsync();
    // after everything is done redirecting to the previous location
  };

  useEffect(() => {
    if (Error) {
      console.log("the alert is fired");
      alert(Error);
    }
  }, [Error]);
  useEffect(() => {
    console.log({ user });
    axios
      .post(`${serverDomain}/v1/api/user/login`, {
        email: user,
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
  }, [user]);

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
