import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, PanResponder} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  componentWillMount = () => {
    this.animatedValue = new Animated.ValueXY();
    this._value = { x: 0, y: 0 };
    this.animatedValue.addListener(( value ) => this._value = value );
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: ( event, gestureState ) => true,
      onMoveShouldSetPanResponder: ( event, gestureState ) => true,
      onPanResponderGrant: ( e, gestureState ) => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y
        })
        this.animatedValue.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValue.x, dy: this.animatedValue.y }
      ]),
      onPanResponderRelease: ( e, gestureState ) => {
        this.animatedValue.flattenOffset();
        Animated.decay( this.animatedValue, {
          deceleration: 0.99,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start();
      },
    })
  }
  
  render() {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform()
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[ styles.box, animatedStyle ]} { ...this.panResponder.panHandlers}>
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
  box: {
    borderWidth: 2,
    borderRadius: .5
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
