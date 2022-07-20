import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, variable} from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ButtonAuthencation, InputTextAuthentication} from '../../components';

const LoginPage = () => {
  const [initialUser, setInitialUser] = useState({
    username: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.imageHeader}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/logo_login.png')}
        />
        <InputTextAuthentication placeholder="Tài khoản" />
        <InputTextAuthentication placeholder="Mật khẩu" />
        <View style={styles.buttonViewStyle}>
          <ButtonAuthencation title="ĐĂNG NHẬP" />
        </View>
        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity>
            <Text style={styles.textOpacityStyle}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
  },
  imageHeader: {
    alignItems: 'center',
  },
  imageStyle: {
    width: wp('40%'),
    height: hp('20%'),
    marginBottom: variable.NORMAL_PADDING * 3,
  },
  buttonViewStyle: {
    marginTop: variable.NORMAL_PADDING * 3,
  },
  textViewStyle: {
    flexDirection: 'row',
    marginTop: variable.NORMAL_PADDING,
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
