import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos',
        {
          params: {
            key: 'AIzaSyB_mM2AqPqMS5Cr4sjtQw-EYxrQ19-H494',
            part: 'snippet',
            chart: 'mostPopular',
            maxResult: 10,
          },
        },
      );
      //console.log(response.data.items);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getVideos();
  }, []);
  //console.log(videos[0]?.snippet);
  return (
    <View className="flex-1 px-2">
      <Header />
      <FlatList
        data={videos}
        renderItem={({item}) => {
          //console.log(item);
          return (
            <HomeCard
              videoInfo={item}
              onPress={() => navigation.navigate('VideoScreen', {video: item})}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
