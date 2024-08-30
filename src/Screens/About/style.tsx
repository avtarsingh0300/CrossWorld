import {StyleSheet} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';
import commonStyles from '../../Utilities/Styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../Utilities/Styles/responsiveSize';

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
    justifyContent: 'center',
  },
  abouttxt: {
    ...commonStyles.heading,
  },
  sharingtxt: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.black,
    width: '60%',
    paddingLeft: 10,
  },
  contacttxt: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.bold,
    color: Colors.white,
  },
  contactbtn: {
    width: moderateScale(189),
    height: moderateScaleVertical(58),
    backgroundColor: Colors.appColor,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: Colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 3,
  },
  flexvw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
    alignSelf: 'center',
  },
});
export default styles;
