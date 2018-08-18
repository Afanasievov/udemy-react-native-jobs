import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import { put } from 'redux-saga/effects';

import navigationService from 'services/navigator/service';

import * as CONFIG from 'config/index';
import * as actions from 'actions/index';
import * as SCREENS from 'constants/screens';

import jobsMock from './jobsMock';

const jobRootUrl = 'http://api.indeed.com/ads/apisearch?';
const jobQueryParams = {
  publisher: CONFIG.INDEED_PUBLISHER,
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript',
};

const buildJobsUrl = (zip) => {
  const query = qs.stringify({ ...jobQueryParams, l: zip });
  return `${jobRootUrl}${query}`;
};

export function* fetchJobs({ payload: region }) {
  let zip;

  try {
    zip = yield reverseGeocode(region);
  } catch (err) {
    console.log('Reverse Geocode err: ', err);
  }

  const url = buildJobsUrl(zip);

  let { data } = yield axios.get(url);

  // if indeed publisher id is incorrect mock the response
  if (data.error && data.error === 'Invalid publisher number provided.') {
    console.log('<<< Invalid publisher number provided. Load mock-data. >>>');
    data = jobsMock;
  }

  yield put(actions.fetchJobsSuccess(data));

  // navigate to the 'deck' screen
  yield navigationService.navigate(SCREENS.DECK);
}

export function* clearLikedJobs() {
  try {
    yield put(actions.clearLikedJobsArray());
  } catch (err) {
    console.log('err: ', err);
  }
  yield navigationService.navigate(SCREENS.MAP);
}
