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
  pathImage?: any;
}

const ImageCustom = ({
  radius = 100,
  borderWidth,
  borderColor,
  width = 12,
  height = 6,
  pathImage = "pathImage = 'https://scontent.fhan4-2.fna.fbcdn.net/v/t1.6435-9/129719143_2833450066940346_5444096240398793362_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Nbvpi19_v-kAX9GSUjY&_nc_ht=scontent.fhan4-2.fna&oh=00_AT_IATJIMSQ29r3ML1fg9G_WBu1TeRf6s5da7gclPH_jWg&oe=62FDD702',",
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
