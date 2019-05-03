import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import { priceDisplay } from '../utilFunc';

class DealItem extends Component {
    
    handlePress = () => {
        this.props.onPress(this.props.deals.key);    
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.handlePress} >
                <Image source={{uri:this.props.deals.media[0]}} style={styles.image}/>
                <View style={styles.textView}>
                    <Text style={styles.title}>{this.props.deals.title}</Text>
                    <View style={styles.priceAndName}>
                        <Text style={styles.fontColor}>{this.props.deals.cause.name}</Text>
                        <Text style={styles.fontColor}>{priceDisplay(this.props.deals.price)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
    },
    image:{
        width:'100%',
        height:150,
        backgroundColor:'#ccc',
    },
    textView:{
        backgroundColor:'white',
        borderBottomWidth:2,
        borderLeftWidth:1,
        borderRightWidth:2,
        borderColor:'silver',        
    },
    title:{
        padding:5,
        fontWeight:'bold',
        color:'black',
    },
    priceAndName:{
        paddingLeft:5,
        paddingBottom:8,
        paddingRight:8,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    fontColor:{
        color:'#444444',
    }
});

export default DealItem;
