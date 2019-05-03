import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

export default class SearchScreen extends Component {
    static navigationOptions = { header: null };

    gotoResultsScreen(searchPhrase) {
      this.props.navigation.navigate('Result',{
        title: 'Results',
        searchPhrase: searchPhrase
      });
    }

    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Book Browser</Text>
        <Text style={styles.label}>Search Your Books</Text>
        <TextInput style={styles.textInput}
          placeholder={this.props.placeholder}
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onEndEditing={ event => this.gotoResultsScreen(event.nativeEvent.text) } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Math.random() > 0.5 ? '#5AC8FA' : '#4CD964',
  },
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 28
  },
  label: {
    fontSize: 24,
    fontWeight: 'normal',
    marginBottom: 6,
    color: '#FFF'
  },
  textInput: {
    borderColor: '#8E8E93',
    backgroundColor: '#FFF',
    padding: 8,
    fontSize: 14,
    height: 40,
    borderWidth: 0.5,
    width: 300
  }
});
