import React, { createRef } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { Colors } from "../styles/Global";
import BaseModal from "./BaseModal";
import ChargesConfirmModal from "./ChargesConfirmModal";

const BottomModal = React.forwardRef((props, ref) => {
  let popupRef = createRef();
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
              onPress={() => popupRef.show()}
            >
              <Text>Book</Text>
            </Pressable>
          </View>
        </View>
      </BaseModal>
      <ChargesConfirmModal ref={(target) => (popupRef = target)} title="Confirm" >
          <View>
              {props?.children}
            <View style={styles.row}>
              <Text style={styles.normalText}>Advance Charge</Text>
              <Text style={[styles.normalText, { color: "red" }]}>
                10 coins
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.normalText}>Due Charge</Text>
              <Text style={styles.normalText}>20 coins</Text>
            </View>
            <View style={styles.seperator} />
            <View style={styles.row}>
              <Text style={styles.normalText}>Total Charge</Text>
              <Text style={styles.normalText}>30 coins</Text>
            </View>
          </View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              color: Colors.light_grey,
              fontFamily: "Regular",
              marginTop: 8,
            }}
          >
            The charges will only deduct after the driver accepts your ride.
          </Text>
          <View style={[styles.row, {marginTop:16}]}>
            <Pressable  style={styles.button} onPress={()=>popupRef.close()} >
              <Text>Cancel</Text>
            </Pressable>
            <Pressable style={[styles.button, {backgroundColor:Colors.primary, borderWidth:0,}]} onPress={()=>{popupRef.close(); alert('ok')}}>
              <Text style={{color:Colors.white}}  >OK</Text>
            </Pressable>
          </View>
      </ChargesConfirmModal>
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
