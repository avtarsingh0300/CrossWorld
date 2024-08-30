import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import VectorIcon from '../../Utilities/Component/vectorIcons';
import styles from './style';
import {Colors} from '../../Utilities/Styles/colors';
import {SizeBox} from '../../Utilities/Component/Helpers';
import ImagePath from '../../Utilities/Constants/ImagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PlayMusic = ({navigation}: any) => {
  const [button,setButton] = useState(false);
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.appColor} />
        <View style={styles.headervw}>
          <VectorIcon
            groupName="AntDesign"
            name="arrowdown"
            size={20}
            onPress={onBack}
          />
          <Text style={styles.headingtxt}>
            THE
            <Text style={styles.crosstxt}> CROSS </Text>
            WORLDWIDE
          </Text>
          <View />
        </View>
        <SizeBox size={20} />
        <View style={{paddingHorizontal: 10, }}>
          <Image source={ImagePath.uprofile} style={styles.uprofileig} />
          <SizeBox size={10} />
          <Text style={styles.newsboytxt}>Newsboys</Text>
          <SizeBox size={3}/>
          <Text style={styles.kingtxt}>You Are My King</Text>
          <SizeBox size={5}/>
          <View style={styles.bottomline} />
          <SizeBox size={20}/>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{color:Colors.black}}>00:00</Text>
            <Text style={{color:Colors.black}}>00:00</Text>
          </View>
          <SizeBox size={5}/>
          { button?
         ( <TouchableOpacity activeOpacity={0.6 }  onPress={()=>setButton(false)}>
          <VectorIcon
                groupName="AntDesign"
                name="play"
                size={55}
                color={Colors.appColor}
                style={styles.playbn}
              /> 
              </TouchableOpacity>    ) :
         ( <TouchableOpacity activeOpacity={0.6} onPress={()=>setButton(true)}>
          <VectorIcon
                groupName="AntDesign"
                name="pausecircle"
                size={55}
                color={Colors.appColor}
                style={styles.playbn}
              /> 
              </TouchableOpacity>  )
              }   
                </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayMusic;
