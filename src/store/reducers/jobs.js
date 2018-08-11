import * as actionTypes from 'actions/actionTypes';

export const initialState = {};

const fetchJobsSuccess = (state, action) => ({
  ...state,
  jobs: action.payload,
});

const fetchJobsFail = state => ({
  ...state,
  jobs: [],
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
