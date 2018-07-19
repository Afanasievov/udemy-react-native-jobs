import * as actionTypes from 'actions/actionTypes';

export const facebookLogin = () => ({
  type: actionTypes.FACEBOOK_LOGIN,
});

export const facebookLoginSuccess = token => ({
  type: actionTypes.FACEBOOK_LOGIN_SUCCESS,
  payload: token,
});

export const facebookLoginFail = error => ({
  type: actionTypes.FACEBOOK_LOGIN_FAIL,
  payload: error,
});
