import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as ACTIONS from 'actions/index';
import * as SCREENS from 'constants/screens';

class Auth extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    // this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete = (props) => {
    if (props.token) {
      this.props.navigation.navigate(SCREENS.MAP);
    }
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

const mapStateToProps = state => ({
  token: state.facebookAuth.token,
});

export default connect(mapStateToProps, ACTIONS)(Auth);
