//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={
            searchTerm:this.props.initialSearchTerm,
        }
    }
    handleChangeText = (searchTerm) => {
       this.setState({ searchTerm}, ()=>{this.props.searchDeals(searchTerm)} ); 
    }

    render() {
        return (
            <View>
                <TextInput placeholder="Search Deals Here" style={styles.SearchBar} 
                onChangeText={this.handleChangeText}
                value={this.state.searchTerm} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    SearchBar:{
        backgroundColor:'white',
        paddingTop:5,
    }
});

//make this component available to the app
export default SearchBar;
