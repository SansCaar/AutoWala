import React, { createRef } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { Colors } from "../styles/Global";
import BaseModal from "./BaseModal";

const BottomModal = React.forwardRef((props, ref) => {
  return (
    <>
      <BaseModal
        ref={ref}
        animationType="slide"
        styleModal={{
          elevation: 5,
        }}
        style={{
          backgroundColor: "none",
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Book A Ride</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={require("../../assets/auto.png")}
              style={{ resizeMode: "cover", width: 55, minHeight: 30 }}
            />
            <Pressable
              style={styles.bookButton}
              onPress={props.onPressBook}
            >
              <Text>Book</Text>
            </Pressable>
          </View>
        </View>
      </BaseModal>
      
    </>
  );
});

export default BottomModal;
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.white,
    padding: 24,
    paddingHorizontal: 24,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    justifyContent: "center",
    elevation: 20,
  },
  modalTitle: {
    color: Colors.black,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Bold",
    marginBottom: 24,
  },
  bookButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 24,
  },
  normalText: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: "SemiBold",
  },
  seperator: {
    backgroundColor: Colors.light_grey,
    height: 1,
    marginTop: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    width:100,
    alignItems:"center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 24,
  },
});
