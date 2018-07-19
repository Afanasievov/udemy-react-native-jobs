import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from 'reducers';
import { watchFacebookAuth } from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchFacebookAuth);

export default store;
