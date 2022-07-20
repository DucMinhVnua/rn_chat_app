import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, variable} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const idmy = '1';

interface ParametersMessage {
  title?: string;
  timeCreate?: string;
  id?: string;
}

export const Message = ({title, timeCreate, id}: ParametersMessage) => {
  const [isShowMessage, setIsShowMessage] = useState<boolean>(false);

  const handleSelectDetailsChat = () => {
    if (isShowMessage === true) {
      setIsShowMessage(false);
    } else {
      setIsShowMessage(true);
    }
  };

  return (
    <TouchableOpacity onPress={handleSelectDetailsChat}>
      <View style={{paddingTop: variable.NORMAL_PADDING}}>
        {isShowMessage === true ? (
          <Text style={styles.title}>{timeCreate}</Text>
        ) : null}
        <View
          style={[
            styles.message,
            {
              alignSelf: idmy === id ? 'flex-end' : 'baseline',
              backgroundColor:
                idmy === id ? colors.myBackfroundChat : colors.lightGray,
            },
          ]}>
          <Text style={{color: colors.textColor}}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.textColor,
    fontSize: wp('3%'),
    alignSelf: 'center',
    marginBottom: wp('1%'),
  },
  message: {
    padding: variable.NORMAL_PADDING,
    borderRadius: 25,
  },
});
