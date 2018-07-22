import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';

import Slides from 'components/Slides/Slides';
import * as SCREENS from 'constants/screens';
import * as LS from 'constants/localStorage';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' },
];

class Welcome extends Component {
  state = { token: null };

  async componentWillMount() {
    const token = await AsyncStorage.getItem(LS.JOBS_FACEBOOK_TOKEN);

    if (token) {
      this.props.navigation.navigate(SCREENS.MAP);
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate(SCREENS.AUTH);
  };

  render() {
    if (_.siNull(this.state.token)) {
      return <AppLoading />;
    }
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default Welcome;
