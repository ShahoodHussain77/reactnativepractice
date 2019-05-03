import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  componentWillMount = () => {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 200,
      duration: 2500
    }).start();
  }
  
  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0,150],
      outputRange: ['rgb(0, 0, 0)', 'rgb(50, 250, 170)']
    })
    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.animatedValue }
      ]
    }
    return (
      <View style={styles.container}>
      <Animated.View style={[ animatedStyle , styles.box]}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    borderWidth: 2
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
