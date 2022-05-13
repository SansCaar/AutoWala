import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    SemiBold: require("./assets/fonts/Roboto-Medium.ttf"),
    Regular: require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <>
    {/* <SignupScreen/> */}
      {/* <LoginScreen/> */}
      {/* <HomeScreen /> */}
      <ProfileScreen/>
      <StatusBar style="auto" />
    </>
  );
}
