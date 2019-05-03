import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RootNavigator from './Views/RootNavigator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator ref="rootNavigator"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute',
    backgroundColor: '#F5FCFF',
  },
});