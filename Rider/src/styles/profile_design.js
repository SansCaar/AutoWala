import { StyleSheet } from "react-native";
import {Colors} from "../styles/Global"

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        paddingHorizontal:24
    },
    profile_header:{
        alignItems:"center",
    },
    profile_img:{
        width:170,
        height:170,
        borderRadius:85,
        resizeMode:"cover"
    },
    name:{
        marginTop:8,
        fontSize:24,
        fontFamily:"Bold",
    },
    number:{
        fontFamily:"Regular",
        color:Colors.grey,
        fontSize:16
    },
    email:{
        fontFamily:"Regular",
        color:Colors.grey,
        fontSize:16  
    },
    trans_con:{
        marginTop:16,

    },
    addPlaceContaier: {
        width: 180,
        height: 180,
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "dashed",
        borderWidth: 3,
        borderRadius: 32,
        marginRight: 8,
      },
      addPlaceText: {
        fontFamily: "SemiBold",
        fontSize: 20,
        color: Colors.black,
      },
      income_con:{
          marginTop:8,
      },
      tstat1:{
        color:Colors.light_grey,
        fontSize:18,
        fontFamily:"SemiBold",
        textAlign:"left"
    },
      tstat2:{
        color:Colors.light_grey,
        fontSize:18,
        fontFamily:"SemiBold",
        textAlign:"right"
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