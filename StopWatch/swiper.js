import {responsiveHeight,responsiveWidth,responsiveFontSize} from 'react-native-responsive-dimensions';
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import {Card,CardItem,Body,Icon,Button,Container,Content,Left,Right} from 'native-base';

// create a component
class swipe extends Component {
    render() {
        return (<Container style={{ flex: 3 }} >
                <View style={{ height: responsiveHeight(40), borderWidth: 1 }}>
                    <Swiper paginationStyle={{ alignItems : "flex-end" , marginBottom : -27 }}>
                        <Content style={{ padding: 2, paddingRight: 5 }} >
                            <Card style={{ flexDirection: "column" }}>
                                <CardItem style={{ height: responsiveHeight(17), width: responsiveWidth(100) }}>
                                    <Body >
                                        <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                                            <Text note style={{ paddingLeft: 5 }}>1hr ago</Text>
                                        </View>
                                        <Text note>From Haseeb</Text>
                                        <Text style={{ color: "black", fontSize: responsiveFontSize(3), fontWeight: "500" }} >Holiday on 1 Dec, 2017 on account of Milad-un-Nabi(SAW)..</Text>
                                    </Body>
                                </CardItem>


                                <CardItem style={{ height: responsiveHeight(15), width: responsiveWidth(100) }}>

                                    <View style={{ justifyContent: "space-between", flexDirection: "row", height: responsiveHeight(15), width: responsiveWidth(85) }}>

                                        <View style={{ justifyContent: "flex-end" }}>

                                            <Button iconLeft transparent
                                                onPress={() => {
                                                    alert("Mark Read")
                                                }}
                                            >
                                                <Icon name="md-checkmark" style={{ color: "blue" }} />
                                                <Text style={{ color: "blue", fontSize: 18, paddingLeft: 5 }}>Mark Read</Text>
                                            </Button>
                                        </View>

                                        <View style={{ justifyContent: "flex-end" }}>

                                            <Button iconLeft transparent style={{ alignContent: "flex-end" }}
                                                onPress={() => {
                                                    alert("Skip")
                                                }}>
                                                <Icon name="md-return-right" style={{ color: "blue" }} />
                                                <Text style={{ color: "blue", fontSize: 18, paddingRight: 5 }}>Skip</Text>
                                            </Button>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
                        </Content>




                        <View style={{ backgroundColor: "white", margin: 10, height: responsiveHeight(35) }}>
                            <View style={{ flexDirection: "row", paddingBottom: 5, paddingLeft: 15, paddingTop: 15 }}>
                                <Text note style={{ paddingLeft: 5 }}>1hr ago</Text>
                            </View>

                            <Text note style={{ paddingLeft: 15 }}>From Haseeb</Text>
                            <Text style={{ color: "black", fontSize: responsiveFontSize(3), fontWeight: "200", paddingLeft: 15 }} >Holiday on 1 Dec, 2017 on account of Milad-un-Nabi(SAW)..</Text>
                            {/* apna component hai */}
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',borderTopColor:'red',borderWidth:2}}>
                            <Button style={{borderRightColor:'red',borderWidth:2}}><Text>left</Text></Button>
                            <Button style={{borderLeftColor:'red',borderWidth:2}}><Text>right</Text></Button>
                            </View>






                        </View>
                    </Swiper>
                </View>
            </Container>       
            );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default swipe;