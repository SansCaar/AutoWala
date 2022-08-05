import { StyleSheet } from "react-native";
import { Colors } from "../styles/Global.js";

export const styles = StyleSheet.create({
  con: {
    flex: 1,
    paddingBottom: 52,
    justifyContent: "center",
    paddingHorizontal: 52,
  },
  btn: {
    backgroundColor: Colors.white,
    borderColor: "rgba(0, 0, 0, 0.35)",
    borderWidth: 0.6,
    height: 62,
    borderRadius: 7,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottom_con: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    bottom: 52,
  },
  text1: {
    fontFamily: "Regular",
    fontSize: 14,
  },
  text2: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "blue",
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 18,
    flex: 0.75,
    color: Colors.black,
    fontFamily: "Regular",
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  header_text_con: {
    flexDirection: "row",
    justifyContent: "center",
  },
  text_1: {
    color: Colors.grey,
    fontSize: 16,
    fontFamily: "Regular",
  },
  text_2: {
    fontSize: 16,
    fontFamily: "Bold",
  },
  logo: {
    width: 200,
    height: 200,
    backgroundColor: "#000",
    alignSelf: "center",
    marginBottom: 64,
    borderRadius: 100,
  },
});
