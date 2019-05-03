import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      name: 'World'
    };
    this.onNameChanged = this.onNameChanged.bind(this);
  }

  onNameChanged( event ) {
    this.setState({ name: event.nativeEvent.text });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.nameInput}
          onChange={this.onNameChanged}
          placeholder='Who should be greeted?'/>
        <Text style={styles.welcome}>Hello, {this.state.name}</Text>
        <Text style={styles.instructions}>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
  nameInput: {
    height: 36,
    padding: 4,
    margin: 24,
    fontSize: 18,
    borderWidth: 1,
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
