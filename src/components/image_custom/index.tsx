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
  return (
    <View
      style={{
        position: 'relative',
        borderRadius: wp(`${radius}%`),
        borderWidth: borderWidth,
        borderColor: borderColor,
      }}>
      <Image
        source={pathImage}
        style={{
          width: wp(`${width}%`),
          height: hp(`${height}%`),
          borderRadius: radius,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageCustom;
