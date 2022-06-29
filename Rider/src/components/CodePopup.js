import { View, Text, StyleSheet, Pressable, TextInput,Image } from "react-native";
import React,{useState,useEffect} from "react";
import Box from "./Box";
import { Colors } from "../styles/Global";
import Icon from "@expo/vector-icons/Ionicons";

import {getRideData,setValidate} from "../context/api" 
import Icons from "@expo/vector-icons/Feather";



const CodePopup = ({data}) => {
 

  const checkPin=async (code,ride_code,id)=>{
    if(code==ride_code) 
    {
     const  validation= await  setValidate(id);
     const {ride_validated}=validation;
     setValidated(ride_validated)
    }
    else{
      alert("Invalid Code")
      return  validation;
      
    
    }
    }
  const [pin,setPin]=useState(null);
  const {user_name,time,ride_status,ride_from,ride_to,ride_code,ride_toc, _id,ride_validated } = data;
  const [validated,setValidated]=useState(false)
  
 

//  useEffect(async ()=> {
//   await check();
// },[ride_validated]);
  return (
    <>
      <Box style={css.container}>
        <View style={css.left}>
          <Text style={css.title}>{ride_status}</Text>
          <Text style={css.name}>{user_name}</Text>
          <Text style={css.location}>From {ride_from} to {ride_to}</Text>
          <Text style={css.distance}>{ride_toc}</Text>
{validated ?
          <Text style={css.code}>#{ride_code}</Text>
          : 

          <View style ={{flex:1,flexDirection:"row",marginBottom:40,marginTop:10}}> 
                    {/* <Text   style={{color:"white",flex:1}}>{ride_validated}</Text> */}

        <TextInput  style={{flex:1,height:40,width:150,borderRadius:20,borderBottomColor:"black",borderWidth:2,paddingLeft:20,
        
      
      }}
        placeholder="4  digit Pin"
        maxLength={4}
        onChangeText={(value)=>{
          setPin(value)
          
          
        }}
        keyboardType="numeric"
        onEndEditing={()=>
        {
checkPin(pin,ride_code,_id);
        }}
        />
        <Pressable
                  onPress={() => {
                    checkPin(pin,ride_code,_id);


                  }}
                  style={{  height: 40,
                    width: 40,
                    flex:0.4,
                    backgroundColor: Colors.primary,
                    borderRadius: 25,
                    alignItems: "center",
                    
                    justifyContent: "center",
                    marginLeft: 20
                  }}
                >
                  <Image
                    style={{ height: 24,
                      width: 24,
                      resizeMode: "contain",}}
                    source={require("../../assets/Send.png")}
                  />
                </Pressable>

                </View>
          
}
                    
             
        </View>
        <View style={css.right}>
          <Pressable style={{backgroundColor:"#FFD600",...css.btn}}>
              <Icon name="mail" size={28} color={Colors.white}/>
          </Pressable>
          <Pressable style={{backgroundColor:"#78E975",...css.btn}}>
          <Icon name="call" size={28} color={Colors.white}/>
          </Pressable>
        </View>
      </Box>
    </>
  );
};
const css = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontFamily: "SemiBold",
    color: Colors.light_grey,
    fontSize: 18,
    marginBottom: 3,
  },
  name: {
    fontFamily: "Bold",
    color: Colors.black,
    fontSize: 16,
    marginBottom: 1,
  },
  location: {
    fontFamily: "SemiBold",
    color: Colors.light_grey,
    fontSize: 13,
  },
  distance: {
    fontFamily: "SemiBold",
    color: Colors.light_grey,
    fontSize: 13,
  },
  left: {
    flex:1/1.5,
  },
  right: {
    justifyContent:"flex-start",
    flex:1/5.5,
  },
  btn:{
      borderRadius:8,
      height:40,
          marginTop:10,

      justifyContent:"center",
      alignItems:"center",
  },
  code:{
      fontFamily:"Bold",
      fontSize:24,
      marginTop:8,
      color:Colors.primary
  }
});

export default CodePopup;
