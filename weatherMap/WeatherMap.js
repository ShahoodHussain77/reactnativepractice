import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class WeatherMap extends Component{
    
    constructor(){
        super();
        this.state={
            pin:{
                latitude:0,
                longitude:0,
            },
        };
    }

    onRegionChangeComplete(regigon){
        console.log(region);
        this.setState({
            pin:{
                latitude:region.latitude,
                longitude:region.longitude,    
            }
        })
    }

    render(){
        return(
            <MapView style={styles.mapView}
                onRegionChange={this.onRegionChangeComplete}>
                <MapView.Marker coordinate={this.state.pin}></MapView.Marker>
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    mapView:{
        flex: 1,
    }
});