import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../Utilities/Styles/colors';
import styles from './style';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import {PhonePicker, SizeBox} from '../../Utilities/Component/Helpers';
import ImagePath from '../../Utilities/Constants/ImagePath';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import fontFamily from '../../Utilities/Styles/fontFamily';
import {moderateScaleVertical} from '../../Utilities/Styles/responsiveSize';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
const ContactUs = ({navigation}: any) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthday, setbirthday] = useState('');
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [countryVisible, setCountryVisible] = useState(false);
  const onBack = () => {
    navigation.goBack();
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setbirthday(moment(date).format('YYYY/MM/DD'));
    hideDatePicker();
  };
  const openPicker = () => {
    setCountryVisible(!countryVisible);
  };
  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };
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
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <SizeBox size={10} />
          <View>
            <Text style={styles.abouttxt}>Contact Us</Text>
            <SizeBox size={15} />
            <View style={{paddingHorizontal: 10}}>
              <View style={styles.inputbox}>
                <TextInput
                  placeholder="Full Name"
                  placeholderTextColor={Colors.grey}
                  style={[styles.input, {width: '100%'}]}
                />
              </View>

              <SizeBox size={10} />
              <TouchableOpacity
                style={styles.inputbox}
                onPress={showDatePicker}>
                <Text
                  style={{
                    color: birthday ? Colors.black : Colors.grey,
                    fontFamily: fontFamily.regular,
                  }}>
                  {birthday ? birthday : 'Date of Birth'}
                </Text>

                <Image source={ImagePath.Calendar} style={styles.mailicon} />
              </TouchableOpacity>
              <SizeBox size={10} />
              <View style={styles.inputbox}>
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  placeholderTextColor={Colors.grey}
                  style={styles.input}
                />
                <Image source={ImagePath.Message} style={styles.mailicon} />
              </View>
              <SizeBox size={10} />
              <View style={styles.inputbox}>
                <PhonePicker
                  visible={countryVisible}
                  countryCode={countryCode}
                  onSelect={onSelect}
                  onPress={openPicker}
                />
                <TextInput
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                  maxLength={10}
                  placeholderTextColor={Colors.grey}
                  style={[styles.input, {paddingLeft: 15}]}
                />
              </View>
              <SizeBox size={10} />
              <View
                style={[
                  styles.inputbox,
                  {
                    height: moderateScaleVertical(129),
                    alignItems: 'flex-start',
                    paddingVertical: 10,
                  },
                ]}>
                <TextInput
                  placeholder="Message"
                  placeholderTextColor={Colors.grey}
                  multiline={true}
                  style={styles.input}
                />
              </View>

              <SizeBox size={20} />
            </View>
            <View style={styles.subcanbtn}>
              <TouchableOpacity style={styles.contactbtn}>
                <Text style={styles.contacttxt}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.contactbtn, {backgroundColor: Colors.cancel}]}>
                <Text style={styles.contacttxt}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
          <SizeBox size={10} />
        </KeyboardAwareScrollView>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={new Date()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactUs;
