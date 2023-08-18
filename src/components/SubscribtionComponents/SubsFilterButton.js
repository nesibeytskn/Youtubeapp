import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SubsFilterButton = ({
  label,
  onPress,
  index = {currentIndex: '', staticIndex: ''},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={` ${
        index.currentIndex == index.staticIndex ? 'bg-stone-600' : 'bg-gray-300'
      }  p-1 px-2 m-1 rounded-md`}>
      <Text
        className={
          index.currentIndex == index.staticIndex ? 'text-white' : 'text-dark'
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SubsFilterButton;

const styles = StyleSheet.create({});
