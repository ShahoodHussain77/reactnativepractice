import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Picker,
  TextInput,
  CheckBox,
  TouchableHighlight
} from 'react-native';

class App extends Component {
  
  constructor(){
    super();
    this.state={
      val:'',
      class:'select',
      studentName:'',
      studentFather:'',
      checked:false
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.input}>
        <TextInput placeholder="Student Name" 
        onChangeText={(text) => this.setState({studentName:text})}
        value={this.state.studentName}/>
        <TextInput placeholder="Father Name" 
        onChangeText={(text) => this.setState({studentFather:text})}
        value={this.state.studentFather}/>
        <Picker selectedValue={this.state.class} 
        onValueChange={(itemValue,ItemIndex) => {this.setState({
          class:itemValue
        })}}>
         <Picker.Item label="KG" value="KG" />
         <Picker.Item label="NURSERY" value="NURSERY" />
         <Picker.Item label="MATRIC" value="MATRIC" />
        </Picker>
        <TouchableHighlight style={styles.saveButton} onPress={()=>{alert('Student name '+ this.state.studentName)}}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome:{
    fontSize:24
  },
  mainContainer:{
    backgroundColor:'silver',
    margin:10,
    borderWidth:2,
    borderColor:'black'
  },
  input:{
    paddingTop:10,
    paddingBottom:10
  },
  saveButton:{
    marginTop:10,
    backgroundColor:'green',
    height:40,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    color:'white',
  }
});

export default App