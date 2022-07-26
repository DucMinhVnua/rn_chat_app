import React from 'react';
<<<<<<< HEAD
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {
  ChatDetailPage,
  ListChatPage,
  RoomChatPage,
  AddGroupPage,
} from './src/pages';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, variable} from './src/constants';

const App = () => {
  return <ListChatPage />;
=======
import NavigationSetup from './src/navigation';

const App = () => {
  return <NavigationSetup />;
>>>>>>> 0831a61044a2f178bd02355b0c213251a9746a52
};

export default App;
