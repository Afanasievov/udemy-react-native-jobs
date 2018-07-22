import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import { put } from 'redux-saga/effects';

import * as LS from 'constants/localStorage';
import CONFIG from 'config';
import * as actions from 'actions';

export function* facebookLogin() { // eslint-disable-line
  const lsToken = yield AsyncStorage.getItem(LS.JOBS_FACEBOOK_TOKEN);

  if (lsToken) {
    // Dispatch an action saying facebook login is done
    yield put(actions.facebookLoginSuccess({ token: lsToken }));
  } else {
    // Start up facebook Login process
    const { type, token } = yield Facebook.logInWithReadPermissionsAsync(
      CONFIG.FACEBOOK_APP_ID,
      { permissions: ['public_profile'] },
    );

    if (type === 'cancel') {
      yield put(actions.facebookLoginFail());
    }

    yield AsyncStorage.setItem(LS.JOBS_FACEBOOK_TOKEN, token);
    yield put(actions.facebookLoginSuccess(token));
  }
}
