
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
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(1);
    this.animatedValue3 = new Animated.Value(0);
  }
  
  componentDidMount() {
    Animated.timing(this.animatedValue3, {
      toValue: 1,
      duration: 1000
    }).start();
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(this.animatedValue1, {
          toValue: 200,
          duration: 1000
        }),
        Animated.spring(this.animatedValue2, {
          toValue: 1.5,
        }),
        Animated.timing(this.animatedValue1, {
          toValue: -240,
          duration: 1000
        }),
        Animated.spring(this.animatedValue2, {
          toValue: 1.2
        })
      ]).start();
    }, 1500)
  }

  render() {
    const animatedStyle = {
      opacity: this.animatedValue3 ,
      transform: [
        { translateY: this.animatedValue1},
        { scale: this.animatedValue2}
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[animatedStyle, styles.box]}>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  box:{
    borderWidth: 2,
    borderColor: "rgba(233,150,45,1.0)"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
