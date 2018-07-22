import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

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
      [SCREENS.REVIEW]: createStackNavigator({
        [SCREENS.REVIEW]: ReviewScreen,
        [SCREENS.SETTINGS]: SettingsScreen,
      }),
    }),
  },
},
{ headerMode: 'none' });
