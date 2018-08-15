import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Platform,
  Linking,
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

import * as SCREENS from 'constants/screens';

const styles = {
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  italics: {
    fontStyle: 'italic',
  },
};

class Review extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate(SCREENS.SETTINGS)}
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"
      />
    ),
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0,
    },
  })

  renderLikedJobs() {
    return this.props.likedJobs.map((job) => {
      const {
        company,
        jobtitle,
        formattedRelativeTime,
        url,
        jobkey,
        longitude,
        latitude,
      } = job;
      const initialRegion = {
        longitude,
        latitude,
        longitudeDelta: 0.045,
        latitudeDelta: 0.02,
      };

      return (
        <Card key={jobkey} title={jobtitle}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company}</Text>
              <Text style={styles.italics}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now!"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  likedJobs: state.jobs.liked,
});

export default connect(mapStateToProps)(Review);
