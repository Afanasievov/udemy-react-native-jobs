import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import AuthScreen from './src/screens/Auth';
import WelcomeScreen from './src/screens/Welcome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  const MainNavigator = createBottomTabNavigator({
    welcome: WelcomeScreen,
    auth: AuthScreen,
  });

  return (
    <View style={styles}>
      <MainNavigator />
    </View>
  );
};
