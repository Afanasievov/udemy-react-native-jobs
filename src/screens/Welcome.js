import React from 'react';

import Slides from 'components/Slides/Slides';
import * as SCREENS from 'constants/screens';

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' },
];

const welcome = ({ navigation }) => {
  const onSlidesComplete = () => {
    navigation.navigate(SCREENS.AUTH);
  };

  return <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />;
};

export default welcome;
