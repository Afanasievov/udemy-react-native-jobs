import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';
import { put } from 'redux-saga/effects';

import * as actions from 'actions/index';

const jobRootUrl = 'http://api.indeed.com/ads/apisearch?';
const jobQueryParams = {
  publisher: '4201738803816157',
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

export function* fetchJobs({ payload: region }) { // eslint-disable-line
  console.log('region: ', region);
  try {
    const zip = yield reverseGeocode(region);
    console.log('zip: ', zip);
    const url = buildJobsUrl(zip);
    console.log('url: ', url);
    const { data } = yield axios.get(url);
    console.log('data: ', data);

    put(actions.fetchJobsSuccess({ jobs: data }));
  } catch (err) {
    console.log('err: ', err);
  }
}
