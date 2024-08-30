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
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  abouttxt: {
    ...commonStyles.heading,
  },

  inputbox: {
    width: '100%',
    height: moderateScaleVertical(56),
    backgroundColor: Colors.grayscale,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mailicon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  contacttxt: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.bold,
    color: Colors.white,
  },
  contactbtn: {
    width:"48%",
    height: moderateScaleVertical(58),
    backgroundColor: Colors.appColor,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 3,
  },

  subcanbtn: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  input: {
    width: '90%',
    color: Colors.black,
    fontFamily: fontFamily.regular,
  },
});
export default styles;
