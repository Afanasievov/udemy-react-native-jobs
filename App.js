import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import MainNavigator from 'services/navigator/Navigator';

export default () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);
