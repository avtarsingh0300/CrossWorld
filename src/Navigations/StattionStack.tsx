import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import MusicDetail from '../Screens/MusicDetail';
import Stations from '../Screens/Stations';
const Stack = createNativeStackNavigator();

function StationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        animation: 'flip',
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={NavigationStrings.StationsStack}
        component={Stations}
        options={{headerShown: false, gestureEnabled: true}}
      />
      <Stack.Screen
        name={NavigationStrings.MusicDetail}
        component={MusicDetail}
        options={{headerShown: false, gestureEnabled: true}}
      />
    </Stack.Navigator>
  );
}

export default StationStack;
