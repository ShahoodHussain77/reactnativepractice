import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Easing
} from 'react-native';
import ajax from '../ajax';
import DealList from './DealList';
import DealDetails from './DealDetails';
import SearchBar from './SearchBar';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      deals:[],
      dealsSearch:[],
      currentDealId: null,
      activeSearchTerm: '',
    }
    titleXpos = new Animated.Value(0);
  }
  animateTitle = (direction = 1) => {
    const width = Dimensions.get('window').width-150;
    Animated.timing(titleXpos,{
      toValue: direction * (width / 2),
      duration:1000,
      easing:Easing.ease,
    }).start(({finished})=>{
      if(finished){
        this.animateTitle(-1 * direction); };
      })
  }
  async componentDidMount() {
    this.animateTitle()
    const deals = await ajax.getInitialDeals();
    this.setState({
      deals:deals,
    })
  }
  searchDeals = async (searchTerm) => {
    let dealsSearch = [];
    if(searchTerm){
      dealsSearch = await ajax.fetchSearchDeal(searchTerm);
    }
    this.setState({dealsSearch, activeSearchTerm:searchTerm});
  }
  setCurrentDeal = (dealId) => {
    this.setState({currentDealId:dealId});
  }
  unsetCurrentDeal = () => {
    this.setState({currentDealId:null});
  }
  currentDeal = () => {
    return this.state.deals.find((deal) => deal.key === this.state.currentDealId)
  }
  render() {
    if(this.state.currentDealId){
      return <DealDetails initialDealData={this.currentDeal()} onBack={this.unsetCurrentDeal}/>
    }
    const dealsToDisplay = this.state.dealsSearch.length > 0 ?
    this.state.dealsSearch : this.state.deals;
    if(dealsToDisplay.length > 0){
      return (<View>
        <SearchBar searchDeals={this.searchDeals} initialSearchTerm={this.state.activeSearchTerm}/>
        <DealList deals={dealsToDisplay}
          onItemPress={this.setCurrentDeal} />
      </View>);
    }
    return (
      <Animated.View style={[{left:titleXpos},styles.container]}>
        <Text style={styles.welcome}>BakeSale!</Text>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:10,
  },
  welcome: {
    fontSize: 30,
  },
});
