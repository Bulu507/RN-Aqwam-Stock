import React from 'react';
import {
  Login,
  ScanPage,
  Splash,
  ListStockOpname,
  DetailStockOpname,
  UpdateStock,
  ListBooks,
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
      <Stack.Screen
        name="UpdateStock"
        component={UpdateStock}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListBooks"
        component={ListBooks}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
