import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';
import BottomTabs from './BottomTabs';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import PlayMusic from '../Screens/PlayMusic';
const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigationStrings.SplashScreen}
        component={SplashScreen}
        options={{headerShown: false, gestureEnabled: true}}
      />
      <Stack.Screen
        name={NavigationStrings.Dashboard}
        component={BottomTabs}
        options={{headerShown: false, gestureEnabled: true}}
      />
      <Stack.Screen
        name={NavigationStrings.PlayMusic}
        component={PlayMusic}
        options={{headerShown: false, gestureEnabled: true}}
      />
    </Stack.Navigator>
  );
}

export default Routes;
