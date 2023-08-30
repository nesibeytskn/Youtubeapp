import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import TrendHeader from '../components/TrendsComponents/TrendHeader';
import ChanelCard from '../components/ChanelCard';
import ChangeCard from '../components/TrendsComponents/ChangeCard';
import TreendingHeader from '../components/TrendsComponents/TreendingHeader';
import HomeCard from '../components/HomeCard';
import {defaultVideo} from '../utils/defaultVideo';

const TrendingScreen = () => {
  const [changer, setChanger] = useState(0);
  return (
    <View className="flex-1 bg-white">
      <TrendHeader />

      <View className="bg-white w-100 justify-between  flex-row border-b border-slate-300 ">
        <ChangeCard
          label={'şimdi'}
          currentindex={changer}
          staticindex={0}
          onPress={() => setChanger(0)}
        />
        <ChangeCard
          label={'müzik'}
          currentindex={changer}
          staticindex={1}
          onPress={() => setChanger(1)}
        />
        <ChangeCard
          label={'oyun'}
          currentindex={changer}
          staticindex={2}
          onPress={() => setChanger(2)}
        />
        <ChangeCard
          label={'filmler'}
          currentindex={changer}
          staticindex={3}
          onPress={() => setChanger(3)}
        />
      </View>
      {changer == 0 ? (
        <>
          <TreendingHeader head={'Anlık trend videolar'} />
          <HomeCard videoInfo={defaultVideo} />
        </>
      ) : changer == 1 ? (
        <>
          <TreendingHeader head={'Trend Müzikler'} />
          <HomeCard videoInfo={defaultVideo} />
        </>
      ) : changer == 2 ? (
        <>
          <TreendingHeader head={'trend oyunlar'} />
          <HomeCard videoInfo={defaultVideo} />
        </>
      ) : changer == 3 ? (
        <>
          <TreendingHeader head={'trend filmler'} />
          <HomeCard videoInfo={defaultVideo} />
        </>
      ) : null}
    </View>
  );
};

export default TrendingScreen;

const styles = StyleSheet.create({});
