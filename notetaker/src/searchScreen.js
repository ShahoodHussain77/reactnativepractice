import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View, TextInput } from 'react-native';
import api from './Utils/api';

var { width, height } = Dimensions.get("window");

export default class SearchScreen extends Component {

  static navigationOptions = {
    title: 'Github Notetaker',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      alignSelf:'center',
      color: 'green',
    },
    headerStyle: {
      backgroundColor: '#F5FCFF',
    },
    tintColor: '#fefefe',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  gotoResultsScreen() {
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.username)
    .then(( res ) => {
      if( res.message === 'Not Found' ) {
        this.setState({
          error: 'User not found',
          isLoading: false
        })
      } else {
        this.props.navigation.push('DashboardScreen',{
          title: res.name || "Select an Option",
          passProps: { userInfo: res }
        });
        this.setState({
          isLoading: false,
          error: false,
          username: ''
        })
      }
    })
  }

  hanldeChange(event) {
    this.setState({
      username: event.nativeEvent.text,
    });
  }

  render() {
    let showError = this.state.error ? <Text>{this.state.error}</Text> : <Text></Text>;
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Search for Github User</Text>
        <TextInput style={styles.textInput}
          placeholder='Username'
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          onChange={ this.hanldeChange.bind(this) }
          onEndEditing={ this.gotoResultsScreen.bind(this)} />
          <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large">
          </ActivityIndicator>
          {showError}
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
    fontSize: 32,
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
    borderColor: 'white',
    borderRadius: 8,
    padding: 8,
    fontSize: 22,
    height: 50,
    borderWidth: 1,
    width: width / 1.1
  }
});
