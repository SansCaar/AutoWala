import { StyleSheet } from "react-native";
import { Colors } from "./Global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.background,
  },
  conWrapper: {
    marginTop:40,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  logo: {
    width: 70,
    height: 70,
    backgroundColor: Colors.light_grey,
    borderRadius: 35,
    alignSelf: "center",
  },
  conText: {
    fontFamily: "Bold",
    fontSize: 32,
    color: Colors.black,
    textAlign: "center",
    marginTop: 16,
    marginBottom: 40,
  },
  inputCon: {
    flex: 1,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: Colors.white,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 30,
    elevation: 4,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: Colors.grey,
    fontFamily:"Regular"
  },
  btn:{
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 30,
    justifyContent:"center",
    alignItems:"center",
    marginTop:24
  },
  btnText:{
    fontFamily:"Bold",
    fontSize:16,
    color:Colors.white
  }

});
