import * as actionTypes from 'actions/actionTypes';

export const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const facebookAuthSuccess = (state, action) => ({
  ...state,
  token: action.idToken,
  userId: action.userId,
  error: null,
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FACEBOOK_LOGIN_SUCCESS: return facebookAuthSuccess(state, action);
    // case actionTypes.FACEBOOK_LOGIN_FAIL: return facebookAuthFail(state, action);
    default:
      return state;
  }
};

export default reducer;
