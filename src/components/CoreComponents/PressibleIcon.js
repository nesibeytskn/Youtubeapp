import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PressibleIcon = ({name, size, color, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default PressibleIcon;

const styles = StyleSheet.create({});
