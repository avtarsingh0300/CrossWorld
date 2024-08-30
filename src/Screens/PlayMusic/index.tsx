import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import styles from './style';
import {Colors} from '../../Utilities/Styles/colors';
import {SizeBox} from '../../Utilities/Component/Helpers';
import ImagePath from '../../Utilities/Constants/ImagePath';

const PlayMusic = ({navigation}: any) => {
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
        <SizeBox size={20} />
        <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
          <Image source={ImagePath.uprofile} style={styles.uprofileig} />
          <SizeBox size={10} />
          <Text style={styles.newsboytxt}>Newsboys</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayMusic;
