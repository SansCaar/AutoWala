import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../styles/Global";

const ListBox = ({ title, data }) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
      {data.map((datas, i) => {
        return (
          <View style={styles.box} key={i}>
            <View style={styles.img_wrapper}>
              {datas.type === "transaction" ? (
                <Image
                  source={require("../../assets/elogo.png")}
                  style={styles.left_2}
                />
              ) : (
                <Image
                  source={require("../../assets/auto.png")}
                  style={styles.left_1}
                />
              )}
            </View>
            {datas.type === "transaction" ? (
              <View style={styles.mid}>
                <Text style={styles.msg}>
                  Coins loaded by {datas.payment_method}
                </Text>
                <Text style={styles.date}>{datas.date}</Text>
                <Text style={styles.balance}>
                  Balance:{" "}
                  <Text style={{ color: Colors.black, fontFamily: "SemiBold" }}>
                    {datas.balance} nrs
                  </Text>
                </Text>
              </View>
            ) : (
              <View style={styles.mid}>
                <Text style={styles.msg}>Ride Charge</Text>
                <Text style={styles.date}>{datas.date}</Text>
                <Text style={styles.location}>From Golpark to Devinagar</Text>
                <Text style={styles.balance}>
                  Balance:{" "}
                  <Text style={{ color: Colors.black, fontFamily: "SemiBold" }}>
                    {datas.balance} nrs
                  </Text>
                </Text>
              </View>
            )}
            {datas.type === "transaction" ? (
              <Text style={styles.right_1}>+{datas.add_balance}</Text>
            ) : (
              <Text style={styles.right_2}>-{datas.add_balance}</Text>
            )}
          </View>
        );
      })}
              </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Bold",
    fontSize: 16,
    marginLeft: 8,
  },
  box: {
    flex: 1,
    height: "auto",
    backgroundColor: Colors.white,
    padding: 24,
    borderRadius: 24,
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left_1: {
    width: 45,
    height: 30,
  },
  left_2: {
    width: 35,
    height: 35,
  },
  mid: {
      flex:3,
    flexDirection: "column",
  },
  msg: {
    fontFamily: "Bold",
    fontSize: 16,
    color: "rgba(43, 43, 43, 1)",
  },
  date: {
    fontFamily: "Regular",
    fontSize: 12,
    color: Colors.grey,
  },
  balance: {
    fontFamily: "Regular",
    fontSize: 12,
    color: Colors.grey,
  },
  location: {
    fontFamily: "Regular",
    fontSize: 12,
    color: Colors.grey,
  },
  right_1: {
    textAlign:"right",
    flex: 0.8,
    fontSize: 16,
    fontFamily: "SemiBold",
    color: "rgba(120, 233, 117, 1)",
  },
  right_2: {
    textAlign:"right",
    flex: 0.8,
    fontSize: 16,
    fontFamily: "SemiBold",
    color: "rgba(255, 56, 56, 1)",
  },
  img_wrapper: {
    flex: 1,
  },
});

export default ListBox;
