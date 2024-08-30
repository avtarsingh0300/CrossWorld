import {StyleSheet} from 'react-native';
import commonStyles from '../../Utilities/Styles/commonStyles';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';
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
  stationtxt: {
    ...commonStyles.heading,
  },
  headervw: {
    backgroundColor: Colors.appColor,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  uprofileimg: {
    width: moderateScale(120),
    height: moderateScaleVertical(120),
    borderRadius: 28,
  },
  praisetxt: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.grey,
    paddingVertical: 4,
  },
  nowplayingtxt: {
    ...commonStyles.itemtxt,
  },
  playtbn: {
    width: '100%',
    height: moderateScale(58),
    borderRadius: 30,
    backgroundColor: Colors.playbtn,
    alignSelf: 'center',
  },
  playtxt: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fontFamily.regular,
    color: Colors.appColor,
  },
  mainvw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'center',
    paddingRight: 2,
  },
  innervw: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playbtntxt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 17,
  },
  uprofileig: {
    width: moderateScale(80),
    height: moderateScaleVertical(80),
    borderRadius: 28,
  },
  stnhistxt: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.black,
    fontFamily: fontFamily.regular,
    paddingLeft: 20,
  },
});
export default styles;
