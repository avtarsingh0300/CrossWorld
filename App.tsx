import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import Routes from './src/Navigations/Routes';
import {Colors} from './src/Utilities/Styles/colors';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';

LogBox.ignoreAllLogs();
function App() {
  useEffect(() => {
    setUpPlayer();
  }, []);

  const setUpPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
          Capability?.Play,
          Capability?.Pause,
          Capability?.SkipToNext,
          Capability?.SkipToPrevious,
          Capability?.Stop,
        ],
        android: {
          appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
        },
        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability?.Play, Capability?.Pause],
        // Icons for the notification on Android (if you don't like the default ones)
      });
    } catch (error) {
      console.log(error, 'TrackPlayer');
    }
  };

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
