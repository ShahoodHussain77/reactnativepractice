import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Header,
  StatusBar,
  Button
} from 'react-native';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC35_1FFNvsMgA3u5AgS1shh99Emxn7esI",
  authDomain: "reactnativeprojectdatabase.firebaseapp.com",
  databaseURL: "https://reactnativeprojectdatabase.firebaseio.com",
  projectId: "reactnativeprojectdatabase",
  storageBucket: "reactnativeprojectdatabase.appspot.com",
  messagingSenderId: "852207404375"
};
firebase.initializeApp(config);

export default class App extends Component {
  static navigationOptions={
    title:'Start',
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button} onPress={()=>this.props.navigation.navigate("NewMessageScreen")} title='+'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',
    justifyContent:'space-between',
    flexDirection:'column',
    alignItems:'flex-end',
    
  },
  button:{
  }
});
