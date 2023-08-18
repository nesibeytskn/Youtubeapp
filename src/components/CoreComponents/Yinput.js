import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Yinput = () => {
  return (
    <TextInput
      className="bg-stone-950 rounded-full flex-1 p-2 h-8"
      placeholderTextColor={'rgb(120 113 108)'}
      placeholder="Yorumunuzu yazınız..."
    />
  );
};

export default Yinput;

const styles = StyleSheet.create({});
