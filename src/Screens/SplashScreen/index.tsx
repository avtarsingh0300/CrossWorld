import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import {SafeAreaView} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import {SizeBox} from '../../Utilities/Component/Helpers';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';
import {BallIndicator} from 'react-native-indicators';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(NavigationStrings.Dashboard);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.appColor} />
      <View>
        <Text style={styles.thetxt}>THE</Text>
        <Text style={styles.crosstxt}>CROSS</Text>
        <Text style={styles.thetxt}>WORLDWIDE</Text>
      </View>
      <SizeBox size={50} />
      <BallIndicator color={Colors.white} style={styles.loader} />
    </SafeAreaView>
  );
};

export default SplashScreen;
