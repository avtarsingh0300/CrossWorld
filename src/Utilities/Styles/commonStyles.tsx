import {StyleSheet} from 'react-native';
import {textScale} from './responsiveSize';
import fontFamily from './fontFamily';

export default StyleSheet.create({
  font16Regular: {
    fontSize: textScale(16),
    fontWeight: '400',
    fontFamily: fontFamily.regular,
  },
});
