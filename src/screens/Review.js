import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Review extends Component {
  static navigationOptions = {
    title: 'Review Jobs',
    headerRight: <Text>Go Right</Text>,
  }

  render() {
    return (
      <View>
        <Text>Review screen</Text>
        <Text>Review screen</Text>
        <Text>Review screen</Text>
        <Text>Review screen</Text>
        <Text>Review screen</Text>
        <Text>Review screen</Text>
        <Text>Review screen</Text>
        <Text>Review screen</Text>
        <Text>Review screen</Text>
        <Text>Review screen</Text>
      </View>
    );
  }
}

export default Review;
