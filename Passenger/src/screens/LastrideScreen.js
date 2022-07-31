import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { Colors } from "../styles/Global";
import Header from "../components/Header.js";
import ListBox from "../components/ListBox";
import AppContext from "../context/AppContext";
const LastrideScreen = () => {
  const { reride } = useContext(AppContext);
  const [reqride,setReqride] = reride;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:Colors.background}}>
    <View style={styles.container}>
      <Header iconL="arrow-left" title={"Last Ride"} />
      <View style={{ marginTop: 16}}>
        {reqride?.map((data,i) =>{
          return(
            <ListBox
            data={data}
          />
          )
        })}
       
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    flex:1
  },
});

export default LastrideScreen;
