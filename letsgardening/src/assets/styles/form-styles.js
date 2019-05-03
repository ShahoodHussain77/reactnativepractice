import { StyleSheet, Dimensions } from 'react-native';
const { window } = Dimensions.get('window');

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
    },
    form: {
        marginRight: 15,
    },
    description: {
        borderColor: '#757575',
        borderBottomWidth: 2,
        marginBottom: 15
    },
    shortdescription: {
        borderColor: '#757575',
        borderBottomWidth: 2,
        marginTop: 15,
        marginBottom: 15
    },
    szLabel: {
        justifyContent: 'space-around',
        marginTop: 10,
        paddingBottom: 10
    },
    sizeText: {
        fontSize: 18
    },
    quantityText: {
        fontSize: 18
    },
    price: {
        borderColor: '#757575',
        borderBottomWidth: 2,
        marginBottom: 15
    },
    plantName: {
        borderColor: '#757575',
        borderBottomWidth: 2,
    },
    itemHeading: {
        borderColor: '#757575',
        borderBottomWidth: 2,
    },
    itemLine: {
        borderColor: '#757575',
        borderBottomWidth: 1,
    },
    imageUpload: {
        marginLeft: 15,
        marginBottom: 15,
    },
    saveReset: {
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 5
    },
    save: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 5
    },
    reset: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5
    },
    tab: {
        backgroundColor: '#D7CCC8',
    },
    inputshoopers: {
        flex: 1,
        justifyContent: 'space-between',
        borderColor: '#757575',
        borderBottomWidth: 1,
    },
    viewdata: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
});

export default styles;