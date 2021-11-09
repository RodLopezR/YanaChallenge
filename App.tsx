import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

import Redux from './src/redux';
import StackNavigator from './src/navigator/StackNavigator';
import { Text } from 'react-native';

const App = () => {
  return (
    <ThemeProvider>
      <Redux>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Redux>
    </ThemeProvider>
  );
};

/*
    <ThemeProvider>
      <Redux>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Redux>
    </ThemeProvider>*/

export default App;
