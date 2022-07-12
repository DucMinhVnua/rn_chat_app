import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, variable} from '../../../constants';

const CardSlide = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <ImageBackground
        imageStyle={{borderRadius: 15}}
        resizeMode="cover"
        style={styles.image}
        source={require('../../../assets/images/img_test.png')}>
        <Text
          style={{
            paddingBottom: hp('5%'),
            flex: 4,
            paddingLeft: variable.NORMAL_PADDING / 2,
            color: colors.textColor,
          }}>
          Bożenka Malina
        </Text>
        <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 10}}>
          <Image
            style={{width: 25, height: 25}}
            resizeMode="center"
            source={require('../../../assets/icons/ic_heart.png')}
          />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CardSlide;

const styles = StyleSheet.create({
  container: {
    height: hp('25%'),
    width: wp('30%'),
  },

  image: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});
