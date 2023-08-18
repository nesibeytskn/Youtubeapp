import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyIcon from '../CoreComponents/MyIcon';
import PressibleIcon from '../CoreComponents/PressibleIcon';
import {useNavigation} from '@react-navigation/native';

const TrendHeader = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between p-3 bg-white">
      <View className="flex-row items-center justify-center gap-3">
        <PressibleIcon
          onPress={() => navigation.navigate('HomeStackScreen')}
          name={'arrow-back-outline'}
          size={25}
        />
        <Text className="font-semibold text-lg">trendler</Text>
      </View>
      <View className="flex-row items-center justify-center gap-3">
        <MyIcon name={'bar-chart-outline'} size={25} />
        <MyIcon name={'search-outline'} size={25} />
        <MyIcon name={'ellipsis-vertical'} size={25} />
      </View>
    </View>
  );
};

export default TrendHeader;

const styles = StyleSheet.create({});
