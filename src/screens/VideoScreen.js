import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import MyIcon from '../components/CoreComponents/MyIcon';
import VideoHeader from '../components/VideoHeader';
import ChanelCard from '../components/ChanelCard';
import CommentsCard from '../components/CommentsCard';
import HomeCard from '../components/HomeCard';
import axios from 'axios';
import VideoPlayer from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
import {VideoContext} from '../context/VideosStore';
import Video from '../models/VideoModel';

const VideoScreen = props => {
  const {vvideos} = useContext(VideoContext);
  const navigation = useNavigation();

  console.log(props.route.params.video);
  const [videoDetail, setVideoDetail] = useState(props.route.params.video);
  //console.log(videoDetail);

  return (
    <View className="flex-1 bg-stone-900 ">
      {/*Üst Kısım (video oynatma) */}

      <TouchableOpacity
        onLongPress={() => console.log('merhaba')}
        className=" h-52">
        <VideoPlayer
          video={{
            uri: Video?.videoThumbnail,
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
              data={vvideos}
              renderItem={({item}) => (
                <HomeCard
                  videoInfo={item}
                  theme={'dark'}
                  onPress={() =>
                    navigation.navigate('VideoScreen', {video: item})
                  }
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create();
