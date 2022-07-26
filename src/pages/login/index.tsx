import React, { useState } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, variable } from '../../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ButtonAuthencation, InputTextAuthentication } from '../../components';
import RoutesName from '../../routes';
import FieldDatasModel from '../../models/FieldModel';
import FormModel from '../../models/FormModel';

const DATA_UI = {
  placeholderUsername: 'Tài khoản',
  placeholderPassword: 'Mật khẩu',
  buttonTitle: 'ĐĂNG NHẬP',
  navigateTitle: 'Bạn chưa có tài khoản?',
  navigateTitleRegister: 'Đăng ký',
  fieldNameUsername: 'username',
  fieldNamePassword: 'password',
};

const LoginPage = ({ navigation }: any) => {
  const [formValue, setFormValue] = useState({
    username: { value: '' },
    password: { value: '' },
  });

  function goToRegister() {
    navigation.navigate(RoutesName.register);
  }

  function renderLoginForm() {
    const DATAS = {
      username: new (FieldDatasModel as any)(
        DATA_UI.placeholderUsername,
        DATA_UI.fieldNameUsername,
        formValue.username,
      ),
      password: new (FieldDatasModel as any)(
        DATA_UI.placeholderPassword,
        DATA_UI.fieldNamePassword,
        formValue.password,
      ),
    };

    function handleChangeText(text: any, name: any) {
      setFormValue((prev: any) => {
        prev[name].value = text;
        return { ...prev };
      });
    }

    return (
      <View>
        {Object.values(DATAS).map((fieldData, index) => (
          <React.Fragment key={`${index}`}>
            <InputTextAuthentication
              placeholder={fieldData.placeholder}
              name={fieldData.name}
              value={fieldData.value}
              onChangeText={handleChangeText}
            />
          </React.Fragment>
        ))}
      </View>
    );
  }

  function renderLoginButton() {

    function handleLogin() {
      /* check validate form value */
      const isValidateError = new (FormModel as any)(
        formValue,
        formValue.username.value,
        formValue.password.value,
      ).checkValidateConfirm();

      console.log(isValidateError)

      /* check formValue validate confirm. */

      /* get data from db */

      /* check data already exist */

      /* handle navigate list chat */
    }

    return (
      <View style={styles.buttonViewStyle}>
        <ButtonAuthencation title={DATA_UI.buttonTitle} onPress={handleLogin} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.imageHeader}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/logo_login.png')}
        />

        {renderLoginForm()}

        {renderLoginButton()}

        <View style={styles.textViewStyle}>
          <Text style={styles.textStyle}>{DATA_UI.navigateTitle}</Text>
          <TouchableOpacity onPress={goToRegister}>
            <Text style={styles.textOpacityStyle}>
              {DATA_UI.navigateTitleRegister}
            </Text>
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
