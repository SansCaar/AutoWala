import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    SemiBold: require("./assets/fonts/Roboto-Medium.ttf"),
    Regular: require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />
    </>
  );
}
