import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  FlatList,
  SectionList
} from 'react-native';
import BookItem from './BookItems';
var API_KEY = '04ae66281ad44fdb96f0cc321c866abe';

export default class App extends Component {
  
  constructor(){
    super();
    this.state={
      loading:true,
      dataSource:new ListView.DataSource({
        rowHasChanged:(row1,row2)=>true
      }),
      arry:[],
      refreshing:false
    }
  }

  componentWillMount(){
  }

  componentDidMount(){
    this.refreshData()    
  }

  _renderHeader(){

  }

  _renderFooter(){

  }

  _renderRow(rowData){
    return <BookItem
          coverURL={rowData.Book_Image}
          title={rowData.title}
          author={rowData.author}/>    
  }

  refreshData(){
    var api = 'https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key='+API_KEY+''
    fetch(api)
    .then((response)=>{
//      console.log(response.json())
    return response.json()
    })
    .then((responseJson)=>{
      this.setState({arry:responseJson.results})
      this.setState({dataSource:this.state.dataSource.cloneWithRows(arry)})
      console.log(this.state.arry)      
    })
    .catch((error) => {
      console.warn(error);
      });
  }

  render(){
    return (
        <ListView
        style={{marginTop:24}}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop:24,
  },
  row:{
    flex:1,
    fontSize:24,
    padding:42,
    borderWidth:1,
    borderColor:'#DDDDDD',
  }
});
