import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Dashboard extends Component {

    render() {
        let userInfo = this.props.navigation.getParam('passProps', 'User Not Found');//state.params.passProps.userInfo;
        console.log(userInfo);
        return (
            <View>
                <Text>{userInfo}</Text>
            </View>
        );
    }
}