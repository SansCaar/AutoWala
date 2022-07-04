import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View ,Pressable} from 'react-native';
import { useEffect } from 'react';

export default function App() {

async function getapi() {
  var url ="https://sms.aakashsms.com/sms/v3/send/";
  alert(url)
  
  var data ={
       'to':'9742993345',
      'auth_token':'241ce853e05422c4dca29b2ac40bfd6afbb6408eb858eec4775eb69fe0b0bbfe',
     'text':' Hello Sushil .Your code is : 1234  Regards Ride On'
  }
  fetch(url, { 
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data),
    })
 .then((response) => response.json())
      .then((response) => {
console.log(response)             
      })
      .catch((error) => {
        alert('Error' + error);
      });

 }

  return (
    <View style={styles.container}>
      <Pressable onPress={async ()=>await getapi()}>   
         <Text>Open up App.js to start working on your app!</Text>
</Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

 
//some stuff
 
