/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
autumnImage = require('./imagges/autumn.jpg');
umberlaImage = require('./imagges/umberla.jpg');

cloudsHeavy = require('./imagges/CloudsHeavy1.jpg');
mistWeather1 = require('./imagges/mistWeather1.jpg');
clearSky = require('./imagges/clearSky2.jpg');
hazeWeather = require('./imagges/hazeWeather1.jpg');
rainLow = require('./imagges/LowRainWindow.jpg');
sand = require('./imagges/sandWeather2.jpg');
smokeCity = require('./imagges/smokeWeather1.jpg');

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  NativeModules,
  LayoutAnimation,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
  Animated,
  Easing
} from 'react-native';

export default class App extends Component {

  constructor(){
    super();
    this.state={
      zip:'',
      foreCast:null,
      imageSrc:umberlaImage,
      maxValue:250,
    };
    this.animatedValue = new Animated.Value(80)
  }

  animation(){
    Animated.timing(this.animatedValue,{
      toValue:this.state.maxValue,
      duration:1000,
    }).start()
  }

  handleText=(event)=>{
    var zip = event.nativeEvent.text;
    if(zip==='' || zip===' '){
      console.log('text input is empty')
      ToastAndroid.showWithGravity('City not provided',ToastAndroid.SHORT,ToastAndroid.BOTTOM)
    }
    else{
      fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&APPID=b9f2053bc41aae67c39dc898611110c5')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          foreCast: {
            main: responseJson.weather[0].main,//list[0].weather[0].main,
            description: responseJson.weather[0].description,//list[0].weather[0].description,
            temp: responseJson.main.temp//list[0].main.temp
          }
        });
        if(this.state.foreCast.main==='Clouds'){
          this.setState({imageSrc:cloudsHeavy})
        } 
        else if(this.state.foreCast.main==='Clear'){
          this.setState({imageSrc:clearSky})                
        }
        else if(this.state.foreCast.main==='Haze'){
          this.setState({imageSrc:hazeWeather})                
        }
        else if(this.state.foreCast.main==='Rain'){
          this.setState({imageSrc:rainLow})                
        }
        else if(this.state.foreCast.main==='Sand'){
          this.setState({imageSrc:sand})                
        }
        else if(this.state.foreCast.main==='Smoke'){
          this.setState({imageSrc:smokeCity})                
        }
        this.animation()
      }).catch((error) => {
        ToastAndroid.showWithGravity('Error loading info',ToastAndroid.SHORT,ToastAndroid.BOTTOM)      
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    }
//    console.log({zip:event.nativeEvent.text});
//1174872    this.setState({zip:event.nativeEvent.text})
  }

  render() {
    var content = null;
    if(this.state.foreCast!==null){
      content = <ForeCast              
        main={this.state.foreCast.main}
        description={this.state.foreCast.description}
        temp={this.state.foreCast.temp}/>;
    }
    const animatedStyle = {height:this.animatedValue}

    return(
        <ImageBackground  fadeDuration={0} source={this.state.imageSrc}//require('./imagges/autumn.jpg')}
        resizeMode='cover'
        style={[styles.backdrop]}>
        <Animated.View style={[styles.overlay,animatedStyle]}>
          <View style={styles.row}>
            <Text style={styles.mainText}>
              Current weather for
              </Text>
            <View style={styles.zipContainer}>
              <TextInput returnKeyType='go'
                style={[styles.zipCode, styles.mainText]}
                onSubmitEditing={this.handleText.bind(this)} 
                autoCorrect={true}
                placeholder='London'
                placeholderTextColor='#ffffff' />
            </View>
          </View>
          {content}
        </Animated.View>
        </ImageBackground>
    );
  }
}

class ForeCast extends Component{    

  constructor(){
    super();
    this.state={
      cel:'',
    }
  }
  FtoC=()=>{
    var foren = this.props.temp;
    console.log(foren);
    cel = (foren-32)*(5/9);
    console.log(cel);
  }

//  <TouchableOpacity onPress={this.FtoC.bind(this)}>
//  <Text style={styles.bigText}>{this.state.cel}°C{}</Text>
//  </TouchableOpacity>

  render(){
      return(
          <View>
              <Text style={styles.bigText}>{this.props.main}</Text>
              <Text style={styles.mainText}>Current Conditions {this.props.description}</Text>
              <Text style={styles.bigText}>{this.props.temp} °F</Text>
          </View>
      );
  }
}

var baseFontSize=16;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
  backdrop:{
    flex:1,
    alignItems:'center',    
    flexDirection:'column',
  },
  overlay:{
    backgroundColor:'#000000',
    opacity:0.5,
    flexDirection:'column',
    alignItems:'center'
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    padding:20,
  },
  zipContainer:{
    flex:1,
    borderBottomColor:'#DDDDDD',
    borderBottomWidth:1,
    marginLeft:10,
    height:30,
  },
  zipCode:{
    height:40,
  },
  bigText:{
    fontSize:baseFontSize+10,
    textAlign:'center',
    color:'#FFFFFF',
    padding:20,
  },
  mainText:{
    fontSize:baseFontSize,
    textAlign:'left',
    color:'#FFFFFF'
  },
  placeHolder:{
    flex:1,
  }

});
