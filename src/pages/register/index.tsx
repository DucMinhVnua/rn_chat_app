import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, variable } from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ButtonAuthencation, InputTextAuthentication } from '../../components';
import BaseRealtimeDB from '../../services/fb_realtime';
import FieldDatas from '../../models/FieldModel';

const DATA_UI = {
  headerTitle: 'Tạo tài khoản',
  buttonTitle: 'Đăng ký',
  navigateTitle: 'Bạn đã tạo tài khoản?',
  navigateTitleLogin: 'Đăng Nhập',
};

const RegisterPage = () => {
  let [formValue, setFormValue] = useState({
    username: {
      value: '',
      isFocused: false,
    },
    password: {
      value: '',
      isFocused: false,
    },
    confirmPassword: {
      value: '',
      isFocused: false,
    },
  });

  function isTwoFieldSame(fieldValue1: any, fieldValue2: any) {
    return fieldValue1.trim() === fieldValue2.trim();
  }

  function renderRegisterForm(formValue: any, setFormValue: any) {
    const defaultErrorTitle = 'required';
    const titleErrorDontMatch = "don't match";

    function renderErrorWithFieldName(
      isFocused: any,
      value: any,
      errorTitle: string,
    ) {
      if (isFocused && errorTitle === "don't match") {
        return (
          <Text style={{ fontSize: 14, color: 'red', paddingTop: 5 }}>
            {errorTitle}
          </Text>
        );
      }

      return isFocused && value.trim() === '' ? (
        <Text style={{ fontSize: 14, color: 'red', paddingTop: 5 }}>
          {errorTitle}
        </Text>
      ) : null;
    }

    const DATAS = {
      username: new (FieldDatas as any)(
        'Tài khoản',
        'username',
        formValue.username.value,
        formValue.username.isFocused,
        defaultErrorTitle,
      ),
      password: new (FieldDatas as any)(
        'Mật khẩu',
        'password',
        formValue.password.value,
        formValue.password.isFocused,
        defaultErrorTitle,
      ),
      confirmPassword: new (FieldDatas as any)(
        'Nhập lại mật khẩu',
        'confirmPassword',
        formValue.confirmPassword.value,
        formValue.confirmPassword.isFocused,
        isTwoFieldSame(
          formValue.password.value,
          formValue.confirmPassword.value,
        )
          ? defaultErrorTitle
          : titleErrorDontMatch,
      ),
    };

    return (
      <View>
        {Object.values(DATAS).map((fieldData, index) => (
          <React.Fragment key={`${index}`}>
            <InputTextAuthentication
              placeholder={fieldData.placeholder}
              setFormValue={setFormValue}
              name={fieldData.name}
              value={fieldData.value}
            />
            {renderErrorWithFieldName(
              fieldData.isFocused,
              fieldData.value,
              fieldData.errorTitle,
            )}
          </React.Fragment>
        ))}
      </View>
    );
  }

  function renderRegisterButton(formValue: any) {
    const baseRealtimeDB = new (BaseRealtimeDB as any)();

    function checkValidateConfirm(formValue: any) {
      const isMatchErrorFalse = !isTwoFieldSame(
        formValue.password.value,
        formValue.confirmPassword.value,
      );

      if (isMatchErrorFalse) {
        return true;
      }

      return Object.values(formValue).some(
        (itemValue: any) => itemValue.value === '',
      );
    }

    const handleRegister = async (formValue: any) => {

      async function handleGetAndCheckAccount() {
        const endPointRegister = '/users/register/';
        const accounts = await baseRealtimeDB.oneTimeRead(endPointRegister);

        return Object.values(accounts).some(({ username }: any) => username === formValue.username.value)
      }

      /* check formValue validate confirm. */
      const isValidateError = checkValidateConfirm(formValue);

      // get and check account already register
      const isAlreadyRegister = handleGetAndCheckAccount();
      console.log(isAlreadyRegister);

      // handle set account to firebase realtime

      // if (isExist) {
      //   writeAccoutToDB();
      //   setFormValue({ username: '', password: '', confirmPassword: '' });
      // } else {
      //   Alert.alert('Tài khoản đã tồn tại');
      // }
    };

    return (
      <View style={styles.buttonView}>
        <ButtonAuthencation
          title={DATA_UI.buttonTitle}
          onPress={() => handleRegister(formValue)}
        />
      </View>
    );
  }

  function renderLoginTitle() {
    return (
      <View style={styles.textViewStyle}>
        <Text style={styles.textStyle}>{DATA_UI.navigateTitle}</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.textOpacityStyle}>
            {DATA_UI.navigateTitleLogin}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/logo_login.png')}
          resizeMode="cover"
        />
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.textTitleStyle}>{DATA_UI.headerTitle}</Text>
        </View>
      </View>

      {/* Register form */}
      {renderRegisterForm(formValue, setFormValue)}

      {/* Footer includes register button and login title */}
      {renderRegisterButton(formValue)}
      {renderLoginTitle()}
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
