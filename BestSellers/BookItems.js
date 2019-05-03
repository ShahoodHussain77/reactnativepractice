import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

export default class BookItems extends Component{
    
  constructor(){
    super();
//    propTypes:{
//      coverURL:React.propTypes.string.isRequired;
//      author:React.propTypes.string.isRequired;
//      title:React.propTypes.string.isRequired;      
//    }

  }
  render(){
    return(<View>
      <Image style={styles.cover} source={{uri:this.props.coverURL}} />
      <View style={styles.info}>
        <Text style={styles.author}>{this.props.author}</Text>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  bookItems:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#FFFFFF',
    borderBottomColor:'#AAAAAA',
    borderBottomWidth:2,
    padding:5,
  },
  cover:{
    flex:1,
    height:150,
    resizeMode:'contain',
  },
  info:{
    flex:3,
    alignItems:'flex-end',
    flexDirection:'column',
    alignSelf:'center',
    padding:20,
  }
});