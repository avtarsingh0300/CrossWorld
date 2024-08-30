import {StyleSheet} from 'react-native';
import {textScale} from './responsiveSize';
import fontFamily from './fontFamily';
import {Colors} from './colors';

export default StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    fontWeight: '600',
    color: Colors.black,
    paddingLeft: 10,
    paddingTop: 10,
  },
  itemtxt: {
    color: Colors.blackgrey,
    fontSize: 19,
    fontWeight: '600',
    fontFamily: fontFamily.bold,
  },
});
