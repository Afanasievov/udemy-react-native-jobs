import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import MainNavigator from './src/hoc/Navigator';

export default () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);
