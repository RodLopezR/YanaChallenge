import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TopTabNavigator from './TopTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import { useSelector } from 'react-redux';
import { selectAuthStore } from '../redux/stores/auth/auth.selectors';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const reduxState = useSelector(selectAuthStore);
  const initialRouteName = reduxState.isLogged ? 'TopTabScreen' : 'LoginScreen';

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        headerStyle: {},
      }}>
      {!reduxState.isLogged && (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )}
      {reduxState.isLogged && (
        <Stack.Screen name="TopTabScreen" component={TopTabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
