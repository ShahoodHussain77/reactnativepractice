import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  AddPlantForm  from './src/component/add-plant-details-form';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddPlantForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
