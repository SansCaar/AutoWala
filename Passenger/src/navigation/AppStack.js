import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";

import ProfileScreen from "../screens/ProfileScreen";
import LastrideScreen from "../screens/LastrideScreen"
import MapViewScreen from "../screens/MapViewScreen";
import RideScreen from '../screens/RideScreen';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='MapView' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="LastRides" component={LastrideScreen} />
      <Stack.Screen name="MapView" component={MapViewScreen} />
      <Stack.Screen name="Ride" component={RideScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppStack
