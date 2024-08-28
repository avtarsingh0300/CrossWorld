import {StyleSheet} from 'react-native';
import { Colors } from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appColor,
        justifyContent:"center",
        alignItems:"center"
    },
    thetxt:{
        fontSize:19,
        fontWeight:"500",
        fontFamily:fontFamily.regular,
        color:Colors.white
    },
    crosstxt:{
        fontSize:38,
        fontWeight:"700",
        fontFamily:fontFamily.regular,
        color:Colors.white
    },
});
export default styles;
