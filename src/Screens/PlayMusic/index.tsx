import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import styles from './style';
import {Colors} from '../../Utilities/Styles/colors';
import {SizeBox} from '../../Utilities/Component/Helpers';
import {Slider} from '@miblanchard/react-native-slider';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import moment from 'moment';
import {SafeAreaView} from 'react-native-safe-area-context';

const PlayMusic = ({refRBSheet}: any) => {
  const [button, setButton] = useState(false);
  const [position, setPosition] = useState(0); // Current position of the song in seconds
  const [currentTrackPlaying, setCurrentPlayingTrack] = useState({});
  const [duration, setDuration] = useState(100);
  const playbackState = usePlaybackState();
  const progress = useProgress();

  useEffect(() => {
    if (
      playbackState?.state == State.Playing ||
      playbackState?.state == State?.Paused
    ) {
      getTimeHandler();
      getCurrentTrackPlayingHandler();
    }
  }, [progress?.position, playbackState?.state]);

  // const onSeek = (value: any) => {
  //   try {
  //     let getValue = parseInt(value[0])?.toFixed(0);
  //     TrackPlayer.seekTo(parseInt(getValue));
  //     setPosition(parseInt(getValue));
  //   } catch (error) {}
  // };

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
    refRBSheet.current.close();
  };

  const getCurrentTrackPlayingHandler = async () => {
    const current = await TrackPlayer.getCurrentTrack();
    const track = await TrackPlayer.getTrack(current);
    setCurrentPlayingTrack(track);
  };

  const getTimeHandler = async () => {
    try {
      let getPosition = await TrackPlayer.getPosition();
      setPosition(getPosition?.toFixed(0));
      const getDuration = await TrackPlayer.getDuration();
      setDuration(getDuration?.toFixed(0));
    } catch (error) {
      console.log(error, 'jhvhjv');
    }
    // }
  };

  // console.log(currentTrackPlaying, 'currentTrackPlaying');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.appColor} />
        <TouchableOpacity
          style={styles.headervw}
          activeOpacity={0.8}
          onPress={onBack}>
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
        </TouchableOpacity>
        <SizeBox size={20} />
        <View style={{paddingHorizontal: 10}}>
          <Image
            source={{uri: currentTrackPlaying?.artwork}}
            style={styles.uprofileig}
          />
          <SizeBox size={10} />
          <Text style={styles.newsboytxt}>{currentTrackPlaying?.title}</Text>
          <SizeBox size={3} />
          <Text style={styles.kingtxt}>
            {moment(currentTrackPlaying?.time).format('LL')}
          </Text>
          <SizeBox size={5} />
          <View style={styles.bottomline} />
          <SizeBox size={20} />
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Slider
              minimumValue={0}
              maximumValue={parseInt(duration) > 0 ? duration : 0}
              value={parseInt(position) > 0 ? position : 0}
              // onSlidingComplete={onSeek}
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
              <Text style={{color: Colors.black}}>-- : --</Text>
            </View>
          </View>
          <SizeBox size={5} />
          {playbackState?.state == State?.Playing ? (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={async () => await TrackPlayer.pause()}>
              <VectorIcon
                groupName="AntDesign"
                name="pausecircle"
                size={55}
                color={Colors.appColor}
                style={styles.playbn}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={async () => await TrackPlayer.play()}>
              <VectorIcon
                groupName="AntDesign"
                name="play"
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
