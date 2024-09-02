import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import {SizeBox} from '../../Utilities/Component/Helpers';
import {Colors} from '../../Utilities/Styles/colors';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import ImagePath from '../../Utilities/Constants/ImagePath';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';

const MusicDetail = ({navigation}: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const url = 'https://public.radio.co/stations/sa2a626859/history';

    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData?.tracks);
        console.log(jsonData?.tracks);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  const onBack = () => {
    navigation.goBack();
  };
  const onPlay = () => {
    navigation.navigate(NavigationStrings.PlayMusic);
  };
  const renderItem = ({item}:any) => (
    <TouchableOpacity style={styles.mainvw} activeOpacity={0.7}>
      <View style={styles.innervw}>
        <Image source={{uri:item?.artwork_url}} style={styles.uprofileig} />
        <View style={{paddingHorizontal: 10, width: '70%'}}>
          <Text style={styles.nowplayingtxt} numberOfLines={1}>
            {item?.title}
          </Text>
          <Text style={styles.praisetxt} numberOfLines={2}>
            Tauren wells
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.appColor}}>
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
            <Image source={ImagePath.uprofile} style={styles.uprofileimg} />
            <View style={{justifyContent: 'center', marginHorizontal: 10}}>
              <Text style={styles.praisetxt}>Now Playing</Text>
              <Text style={styles.nowplayingtxt}>You Are My King</Text>
              <Text style={styles.praisetxt}>Newsboys</Text>
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
        />
      </View>
    </SafeAreaView>
  );
};

export default MusicDetail;
