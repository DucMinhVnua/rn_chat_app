import React, { useState } from 'react';
import {
  Alert,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { ButtonAuthencation, InputTextAuthentication } from '../../components';
import RoutesName, { RoutesNameFBDB } from '../../routes';
import FormModel from '../../models/FormModel';
import DATA_UI from './dataui'
import { DATASFIELD, DATA_FORM_DEFAULT, NOTIFICATIONS } from './values';
import BaseRealtimeDB from '../../services/fb_realtime';
import styles from './styles';


const LoginPage = ({ navigation }: any) => {
  const [formValue, setFormValue] = useState(DATA_FORM_DEFAULT);

  function goToRegister() {
    navigation.navigate(RoutesName.register);
  }

  function renderLoginForm() {
    function handleChangeText(text: any, name: any) {
      setFormValue((prev: any) => {
        prev[name].value = text;
        return { ...prev };
      });
    }

    return (
      <View>
        {Object.values(DATASFIELD(formValue)).map((fieldData, index) => (
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

      /* get data from db and check confirm */
      !isValidateError
        ? handleGetAndCheckAccount().then(isAlreadyRegister => {
          if (isAlreadyRegister) {
            navigation.navigate(RoutesName.listChat);
            setFormValue(DATA_FORM_DEFAULT);
          } else {
            Alert.alert(NOTIFICATIONS.notExisted);
          }
        })
        : Alert.alert(NOTIFICATIONS.error);
    }

    async function handleGetAndCheckAccount() {
      const baseRealtimeDB = new (BaseRealtimeDB as any)();

      const accounts = await baseRealtimeDB.oneTimeRead(RoutesNameFBDB.register);

      if (!accounts)
        return false;

      return Object.values(accounts).some(
        ({ username, password }: any) => username === formValue.username.value && password === formValue.password.value,
      );
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


