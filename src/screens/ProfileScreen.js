import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../styles/profile_design";
import Header from "../components/Header.js";

const ProfileScreen = () => {
  const balance = 2000;
  const point = 1000;
  return (
    <View style={styles.container}>
      <Header iconL="arrow-left" />
      <View style={styles.profile_header}>
        <Image
          source={require("../../assets/pp.jpg")}
          style={styles.profile_img}
        />
        <Text style={styles.name}>The Rock Prasad</Text>
        <Text style={styles.number}>98000000000</Text>
        <Text style={styles.email}>rockprasad110@gmail.com</Text>
      </View>
      <View style={styles.profile_stat}>
        <View>
          <Text style={styles.tstat}>Your Balance</Text>
          <View style={{flexDirection:"row",margin:0,padding:0}}>
            <Text style={styles.coin}>{balance}</Text>
            <Text style={{fontFamily:"Bold",fontSize:18,textAlign:"auto",alignSelf:"flex-end",marginBottom:6}}>nrs</Text>
          </View>
        </View>
        <View>
          <Text style={styles.tstat}>Reward Points</Text>
          <Text style={styles.point}>{point}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
