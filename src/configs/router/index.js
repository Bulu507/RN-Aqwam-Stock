import React from 'react';
import {
  Home,
  Login,
  ScanPage,
  Splash,
  ListStockOpname,
  DetailStockOpname,
} from '../../pages';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTab} from '../../components';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="HomeScreen"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScanPage"
        component={ScanPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListStockOpname"
        component={ListStockOpname}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailStockOpname"
        component={DetailStockOpname}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
