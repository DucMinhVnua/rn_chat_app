import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { colors, variable } from './src/constants';
import NavigationSetup from './src/navigation';
import { ListChatPage } from './src/pages';

const App = () => {
  return <>
    <StatusBar barStyle="light-content" backgroundColor={"transparent"} translucent />
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primaryColor, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
      <NavigationSetup />
    </SafeAreaView>
  </>;
};

export default App;
