import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ImageCustom from '../image_custom';
import {colors, variable} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  pathImage?: string;
  title?: string;
  subTitle?: string;
  time?: string;
  onPress: any;
  isGroup?: boolean;
}

const  UserTile = ({
  pathImage,
  title,
  subTitle,
  time,
  onPress,
  isGroup = false,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: isGroup ? variable.NORMAL_PADDING * 1.5 : 0,
        }}>
        <View>
          {isGroup && (
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                top: '-20%',
                left: '-50%',
                backgroundColor: colors.lightGray,
                width: wp('11%'),
                height: wp('11%'),
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: colors.textColor}}>+5</Text>
            </View>
          )}
          <ImageCustom pathImage={pathImage} width={11} />
        </View>
        <View style={{paddingRight: variable.NORMAL_PADDING}}></View>
        <View>
          <Text
            style={{color: colors.textColor, fontWeight: 'bold', fontSize: 16}}>
            {title}
          </Text>
          <Text style={{color: colors.lightGray}}>{subTitle}</Text>
        </View>
      </View>
      <Text style={{color: colors.textColor, fontSize: 16}}>{time}</Text>
    </TouchableOpacity>
  );
};

export default UserTile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: variable.NORMAL_PADDING,
    paddingVertical: variable.NORMAL_PADDING / 2,
  },
});
