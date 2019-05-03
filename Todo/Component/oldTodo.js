import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Keyboard
} from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Row from './row';

export default class App extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    this.state={
      value:'',
      items:[],
      allComplete:false,
      dataSource:ds.cloneWithRows([])
    }
    this.setSource = this.setSource.bind(this);
    this.handleAddItem=this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
  }

  handleAddItem(){
    if(!this.state.value) return;
    const newItems=[
      ... this.state.items,
      {
        key:Date.now(),
        text:this.state.value,
        complete:false
      }
    ]
    this.setState({
      items:newItems,
      value:'',
    });
  }

  handleToggleAllComplete(){
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item)=>({
      ... item,
      complete
    }))
    this.setState({
      items:newItems,
      allComplete:complete,
    })
  }

  setSource(items,itemsDatasource,otherState={}){
    this.setSource({
      items,
      dataSource:this.state.dataSource.cloneWithRows(itemsDatasource),
      ...otherState 
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          onToggleAllComplete={this.handleToggleAllComplete}
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={(value)=>this.setState({value})} />
        <View style={styles.content}>
          <ListView 
            style={styles.list}
            enableEmptySections
            dataSource={this.state.dataSource}
            onScroll={()=>Keyboard.dismiss()} 
            renderRow={({key, ... value})=>{
              return (
                <Row 
                key={key}
                { ... value} />
              )
            }}
            renderSeparator={(sectionId,rowId)=>{
              return <View key={rowId} style={stylres.seprator} />
            }}/>
        </View>
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content:{
    flex:1,
  },
  list:{
    backgroundColor:'#FFF',
  },
  seprator:{
    borderWidth:1,
    borderColor:'#F5F5F5'
  }
});
