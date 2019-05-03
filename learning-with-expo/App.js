import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Todo from './src/app/todo';
import { store } from './src/app/store';

export default class App extends React.Component {
  render() {
    return (
		<Provider store={store}>
			<Todo />
		</Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
