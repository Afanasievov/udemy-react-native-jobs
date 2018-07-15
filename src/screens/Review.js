import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from 'react-native-elements';

class Review extends Component {
  static navigationOptions = navigation => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigation.navigate('settings')}
      />
    ),
  })

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
