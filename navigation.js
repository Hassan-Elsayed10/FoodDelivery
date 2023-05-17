import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ResturantScreen from './Screens/ResturantScreen';
import CartScreen from './Screens/CartScreen';
import PreparingOrderScreen from './Screens/PreparingOrderScreen';
import DeliveryScreen from './Screens/DeliveryScreen';
const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Resturant" component={ResturantScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false, presentation: 'modal' }} />
        <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{ headerShown: false, presentation: 'fullScreenModal' }} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ headerShown: false, presentation: 'fullScreenModal' }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
