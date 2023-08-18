import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const SubscribtionChannelsAvatar = ({channelAvatar, channelName, badge}) => {
  const channelNametoArray = channelName.split('');
  const characterNumb = channelNametoArray.length;
  return (
    <View className="items-center justify-center p-1 h-24 relative">
      <Image
        className="w-16 h-16 mb-1 rounded-full "
        source={{uri: channelAvatar}}
      />
      <Text>
        {characterNumb <= 8
          ? channelName
          : channelNametoArray.slice(0, 8).join('') + '...'}
      </Text>
      {badge && (
        <View className="bg-blue-700 w-3 h-3 rounded-full border-white border-2 absolute right-3 bottom-7" />
      )}
    </View>
  );
};

export default SubscribtionChannelsAvatar;

const styles = StyleSheet.create({});
