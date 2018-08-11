import * as actionTypes from 'actions/actionTypes';

export const fetchJobs = () => ({
  type: actionTypes.FETCH_JOBS,
});

export const fetchJobsSuccess = jobs => ({
  type: actionTypes.FETCH_JOBS_SUCCESS,
  payload: jobs,
});

export const fetchJobsFail = error => ({
  type: actionTypes.FETCH_JOBS_FAIL,
  payload: error,
});
