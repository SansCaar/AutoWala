import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppStack from "./src/navigation/AppStack";


export default function App() {
  let [fontsLoaded] = useFonts({
    Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    SemiBold: require("./assets/fonts/Roboto-Medium.ttf"),
    Regular: require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <>
<<<<<<< HEAD
      {/* <HomeScreen /> */}
      {/* <ProfileScreen/> */}
      { <RidemapScreen/> }
=======
      <AppStack/>
>>>>>>> c0250253c9317a340c10a5e32e3f13e3a32e01a7
      <StatusBar style="auto" />
    </>
  );    
}
