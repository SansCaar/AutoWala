import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Colors } from "../styles/Global";
import BaseModal from "./BaseModal";

const ConfirmModal = React.forwardRef((props, ref) => {
  return (
    <BaseModal ref={ref} animationType="fade">
      <View style={styles.outerContainer}>
        <View style={styles.modalContainer}>
          {props.title&&<Text style={styles.modalTitle}>{props.title}</Text>}
          {props.children}
          {props.buttons && (
            <View style={[styles.row, { marginTop: 16 }]}>
              <Pressable style={styles.button} onPress={props.onPressOk}>
                <Text>Cancel</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  { backgroundColor: Colors.primary, borderWidth: 0 },
                ]}
                onPress={props.onPressOk}
              >
                <Text style={{ color: Colors.white }}>OK</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </BaseModal>
  );
});

export default ConfirmModal;
const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    minHeight:'35%',
    backgroundColor: Colors.white,
    padding: 24,
    paddingHorizontal: 30,
    justifyContent:"center",
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    width: 100,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 24,
  },
});
