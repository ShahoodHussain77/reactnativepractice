import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import styles from './todos_styles';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}
