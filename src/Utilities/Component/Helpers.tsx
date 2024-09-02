import {TouchableOpacity, View} from 'react-native';
import CountryPicker, {
  CountryCode,
  Country,
} from 'react-native-country-picker-modal';
import {Colors} from '../Styles/colors';
import VectorIcon from './vectorIcons';
import {moderateScale, moderateScaleVertical} from '../Styles/responsiveSize';
import axios from 'axios';

export function SizeBox({size}: SizeBoxProps) {
  return <View style={{marginVertical: size}} />;
}
interface PhonePickerProps {
  visible: boolean;
  onSelect: (country: Country) => void;
  onClose: () => void;
  countryCode: CountryCode;
  onPress: () => void;
}
export function PhonePicker({
  visible,
  onSelect,
  onClose,
  onPress,
  countryCode,
}: PhonePickerProps) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        // width: '30%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
      onPress={onPress}>
      <CountryPicker
        visible={visible}
        onSelect={onSelect}
        onClose={onClose}
        theme={{
          // fontFamily: fontFamily.regular,
          onBackgroundTextColor: Colors.black,
          backgroundColor: Colors.white,
        }}
        withCallingCode={true}
        withCallingCodeButton
        withFlagButton={true}
        withFilter
        countryCode={countryCode}
        containerButtonStyle={{
          minWidth: moderateScale(50),
          height: moderateScaleVertical(56),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          paddingHorizontal: 0,
          paddingRight: 0,
          marginTop: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      />
      <VectorIcon
        groupName={'AntDesign'}
        name={'down'}
        size={15}
        color={Colors.grey}
        style={{left: 5}}
      />
    </TouchableOpacity>
  );
}

const baseUrl = 'https://public.radio.co/stations/sa2a626859/';

export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

export const postData = async (endpoint: string) => {
  try {
    const response = await axios.post(`${baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};
