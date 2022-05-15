import React from 'react'
import { View,Pressable, Text, StyleSheet } from 'react-native'
import Icon from "@expo/vector-icons/Feather";
import { Colors } from '../styles/Global';

const DefaultLocationCard = ({name,location,iconName, }) => {
  return (
    <Pressable  style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon color={Colors.white} size={30} name={iconName} />
      </View>
      <Text style={styles.nickname}>{name}</Text>
      <Text numberOfLines={1}  style={styles.location}>{location}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:Colors.primary,
      paddingHorizontal:24,
      paddingVertical:24,
      borderRadius:32,
      alignItems:'flex-start',
      justifyContent:'center', 
      width:180,
      height:180,
      marginRight:16,
  },
  iconContainer:{
      height:48,
      width:48,
      padding:8,
      backgroundColor:'#ffffff66',
      borderRadius:8,
  },
  nickname:{
      fontFamily:'SemiBold',
      fontSize:24,
      lineHeight:28,
      color:Colors.white,
      marginTop:16,
  },
  location:{
      flex:1,
      fontFamily:'Regular',
      color:Colors.white,
      fontSize:16
  }
})

export default DefaultLocationCard
