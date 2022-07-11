import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {ListChatPage} from './src/pages';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, variable} from './src/constants';

const App = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: variable.NORMAL_PADDING * 2,
        backgroundColor: colors.primaryColor,
      }}>
      <StatusBar backgroundColor="transparent" hidden />
      <SafeAreaView>
        <ListChatPage />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;
