import { createBottomTabNavigator } from 'react-navigation';

import WelcomeScreen from 'screens/Welcome';
import AuthScreen from 'screens/Auth';
import MapScreen from 'screens/Map';
import DeckScreen from 'screens/Deck';

export default createBottomTabNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
  main: {
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
    }),
  },
});
