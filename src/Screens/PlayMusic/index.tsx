import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import styles from './style';
import {Colors} from '../../Utilities/Styles/colors';
import {SizeBox} from '../../Utilities/Component/Helpers';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {Slider} from '@miblanchard/react-native-slider';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';

const PlayMusic = ({navigation}: any) => {
  const [button, setButton] = useState(false);
  const [position, setPosition] = useState(0); // Current position of the song in seconds
  const [currentTrackPlaying, setCurrentPlayingTrack] = useState({});
  const [duration, setDuration] = useState(100);
  const playbackState = usePlaybackState();

  const onSeek = value => {
    try {
      let getValue = parseInt(value[0])?.toFixed(0);
      TrackPlayer.seekTo(parseInt(getValue));
      setPosition(parseInt(getValue));
    } catch (error) {}
  };

  var convertMinutes = Math.floor(position / 60);
  // console.log(convertMinutes, "convertMinutes")

  var minutes = convertMinutes < 10 ? '0' + convertMinutes : convertMinutes;

  // Calculate remaining seconds
  var convertSeconds = position % 60;
  var seconds = convertSeconds < 10 ? '0' + convertSeconds : convertSeconds;
  // console.log(seconds, "convertMinutes")
  // Calculate minutes
  var convertDurationMinutes = Math.floor(duration / 60);
  // console.log(convertDurationMinutes, "convertDurationMinutes")
  var durationMinutes =
    convertDurationMinutes < 10
      ? '0' + convertDurationMinutes
      : convertDurationMinutes;

  // Calculate remaining seconds
  var convertDurationSeconds = duration % 60;
  var durationSeconds =
    convertDurationSeconds < 10
      ? '0' + convertDurationSeconds
      : convertDurationSeconds;

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.appColor} />
        <View style={styles.headervw}>
          <VectorIcon
            groupName="AntDesign"
            name="arrowdown"
            size={20}
            onPress={onBack}
          />
          <Text style={styles.headingtxt}>
            THE
            <Text style={styles.crosstxt}> CROSS </Text>
            WORLDWIDE
          </Text>
          <View />
        </View>
        <SizeBox size={20} />
        <View style={{paddingHorizontal: 10}}>
          <Image source={ImagePath.uprofile} style={styles.uprofileig} />
          <SizeBox size={10} />
          <Text style={styles.newsboytxt}>Newsboys</Text>
          <SizeBox size={3} />
          <Text style={styles.kingtxt}>You Are My King</Text>
          <SizeBox size={5} />
          <View style={styles.bottomline} />
          <SizeBox size={20} />
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Slider
              minimumValue={0}
              maximumValue={parseInt(duration) > 0 ? duration : 0}
              value={parseInt(position) > 0 ? position : 0}
              onSlidingComplete={onSeek}
              containerStyle={{width: '100%'}}
              // disabled
              minimumTrackTintColor={'#1ABAF0'}
              maximumTrackTintColor="#E0E0E0"
              thumbTintColor={Colors.appColor}
              thumbStyle={{width: 18, height: 18}}
              trackStyle={{height: 8, borderRadius: 50}}
            />
            <SizeBox size={5} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: Colors.black}}>
                {minutes + ':' + seconds}
              </Text>
              <Text style={{color: Colors.black}}>
                {playbackState?.state == State?.Loading ||
                playbackState?.state == State?.Buffering
                  ? '00:00'
                  : durationMinutes + ':' + durationSeconds}
              </Text>
            </View>
          </View>
          <SizeBox size={5} />
          {button ? (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setButton(false)}>
              <VectorIcon
                groupName="AntDesign"
                name="play"
                size={55}
                color={Colors.appColor}
                style={styles.playbn}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setButton(true)}>
              <VectorIcon
                groupName="AntDesign"
                name="pausecircle"
                size={55}
                color={Colors.appColor}
                style={styles.playbn}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayMusic;