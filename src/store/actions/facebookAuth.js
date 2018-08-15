import * as ACTION_TYPES from 'actions/actionTypes';

export const facebookLogin = () => ({
  type: ACTION_TYPES.FACEBOOK_LOGIN,
});

export const facebookLoginSuccess = token => ({
  type: ACTION_TYPES.FACEBOOK_LOGIN_SUCCESS,
  payload: token,
});

export const facebookLoginFail = error => ({
  type: ACTION_TYPES.FACEBOOK_LOGIN_FAIL,
  payload: error,
});
