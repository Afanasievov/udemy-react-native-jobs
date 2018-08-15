import * as ACTION_TYPES from 'actions/actionTypes';

export const fetchJobs = region => ({
  type: ACTION_TYPES.FETCH_JOBS,
  payload: region,
});

export const fetchJobsSuccess = jobs => ({
  type: ACTION_TYPES.FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFail = error => ({
  type: ACTION_TYPES.FETCH_JOBS_FAIL,
  payload: error,
});

export const likeJob = job => ({
  type: ACTION_TYPES.LIKE_JOB,
  payload: job,
});

export const clearLikedJobs = () => console.log('actions') || ({
  type: ACTION_TYPES.CLEAR_LIKED_JOBS,
});
