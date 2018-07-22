import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import WelcomeScreen from 'screens/Welcome';
import AuthScreen from 'screens/Auth';
import MapScreen from 'screens/Map';
import DeckScreen from 'screens/Deck';
import ReviewScreen from 'screens/Review';
import SettingsScreen from 'screens/Settings';

export default createStackNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
  main: {
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      review: createStackNavigator({
        review: ReviewScreen,
        settings: SettingsScreen,
      }),
    }),
  },
},
{ headerMode: 'none' });
