import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { Colors } from "../styles/Global";
import BaseModal from "./BaseModal";

const ChargesConfirmModal = React.forwardRef((props, ref) => {
  return (
    <BaseModal ref={ref} animationType="fade">
      <View style={styles.outerContainer}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{props.title}</Text>
          {props.children}
        </View>
      </View>
    </BaseModal>
  );
});

export default ChargesConfirmModal;
const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: Colors.white,
    padding: 24,
    paddingHorizontal: 30,
    borderRadius: 24,
    elevation: 20,
    width: "90%",
  },
  modalTitle: {
    color: Colors.black,
    fontSize: 24,
    fontFamily: "Bold",
    marginBottom: 16,
  },
});
