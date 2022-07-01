import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const AdditionalInfo = () => {
  return (
    <View style={styles.main_container}>
      <Text style={styles.main_title}>Let us know you a bit better</Text>
      <Text style={styles.sub_title}>
        This following information will be used to create your profile.
      </Text>
      <View style={styles.feild_container}>
        <Text style={styles.feild_title}> Display Name </Text>
        <TextInput placeholder="Eg :- Saroj Regmi" />
      </View>

      <View style={styles.feild_container}>
        <Text style={styles.feild_title}> Phone Number</Text>
        <TextInput placeholder="Eg :- 98********" />
      </View>

      <View style={styles.feild_container}>
        <Text style={styles.feild_title}> Referral code</Text>
        <TextInput placeholder="Eg :- BXC3Y0" />
      </View>
      <Pressable onPress={() => submitForm()}>
        <Text>Continue</Text>
      </Pressable>
    </View>
  );
};

export default AdditionalInfo;

const styles = StyleSheet.create({});
