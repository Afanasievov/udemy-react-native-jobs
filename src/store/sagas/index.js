import { takeEvery, all } from 'redux-saga/effects';

import * as actionTypes from 'actions/actionTypes';
import { facebookLogin } from 'sagas/facebookAuth';
import { fetchJobs } from 'sagas/jobs';

export function* watchFacebookAuth() {
  yield all([
    yield takeEvery(actionTypes.FACEBOOK_LOGIN, facebookLogin),
  ]);
}

export function* watchJobs() {
  yield all([
    yield takeEvery(actionTypes.FETCH_JOBS, fetchJobs),
  ]);
}
