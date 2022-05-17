import { View, Text } from "react-native";
import React from "react";
import CodePopup from "../components/CodePopup";
import { Colors } from "../styles/Global";

const dummy_data = [
    {
        title:"Your Ride",
        name:"Utsav Bhattarai",
        location:"From Golpark to Devinagar",
        time:"12min",
        code:745645
    }
]
const TestComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: "center",
        backgroundColor: Colors.background,
      }}
    >
      <CodePopup data={dummy_data} />
    </View>
  );
};

export default TestComponent;
