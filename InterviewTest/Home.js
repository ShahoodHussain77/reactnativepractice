import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import Slider from '@react-native-community/slider';

export default class Home extends Component {
  render() {
    return (
    	<ScrollView style={styles.container}>
    		<View style={styles.header}>
    			<Text style={styles.search}>Search</Text>
    			<View style={styles.headerView}>
    				<ImageBackground 
					imageStyle={{ borderRadius: 10 }}
    				style={styles.headerImage}
    				source={require('./assets/album_3.jpg')}>
    					<Image style={styles.play} source={require('./assets/play_icon.jpg')}/>
    					<Text style={styles.fant}>THE FANTASIA</Text>
    				</ImageBackground>
    			</View>
    		</View>
    		<View style={styles.recommendationView}>
    			<Text style={styles.recommendation}>Recommendation</Text>
    			<Text style={styles.tracks}>Up-and-comming tracks</Text>
    			<View style={styles.albumView}>
    				<View style={styles.singleAlbum}>
    					<ImageBackground
    					style={styles.albumImage}
    					imageStyle={{ borderRadius: 10 }}
    					source={require('./assets/album_1.jpg')}>
    						<View style={styles.albumHeader}>
	    						<View style={styles.likesBackground}>
									<Text style={styles.headerPlay}>2.2K</Text>
	    						</View>
    						</View>
    						<View style={styles.albumFooter}>
    							<Text style={styles.footerText}>Latest Music</Text>
    						</View>
    					</ImageBackground>
    				</View>
    				<View style={styles.singleAlbum}>
    					<ImageBackground
    					style={styles.albumImage}
    					imageStyle={{ borderRadius: 10 }}
    					source={require('./assets/fantisa.jpg')}>
							<View style={styles.albumHeader}>
	    						<View style={styles.likesBackground}>
									<Text style={styles.headerPlay}>2.5K</Text>
	    						</View>
    						</View>
    						<View style={styles.albumFooter}>
    							<Text style={styles.footerText}>New Music</Text>
    						</View>
    					</ImageBackground>
    				</View>
    			</View>
    			<View style={styles.genreView}>
    				<Text style={{marginTop: 40,color: '#3b4859'}}>Genres</Text>
    				<Text style={{fontWeight: '500', fontSize: 18, color: '#0b1c26'}}>The most played tracks in these genres</Text>
    				<ScrollView horizontal={true}>
    					<View>
							<View style={styles.genresAlbum}>
								<ImageBackground
		    					imageStyle={{ borderRadius: 10 }}
								style={styles.genreImage}
								source={require('./assets/album_3.jpg')}>
									<View style={styles.albumHeader}>
									</View>
								</ImageBackground>
							</View>
							<Text style={{color: '#0b1c26'}}>Pop</Text>
    					</View>
    					<View>
							<View style={styles.genresAlbum}>
								<ImageBackground
								style={styles.genreImage}
		    					imageStyle={{ borderRadius: 10 }}
								source={require('./assets/album_3.jpg')}>
									<View style={styles.albumHeader}>
									</View>
								</ImageBackground>
							</View>
							<Text style={{color: '#0b1c26'}}>Hip-Hop</Text>
    					</View>
    					<View>
							<View style={styles.genresAlbum}>
								<ImageBackground
								style={styles.genreImage}
		    					imageStyle={{ borderRadius: 10 }}
								source={require('./assets/album_3.jpg')}>
									<View style={styles.albumHeader}>
									</View>
								</ImageBackground>
							</View>
							<Text style={{color: '#0b1c26'}}>Electro</Text>
						</View>
    				</ScrollView>
    			</View>
    		</View>
		</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF',
    padding: 20
  },
  header: {
  	marginTop: 50,
  	marginBottom: 50,
  },
  search: {
  	color: '#000',
  	alignSelf: 'flex-end',
  	marginBottom: 40
  },
  headerView: {
  	backgroundColor: '#fff',
  	width: '100%',
  	height: 150,
  	elevation: 20,
  	borderRadius: 20,
  },
  headerImage: {
  	flex: 1,
  	borderRadius: 20,
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  play: {
  	width: 30,
  	height: 30
  },
  fant: {
	color: '#fff',
	fontSize: 20
  },
  recommendation: {
  	color: '#3b4859'
  },
  tracks: {
  	color: '#0b1c26',
  	fontSize: 18,
  	fontWeight: '500'
  },
  albumView: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	marginTop: 20,
  },
  singleAlbum: {
  	backgroundColor: '#fff',
  	width: 170,
  	height: 160,
  	elevation: 20,
  	borderRadius: 20,
  },
  albumImage: {
  	flex: 1,
  	borderRadius: 10,
  	justifyContent: 'space-between'
  },
  albumHeader: {
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  likesBackground: {
  	paddingLeft: 15,
  	paddingRight: 15,
  	padding: 3,
  	backgroundColor: 'rgba(0,0,0,0.7)',
  	borderBottomLeftRadius: 10,
  	borderTopRightRadius: 10,
  },
  headerPlay: {
  	color: '#fff',
  },
  albumFooter: {
  	alignItems: 'center',
  	padding: 10,
  	backgroundColor: 'rgba(0,0,0,0.7)',
  	borderBottomLeftRadius: 10,
  	borderBottomRightRadius: 10
  },
  footerText: {
  	color: '#fff'
  },
  genreView: {
  	marginBottom: 50
  },
  genresAlbum: {
    marginTop: 20,
    marginBottom: 20,
  	backgroundColor: '#F4F8FF',
  	width: 150,
  	height: 150,
  	elevation: 10,
  	borderRadius: 20,
  	marginRight: 20,
  },
  genreImage: {
	flex: 1,
  	borderRadius: 20,
  },
});
