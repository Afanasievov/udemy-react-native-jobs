import * as actionTypes from 'actions/actionTypes';

export const initialState = {};

const facebookAuthSuccess = (state, action) => ({
  ...state,
  token: action.token,
});

const facebookAuthFail = () => ({ token: null });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FACEBOOK_LOGIN_SUCCESS: return facebookAuthSuccess(state, action);
    case actionTypes.FACEBOOK_LOGIN_FAIL: return facebookAuthFail();
    default:
      return state;
  }
};

export default reducer;
