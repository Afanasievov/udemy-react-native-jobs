import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';

import Swipe from 'components/Swipe/Swipe';
import * as actions from 'actions/index';
import * as SCREENS from 'constants/screens';

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
};

class Deck extends Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => <Icon name="description" size={30} color={tintColor} />,
  }

  renderCard = (job) => {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      longitudeDelta: 0.02,
      latitudeDelta: 0.045,
    };

    return (
      <Card
        title={job.jobtitle}
      >
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
        </Text>
      </Card>
    );
  }

  // return null due to the crushes of the app
  // renderNoMoreCards = () => null;
  renderNoMoreCards = () => (
    <Card title="No more jobs">
      <Button
        title="Back To Map"
        large
        icon={{ name: 'my-location' }}
        backgroundColor="#03A9F4"
        onPress={() => this.props.navigation.navigate(SCREENS.MAP)}
      />
    </Card>
  );

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp="jobkey"
        />
      </View>
    );
  }
}

const mapStateToProps = ({ jobs }) => ({
  jobs: jobs.results,
});

export default connect(mapStateToProps, actions)(Deck);
