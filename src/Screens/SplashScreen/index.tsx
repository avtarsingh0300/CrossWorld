import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import { SafeAreaView } from 'react-native';
import LoaderKit from 'react-native-loader-kit'
import { Colors } from '../../Utilities/Styles/colors';
import { SizeBox } from '../../Utilities/Component/Helpers';
import { height, width } from '../../Utilities/Styles/responsiveSize';

const SplashScreen = ({navigation}: any) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Dashboard")
    }, 1000);
    
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.thetxt}>THE</Text>
      <Text style={styles.crosstxt}>CROSS</Text>
      <Text style={styles.thetxt}>WORLDWIDE</Text>
      </View>
      <SizeBox size={50}/>
      <LoaderKit
  style={{ width: 50, height: 50,position:"absolute",bottom:height/5, }}
  name={'BallSpinFadeLoader'}
  color={Colors.white} 
/>
    </SafeAreaView>
  );
};

export default SplashScreen;
