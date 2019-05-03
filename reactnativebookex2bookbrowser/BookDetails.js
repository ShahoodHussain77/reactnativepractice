import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
export default class BookDetails extends Component {
    static navigationOptions = { header: null };

    render() {
        var data = this.props.navigation.getParam('book');
        console.dir(data);
        return (
            <ScrollView>
                <View style={styles.topContainer}>
                    <Image
                    style={styles.thumbnail}
                    source={{uri: data.book.volumeInfo.imageLinks.smallThumbnail}}
                    />
                    <View style={styles.titlesContainer}>
                    <Text style={styles.title}>
                    {data.book.volumeInfo.title}
                    </Text>
                    <Text style={styles.subtitle}>
                    {data.book.volumeInfo.subtitle}
                    </Text>
                    </View>
                    </View>
                    <View style={styles.middleContainer}>
                    <Text style={styles.description}>
                    {data.book.volumeInfo.description}
                    </Text>
                    </View>
                    <View style={styles.bottomContainer}>
                    <Text style={styles.author}>
                    Author: {data.book.volumeInfo.authors[0]}
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#5AC8FA',
    },
    thumbnail: {
    width: 70,
    height: 108,
    marginRight: 16,
    },
    titlesContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#5AC8FA',
    width: windowSize.width - 86,
    paddingTop: 8,
    paddingRight: 8,
    },
    title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    },
    subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff',
    },
    middleContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    margin: 16,
    },
    description: {
    fontFamily: 'Times',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000',
    marginBottom: 8,
    },
    bottomContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#5AC8FA',
    padding: 8,
    },
    author: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff',
    },
});