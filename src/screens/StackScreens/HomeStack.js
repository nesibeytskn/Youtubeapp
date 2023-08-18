import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
import VideoScreen from '../VideoScreen';

const HomeStack = () => {
  const HomeStackk = createNativeStackNavigator();
  return (
    <HomeStackk.Navigator screenOptions={{headerShown: false}}>
      <HomeStackk.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStackk.Screen name="VideoScreen" component={VideoScreen} />
    </HomeStackk.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
