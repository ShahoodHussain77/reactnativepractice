import formatTime from 'minutes-seconds-milliseconds';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      timeElapsed:null,
      running:false,
      startTime:null,
      laps:[],
    }
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
    this.laps = this.laps.bind(this);
  }

  handleStartStop(){
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running:false});
      return
    }
    this.setState({startTime:new Date()});
    this.interval = setInterval(()=>{
      this.setState({
        timeElapsed: new Date() - this.state.startTime,
        running:true
      });  
    },30);
  }
  
  handleLapPress(){
    var lap = this.state.timeElapsed;
    this.setState({
      startTime:new Date(),
      laps:this.state.laps.concat([lap]),
    });
  }

  laps(){
    return this.state.laps.map((time,index)=>{
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
          lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
      </View>
    });
  }

  startStopButton(){
    var style = this.state.running? styles.stopButton : styles.startButton;
    return <TouchableHighlight underlayColor="gray"
    onPress={this.handleStartStop}
    style={[styles.button,style]}>
    <Text>{this.state.running ? 'Stop' : 'Start'}</Text>
  </TouchableHighlight>
  }
  
  lapButton(){
    return <TouchableHighlight style={styles.button}
    underlayColor='gray'
    onPress={this.handleLapPress}>
      <Text>Lap</Text>
    </TouchableHighlight>
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header]}>
          <View style={[styles.timeWrapper]}>
            <Text style={styles.timer}>{formatTime(this.state.timeElapsed)}</Text>
          </View>
          <View style={[styles.buttonWrapper]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>
        <View style={[styles.footer]}>
          {this.laps()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'stretch',
  },
  header:{
    flex:1,
  },
  footer:{
    flex:1,
  },
  timeWrapper:{
    flex:5,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonWrapper:{
    flex:3,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  timer:{
    fontSize:52,
  },
  button:{
    borderWidth:2,
    height:80,
    width:80,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  },
  startButton:{
    borderColor:'#00CC00',
  },
  stopButton:{
    borderColor:'#CC0000',
  },
  lap:{
    justifyContent:'space-around',
    flexDirection:'row'
  },
  lapText:{
    fontSize:30,
  }
});
