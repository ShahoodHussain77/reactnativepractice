import React, { Component } from 'react';
import { Container, Tabs, Tab, Header, CheckBox, Body, Textarea, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import styles from './../assets/styles/form-styles';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import RNFetchBlob from "react-native-fetch-blob";

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default class AddPlantForm extends Component {

    constructor() {
        super();
        this.state = {
            shoopers: [],
            shooperHeight: 0,
            shooperPrice: 0,
            shooperQuantity: 0,
            shooperWidth: 0,
            photos: [],
            plantName: "",
            shortDescription: "",
            description: "",
            size1: false,
            size2: false,
            size3: false,
            size4: false,
            size5: false,
            size6: false,
            quantity1: 0,
            quantity2: 0,
            quantity3: 0,
            quantity4: 0,
            quantity5: 0,
            quantity6: 0,
            price1: 0,
            price2: 0,
            price3: 0,
            price4: 0,
            price5: 0,
            price6: 0,
        }
    }

    
    handlePlantName = (event) => {
        this.setState({
            plantName: event.nativeEvent.text
        });
    }

    _handleSaveButton = () => {
        let temp = [];
        if (this.state.size1) {
            let obj = {
                typeof: 'POT',
                qty: this.state.quantity1,
                price: this.state.price1,
                Size: '7'
            };
            temp.push(obj);
        }
        if (this.state.size2) {
            let obj = {
                typeof: 'POT',
                qty: this.state.quantity2,
                price: this.state.price2,
                Size: '12'
            };
            temp.push(obj);

        }
        if (this.state.size3) {
            let obj = {
                typeof: 'POT',
                qty: this.state.quantity3,
                price: this.state.price3,
                Size: '14'
            };
            temp.push(obj);
        }
        if (this.state.size4) {
            let obj = {
                typeof: 'POT',
                qty: this.state.quantity4,
                price: this.state.price4,
                Size: '18'
            };
            temp.push(obj);
        }
        if (this.state.size5) {
            let obj = {
                typeof: 'POT',
                qty: this.state.quantity5,
                price: this.state.price5,
                Size: '20'
            };
            temp.push(obj);
        }
        if (this.state.size6) {
            let obj = {
                typeof: 'POT',
                qty: this.state.quantity6,
                price: this.state.price6,
                Size: '24'
            };
            temp.push(obj);
        }
        let data = {
            potSizes: temp,
            description: 'this.state.description',
            shotDescription: this.state.shortDescription,
            tranType: 'ADD',
            recordCreateDate: new Date(),
            shooperSizes: temp,
            availableQty: '123',
            totalQty: '123',
            pricePerItem: '123',
            imagePath: {},
            isActive: true,
        }
        console.log('data', data);
        axios.post('https://gardeningplant.herokuapp.com/api/plant/additem', data)
            .then((res) => {
                console.log('res', res);
            })
            .catch((err) => {
                console.log('err', err);
            })
    }

    _handleAddShoopers = () => {
        var data = {
            typeof: 'shooper',
            size: this.state.shooperHeight + ' x ' + this.state.shooperWidth,
            price: this.state.shooperPrice,
            qty: this.state.shooperQuantity,
        }
        var old = this.state.shoopers;
        old.push(data);
        this.state.shoopers = [];
        this.setState({ shoopers: old });
    }

    uploadImage() {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log('User selected a file form camera or gallery', response);
                const data = new FormData();
                data.append('name', 'avatar');
                data.append('file', {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName
                });
                const config = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                        'file': response.data
                    },
                    body: data,
                };
                axios.post('https://gardeningplant.herokuapp.com/api/image/upload', data, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                        'file': data
                    }
                },
                )
                    .then((e) => {
                        console.log(e, 'e')
                    })
                    .catch((er) => {
                        console.log('er',er)
                    })
            }
        })
    }

    render() {
        return (
            <Container style={styles.bodyContainer}>
                <Content>
                    <Tabs style={styles.tab}>
                        <Tab heading="POTS">
                            <Form style={styles.form}>
                                <Item style={[styles.itemHeading, styles.szLabel]}>
                                    <Text style={styles.sizeText}>Size</Text>
                                    <Text style={styles.quantityText}>Quantity</Text>
                                    <Text style={styles.quantityText}>Price</Text>
                                </Item>
                                <Item style={[styles.itemLine, styles.checkBox]}>
                                    <CheckBox checked={this.state.size1}
                                        color="green"
                                        onPress={() => this.setState({ size1: !this.state.size1 })} />
                                    <Body>
                                        <Text>7"</Text>
                                    </Body>
                                    <Input placeholder="Quantity"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ quantity1: event.nativeEvent.text })} />
                                    <Input placeholder="Price"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ price1: event.nativeEvent.text })} />
                                </Item>
                                <Item style={styles.itemLine}>
                                    <CheckBox checked={this.state.size2}
                                        color="green"
                                        onPress={() => this.setState({ size2: !this.state.size2 })} />
                                    <Body>
                                        <Text>12"</Text>
                                    </Body>
                                    <Input placeholder="Quantity"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ quantity2: event.nativeEvent.text })} />
                                    <Input placeholder="Price"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ price2: event.nativeEvent.text })} />
                                </Item>
                                <Item style={styles.itemLine}>
                                    <CheckBox checked={this.state.size3}
                                        color="green"
                                        onPress={() => this.setState({ size3: !this.state.size3 })} />
                                    <Body>
                                        <Text>14"</Text>
                                    </Body>
                                    <Input placeholder="Quantity"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ quantity3: event.nativeEvent.text })} />
                                    <Input placeholder="Price"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ price3: event.nativeEvent.text })} />
                                </Item>
                                <Item style={styles.itemLine}>
                                    <CheckBox checked={this.state.size4}
                                        color="green"
                                        onPress={() => this.setState({ size4: !this.state.size4 })} />
                                    <Body>
                                        <Text>18"</Text>
                                    </Body>
                                    <Input placeholder="Quantity"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ quantity4: event.nativeEvent.text })} />
                                    <Input placeholder="Price"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ price4: event.nativeEvent.text })} />
                                </Item>
                                <Item style={styles.itemLine}>
                                    <CheckBox checked={this.state.size5}
                                        color="green"
                                        onPress={() => this.setState({ size5: !this.state.size5 })} />
                                    <Body>
                                        <Text>20"</Text>
                                    </Body>
                                    <Input placeholder="Quantity"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ quantity5: event.nativeEvent.text })} />
                                    <Input placeholder="Price"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ price5: event.nativeEvent.text })} />
                                </Item>
                                <Item style={styles.itemLine}>
                                    <CheckBox checked={this.state.size6}
                                        color="green"
                                        onPress={() => this.setState({ size6: !this.state.size6 })} />
                                    <Body>
                                        <Text>24"</Text>
                                    </Body>
                                    <Input placeholder="Quantity"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ quantity6: event.nativeEvent.text })} />
                                    <Input placeholder="Price"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ price6: event.nativeEvent.text })} />
                                </Item>
                                <Item floatingLabel style={styles.plantName}>
                                    <Label>Plant Name</Label>
                                    <Input
                                        onEndEditing={(event) => this.setState({ plantName: event.nativeEvent.text })} />
                                </Item>
                                <Item style={styles.shortdescription}>
                                    <Textarea rowSpan={5} placeholder="Short Description"
                                        onEndEditing={(event) => this.setState({ shortDescription: event.nativeEvent.text })} />
                                </Item>
                                <Item style={styles.description}>
                                    <Textarea rowSpan={5} placeholder="Full Description"
                                        onEndEditing={(event) => this.setState({ description: event.nativeEvent.text })} />
                                </Item>
                                <Button style={styles.imageUpload} full onPress={this.uploadImage.bind(this)}>
                                    <Text>Upload Image</Text>
                                </Button>
                                <Item style={styles.imageItem}>
                                    <Button iconSave style={styles.save} onPress={this._handleSaveButton}>
                                        <Text>Save</Text>
                                    </Button>
                                </Item>
                            </Form>
                        </Tab>
                        <Tab heading="SHOOPERS">
                            <Form style={styles.form}>
                                <Item style={styles.inputshoopers}>
                                    <Input placeholder="20"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ shooperHeight: event.nativeEvent.text })} />
                                    <Text>x</Text>
                                    <Input placeholder="20"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ shooperWidth: event.nativeEvent.text })} />
                                    <Input placeholder="Quantity"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ shooperQuantity: event.nativeEvent.text })} />
                                    <Input placeholder="Price"
                                        keyboardType="number-pad"
                                        onEndEditing={(event) => this.setState({ shooperPrice: event.nativeEvent.text })} />
                                </Item>
                                <Item style={styles.imageItem}>
                                    <Button iconAdd style={styles.save} onPress={this._handleAddShoopers}>
                                        <Text>ADD MORE</Text>
                                    </Button>
                                </Item>
                                <Item style={[styles.itemHeading, styles.szLabel]}>
                                    <Text style={styles.sizeText}>Size</Text>
                                    <Text style={styles.quantityText}>Quantity</Text>
                                    <Text style={styles.quantityText}>Price</Text>
                                </Item>
                                {
                                    this.state.shoopers.map((m, key) => {
                                        return (
                                            <View key={key}
                                                style={styles.viewdata}>
                                                <Text>
                                                    {m.size}
                                                </Text>
                                                <Text>
                                                    {m.qty}
                                                </Text>
                                                <Text>
                                                    {m.price}
                                                </Text>
                                            </View>
                                        )
                                    })
                                }
                            </Form>
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        );
    }
}
