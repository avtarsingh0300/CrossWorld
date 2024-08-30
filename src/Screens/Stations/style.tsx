import {StyleSheet} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';
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
  stationtxt: {
    ...commonStyles.heading,
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
  uprofileimg: {
    width: moderateScale(80),
    height: moderateScaleVertical(80),
    borderRadius: 28,
  },
  praisetxt: {
    ...commonStyles.itemtxt,
  },
  nowplayingtxt: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.grey,
    paddingTop: 5,
  },
  headervw: {
    backgroundColor: Colors.appColor,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uprofilei:{
    width:moderateScale(60),
    height:moderateScaleVertical(46),
    borderRadius:30,
    marginHorizontal:10
  },
  songcontainer:{
      borderWidth:1,
      borderColor:Colors.black,
      marginHorizontal:10,
      flexDirection:"row",
      padding:5,
      alignItems:"center",
      borderRadius:10,
      backgroundColor:Colors.white,
      width:"100%",
      alignSelf:"center"
  }
});
export default styles;
