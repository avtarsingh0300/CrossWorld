import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';

const SplashScreen = ({navigation}: any) => {
  return (
    <View>
      <Text
        onPress={() => navigation.navigate('Dashboard')}
        style={{color: Colors.black, fontFamily: fontFamily.regular}}>
        SplashScreenW
      </Text>
    </View>
  );
};

export default SplashScreen;
