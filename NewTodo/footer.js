//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class Footer extends Component {
    render() {
        const { filter } = this.props;
        return (
            <View style={styles.container}>
                <Text>{this.props.count} count</Text>
                <View style={styles.filters}>
                    <TouchableOpacity 
                    style={[styles.filter, filter === "ALL" && styles.selected]}
                    onPress={() => this.props.onFilter("ALL")}>
                        <Text>ALL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.filter, filter === "ACTIVE" && styles.selected]}
                    onPress={() => this.props.onFilter("ACTIVE")}>
                        <Text>ACTIVE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.filter, filter === "COMPLETED" && styles.selected]}
                    onPress={() => this.props.onFilter("COMPLETED")}>
                        <Text>COMPLETED</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.props.onClearComplete}>
                    <Text>Clear Completed</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filters: {
        flexDirection: 'row'
    },
    filter: {
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    selected: {
        borderColor: 'rgba(175, 47, 47, .2)'
    }
});

//make this component available to the app
export default Footer;
