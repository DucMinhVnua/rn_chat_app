import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, variable} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ButtonAuthencation, InputTextAuthentication} from '../../components';

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.imageView}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/logo_login.png')}
          resizeMode="cover"
        />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.textTitleStyle}>Tạo tài khoản</Text>
        </View>
      </View>
      <View>
        <InputTextAuthentication placeholder="Tài khoản" />
        <InputTextAuthentication placeholder="Mật khẩu" />
        <InputTextAuthentication placeholder="Nhập lại mật khẩu" />
      </View>

      <View style={styles.buttonView}>
        <ButtonAuthencation title="ĐĂNG KÝ" />
      </View>

      <View style={styles.textViewStyle}>
        <Text style={styles.textStyle}>Bạn đã tạo tài khoản?</Text>
        <TouchableOpacity>
          <Text style={styles.textOpacityStyle}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    padding: variable.NORMAL_PADDING,
    justifyContent: 'center',
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: variable.NORMAL_PADDING * 3,
  },
  imageStyle: {
    width: wp('12%'),
    height: hp('6%'),
    borderRadius: 10,
    marginRight: variable.NORMAL_PADDING / 2,
  },
  textTitleStyle: {
    color: colors.textColor,
    fontWeight: '700',
    fontSize: hp('3%'),
  },
  textViewStyle: {
    flexDirection: 'row',
    marginTop: variable.NORMAL_PADDING,
    justifyContent: 'center',
  },
  buttonView: {
    marginTop: variable.NORMAL_PADDING * 2,
  },
  textStyle: {
    color: colors.textColor,
    fontWeight: '300',
    marginRight: wp('1%'),
  },
  textOpacityStyle: {
    color: colors.textColor,
    fontWeight: '700',
  },
});
