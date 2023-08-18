import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TreendingHeader = ({head}) => {
  return (
    <View className="bg-white p-2">
      <Text>{head}</Text>
    </View>
  );
};

export default TreendingHeader;

const styles = StyleSheet.create({});
