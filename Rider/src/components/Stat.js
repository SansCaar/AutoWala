import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from "../styles/Global";

const Stat = ({balance,point,location}) => {
  return (
    <View style={styles.profile_stat}>
    <View>
      <Text style={styles.tstat}>{location === "Home" ? "Today's Earning" : "Your Balance" }</Text>
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
         Nrs
        </Text>
      </View>
    </View>
    <View>
      <Text style={styles.tstat}>{location === "Home" ? "Total Rides" : "Reward Points" }</Text>
      <Text style={styles.point}>{point}</Text>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
    profile_stat:{
        marginTop:24,
        backgroundColor:Colors.white,
        height:"auto",
        paddingVertical:24,
        borderRadius:24,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:24
    },
    tstat:{
        color:Colors.light_grey,
        fontSize:18,
        fontFamily:"SemiBold"
    },
    coin:{
        fontFamily:"Bold",
        fontSize:36,
        color:Colors.black,
        paddingTop:8,
    },
    point:{
        fontFamily:"Bold",
        fontSize:36,
        color:Colors.black,
        marginTop:8,
        alignSelf:"flex-end"
    },
})
export default Stat