import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DealItem from './DealItem';

class DealList extends Component {

    render() {
        return (
            <View style={styles.container}>
            <FlatList 
                data={this.props.deals}
                renderItem={({item})=> <DealItem deals={item} onPress={this.props.onItemPress}/> }
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        width:'100%',
    },
});

export default DealList;
