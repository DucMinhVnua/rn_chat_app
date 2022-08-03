import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors, variable} from '../../constants';
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const InputTextAuthentication = ({
   placeholder,
   onChangeText,
   onFocus,
   name,
   value,
   isPassWord,
}: any) => {
   return (
      <View style={styles.inputBox}>
         <TextInput
            secureTextEntry={isPassWord}
            onFocus={onFocus && (() => onFocus(name))}
            value={value}
            onChangeText={text => onChangeText(text, name)}
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
