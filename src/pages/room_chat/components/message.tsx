import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ImageCustom} from '../../../components';
import {colors, variable} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Message = ({pathImage, message, typeMessage, time, id}: any) => {
  const [isEnabled, setEnabled] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setEnabled(!isEnabled)}
      style={styles.container}>
      {isEnabled && <Text style={styles.time}>{time}</Text>}
      <View
        style={[
          styles.wrapperMessage,
          id === 1 && {
            alignSelf: 'flex-end',
            backgroundColor: colors.inputSearchAndIbColor,
          },
        ]}>
        <Text
          style={[
            styles.message,
            id === 1 && {paddingRight: variable.NORMAL_PADDING},
          ]}>
          {message}
        </Text>
        {id !== 1 && (
          <View style={styles.image}>
            <ImageCustom pathImage={pathImage} width={3} height={3} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: variable.NORMAL_PADDING,
    paddingTop: variable.NORMAL_PADDING / 2,
    paddingBottom: variable.NORMAL_PADDING / 2,
  },
  time: {
    paddingVertical: hp(2),
    color: colors.textColor,
    textAlign: 'center',
  },
  wrapperMessage: {
    maxWidth: '85%',
    alignSelf: 'baseline',
    position: 'relative',
    borderRadius: 32,
    backgroundColor: colors.lightGray,
  },
  message: {
    paddingHorizontal: variable.NORMAL_PADDING,
    paddingRight: variable.NORMAL_PADDING * 2,
    paddingVertical: variable.NORMAL_PADDING / 2,
    fontSize: 16,
    color: colors.textColor,
  },
  image: {
    position: 'absolute',
    bottom: -5,
    right: -7,
  },
});
