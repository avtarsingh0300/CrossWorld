import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import About from '../Screens/About';
import ContactUs from '../Screens/ContactUs';
import PlayMusic from '../Screens/PlayMusic';
const Stack = createNativeStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigationStrings.AboutStack}
        component={About}
        options={{headerShown: false, gestureEnabled: true}}
      />
      <Stack.Screen
        name={NavigationStrings.ContactUs}
        component={ContactUs}
        options={{headerShown: false, gestureEnabled: true}}
      />
    </Stack.Navigator>
  );
}

export default AboutStack;
