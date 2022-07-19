import {Image, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  radius?: number;
  borderWidth?: number;
  borderColor?: string;
  width?: number;
  height?: number;
  pathImage: any;
}

const ImageCustom = ({
  radius = 100,
  borderWidth,
  borderColor,
  width = 12,
  height = 6,
  pathImage,
}: Props) => {
  let distance = wp(width) + hp(height) / 2;

  return (
    <View
      style={{
        position: 'relative',
        borderRadius: wp(`${radius}%`),
        borderWidth: borderWidth,
        borderColor: borderColor,
      }}>
      <Image
        source={{uri: pathImage}}
        style={{
          width: distance,
          height: distance,
          borderRadius: radius,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageCustom;
