import { takeEvery, all } from 'redux-saga/effects';

import * as ACTION_TYPES from 'actions/actionTypes';
import { facebookLogin } from 'sagas/facebookAuth';
import { fetchJobs, clearLikedJobs } from 'sagas/jobs';

export function* watchFacebookAuth() {
  yield all([
    yield takeEvery(ACTION_TYPES.FACEBOOK_LOGIN, facebookLogin),
  ]);
}

export function* watchJobs() {
  yield all([
    yield takeEvery(ACTION_TYPES.FETCH_JOBS, fetchJobs),
    yield takeEvery(ACTION_TYPES.CLEAR_LIKED_JOBS, clearLikedJobs),
  ]);
}
