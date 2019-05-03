/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
    this.animatedHeight = new Animated.Value(100);
  }

  componentDidMount() {
    Animated.timing( this.animatedValue, {
      toValue: .3,
      duration: 2000,
      easing: Easing.cubic
    }).start();
    Animated.timing( this.animatedHeight, {
      toValue: 200,
      duration: 2000,
      easing: Easing.bounce
    }).start();
  }

  render() {
    const animatedStyle = { opacity: this.animatedValue }
    const animatedHeight = { height: this.animatedHeight }
    return (
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <Text style={styles.instructions}>Animating box opacity</Text>
          <Animated.View style={[styles.box1 , animatedStyle]} />
        </View>
        <View style={styles.container}>
          <Text style={styles.instructions}>Increasing box height</Text>
          <Animated.View style={[styles.box2 , animatedHeight]} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box1:{
    backgroundColor: 'black',
    width: 100,
    height: 100    
  },
  box2:{
    backgroundColor: 'black',
    width: 100,
    height: 100    
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
