import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from 'reducers';
import { watchFacebookAuth, watchJobs } from 'sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchFacebookAuth);
sagaMiddleware.run(watchJobs);

export default store;
