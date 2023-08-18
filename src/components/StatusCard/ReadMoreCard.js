import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReadMoreCard = ({content}) => {
  const statusContent = content.split('');
  const characterNumb = statusContent.length;
  return (
    <View className="mt-5">
      <Text>
        {characterNumb <= 8
          ? statusContent
          : statusContent.slice(0, 25).join('') + `\n ...Continue to read`}
      </Text>
    </View>
  );
};

export default ReadMoreCard;

const styles = StyleSheet.create({});
