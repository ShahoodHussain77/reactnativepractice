import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import App from './App';

const Route = StackNavigator({
    Home: {
        screen: App,
    },

});

export default Route;
// navigationOptions:{
//     headerTitle:'Browser',
//     styleHeader:{
//         backgroundColor:'red',
//     }
// }
