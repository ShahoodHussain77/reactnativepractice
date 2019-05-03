import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';

export default class Play extends Component {
  render() {
    return (
    	<View style={{flex: 1,}}>
		    <ScrollView style={styles.container}>
					<View
					style={styles.userInfo}>
						<View style={styles.singerImage}>
							<Image 
							resizeMode="cover"
							source={require('./assets/singer_logo.jpeg')}
							style={styles.singerLogo}/>
						</View>
						<Text style={styles.singerName}>Keron Jackson</Text>
						<Text style={styles.singer}>Singer</Text>
						<TouchableOpacity
						style={styles.follow}>
							<Text style={styles.followText}>Unfollow</Text>
						</TouchableOpacity>
								</View>
					<Text style={styles.songsHeading}>Songs</Text>
					<View style={styles.songsList}>
						<View style={styles.song}>
							<View style={styles.listLogo}>
								<Image 
								source={require('./assets/singer_logo.jpeg')}
								style={styles.listSingerLogo}/>
							</View>
							<Text style={styles.songName}>Baby Let's do some shalala</Text>
							<View style={styles.playBox}>
								<Image 
								source={require('./assets/play.png')}
								style={styles.playButton}/>
								<Text style={styles.playTime}>4:10</Text>
							</View>
						</View>
						<View style={styles.seprator}></View>
						<View style={styles.song}>
							<View style={styles.listLogo}>
								<Image 
								source={require('./assets/singer_logo_1.jpg')}
								style={styles.listSingerLogo}/>
							</View>
							<Text style={styles.songName}>A Sounds from heaven</Text>
							<View style={styles.playBox}>
								<Image 
								source={require('./assets/play.png')}
								style={styles.playButton}/>
								<Text style={styles.playTime}>4:10</Text>
							</View>
						</View>
						<View style={styles.seprator}></View>
						<View style={styles.song}>
							<View style={styles.listLogo}>
								<Image 
								source={require('./assets/singer_logo_2.jpg')}
								style={styles.listSingerLogo}/>
							</View>
							<Text style={styles.songName}>Beat it if you get it</Text>
							<View style={styles.playBox}>
								<Image 
								source={require('./assets/play.png')}
								style={styles.playButton}/>
								<Text style={styles.playTime}>4:10</Text>
							</View>
						</View>
					</View>
					<Text style={[styles.songsHeading, {marginTop: 20}]}>Albums</Text>
					<ScrollView style={styles.albumsContainer} horizontal={true} contentContainerStyle={{marginBottom: '45%'}}>
						<Image 
						source={require('./assets/singer_logo.jpeg')}
						style={styles.albumCover}/>
						<Image 
						source={require('./assets/album_1.jpg')}
						style={styles.albumCover}/>
						<Image 
						source={require('./assets/album_2.png')}
						style={styles.albumCover}/>
						<Image 
						source={require('./assets/album_3.jpg')}
						style={[styles.albumCover, styles.noM]}/>
					</ScrollView>
		    </ScrollView>
				<View style={styles.mediaPlayer}>
					<Text style={[styles.songName, styles.playerSongName]}>Baby Let's do some shalala</Text>
					<View style={styles.playingView}>
						<Text style={styles.time}>2:00</Text>
						<Slider 
						step = { 1 }
		        minimumValue = { 0 }
		        maximumValue = { 100 }
		        value={40}
		        minimumTrackTintColor = "#1d8df5"
		        thumbTintColor="#012d46"
		        style={styles.slider}/>
						<Text style={styles.time}>04:10</Text>
					</View>
					<View style={styles.buttonSection}>
						<Image 
						source={require('./assets/backward.png')}
						style={styles.forback}/>
						<Image 
						source={require('./assets/play.png')}
						style={styles.playButton}/>
						<Image 
						source={require('./assets/foward.png')}
						style={styles.forback}/>
					</View>
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF',
  },
  userInfo: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  singerImage: {
    elevation: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  singerLogo: {
    borderRadius: 10,
    width: 140,
    height: 140,
  },
  singerName: {
    color: '#0b1c26',
    fontWeight: 'bold',
    fontSize: 22
  },
  singer: {
    color: '#99b4d1'
  },
  follow: {
    marginTop: 10,
    backgroundColor: '#1dacfa',
    borderRadius: 6,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 3,
    paddingBottom: 3,
  },
  followText: {
    color: '#fff',
  },
  songsHeading: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    color: '#11222c'
  },
  songsList: {
    margin: 20
  },
  listLogo: {
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  song: {
    flexDirection: 'row',
  },
  listSingerLogo: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  songName: {
    flex: 1,
    alignSelf: 'center',
    color: '#0b1e2c',
    fontWeight: '500',
    marginLeft: 20,
  },
  playBox: {
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  playButton: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  playTime: {
    marginTop: 5,
    color: '#9cb3e5',
    fontSize: 12,
  },
  seprator: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 0.3,
    width: '90%',
    alignSelf: 'flex-end',
  },
  albumsContainer: {
  	flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  albumCover: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 20
  },
  noM: {
    marginRight: 0
  },
  mediaPlayer: {
  	position: 'absolute',
  	bottom: 0,
  	backgroundColor: '#fff',
  	width: '100%',
	paddingTop: 20,
	paddingBottom: 20,
  },
  playerSongName: {
	fontSize: 16,
	fontWeight: '400',
  },
  playingView: {
  	flexDirection: 'row',
	margin: 20,
  },
  time: {
  	color: '#0b1c26',
  	fontSize: 14,
  },
  slider: {
  	flex: 1,
  },
  buttonSection: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
  forback: {
  	width: 20,
  	height: 20,
  	marginLeft: 20,
	marginRight: 20,
  }
});
