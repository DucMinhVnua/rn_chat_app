import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {ListChatPage} from './src/pages';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="transparent" hidden />
      <SafeAreaView>
        <ListChatPage />
      </SafeAreaView>
    </View>
  );
};

export default App;
