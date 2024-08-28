import {View, Text, SafeAreaView, StatusBar, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './style';
import { Colors } from '../../Utilities/Styles/colors';
import { SizeBox } from '../../Utilities/Component/Helpers';
import ImagePath from '../../Utilities/Constants/ImagePath';

const Stations = () => {
  const renderItem = ({ item }) => (
    <View style={styles.mainvw}>
      <View style={styles.innervw}>
      <Image source={ImagePath.uprofile} style={styles.uprofileimg}/>
      <View style={{paddingHorizontal:10,width:"70%"}}>
      <Text style={styles.praisetxt} numberOfLines={2}>Praise and Worship</Text>
      <Text style={styles.nowplayingtxt} numberOfLines={1}>Now Playing: Newsboys</Text>
     </View>

     </View>
    </View>
  );
  return (
    <SafeAreaView style={{flex:1}} >
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.appColor} />
     <View style={{backgroundColor:Colors.appColor,padding:10,alignItems:"center",justifyContent:"center"}}>
      <Text style={styles.headingtxt}>THE
      <Text style={styles.crosstxt}> CROSS </Text>
      WORLDWIDE
      </Text>
     </View>
     <View style={{paddingLeft:20}}>
     <Text style={styles.stationtxt}>
     Stations
     </Text>
     <SizeBox size={10}/>
     <View style={{borderBottomWidth:1,borderColor:Colors.grayscale}}/>
     </View>
     <SizeBox size={10}/>
     <FlatList
      data={[
        {id:1 },{id:1 },{id:1 },{id:1 }
      ]}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
     </View>
    </SafeAreaView>
  );
};

export default Stations;
