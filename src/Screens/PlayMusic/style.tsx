import {StyleSheet} from 'react-native';

import fontFamily from '../../Utilities/Styles/fontFamily';
import {Colors} from '../../Utilities/Styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../Utilities/Styles/responsiveSize';
import commonStyles from '../../Utilities/Styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headingtxt: {
    fontSize: 13,
    color: Colors.white,
    fontFamily: fontFamily.regular,
    fontWeight: '500',
  },
  crosstxt: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: fontFamily.regular,
  },
  headervw: {
    backgroundColor: Colors.appColor,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  uprofileig: {
    width: '100%',
    height: moderateScaleVertical(370),
    borderRadius: 40,
  },
  newsboytxt: {
    fontSize: 32,
    fontWeight: '600',
    fontFamily: fontFamily.bold,
    color: Colors.black,
  },
});
export default styles;
