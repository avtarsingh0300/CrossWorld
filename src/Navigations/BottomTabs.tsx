import React, {useContext} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Stations from '../Screens/Stations';
import SupportUs from '../Screens/SupportUs';
import About from '../Screens/About';
const BottomTab = createBottomTabNavigator();
const BottomTabs = ({props}: any) => {
  return (
    <BottomTab.Navigator
      tabBar={tabsProps => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={'Stations'}
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#6A6A8B',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          //   ...styles.customBottomtabsStyle,
          //   backgroundColor: Colors.white,
        },
        // tabBarLabelStyle: styles.tabLabel,
        headerShown: false,
      }}>
      <BottomTab.Screen
        name={'Stations'}
        component={Stations}
        options={{
          tabBarShowLabel: true,
        }}
      />
      <BottomTab.Screen
        name={'About'}
        component={About}
        options={{
          tabBarShowLabel: true,
        }}
      />
      <BottomTab.Screen
        name={'SupportUs'}
        component={SupportUs}
        options={{
          tabBarShowLabel: true,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
