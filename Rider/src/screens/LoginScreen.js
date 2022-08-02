import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { styles } from "../styles/login_design.js";
import { Colors } from "../styles/Global.js";

const LoginScreen = () => {
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
              <Image source={require("../../assets/logo.jpeg")}></Image>
            </View>
            <Pressable style={styles.btn}>
              <Image
                source={require("../../assets/g1.png")}
                style={styles.img}
              />
              <Text style={styles.text}>Sign in with Google</Text>
            </Pressable>
            <Pressable style={styles.btn}>
              <Image
                source={require("../../assets/fb.png")}
                style={styles.img}
              />
              <Text style={styles.text}>Sign in with Facebook</Text>
            </Pressable>
            <View style={styles.header_text_con}>
              <Text style={styles.text_1}>Don't have a account? {""}</Text>
              <Text style={styles.text_2}>SignUp</Text>
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
