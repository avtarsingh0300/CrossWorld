import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../Utilities/Styles/colors';
import styles from './style';
import {SizeBox} from '../../Utilities/Component/Helpers';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import NavigationStrings from '../../Utilities/Constants/NavigationStrings';

const About = ({navigation}: any) => {
  const onContact = () => {
    navigation.navigate(NavigationStrings.ContactUs);
  };
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
        <SizeBox size={10} />
        <View>
          <Text style={styles.abouttxt}>About Us</Text>
          <SizeBox size={15} />
          <Text style={styles.sharingtxt}>
            Sharing the Love of Christ to the World through the Gift of
            Christian Music and Media
          </Text>
          <SizeBox size={10} />
          <View style={styles.flexvw}>
            <VectorIcon
              groupName="AntDesign"
              name="youtube"
              size={35}
              color={Colors.youtube}
            />
            <VectorIcon
              groupName="Entypo"
              name="pinterest-with-circle"
              size={35}
              color={Colors.youtube}
            />
            <VectorIcon
              groupName="FontAwesome5"
              name="facebook"
              size={35}
              color={Colors.facebook}
            />
            <VectorIcon
              groupName="FontAwesome6"
              name="x-twitter"
              size={35}
              color={Colors.black}
            />
            <VectorIcon
              groupName="Entypo"
              name="instagram"
              size={35}
              color={Colors.black}
            />
          </View>
          <SizeBox size={50} />
          <TouchableOpacity style={styles.contactbtn} onPress={onContact}>
            <Text style={styles.contacttxt}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default About;
