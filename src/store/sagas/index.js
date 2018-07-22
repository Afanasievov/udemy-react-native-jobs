import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from 'actions/actionTypes';
import { facebookLogin } from 'sagas/facebookAuth';

export function* watchFacebookAuth() { // eslint-disable-line
  yield all([
    yield takeEvery(actionTypes.FACEBOOK_LOGIN, facebookLogin),
  ]);
}
