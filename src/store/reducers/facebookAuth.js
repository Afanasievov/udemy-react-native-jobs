import * as ACTION_TYPES from 'actions/actionTypes';

export const initialState = {};

const facebookLoginSuccess = (state, action) => ({
  ...state,
  token: action.token,
});

const facebookLoginFail = state => ({ ...state, token: null });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FACEBOOK_LOGIN_SUCCESS: return facebookLoginSuccess(state, action.payload);
    case ACTION_TYPES.FACEBOOK_LOGIN_FAIL: return facebookLoginFail(state);
    default:
      return state;
  }
};

export default reducer;
