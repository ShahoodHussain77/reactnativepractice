import React, {Component} from 'react';
import { Modal, TouchableOpacity, StyleSheet, Text, View, ListView, Image, TouchableHighlight} from 'react-native';

function buildUrl(q) {
    return 'https://www.googleapis.com/books/v1/volumes?q='
    + encodeURIComponent(q)
    + '&langRestrict=en&maxResults=40';
}

export default class ResultScreen extends Component {
    static navigationOptions = { header: null };
        
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            showErrorModal: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }
    componentDidMount() {
        this.fetchResult(this.props.navigation.getParam('searchPhrase'));
    }
    toggleModal(visible) {
        this.setState({ showErrorModal: visible });
     }
    fetchResult(searchPhrase) {
        fetch(buildUrl(searchPhrase))
        .then(response => response.json())
        .then(jsonData => {
            this.setState({ 
                isLoading: false,
                dataSource: this.state.dataSource.cloneWithRows(jsonData.items)
            });
            console.dir(jsonData)
        })
        .catch(error => {
            console.dir(error);
            this.setState({ showErrorModal: true });
        });
    }
    goBack() {
        this.setState({
            showErrorModal: false
        });
        this.props.navigation.navigate('Home',{
            title: 'Results',
        });
    }
    retry() {
        this.setState({
            showErrorModal: false
        });
        this.fetchResult();
    }

    render() {
        this.goBack = this.goBack.bind(this);
        this.retry = this.retry.bind(this);
        this.renderBook = this.renderBook.bind(this);
        if( this.state.isLoading ) {
            return this.renderLoadingMessage();
        } else {
            return this.renderResults();
        }
    }
    renderLoadingMessage() {
        return(
        <View style={styles.container}>
            <Text style={styles.label}>Searching for: {this.props.navigation.getParam('searchPhrase')}</Text>
            <Text style={styles.label}>Please wait...</Text>
            <Modal isVisible={this.state.showErrorModal} animationType={"fade"} transparent={false}
            onRequestClose = {() => { console.log("Modal has been closed.") } }>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalBody}>Error occured while fetching data! Please try again..</Text>
                </View>
                {this.renderModalButtons()}
            </Modal>
        </View>
        );
    }
    renderModalButtons() {
        return( 
            <View style={styles.modalButtonsContainer}>
                <TouchableOpacity onPress={this.goBack}>
                    <View style={styles.modalButton}>
                        <Text style={styles.modalTextButton}>&lt; Go back</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.retry}>
                    <View style={styles.modalButton}>
                        <Text style={styles.modalTextButton}>&#8635; Retry</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    renderResults() {
        return(
            <ListView 
            dataSource={this.state.dataSource}
            renderRow={this.renderBook}
            style={styles.listView}/>
        );
    }
    renderBook(book) {
        return(
            <TouchableHighlight onPress={() => this.showBookDetails(book)}>
                <View style={styles.row}>
                    <Image 
                    style={styles.thumbnail}
                    source={{uri: book.volumeInfo.imageLinks.smallThumbnail}}/>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>
                            {book.volumeInfo.title}
                        </Text>
                        <Text style={styles.subtitle}>
                            {book.volumeInfo.subtitle}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    showBookDetails(book) {
        console.dir(book);
        this.props.navigation.navigate('bookDetails',{
            title: book.volumeInfo.title,
            book: {book},
        });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Math.random() > 0.5 ? '#5AC8FA' : '#4CD964',
  },
  listView: {

  },
  rightContainer: {
      flex: 1
  },
  label: {
    fontSize: 24,
    fontWeight: 'normal',
    marginBottom: 6,
    color: '#FFF'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5AC8FA',
    paddingRight: 20,
    marginTop: 1,
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
  thumbnail: {
    width: 70,
    height: 108,
    marginRight: 16,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  modalButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7021a',
    padding: 100
  },
  modalBody: {
    fontSize: 18,
  },
  modalButton: {
    borderColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  modalTextButton: {
    fontSize: 18,
    color: '#ffffff',
  }
});
