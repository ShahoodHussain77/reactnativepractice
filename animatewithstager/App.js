import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Dimensions} from 'react-native';

const { height } = Dimensions.get("window");
export default class App extends Component {

  componentWillMount = () => {
    this.animatedTextValue1 = new Animated.Value(0);
    this.animatedTextValue2 = new Animated.Value(0);
    this.animatedTextValue3 = new Animated.Value(0);
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.stagger(500, [
      Animated.timing(this.animatedValue1, {
        toValue: height/1.06,
        duration: 1500
      }),
      Animated.timing(this.animatedValue2, {
        toValue: height/1.06,
        duration: 2000
      }),
      Animated.timing(this.animatedValue3, {
        toValue: height/1.06,
        duration: 2500
      }),
      Animated.timing(this.animatedTextValue1, {
        toValue: height/2.3,
        duration: 2000
      }),
      Animated.timing(this.animatedTextValue2, {
        toValue: height/2.3,
        duration: 2000
      }),
      Animated.timing(this.animatedTextValue3, {
        toValue: height/2.4,
        duration: 2000
      }),
    ]).start();
  }
  
  render() {

    const animateStyle1 = {
      height: this.animatedValue1
    }
    const animateStyle2 = {
      height: this.animatedValue2
    }
    const animateStyle3 = {
      height: this.animatedValue3
    }
    const animatedTextStyle1 = {
      transform: [
        { translateY: this.animatedTextValue1 }
      ]
    }
    const animatedTextStyle2 = {
      transform: [
        { translateY: this.animatedTextValue2 }
      ]
    }
    const animatedTextStyle3 = {
      transform: [
        { translateY: this.animatedTextValue3 }
      ]
    }

    return (
      <View style={styles.container}>
        <Animated.View style={[ styles.box, animateStyle1]}>
          <Animated.Text style={[styles.welcome,animatedTextStyle1]}>Welcome</Animated.Text>
        </Animated.View>
        <Animated.View style={[ styles.centerBox, animateStyle2]}>
          <Animated.Text style={[styles.welcome, animatedTextStyle2]}> to </Animated.Text>
        </Animated.View>
        <Animated.View style={[ styles.box, animateStyle3]}>
          <Animated.Text style={[styles.welcome, animatedTextStyle3]}>React Native!</Animated.Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#F5FCFF',
  },
  box: {
    flex: 1,
    margin: 5,
    backgroundColor: "#616161"
  },
  centerBox: {
    flex: 0.5,
    marginTop: 5,
    backgroundColor: "#616161"
  },
  welcome: {
    fontSize: 20,
    color: "#fff",
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
});
