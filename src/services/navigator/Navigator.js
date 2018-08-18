import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import WelcomeScreen from 'screens/Welcome';
import AuthScreen from 'screens/Auth';
import MapScreen from 'screens/Map';
import DeckScreen from 'screens/Deck';
import ReviewScreen from 'screens/Review';
import SettingsScreen from 'screens/Settings';

import * as SCREENS from 'constants/screens';

export default createStackNavigator({
  [SCREENS.WELCOME]: WelcomeScreen,
  [SCREENS.AUTH]: AuthScreen,
  [SCREENS.MAIN]: {
    screen: createBottomTabNavigator({
      [SCREENS.MAP]: MapScreen,
      [SCREENS.DECK]: DeckScreen,
      [SCREENS.REVIEW]: {
        screen: createStackNavigator({
          [SCREENS.REVIEW]: {
            screen: ReviewScreen,
            navigationOptions: () => ({
              title: 'Review Jobs',
            }),
          },
          [SCREENS.SETTINGS]: SettingsScreen,
        }),
        navigationOptions: () => ({
          title: 'Review Jobs',
          tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={30} color={tintColor} />,
        }),
      },
    },
    {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        labelStyle: { fontSize: 12 },
      },
    }),
  },
},
{ headerMode: 'none' });
