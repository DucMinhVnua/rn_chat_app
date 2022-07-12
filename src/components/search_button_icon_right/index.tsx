import {Image, TextInput, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  widthSearch?: number;
  onChange?: void;
  value?: any;
  borderWidth?: number;
  placeholderTextColor?: string;
  fontSize?: number;
  paddingLeft?: number;
  paddingVertical?: number;
  borderRadius?: number;
  placeholder?: string;
  backgroundColor?: string;
  underlineColorAndroid?: string;
  widthIconImage?: number;
  heightIconImage?: number;
  colorText?: string;
  widthBtnIcon?: number;
  radiusButton?: number;
  backgroundButtonIcon?: string;
  imagePath: NodeRequire;
}

const SearchButtonRight = ({
  widthSearch = 50,
  onChange,
  value,
  borderWidth = 0,
  placeholderTextColor = '#ddd',
  fontSize = 18,
  paddingLeft,
  paddingVertical,
  borderRadius = 8,
  placeholder = 'Search...',
  backgroundColor = '#1F232F',
  underlineColorAndroid,
  widthIconImage = 4,
  heightIconImage = 2,
  colorText = '#fff',
  widthBtnIcon = 50,
  backgroundButtonIcon = '#565E70',
  imagePath,
}: Props) => {
  return (
    <View
      style={{
        paddingLeft: paddingLeft,
        paddingVertical: paddingVertical,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          style={{
            flex: 1,
            color: colorText,
            fontSize: fontSize,
            width: wp(`${widthSearch}%`),
          }}
          onChange={() => onChange}
          value={value}
          underlineColorAndroid={underlineColorAndroid}
        />
        <View
          style={{
            width: widthBtnIcon,
            backgroundColor: backgroundButtonIcon,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: borderRadius,
          }}>
          <Image
            resizeMode="center"
            style={{
              width: wp(`${widthIconImage}%`),
              height: hp(`${heightIconImage}%`),
            }}
            source={imagePath}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchButtonRight;
