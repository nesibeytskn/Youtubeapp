import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyIcon from './CoreComponents/MyIcon';
import IconBox from './CoreComponents/IconBox';

const VideoHeader = () => {
  return (
    <View className="bg-stone-900 p-3">
      <View className="">
        <View className="flex-row justify-between">
          <Text className="text-white text-lg font-semibold">
            fotograf çekimi
          </Text>
          <MyIcon name={'chevron-down-outline'} color={'white'} size={25} />
        </View>
        <View>
          <Text className="text-stone-500">1.057.571 görüntülenme</Text>
        </View>
      </View>
      {/*icon alanı */}
      <View className="  justify-between flex-row ">
        <IconBox name={'thumbs-up'} value={'beğendim'} />
        <IconBox name={'thumbs-down'} value={'beğenmedim'} />
        <IconBox name={'share'} value={'paylaş'} />
        <IconBox name={'download'} value={'indir'} />
        <IconBox name={'bookmark'} value={'kaydet'} />
      </View>
    </View>
  );
};

export default VideoHeader;

const styles = StyleSheet.create({});
