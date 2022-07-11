import React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NORMAL_PADDING } from '../../constants';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
       
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:NORMAL_PADDING
  }
})