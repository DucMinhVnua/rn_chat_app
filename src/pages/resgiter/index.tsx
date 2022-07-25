import React, {useState} from 'react';
import {
  Alert,
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
import database from '@react-native-firebase/database';
import {ButtonAuthencation, InputTextAuthentication} from '../../components';

const ResgiterPage = () => {
  let [formValue, setFormValue] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const readRegister = (formValue: any) => {
    return database()
      .ref('/users/register/')
      .once('value')
      .then(snapshot => {
        return Object.values(snapshot.val()).every(
          (value: any) => value.username !== formValue.username,
        );
      });
  };

  const writeAccoutToDB = () => {
    database()
      .ref('/users/register/')
      .push()
      .set(formValue)
      .then(() => console.log('Data set.'));
  };

  const handleRegister = async (formValue: any) => {
    // false = username already exist database, reverse true.
    const isExist = await readRegister(formValue);

    if (isExist) {
      writeAccoutToDB();
      setFormValue({username: '', password: '', confirmPassword: ''});
    } else {
      Alert.alert('Tài khoản đã tồn tại');
    }
  };

  // database()
  //   .ref('/users/register/')
  //   .on('value', snapshot => {
  //     console.log('User data: ', snapshot.val());
  //   });

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
        <InputTextAuthentication
          placeholder="Tài khoản"
          setFormValue={setFormValue}
          name={'username'}
          value={formValue.username}
        />
        <InputTextAuthentication
          placeholder="Mật khẩu"
          setFormValue={setFormValue}
          value={formValue.password}
          name={'password'}
        />
        <InputTextAuthentication
          placeholder="Nhập lại mật khẩu"
          setFormValue={setFormValue}
          value={formValue.confirmPassword}
          name={'confirmPassword'}
        />
      </View>

      <View style={styles.buttonView}>
        <ButtonAuthencation
          title="ĐĂNG KÝ"
          onPress={() => handleRegister(formValue)}
        />
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

export default ResgiterPage;

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
