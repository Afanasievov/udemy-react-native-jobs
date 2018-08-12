import * as actionTypes from 'actions/actionTypes';

export const initialState = {
  results: [],
};

const fetchJobsSuccess = (state, action) => ({
  ...state,
  results: action.payload,
});

const fetchJobsFail = state => ({
  ...state,
  results: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JOBS_SUCCESS: return fetchJobsSuccess(state, action.payload);
    case actionTypes.FETCH_JOBS_FAIL: return fetchJobsFail(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
