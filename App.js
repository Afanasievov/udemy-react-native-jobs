import React from 'react';
import { Provider } from 'react-redux';

import store from 'store/index';
import MainNavigator from 'services/navigator/Navigator';
import NavigationService from 'services/navigator/service';

export default () => (
  <Provider store={store}>
    <MainNavigator
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);
