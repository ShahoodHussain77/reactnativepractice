//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onToggleAllComplete}>
                    <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
                </TouchableOpacity>
                <TextInput 
                value={this.props.value}
                onChangeText={this.props.onChange}
                onSubmitEditing={this.props.onAddItem}
                placeholder="What need to be done?"
                blurOnSubmit={false}
                returnKeyType="done"
                style={styles.input} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#2cFeF0',
    },
    toggleIcon: {
        fontSize: 30,
        color: '#CCC'
    },
    input: {
        flex: 1,
        marginLeft: 16,
        height: 50
    }
});

//make this component available to the app
export default Header;
