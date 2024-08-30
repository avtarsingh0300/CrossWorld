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
    width: '90%',
    height: '50%',
    borderRadius: 40,
    alignSelf:"center"
  },
  newsboytxt: {
    fontSize: 32,
    fontWeight: '600',
    fontFamily: fontFamily.bold,
    color: Colors.black,
    textAlign:"center"
  },
  kingtxt:{
    fontSize:16,
    fontFamily:fontFamily.regular,
    fontWeight:"500",
    color:Colors.grey,
    textAlign:"center"
  },
  bottomline:{
    borderBottomWidth: 1,
     borderColor: Colors.grayscale,
     width:"100%"
    },
    playbn:{
      alignSelf:"center"
    },
});
export default styles;
