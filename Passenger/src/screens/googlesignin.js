// import React from "react";
// import { View, StyleSheet, Button } from "react-native";
// import * as Expo from "expo";

// import * as Google from "expo-google-app-auth";
// const AND_CLIENT_ID =
//   "845597949104-avopt2ga5gc2ed43geenb0571880c6ad.apps.googleusercontent.com";

// export default function Login() {
//   async function signInWithGoogleAsync() {
//     try {
//       const result = await Google.logInAsync({
//         behavior: "web",
//         androidClientId: AND_CLIENT_ID,
//         //androidClientId: AND_CLIENT_ID,
//         scopes: ["profile", "email"],
//       });

//       if (result.type === "success") {
//         return result.accessToken;
//       } else {
//         return { cancelled: true };
//       }
//     } catch (e) {
//       return { error: true };
//     }
//   }

//   console.ignoredYellowBox = ["Warning:"];

//   const signInWithGoogle = () => {
//     signInWithGoogleAsync();
//   };

//   return (
//     <View>
//       <Button onPress={() => signInWithGoogle()} title="Sign in with Google" />
//     </View>
//   );
// }
