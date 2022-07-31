import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useContext } from "react";
import { styles } from "../styles/profile_design";
import Header from "../components/Header.js";
import { Colors } from "../styles/Global";
import DefaultLocationList from "../components/DefaultLocationList";
import AppContext from "../context/AppContext";
import ListBox from "../components/ListBox";
const defaultAddress = [
  {
    icon: "home",
    name: "Home",
    location: "Golpark",
  },
];
const ProfileScreen = ({ navigation }) => {
  // for user data accessing from context
  const { usrr,reride } = useContext(AppContext);
  const [reqride,setReqride] = reride;
  const [usr, setUsr] = usrr;
  const { user_name, user_contact, user_image, user_email } = usr;
  const balance = 2000;
  const point = 1000;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,backgroundColor:Colors.background}}>
      <View style={styles.container}>
        <Header iconL="arrow-left" onPressL={navigation.goBack} />
        <View style={styles.profile_header}>
          <Image source={{uri:user_image}} style={styles.profile_img} />
          <Text style={styles.name}>{user_name}</Text>
          <Text style={styles.number}>{user_contact}</Text>
          <Text style={styles.email}>{user_email}</Text>
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
        {/* <View style={styles.wallet_wrapper}>
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
        </View> */}
        <View style={{ marginTop: 16}}>
        {reqride?.slice(0,2).map((data,i) =>{
          return(
            <ListBox
            data={data}
          />
          )
        })}
       
      </View>
        <View style={{ marginTop: "auto", marginBottom: 60 }}>
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 16,
              marginLeft: 8,
              marginBottom: 8,
            }}
          >
            Quick Places
          </Text>
          <DefaultLocationList defaultAddress={defaultAddress} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
