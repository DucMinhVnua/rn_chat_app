import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors, variable } from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const InputTextAuthentication = ({
  placeholder,
  setFormValue,
  name,
  value,
}: any) => {
  const handleChangeText = (text: any, name: any, setFormValue: any) => {
    setFormValue((prev: any) => {
      prev[name].value = text;
      return { ...prev };
    });
  };

  const handleFocused = (setFormValue: any, name: any) => {
    setFormValue((prev: any) => {
      prev[name].isFocused = true;
      return { ...prev };
    });
  }

  return (
    <View style={styles.inputBox}>
      <TextInput
        onFocus={() => handleFocused(setFormValue, name)}
        value={value}
        onChangeText={(text) => handleChangeText(text, name, setFormValue)}
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={colors.textPlaceholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    width: wp('90%'),
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    marginTop: variable.NORMAL_PADDING,
  },
  inputText: {
    lineHeight: 24,
    color: colors.textPlaceholder,
    marginLeft: wp('2%'),
  },
});
