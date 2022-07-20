import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Message from './message';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Discussion = ({DATA}: any) => {
  return (
    <ScrollView>
      {DATA.map(function (item: any, index: any) {
        return (
          <View key={index} style={{paddingRight: wp('1%')}}>
            <Message
              pathImage={item.avatar}
              message={item.message}
              id={item.id}
              typeMessage={item.type}
              time={item.time}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Discussion;

const styles = StyleSheet.create({});
