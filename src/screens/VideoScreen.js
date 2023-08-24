import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MyIcon from '../components/CoreComponents/MyIcon';
import VideoHeader from '../components/VideoHeader';
import ChanelCard from '../components/ChanelCard';
import CommentsCard from '../components/CommentsCard';
import HomeCard from '../components/HomeCard';
import axios from 'axios';
import VideoPlayer from 'react-native-video';

const VideoScreen = props => {
  const list = [1, 2, 3, 4, 5];
  console.log(props.route.params.video);
  const [videoDetail, setVideoDetail] = useState(props.route.params.video);
  //console.log(videoDetail);
  const videoTitle = videoDetail?.snippet?.title
    .split('')
    .slice(0, 35)
    .join('');
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
  return (
    <View className="flex-1 bg-stone-900 ">
      {/*Üst Kısım (video oynatma) */}

      <TouchableOpacity
        onLongPress={() => console.log('merhaba')}
        className=" h-52">
        <VideoPlayer
          video={{
            uri: 'https://www.youtube.com/watch?v=2Pmh2I1evQc&ab_channel=G%C3%BCld%C3%BCrG%C3%BCld%C3%BCr',
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{uri: videoDetail?.videoThumbnail}}
        />
      </TouchableOpacity>
      <ScrollView>
        <View style={{flex: 1}}>
          <VideoHeader
            header={{
              shortHeader: videoDetail?.videoTitle,
              longHeader: videoDetail?.videoHeader,
            }}
          />
          <ChanelCard channelTitle={videoDetail?.snippet?.channelTitle} />
          <CommentsCard />
          {/*Alt Kısım (önerilen videolar) */}
          <View className=" bg-stone-900 " style={{flex: 1}}>
            <FlatList
              data={videos}
              renderItem={({item}) => (
                <HomeCard videoInfo={item} theme={'dark'} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({});
