import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, variable} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  title?: string;
}

export const ButtonAuthencation = ({title, onPress}: any) => (
  <TouchableOpacity style={[styles.loginBtn]} onPress={onPress}>
    <Text style={{color: colors.textColor, fontWeight: '600'}}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  loginBtn: {
    width: wp('90%'),
    justifyContent: 'center',
    backgroundColor: colors.lightPurple,
    alignItems: 'center',
    paddingVertical: variable.NORMAL_PADDING,
    borderRadius: 26,
  },
});
