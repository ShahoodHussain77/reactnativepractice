import Swiper from 'react-native-swiper';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-carousel-view';
import {responsiveHeight,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESOLD = 0.25 * SCREEN_WIDTH;
export default class example extends Component {
    
    constructor(){
        super();
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderMove:(event,gesture)=>{
                position.setValue({x: gesture.dx,y: gesture.dy})
            },
            onPanResponderRelease:(event,gesture)=>{
                if(gesture.dx > SWIPE_THRESOLD){
                    this.forceSwipe('right');
                }
                else if(gesture.dy < SWIPE_THRESOLD){
                    this.forceSwipe('left');
                }
                else{
                    this.resetPosition();            
                }
            }
        })
        this.state={panResponder , position};
    }

    forceSwipe(direction){
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position,{
            toValue:{ x : x , y: 0},
            duration: 250,
        }).start(()=> this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction){
        const {onSwipeLeft, onSwipeRight } =this.props;
        
    }

    resetPosition(){
        Animated.spring(this.state.position,{
            toValue: {x: 0 , y: 0}
        }).start();
    }

    border(color){
        return{
            borderColor:color,
            borderWidth:4
        }
    }

    footer(){
        return <View style={[styles.footer,this.border('yellow')]}>
            <TouchableHighlight><Text>Select</Text></TouchableHighlight>
            <TouchableHighlight><Text>Cancel</Text></TouchableHighlight>
        </View>
    }

    header(){
        return <View style={[this.border('black'),styles.header]}>
            <Text>
                Header
            </Text>
        </View>        
    }

    body(){
        return <View style={[this.border('green'),styles.body]}>
            <Text>
                it is the text and body
            </Text>    
        </View>
    }

    render(){
        return(
            <View style={[styles.conaitner,this.border('blue')]}>
                <Animated.View style={[styles.card,this.border('red'),this.state.position.getLayout()]}
                {...this.state.panResponder.panHandlers}>
                    {this.header()}
                    {this.body()}
                    {this.footer()}
                </Animated.View>
            </View>
        )
    }    
}

const styles = StyleSheet.create({
    conaitner:{
        flex:1,
    },
    card:{
        height:responsiveHeight(50),
    },
    header:{

    },
    body:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-around',
    }
})