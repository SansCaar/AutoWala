import { StyleSheet } from "react-native";
import { Colors } from "./Global";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Colors.background,
    flexDirection:"column",
  },
  h1: {
    fontFamily: "Bold",
    fontSize: 24,
    color: Colors.black,
  },
  dotsImage: {
    alignSelf: "center",
    height: "100%",
    marginRight: 16,
    resizeMode: "contain",
  },
  inputsContainer: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 32,
  },
  inputStyle: {
    backgroundColor: Colors.white,
    height: 46,
    // paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 30,
    fontSize: 18,
    color: Colors.black,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  sendButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.primary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
  },
  sendButtonImg: {
    height: 24,
    width: 24,
    resizeMode: "contain",
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
  mapHeading: {
    fontFamily: "Bold",
    fontSize: 16,
    color: Colors.black,
  },
  map: {
    borderRadius:24,
    width:'auto',
    height:200,
    borderRadius: 24,
    marginTop: 16,
  },
  pointsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 40,
  },
  pointsTitle: {
    color: Colors.light_grey,
    fontFamily: "SemiBold",
    fontSize: 18,
  },
  pointsValue: {
    fontSize: 32,
    fontFamily: "SemiBold",
    color: Colors.black,
  },
  pointsButton: {
    backgroundColor: Colors.primary,
    padding: 32,
    borderRadius: 24,
  },
  pointsButtonText: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: Colors.white,
  },
});
