import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './style';
import {
  getData,
  Loadingcomponent,
  SizeBox,
} from '../../Utilities/Component/Helpers';
import {Colors} from '../../Utilities/Styles/colors';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {height} from '../../Utilities/Styles/responsiveSize';
import PlayMusic from '../PlayMusic';
import moment from 'moment';
import uuid from 'react-native-uuid';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';

const MusicDetail = ({navigation, route}: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingTrack, setPlayerTrack] = useState({});
  const playbackState = usePlaybackState();
  const [currentTrackPlaying, setCurrentPlayingTrack] = useState({});
  const refRBSheet = useRef();

  useEffect(() => {
    if (
      playbackState?.state == State.Playing ||
      playbackState?.state == State?.Paused
    ) {
      getCurrentTrack();
      getCurrentTrackPlayingHandler();
    }
  }, [playbackState?.state]);

  const getCurrentTrackPlayingHandler = async () => {
    const current = await TrackPlayer.getCurrentTrack();
    const track = await TrackPlayer.getTrack(current);
    setCurrentPlayingTrack(track);
  };

  useEffect(() => {
    fetchData();
    getCurrentTrack();
  }, []);

  const getCurrentTrack = () => {
    getData(route?.params?.id + '/status')
      .then(res => {
        setLoading(false);
        console.log(res, 'res in playing tracks');
        setPlayerTrack(res?.current_track);
      })
      .catch(err => {
        setLoading(false);
        console.log(err, 'err in playing tracks');
      });
  };

  const fetchData = async () => {
    setLoading(true);
    getData(route?.params?.id + '/history')
      .then(res => {
        var modifyData = [];
        res?.tracks?.map(i => {
          modifyData.push({
            time: i?.start_time,
            id: uuid.v4(),
            url: `https://streams.radio.co/${route?.params?.id}/listen`,
            title: i?.title,
            artwork: i?.artwork_url,
          });
        });
        setLoading(false);
        setData(modifyData);
      })
      .catch(err => {
        setLoading(false);
        console.log(err, 'err in tracks');
      });
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onPlay = () => {
    TrackPlayer.reset().then(async res => {
      TrackPlayer.add(data);
      await TrackPlayer.skip(0);
      await TrackPlayer.play();
      refRBSheet.current.open();
    });
  };

  const renderItem = ({item, index}: any) => (
    <TouchableOpacity
      style={styles.mainvw}
      activeOpacity={0.8}
      onPress={() => {
        TrackPlayer.reset().then(async res => {
          TrackPlayer.add(data);
          await TrackPlayer.skip(index);
          await TrackPlayer.play();
          refRBSheet.current.open();
        });
      }}>
      <View style={styles.innervw}>
        {item?.artwork && (
          <Image source={{uri: item?.artwork}} style={styles.uprofileig} />
        )}
        <View style={{paddingHorizontal: 10, width: '70%'}}>
          <Text style={styles.nowplayingtxt} numberOfLines={1}>
            {item?.title}
          </Text>
          <Text style={styles.praisetxt} numberOfLines={2}>
            {moment(item?.time).format('LL')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const onSongPress = () => {
    refRBSheet.current.open();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.appColor}}>
      <Loadingcomponent isVisible={loading} />
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.appColor} />
        <View style={styles.headervw}>
          <VectorIcon
            groupName="AntDesign"
            name="arrowleft"
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
        <View style={{paddingHorizontal: 15}}>
          <Text style={styles.stationtxt}>Praise and Worship</Text>
          <SizeBox size={10} />
          <View style={{flexDirection: 'row'}}>
            {playingTrack?.artwork_url && (
              <Image
                source={{uri: playingTrack?.artwork_url}}
                style={styles.uprofileimg}
              />
            )}
            <View style={{justifyContent: 'center', marginHorizontal: 10}}>
              <Text style={styles.praisetxt}>Now Playing</Text>
              <View style={{width: '80%'}}>
                <Text style={styles.nowplayingtxt}>{playingTrack?.title}</Text>
              </View>
              <Text style={styles.praisetxt}>
                {moment(playingTrack?.start_time).format('LL')}
              </Text>
            </View>
          </View>
          <SizeBox size={10} />
          <TouchableOpacity
            style={styles.playtbn}
            activeOpacity={0.7}
            onPress={onPlay}>
            <View style={styles.playbtntxt}>
              <VectorIcon
                groupName="Ionicons"
                name="play-circle-sharp"
                size={25}
                color={Colors.appColor}
              />
              <Text style={styles.playtxt}>{` `} Play</Text>
            </View>
          </TouchableOpacity>
          <SizeBox size={10} />
          <View style={{borderBottomWidth: 1, borderColor: Colors.grayscale}} />
        </View>
        <SizeBox size={10} />
        <Text style={styles.stnhistxt}>Station History</Text>
        <SizeBox size={10} />
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
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

export default MusicDetail;
