var React = require('react-native');
var { StyleSheet } = React;

const styles = StyleSheet.create({
    mainContainer:{
      flex:1,
      backgroundColor:'#AAAAAA'
    },
    navBar:{
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#2A3744',
      flexDirection:'row',
    },
    navBarTitle:{
      color:'#FEFEFE',
      textAlign:'center',
      flex:1,
      fontWeight:'bold',
      fontSize:20,
      flex:1,
    },
    navBarButton:{
      color:'#FEFEFE',
      textAlign:'center',
      fontSize:20,
    },
    searchBar:{
      paddingLeft:10,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#FFF',
    },
    searchBarInput:{
      fontSize:18,
      flex:1,
    },
    activityIndicator: {
      backgroundColor:'red',
      justifyContent: 'center',
      alignItems: 'center',
   }
  });
   export default styles