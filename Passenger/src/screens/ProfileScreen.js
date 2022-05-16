import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { styles } from "../styles/profile_design";
import Header from "../components/Header.js";
import ListBox from "../components/ListBox";
import Icon from "@expo/vector-icons/Feather";
import { Colors } from "../styles/Global";
import DefaultLocationList from "../components/DefaultLocationList";


const listData = [
  {
    type: "transaction",
    date: "20 Mar 2020",
    balance: 1001,
    payment_method: "esewa",
    add_balance: "1000",
  },
  {
    type: "charge",
    date: "20 Mar 2020",
    balance: 1001,
    payment_method: "esewa",
    add_balance: "20",
  },
];

const defaultAddress = [
  {
    icon: "home",
    name: "Home",
    location: "Golpark",
  },
];
const ProfileScreen = () => {
  const balance = 2000;
  const point = 1000;
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}

    >
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
            <View style={{ flexDirection: "row", margin: 0, padding: 0 }}>
              <Text style={styles.coin}>{balance}</Text>
              <Text
                style={{
                  fontFamily: "Bold",
                  fontSize: 18,
                  textAlign: "auto",
                  alignSelf: "flex-end",
                  marginBottom: 6,
                }}
              >
                nrs
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.tstat}>Reward Points</Text>
            <Text style={styles.point}>{point}</Text>
          </View>
        </View>
        <View style={styles.wallet_wrapper}>
          <Text style={{ fontFamily: "Bold", fontSize: 16, marginLeft: 8 }}>
            Load wallet with
          </Text>
          <View style={styles.wallet_con}>
            <View style={styles.wallet}>
              <Image
                source={require("../../assets/esewa.png")}
                style={styles.w_img}
              />
              <Pressable style={styles.w_btn}>
                <Text style={{ fontFamily: "SemiBold", fontSize: 16 }}>
                  Load
                </Text>
              </Pressable>
            </View>
            <View style={styles.wallet}>
              <Image
                source={require("../../assets/khalti.png")}
                style={styles.w_img}
              />
              <Pressable style={styles.w_btn}>
                <Text style={{ fontFamily: "SemiBold", fontSize: 16 }}>
                  Load
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.trans_con}>
          <ListBox title="Recent Transaction" data={listData} />
        </View>
        <View style={{marginTop:'auto', marginBottom:60}}>
          <Text style={{fontFamily: "Bold", fontSize: 16, marginLeft: 8,marginBottom:8}}>Quick Places</Text>
        <DefaultLocationList defaultAddress={defaultAddress} />
      </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
