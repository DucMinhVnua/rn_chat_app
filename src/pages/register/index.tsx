import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, variable } from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ButtonAuthencation, InputTextAuthentication } from '../../components';
import BaseRealtimeDB from '../../services/fb_realtime';
import FieldDatasModel from '../../models/FieldModel';
import RoutesName from '../../routes';
import FormModel from '../../models/FormModel';

const DATA_UI = {
  headerTitle: 'Tạo tài khoản',
  buttonTitle: 'Đăng ký',
  navigateTitle: 'Bạn đã tạo tài khoản?',
  navigateTitleLogin: 'Đăng Nhập',
  placeholderUsername: 'Tài khoản',
  placeholderPassword: 'Mật khẩu',
  placeholderConfirmPassword: 'Nhập lại mật khẩu',
  fieldNameUsername: 'username',
  fieldNamePassword: 'password',
  fieldNameConfirmPassword: 'confirmPassword',
};

const RegisterPage = ({ navigation }: any) => {
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

  // function isTwoFieldSame(fieldValue1: any, fieldValue2: any) {
  //   return fieldValue1.trim() === fieldValue2.trim();
  // }

  function renderRegisterForm(formValue: any, setFormValue: any) {
    const defaultErrorTitle = 'required';
    const titleErrorDontMatch = "don't match";

    const handleChangeText = (text: any, name: any) => {
      setFormValue((prev: any) => {
        prev[name].value = text;
        return { ...prev };
      });
    };

    const handleFocused = (name: any) => {
      setFormValue((prev: any) => {
        prev[name].isFocused = true;
        return { ...prev };
      });
    };

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
      username: new (FieldDatasModel as any)(
        DATA_UI.placeholderUsername,
        DATA_UI.fieldNameUsername,
        formValue.username.value,
        formValue.username.isFocused,
        defaultErrorTitle,
      ),
      password: new (FieldDatasModel as any)(
        DATA_UI.placeholderPassword,
        DATA_UI.fieldNamePassword,
        formValue.password.value,
        formValue.password.isFocused,
        defaultErrorTitle,
      ),
      confirmPassword: new (FieldDatasModel as any)(
        DATA_UI.placeholderConfirmPassword,
        DATA_UI.fieldNameConfirmPassword,
        formValue.confirmPassword.value,
        formValue.confirmPassword.isFocused,
        new (FormModel as any)(
          null,
          formValue.password.value,
          formValue.confirmPassword.value,
        ).isTwoFieldSame()
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
              name={fieldData.name}
              value={fieldData.value}
              onChangeText={handleChangeText}
              onFocus={handleFocused}
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

  function renderRegisterButton() {
    const baseRealtimeDB = new (BaseRealtimeDB as any)();
    const endPointRegister = '/users/register/';

    const handleRegister = async () => {
      /* check formValue validate confirm. */
      const isValidateError = new (FormModel as any)(
        formValue,
        formValue.password.value,
        formValue.confirmPassword.value,
        true
      ).checkValidateConfirm();

      /* get and check account already register */
      !isValidateError
        ? handleGetAndCheckAccount().then(isAlreadyRegister => {
          if (!isAlreadyRegister) {
            writeAccoutToDB();

            navigation.navigate(RoutesName.listChat);

            setFormValue({
              username: { value: '', isFocused: false },
              password: { value: '', isFocused: false },
              confirmPassword: { value: '', isFocused: false },
            });
          } else {
            Alert.alert('Tài khoản đã tồn tại!');
          }
        })
        : Alert.alert('Lỗi!');

      async function handleGetAndCheckAccount() {
        const accounts = await baseRealtimeDB.oneTimeRead(endPointRegister);

        return Object.values(accounts).some(
          ({ username }: any) => username === formValue.username.value,
        );
      }

      async function writeAccoutToDB() {
        const body = {
          username: formValue.username.value,
          password: formValue.password.value,
        };

        return await baseRealtimeDB.settingData(endPointRegister, body);
      }
    };

    return (
      <View style={styles.buttonView}>
        <ButtonAuthencation
          title={DATA_UI.buttonTitle}
          onPress={handleRegister}
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
      {renderRegisterButton()}
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
