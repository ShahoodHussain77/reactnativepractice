import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TextInput,
  ActivityIndicator,
  ListView
} from 'react-native';
import styles from './styles';

var resultsCache={
  dataForQuery:{}
}

export default class App extends Component {

  constructor(){
    super();
    const ds = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2      
    });
    this.state={
      input:'',
      isLoading:false,
      query:'',
      resultsData: ds,
    }
  }

  renderRow(){
    return <Text>{this.state.resultsData}</Text>
  }

  urlForQuery(){
    var url = 'https://itunes.apple.com/search';
    this.setState({
      query:url,
    })
    return url + "?media=movie&term=" + this.state.input;
  }

  fetchData(){
    fetch(this.urlForQuery())
    .then((response)=>response.json())
    .then((responseData)=>{
      alert("Rows " + responseData.resultCount);
      this.state.resultsData.cloneWithRows(responseData);
    })
    .catch((error) => {
      this.setState({
        isLoading:false,
      })
      alert("Result Not found " + error);
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar barStyle='light-content' backgroundColor='#2A3744'/>
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>Browser</Text>
          <Text style={styles.navBarButton}>Search</Text>
        </View>
        <View style={styles.searchBar}>
         <TextInput 
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Search for media'
          returnKeyType='search'
          enablesReturnKeyAutomatically={true}
          style={styles.searchBarInput}
          onEndEditing={(event)=>{this.setState({input:event.nativeEvent.text},this.fetchData)}}/>
          <ActivityIndicator animating={this.state.isLoading}
          style={styles.activityIndicator} size="large" color="#0000FF"/>
        </View>
        <ListView 
          dataSource={this.state.resultsData}
          renderRow={(rowData) => <Text>{rowData}</Text>}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode='on-drag'
        />
        <Text>{this.state.input}</Text>
      </View>
    );
  }
}
