import * as actionTypes from 'actions/actionTypes';

export const fetchJobs = region => ({
  type: actionTypes.FETCH_JOBS,
  payload: region,
});

export const fetchJobsSuccess = jobs => ({
  type: actionTypes.FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFail = error => ({
  type: actionTypes.FETCH_JOBS_FAIL,
  payload: error,
});
