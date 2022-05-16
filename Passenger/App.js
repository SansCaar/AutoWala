import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import LastrideScreen from "./src/screens/LastrideScreen"
import MapViewScreen from "./src/screens/MapViewScreen";

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
      {/* <MapViewScreen/> */}
      {/* <HomeScreen /> */}
      <ProfileScreen/>
      <StatusBar style="auto" />
    </>
  );
}
