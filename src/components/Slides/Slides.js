import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  slideText: {
    fontSize: 30,
    color: 'white',
  },
  button: {
    backgroundColor: '#0288D1',
    marginVertical: 15,
  },
});

class Slides extends Component {
  renderLastSlide(index, color) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          buttonStyle={styles.button}
          containerViewStyle={{ backgroundColor: color }}
          onPress={this.props.onComplete}
        />
      );
    }

    return null;
  }

  renderSlides() {
    return this.props.data.map((slide, index) => (
      <View key={slide.text} style={[styles.slide, { backgroundColor: slide.color }]}>
        <Text style={styles.slideText}>{slide.text}</Text>
        {this.renderLastSlide(index, slide.color)}
      </View>
    ));
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;
