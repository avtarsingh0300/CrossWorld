import {StyleSheet} from 'react-native';
import {Colors} from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';
import {height} from '../../Utilities/Styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thetxt: {
    fontSize: 19,
    fontWeight: '500',
    fontFamily: fontFamily.regular,
    color: Colors.white,
  },
  crosstxt: {
    fontSize: 38,
    fontWeight: '700',
    fontFamily: fontFamily.regular,
    color: Colors.white,
  },
  loader: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: height / 5,
  },
});
export default styles;
