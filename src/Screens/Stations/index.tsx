import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './style';
import {Colors} from '../../Utilities/Styles/colors';
import {getData, postData, SizeBox} from '../../Utilities/Component/Helpers';
import ImagePath from '../../Utilities/Constants/ImagePath';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';
import RBSheet from 'react-native-raw-bottom-sheet';
import PlayMusic from '../PlayMusic';
import {height} from '../../Utilities/Styles/responsiveSize';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import moment from 'moment';

const Stations = ({navigation}: any) => {
  const playbackState = usePlaybackState();
  const refRBSheet = useRef();
  const [currentTrackPlaying, setCurrentPlayingTrack] = useState({});
  const onMusicPress = () => {
    navigation.navigate(NavigationStrings.MusicDetail, {id: 'sa2a626859'});
  };

  const onSongPress = () => {
    refRBSheet.current.open();
    // navigation.navigate(NavigationStrings.PlayMusic);
  };

  useEffect(() => {
    if (
      playbackState?.state == State.Playing ||
      playbackState?.state == State?.Paused
    ) {
      getCurrentTrackPlayingHandler();
    }
  }, [playbackState?.state]);

  const getCurrentTrackPlayingHandler = async () => {
    const current = await TrackPlayer.getCurrentTrack();
    const track = await TrackPlayer.getTrack(current);
    setCurrentPlayingTrack(track);
  };

  // const getTrackListHandler = () => {
  //   //public.radio.co/stations/{station_id}/history
  //   getData('history')
  //     .then(res => {
  //       // console.log(res?.tracks, 'res in tracks');
  //     })
  //     .catch(err => {
  //       console.log(err, 'err in tracks');
  //     });
  // };

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={styles.mainvw}
      activeOpacity={0.7}
      onPress={onMusicPress}>
      <View style={styles.innervw}>
        <Image source={ImagePath.uprofile} style={styles.uprofileimg} />
        <View style={{paddingHorizontal: 10, width: '70%'}}>
          <Text style={styles.praisetxt} numberOfLines={2}>
            Praise and Worship
          </Text>
          <Text style={styles.nowplayingtxt} numberOfLines={1}>
            Now Playing: Newsboys
          </Text>
        </View>
      </View>
      <VectorIcon
        groupName="Entypo"
        name="dots-three-vertical"
        size={17}
        color={Colors.black}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.appColor}}>
      {/* <WebView
        style={{flex: 1}}
        source={{uri: 'https://embed.radio.co/player/946a102.html'}}></WebView> */}
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.appColor} />

        <View style={styles.headervw}>
          <Text style={styles.headingtxt}>
            THE
            <Text style={styles.crosstxt}> CROSS </Text>
            WORLDWIDE
          </Text>
        </View>
        <View style={{paddingLeft: 20}}>
          <Text style={styles.stationtxt}>Stations</Text>
          <SizeBox size={10} />
          <View style={{borderBottomWidth: 1, borderColor: Colors.grayscale}} />
        </View>
        <SizeBox size={10} />
        <FlatList
          data={[{id: 1}]}
          renderItem={renderItem}
          keyExtractor={(item, index) => index?.toString()}
        />
        {(playbackState?.state == State?.Playing ||
          playbackState?.state == State?.Paused) && (
          <TouchableOpacity style={styles.songcontainer} onPress={onSongPress}>
            <VectorIcon
              groupName="AntDesign"
              name="arrowup"
              size={25}
              color={Colors.black}
            />
            <Image
              source={{uri: currentTrackPlaying?.artwork}}
              style={styles.uprofilei}
            />
            <View style={{paddingHorizontal: 10}}>
              <Text style={styles.praisetxt} numberOfLines={2}>
                {currentTrackPlaying?.title}
              </Text>
              <Text style={[styles.nowplayingtxt, {bottom: 4}]}>
                {moment(currentTrackPlaying?.time).format('LL')}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        height={height}
        closeDuration={750}
        openDuration={750}
        // draggable={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
            // height: height,
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
          // style: {marginTop: 200},
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <PlayMusic refRBSheet={refRBSheet} />
      </RBSheet>
    </SafeAreaView>
  );
};

export default Stations;
