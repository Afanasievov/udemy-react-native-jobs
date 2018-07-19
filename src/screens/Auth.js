import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as actions from 'actions';

class Auth extends Component {
  componentDidMount() {
    this.props.facebookLogin();
  }

  render() {
    return (
      <View>
        <Text>Auth screen</Text>
        <Text>Auth screen</Text>
        <Text>Auth screen</Text>
        <Text>Auth screen</Text>
        <Text>Auth screen</Text>
        <Text>Auth screen</Text>
        <Text>Auth screen</Text>
        <Text>Auth screen</Text>
        <Text>Auth screen</Text>
        <Text>Auth screen</Text>
      </View>
    );
  }
}

export default connect(null, actions)(Auth);
