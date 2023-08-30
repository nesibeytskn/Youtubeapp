import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomNavigation from './src/navigations/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {VideoProvider} from './src/context/VideosStore';

const App = () => {
  return (
    <VideoProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </VideoProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
