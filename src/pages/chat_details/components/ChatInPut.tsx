import React from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ParamInput {
  valueChat?: string;
  setValueChat?: any;
  setIsFocused?: any;
  isFocused?: boolean;
}

export const ChatInput = ({
  valueChat,
  setValueChat,
  setIsFocused,
  isFocused,
}: ParamInput) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.viewStyle}>
        <TextInput
          placeholder={'Write'}
          style={styles.inPutStyle}
          onBlur={() => {
            if (valueChat === '') {
              setIsFocused(false);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onChangeText={text => {
            setValueChat(text);
          }}
          placeholderTextColor={colors.textColor}
          multiline
        />

        {isFocused === true ? null : (
          <Image
            source={require('../../../assets/images/chat_image.png')}
            style={styles.imageChatStyle}
            resizeMode="cover"
          />
        )}
      </View>

      <View>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/icons/ic_camera.png')}
            style={{
              width: hp('7'),
              height: hp('7'),
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        {isFocused === true ? (
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/chat_color.png')}
              style={{width: hp('7'), height: hp('7'), marginTop: wp('3')}}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    marginRight: wp('5'),
    flexDirection: 'row',
    backgroundColor: colors.inputSearchAndIbColor,
    borderRadius: 12,
    alignSelf: 'flex-end',
  },
  inPutStyle: {
    minHeight: hp(7),
    borderRadius: 12,
    backgroundColor: colors.inputSearchAndIbColor,
    paddingHorizontal: wp('3'),
    flexGrow: 1,
    color: colors.textColor,
  },
  imageChatStyle: {
    width: hp('7'),
    height: hp('7'),
    position: 'absolute',
    right: -5,
  },
});
