import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LastrideScreen from "../screens/LastrideScreen"
import RidemapScreen from '../screens/RidemapScreen';
import CodeInputScreen from "../screens/CodeInputScreen";
import PassengerRequest from '../components/PassengerRequest';

import TestComponent from "../screens/TestComponent";
const Stack = createNativeStackNavigator();

const AppStack = () => {   
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="LastRides" component={LastrideScreen} />
      <Stack.Screen name="Ride" component={RidemapScreen} />
      <Stack.Screen name="CodeInput" component={CodeInputScreen} />
      <Stack.Screen name="PassengerComponent" component={PassengerRequest} />
      <Stack.Screen name="Test" component={TestComponent} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppStack
