import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './style';
import {Colors} from '../../Utilities/Styles/colors';
import {getData, postData, SizeBox} from '../../Utilities/Component/Helpers';
import ImagePath from '../../Utilities/Constants/ImagePath';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';
import RBSheet from 'react-native-raw-bottom-sheet';
import PlayMusic from '../PlayMusic';
import {height} from '../../Utilities/Styles/responsiveSize';

const Stations = ({navigation}: any) => {
  const refRBSheet = useRef();
  const onMusicPress = () => {
    navigation.navigate(NavigationStrings.MusicDetail);
  };

  const onSongPress = () => {
    refRBSheet.current.open();
    // navigation.navigate(NavigationStrings.PlayMusic);
  };

  useEffect(() => {
    getTrackListHandler();
  }, []);

  const getTrackListHandler = () => {
    //public.radio.co/stations/{station_id}/history
    getData('history')
      .then(res => {
        console.log(res?.tracks, 'res in tracks');
      })
      .catch(err => {
        console.log(err, 'err in tracks');
      });
  };

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
          data={[{id: 1}, {id: 1}, {id: 1}, {id: 1}, {id: 1}]}
          renderItem={renderItem}
        />
        <TouchableOpacity style={styles.songcontainer} onPress={onSongPress}>
          <VectorIcon
            groupName="AntDesign"
            name="arrowup"
            size={25}
            color={Colors.black}
          />
          <Image source={ImagePath.uprofile} style={styles.uprofilei} />
          <View style={{paddingHorizontal: 10}}>
            <Text style={styles.praisetxt} numberOfLines={2}>
              You Are My King
            </Text>
            <Text style={[styles.nowplayingtxt, {bottom: 4}]}>Newsboys</Text>
          </View>
        </TouchableOpacity>
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
