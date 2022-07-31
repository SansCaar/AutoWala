import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

import ProfileScreen from "../screens/ProfileScreen";
import LastrideScreen from "../screens/LastrideScreen";
import MapViewScreen from "../screens/MapViewScreen";
import RideScreen from "../screens/RideScreen";
import SignupScreen from "./../screens/auth/SignupScreen.js";
import LoginScreen from "./../screens/auth/LoginScreen.js";
import OtpScreen from "../screens/auth/OtpScreen.js";

import AdditionalInfo from "../screens/auth/AdditionalInfo";
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="LastRides" component={LastrideScreen} />
        <Stack.Screen name="MapView" component={MapViewScreen} />
        <Stack.Screen name="Ride" component={RideScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUpForm" component={AdditionalInfo} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
