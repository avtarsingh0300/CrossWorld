import {StyleSheet} from 'react-native';
import { Colors } from '../../Utilities/Styles/colors';
import fontFamily from '../../Utilities/Styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../Utilities/Styles/responsiveSize';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
   headingtxt:{
    fontSize:13,
    color:Colors.white,
    fontFamily:fontFamily.regular,
    fontWeight:"500"
   },
   crosstxt:{
    fontSize:26,
    fontWeight:"700",
    fontFamily:fontFamily.regular,
   },
   stationtxt:{
    fontSize:24,
    fontFamily:fontFamily.bold,
    fontWeight:"500",
    color:Colors.black,
    paddingLeft:10,
    paddingTop:10
   },
   mainvw:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:5
   },
   innervw:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
},
uprofileimg:{
    width:moderateScale(80),
    height:moderateScaleVertical(80),
    borderRadius:20
},
praisetxt:{
    color:Colors.blackgrey,
    fontSize:18,
    fontWeight:"500",
    fontFamily:fontFamily.bold
},
nowplayingtxt:{
    fontSize:12,
    fontWeight:"500",
    fontFamily:fontFamily.regular,
    color:Colors.grey
}
});
export default styles;
