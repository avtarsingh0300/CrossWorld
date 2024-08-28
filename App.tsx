import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Stations from './src/Screens/Stations';
import SplashScreen from './src/Screens/SplashScreen';
import BottomTabs from './src/Navigations/BottomTabs';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              gestureDirection: 'horizontal',
              animation: 'slide_from_right',
              gestureEnabled: false,
            }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown: false, gestureEnabled: true}}
            />
            <Stack.Screen
              name="Dashboard"
              component={BottomTabs}
              options={{headerShown: false, gestureEnabled: true}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
