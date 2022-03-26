import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Home, ScanPage, ListStockOpname} from '../../../pages';
import {colors} from '../../../utils';
import {Icons} from '../../atoms';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
      }}>
      <Tab.Screen
        name="ListStockOpname"
        component={ListStockOpname}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MenuIcon icon="mc archive-check-outline" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="ScanPage"
        component={ScanPage}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MenuIcon icon="mc barcode-scan" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <MenuIcon icon="mc book-alphabet" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MenuIcon = (props) => {
  const focused = props.focused;
  return (
    <View style={styles.tabContainer}>
      <Icons icon={props.icon} size={20} style={styles.icon(focused)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 35,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    paddingHorizontal: 20,
  },
  tabContainer: {position: 'absolute'},
  icon: (focused) => ({
    color: focused ? colors.white : colors.dark,
  }),
});
