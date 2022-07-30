import React, { useState } from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { ButtonAuthencation, InputTextAuthentication } from '../../components';
import BaseRealtimeDB from '../../services/fb_realtime';
import RoutesName, { RoutesNameFBDB } from '../../routes';
import FormModel from '../../models/FormModel';
import DATA_UI from './dataui'
import styles from './styles';
import { BODY_REQUEST, DATASFIELD, DATA_FORM_DEFAULT, NOTIFICATIONS, titleErrorDontMatch } from './values';

const RegisterPage = ({ navigation }: any) => {
  let [formValue, setFormValue] = useState(DATA_FORM_DEFAULT);

  function renderRegisterForm(formValue: any, setFormValue: any) {
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
      if (isFocused && errorTitle === titleErrorDontMatch) {
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

    return (
      <View>
        {Object.values(DATASFIELD(formValue)).map((fieldData, index) => (
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

            setFormValue(DATA_FORM_DEFAULT);
          } else {
            Alert.alert(NOTIFICATIONS.alreadyExists);
          }
        })
        : Alert.alert(NOTIFICATIONS.error);

      async function handleGetAndCheckAccount() {
        const accounts = await baseRealtimeDB.oneTimeRead(RoutesNameFBDB.register);

        // if table hasn't in BD, create new table
        if (!accounts) {
          writeAccoutToDB();
          return;
        }

        return Object.values(accounts).some(
          ({ username }: any) => username === formValue.username.value,
        );
      }

      async function writeAccoutToDB() {
        return await baseRealtimeDB.settingData(RoutesNameFBDB.register, BODY_REQUEST(formValue));
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

