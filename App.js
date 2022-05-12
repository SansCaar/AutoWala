
import { StatusBar } from "expo-status-bar";
import { ContextProvider } from "./src/context/AppContext";
import HomeScreen from "./src/screens/HomeScreen";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    Bold : require("./assets/fonts/Roboto-Bold.ttf"),
    Regular : require("./assets/fonts/Roboto-Medium.ttf"),
    SemiBold : require("./assets/fonts/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <>
      <HomeScreen />
      <StatusBar style="auto" />  
    </>
  );
}
