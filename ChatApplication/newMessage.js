import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Header,
  StatusBar,
  Button,
  TextInput
} from 'react-native';

import * as firebase from "firebase"
import { database } from 'firebase';


class NewMessage extends Component{

static navigationOptions = {
    title : "New Message"
}

    constructor(){
        super()
        this.state ={
            message : '',
            username : '',
        }
    }

    sendMessage(){
        let message = this.state.message 
        let userName = this.state.username


        let dataBase = firebase.database().ref().child("/NewMessage")
            dataBase.push(message).then((data)=>{
                alert("Data send to DataBase")
            })


    }

    render(){
        return(
            <View >
            <TextInput  
            placeholder="Enter UserName"
            onChangeText = {(user)=>{
                this.setState({
                    username : user
                })
        }}
            />
            <TextInput  
            placeholder="Enter Message"
            onChangeText = {(mess)=>{
                    this.setState({
                        message : mess
                    })
            }}
            />
            <Button title="Send"
            onPress={this.sendMessage.bind(this)}
            ></Button>
            </View>
        )
    }
}
export default NewMessage