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
    wallet_wrapper:{
        marginTop:16,
    },
    wallet_con:{
        marginTop:8,
        backgroundColor:Colors.white,
        height:"auto",
        paddingHorizontal:24,
        paddingTop:24,
        borderRadius:24,
        paddingBottom:8
    },
    wallet:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:16
    },
    w_img:{
        width:128,
        height:48,
        resizeMode:"contain"
    },
    w_btn:{
        borderWidth:1,
        height:32,
        paddingHorizontal:24,
        borderRadius:24,
        justifyContent:"center",
        alignItems:"center"
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
})