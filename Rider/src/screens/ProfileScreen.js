import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { styles } from "../styles/profile_design";
import Header from "../components/Header.js";
import ListBox from "../components/ListBox";
import DefaultLocationCard from "../components/DefaultLocationCard";
import Icon from "@expo/vector-icons/Feather";
import { Colors } from "../styles/Global";
import Stat from "../components/Stat";
import Box from "../components/Box";

const listData = [
  {
    type: "charge",
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
  {
    type: "charge",
    date: "20 Mar 2020",
    balance: 1001,
    payment_method: "esewa",
    add_balance: "20",
  },
];

const stat_data = [
  {
    title: "Yesterday",
    sub_title: "This Week",
    y_data: 2000,
    w_data: 5000,
  },
  {
    title: "This Month",
    sub_title: "Total",
    y_data: 2000,
    w_data: "20L",
  },
];
const StatBox = ({ data }) => {
  return (
    <>
      <View>
        <Text style={styles.tstat1}>{data.title}</Text>
        <View style={{ flexDirection: "row", margin: 0, padding: 0 }}>
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 18,
              textAlign: "auto",
              alignSelf: "flex-end",
              marginBottom: 6,
            }}
          >
            Rs.
          </Text>
          <Text style={styles.coin}>{data.y_data}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.tstat2}>{data.sub_title}</Text>
        <View style={{ flexDirection: "row", margin: 0, padding: 0 }}>
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 18,
              textAlign: "auto",
              alignSelf: "flex-end",
              marginBottom: 6,
            }}
          >
            Rs.
          </Text>
          <Text style={styles.coin}>{data.w_data}</Text>
        </View>
      </View>
    </>
  );
};

const ProfileScreen = ({navigation}) => {
  const balance = 2000;
  const point = 1000;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header onPressL={navigation.goBack} iconL="arrow-left" />
        <View style={styles.profile_header}>
          <Image
            source={require("../../assets/pp.jpg")}
            style={styles.profile_img}
          />
          <Text style={styles.name}>The Rock Prasad</Text>
          <Text style={styles.number}>98000000000</Text>
          <Text style={styles.email}>rockprasad110@gmail.com</Text>
        </View>
        <Stat balance={balance} point={point} />
        {/* <View style={{ marginTop: 16 }}>
          <Text style={{ fontFamily: "Bold", fontSize: 16, marginLeft: 8 }}>
            Income Summary
          </Text>
          <Box style={styles.income_con}>
            <View>
              {stat_data.map((data, i) => {
                return (
                  <>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginVertical: 4,
                      }}
                    >
                      <StatBox data={data} />
                    </View>
                  </>
                );
              })}
            </View>
          </Box>
        </View> */}
        <View style={styles.trans_con}>
          <ListBox title="Recent Rides" data={listData} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
