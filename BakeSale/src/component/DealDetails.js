import React, { Component } from 'react';
import { Dimensions,View, Text,ScrollView,Button, StyleSheet,TouchableOpacity, Image, PanResponder, Animated, Linking } from 'react-native';
import { priceDisplay } from '../utilFunc';
import ajax from '../ajax';

class DealDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            deal : this.props.initialDealData,
            imageIndex: 0,
        }
        imageXpos = new Animated.Value(0);
        width = Dimensions.get('window').width;        
    }
    imagePanResponder = PanResponder.create({
        onStartShouldSetPanResponder:()=>true,
        onPanResponderMove:(event,gesture)=>{
            imageXpos.setValue(gesture.dx);
        },
        onPanResponderRelease:(event,gesture)=>{
            if(Math.abs(gesture.dx) > width * 0.4){
                const direction = Math.sign(gesture.dx);
                Animated.timing(imageXpos,{
                    toValue: direction * width,
                    duration: 300,
                }).start(()=>{this.handleSwipe(-1 * direction)});
            }else{
                Animated.spring(imageXpos,{
                    toValue: 0,
                }).start();    
            }
        }
    });
    handleSwipe = (indexDirection) => {
        if(!this.state.deal.media[this.state.imageIndex+indexDirection]){
            Animated.spring(imageXpos,{
                toValue: 0,
            }).start();
            return;
        }
        this.setState({
            imageIndex: this.state.imageIndex + indexDirection,
        }, () => {
            imageXpos.setValue(width * indexDirection);
            Animated.spring(imageXpos,{
                toValue: 0,
            }).start();
        })
    }
    async componentDidMount() {
        const fullDeal = await ajax.fetchDealData(this.state.deal.key);
        this.setState({
            deal:fullDeal,
        });
    }
    buyDealUrl= () => {
        Linking.openURL(this.state.deal.url);
    }
    render() {
        const {deal} = this.state;
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={this.props.onBack}>
                    <Text style={styles.backLink}>Back</Text>
                </TouchableOpacity>
                <Animated.Image {...this.imagePanResponder.panHandlers}
                source={{uri:deal.media[this.state.imageIndex]}}
                    style={[{ left: imageXpos }, styles.image]} />
                <View>
                    <Text style={styles.title}>{deal.title}</Text>
                </View>
                <ScrollView style={styles.textView}>
                    <View style={styles.midDetails}>
                        <View style={styles.priceAndName}>
                            <Text style={styles.priceFontColor}>{priceDisplay(deal.price)}</Text>
                            <Text style={styles.fontColor}>{deal.cause.name}</Text>
                        </View>
                        <View>
                            {deal.user && (
                                <View style={styles.avatarView}>
                                    <Image source={{ uri: deal.user.avatar }} style={styles.userAvatar} />
                                    <Text>{deal.user.name}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={styles.descriptionView}>
                        <Text style={styles.description}>{deal.description}</Text>
                    </View>
                    <Button title="But this Deal!" onPress={this.buyDealUrl}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:20,
    },
    backLink:{
        marginLeft:10,
        marginTop:5,
        marginBottom:5,
        color:'#22f',
    },
    image:{
        width:'100%',
        height:150,
        backgroundColor:'#ccc',
    },
    textView:{
        backgroundColor:'white',
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor:'grey',        
    },
    title:{
        padding:5,
        fontWeight:'bold',
        color:'black',
        backgroundColor:'orange',
    },
    midDetails:{
        paddingLeft:5,
        paddingBottom:8,
        paddingRight:8,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    fontColor:{
        color:'#444444',
    },
    priceAndName:{
        alignItems:'center',
        justifyContent:'space-between',
    },
    priceFontColor:{
        fontWeight:'bold',
        color:'black',        
    },
    userAvatar:{
        width:55,
        height:55,
        borderRadius:50,
    },
    avatarView:{
        paddingTop:5,
        alignItems:'center',
    },
    descriptionView:{
        borderWidth:1,
        borderColor:'silver',
        marginLeft:8,
        marginRight:8,
        marginBottom:8,
        padding:8,
    },
    description:{
        fontWeight:'bold',
    }
});

export default DealDetails;
