import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Palette from '../theme/palette';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const { top: paddingTop} = useSafeAreaInsets()
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.sceneContainer}
      screenOptions={{
        tabBarLabelStyle: {...styles.tabBarLabel,paddingTop},
        tabBarIndicatorStyle: styles.tabBarIndicator,
        tabBarActiveTintColor: Palette.primary.color,
        tabBarInactiveTintColor: Palette.normal.ligth,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarLabel: 'Chat' }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ tabBarLabel: 'Cuenta' }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  sceneContainer: { backgroundColor: 'white', flex: 1 },
  tabBarLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tabBarIndicator: {
    backgroundColor: Palette.primary.color,
    height: 3,
  },
});

export default TopTabNavigator;
