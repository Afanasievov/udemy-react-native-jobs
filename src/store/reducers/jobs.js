import _ from 'lodash';

import * as ACTION_TYPES from 'actions/actionTypes';

export const initialState = {
  results: [],
  liked: [],
};

const fetchJobsSuccess = (state, action) => ({
  ...state,
  results: action.payload.results,
});

// const fetchJobsFail = state => ({
//   ...state,
//   ...initialState,
// });

const likeJob = (state, action) => ({
  ...state,
  liked: _.uniqBy([action.payload, ...state.liked], 'jobkey'),
});

const clearLikedJobs = state => ({
  ...state,
  liked: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_JOBS_SUCCESS: return fetchJobsSuccess(state, action);
    // case ACTION_TYPES.FETCH_JOBS_FAIL: return fetchJobsFail(state, action);
    case ACTION_TYPES.LIKE_JOB: return likeJob(state, action);
    case ACTION_TYPES.CLEAR_LIKED_JOBS: return clearLikedJobs(state);
    default:
      return state;
  }
};

export default reducer;
