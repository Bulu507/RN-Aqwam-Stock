import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, ScanPage} from '../../pages';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Home">
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
    </Stack.Navigator>
  );
}
