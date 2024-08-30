import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import Routes from './src/Navigations/Routes';
import {Colors} from './src/Utilities/Styles/colors';

LogBox.ignoreAllLogs();
function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <SafeAreaProvider style={{backgroundColor: Colors.appColor}}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
