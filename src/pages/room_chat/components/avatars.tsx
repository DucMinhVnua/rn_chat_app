import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageCustom} from '../../../components';
import {colors, variable} from '../../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Avatars = ({DATA}: any) => {
  return (
    <View style={styles.wrapperListAvatar}>
      {DATA.map((item: any, index: any) => {
        if (index % 2 === 0) {
          return (
            <View key={index} style={{paddingRight: wp('1%')}}>
              <ImageCustom
                key={index}
                pathImage={item.avatar}
                width={4}
                height={4}
                borderColor={colors.lightGray}
                borderWidth={2}
              />
            </View>
          );
        } else {
          return (
            <View
              key={index}
              style={{marginTop: hp('1%'), paddingRight: wp('1%')}}>
              <ImageCustom
                key={index}
                pathImage={item.avatar}
                width={4}
                height={4}
                borderColor={colors.lightGray}
                borderWidth={2}
              />
            </View>
          );
        }
      })}
    </View>
  );
};

export default Avatars;

const styles = StyleSheet.create({
  wrapperListAvatar: {
    flexDirection: 'row',
    marginHorizontal: variable.NORMAL_PADDING,
    marginVertical: variable.NORMAL_PADDING / 2,
  },
});
