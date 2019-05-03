import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Game extends Component {

    state={
        selectedNumber:[0,4],
    };

    randomNumbers = Array.from({ length: 6}).map(()=> 1 + Math.floor(10 * Math.random()));
    target = this.randomNumbers.slice(0,6-2).reduce((acc,curr) => acc + curr, 0);

    isNumberSelected = (numberSelected) => {
        return this.state.selectedNumber.indexOf(numberSelected) >= 0;
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
                <View style={styles.randomNumberContainer}>
                    {this.randomNumbers.map((randomNumber, index) =>
                        <RandomNumber 
                        key={index} 
                        number={randomNumber} 
                        isSelected={this.isNumberSelected(index)}/>
                    )}
                </View>
            </View>
        );
    }
}

class RandomNumber extends Component{

    handlePress= () =>{

    }
    render(){
        return (<TouchableOpacity onPress={this.handlePress}>
            <Text style={[styles.random, this.props.isSelected && styles.selected]} >{this.props.number}</Text>
        </TouchableOpacity>)
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DDD',
      paddingTop:10,
    },
    target: {
      fontSize: 40,
      textAlign: 'center',
      margin: 20,
      backgroundColor:'#aaa',
      fontWeight:'bold'
    },
    randomNumberContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    },
    random:{
        backgroundColor:'#999',
        width:300,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize:35,
        textAlign:'center',
    },
    selected:{
        opacity:0.3,
    },
});
  
export default Game;
