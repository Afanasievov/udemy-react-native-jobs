import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { clearLikedJobs } from 'actions/index';

const settings = props => (
  <View>
    <Button
      title="Reset Liked Jobs"
      large
      icon={{ name: 'delete-forever' }}
      backgroundColor="#F44336"
      onPress={props.clearLikedJobs}
    />
  </View>
);

export default connect(null, { clearLikedJobs })(settings);
