import { combineReducers } from 'redux';

import facebookAuth from 'reducers/facebookAuth';
import jobs from 'reducers/jobs';

export default combineReducers({
  facebookAuth,
  jobs,
});
