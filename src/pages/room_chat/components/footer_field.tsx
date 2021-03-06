import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ButtonIcon} from '../../../components';
import {colors, variable} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const FooterField = () => {
  const [isFocusedField, setFocusedField] = useState(false);
  const [value, setValue] = useState('');

  const handleChangeText = useCallback((text: any) => {
    setValue(text);
  }, []);

  return (
    <View style={styles.fieldMesssage}>
      <View style={styles.wrapperFieldIcon}>
        <TextInput
          onChangeText={handleChangeText}
          onBlur={() => {
            setFocusedField(false);
          }}
          onFocus={() => {
            setFocusedField(true);
          }}
          style={[
            styles.field,
            {
              maxWidth: isFocusedField ? wp(75) : !value ? wp(60) : wp(75),
            },
          ]}
          placeholder="Write"
          placeholderTextColor={colors.textPlaceholder}
          multiline
        />
        <View style={{marginLeft: -10}}>
          {!isFocusedField && !value && (
            <ButtonIcon
              backgroundColor={colors.lightGray}
              widthIconImage={5}
              heightIconImage={5}
              paddingHorizontal={4}
              onTap={() => {}}
              imagePath={require('../../../assets/icons/ic_unactive_message.png')}
            />
          )}
        </View>
        <View style={styles.wrapperBtnCameraAndMessage}>
          <ButtonIcon
            backgroundColor={colors.lightGreen}
            widthIconImage={5}
            heightIconImage={5}
            paddingHorizontal={4}
            onTap={() => {}}
            imagePath={require('../../../assets/icons/ic_camera.png')}
          />
          {isFocusedField && (
            <View style={{paddingTop: hp(2)}}>
              <ButtonIcon
                backgroundColor={colors.lightPurple}
                widthIconImage={5}
                heightIconImage={5}
                paddingHorizontal={4}
                onTap={() => {}}
                imagePath={require('../../../assets/icons/ic_active_message.png')}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default FooterField;

const styles = StyleSheet.create({
  fieldMesssage: {
    paddingHorizontal: variable.NORMAL_PADDING,
    paddingVertical: variable.NORMAL_PADDING,
    justifyContent: 'flex-end',
  },

  wrapperFieldIcon: {
    flexDirection: 'row',
  },

  field: {
    flex: 1,
    paddingHorizontal: variable.NORMAL_PADDING,
    color: colors.textColor,
    fontSize: 18,
    backgroundColor: colors.inputSearchAndIbColor,
    borderRadius: 8,
  },

  wrapperBtnCameraAndMessage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
