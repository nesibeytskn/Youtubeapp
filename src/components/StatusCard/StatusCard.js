import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import StatusCardHeader from './StatusCardHeader';
import ReadMoreCard from './ReadMoreCard';

import StatusIconCard from './StatusIconCard';
import StatusCommentsCard from './StatusCommentsCard';

const StatusCard = () => {
  const [content, setContent] = useState(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  );
  return (
    <View className=" border-t border-b border-stone-300">
      <ScrollView>
        <StatusCardHeader />
        <ReadMoreCard content={content} />
        <Image
          className=" w-100 h-96 mt-3"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDB0PYo0jM1Wdziwj059BW5QYVm-kpc439Ig&usqp=CAU',
          }}
        />
        <StatusIconCard />
        <StatusCommentsCard />
      </ScrollView>
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({});
