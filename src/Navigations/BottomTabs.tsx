import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import SupportUs from '../Screens/SupportUs';
import NavigationStrings from '../Utilities/Constants/NavigationStrings';
import {Colors} from '../Utilities/Styles/colors';
import {Image, StyleSheet} from 'react-native';
import fontFamily from '../Utilities/Styles/fontFamily';
import {Platform} from 'react-native';
import ImagePath from '../Utilities/Constants/ImagePath';
import StationStack from './StattionStack';
import AboutStack from './AboutStack';

const BottomTab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={NavigationStrings.Stations}
      screenOptions={{
        tabBarActiveTintColor: Colors.tabiconcolor,
        tabBarInactiveTintColor: Colors.tabinac,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'android' ? 70 : 80,
          backgroundColor: Colors.white,
        },
        tabBarLabelStyle: {
          ...styles.label,
        },
        headerShown: false,
      }}>
      <BottomTab.Screen
        name={NavigationStrings.Stations}
        component={StationStack}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode="contain"
                source={ImagePath.stationicon}
                style={[
                  {...styles.icon},
                  {tintColor: focused ? Colors.tabiconcolor : Colors.tabinac},
                ]}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.AboutUs}
        component={AboutStack}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode="contain"
                source={ImagePath.abouticon}
                style={[
                  {...styles.icon},
                  {tintColor: focused ? Colors.tabiconcolor : Colors.tabinac},
                ]}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.SupportUs}
        component={SupportUs}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                resizeMode="contain"
                source={ImagePath.supporticon}
                style={[
                  {...styles.icon},
                  {
                    tintColor: focused ? Colors.tabiconcolor : Colors.tabinac,
                    height: 25,
                    width: 30,
                  },
                ]}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    bottom: Platform.OS === 'android' ? 8 : 0,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 8,
  },
});
export default BottomTabs;
