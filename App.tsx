import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {
  AddGroupPage,
  ChatDetailPage,
  ListChatPage,
  RoomChatPage,
} from './src/pages';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, variable} from './src/constants';

const App = () => {
  return <RoomChatPage />;
};

export default App;
