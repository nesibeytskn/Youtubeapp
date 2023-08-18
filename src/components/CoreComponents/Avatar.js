import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Avatar = ({avatarSource, style}) => {
  return (
    <Image
      className="w-10 h-10 rounded-full"
      source={{uri: avatarSource}}
      style={style}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({});
