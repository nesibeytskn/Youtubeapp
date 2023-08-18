import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TrendingScreen from '../screens/TrendingScreen';
import SubscribtionScreen from '../components/SubscribtionComponents/SubscribtionScreen';
import ActivityScreen from '../screens/ActivityScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MyIcon from '../components/CoreComponents/MyIcon';
import HomeStack from '../screens/StackScreens/HomeStack';
import TrendsStack from '../screens/StackScreens/TrendsStack';

const BottomNavigation = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator
      screenOptions={{tabBarActiveTintColor: 'red', headerShown: false}}>
      <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MyIcon name="home" color={color} size={size} />
          ),
        }}
        name="HomeStackScreen"
        component={HomeStack}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MyIcon name="trending-up" color={color} size={size} />
          ),
        }}
        name="TrendingScreen"
        component={TrendingScreen}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MyIcon name="albums" color={color} size={size} />
          ),
        }}
        name="SubscribtionScreen"
        component={SubscribtionScreen}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MyIcon name="notifications" color={color} size={size} />
          ),
        }}
        name="ActivityScreen"
        component={ActivityScreen}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MyIcon name="folder" color={color} size={size} />
          ),
        }}
        name="LibraryScreen"
        component={LibraryScreen}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
